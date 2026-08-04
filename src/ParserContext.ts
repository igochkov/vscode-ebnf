import * as vscode from "vscode";
import { CharStream, CommonTokenStream, ParseTreeListener, PredictionMode, Token } from 'antlr4ng';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";
import { EBNFErrorListener } from "./listeners/EBNFErrorListener";
import { Telemetry, GrammarStats } from "./telemetry/Telemetry";
import { migratableIdentifiersFromTokens, IDENTIFIER_MIGRATION_CODE, HYPHEN, UNDERSCORE } from "./migration/IdentifierMigration";
import { analyze, AnalysisSeverity } from "./analysis/GrammarAnalyzer";
import { findInvalidSequences } from "./analysis/invalidSequences";

interface ParsedDocument {
    listener: ASTListener;
    version: number;
    tokens: Token[];
    /** Syntax-error (and opt-in ambiguity) diagnostics captured during the parse. */
    syntaxDiagnostics: vscode.Diagnostic[];
}

export class ParserContext {
    public static ebnfSelector: vscode.DocumentFilter = { language: "ebnf", scheme: "file" };
    public static ebnfName: string = "EBNF";
    public static readonly issueUrl = "https://github.com/igochkov/vscode-ebnf/issues/36";
    // B4/A3: per-document parse cache keyed by document URI. Replaces the former single global
    // `listener`, which let a provider for one document operate on another document's symbols.
    private static cache = new Map<string, ParsedDocument>();
    // A2: debounce re-parsing on rapid edits. Pending parses per document URI.
    private static readonly parseDebounceMs = 300;
    private static debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();
    public static diagnosticsCollection = vscode.languages.createDiagnosticCollection(ParserContext.ebnfName);
    public static ebnfStatusBarItem =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 500);

    /**
     * Returns the symbol listener for `document`, parsing it if the cache is missing or stale
     * (edited since last parsed). Always reflects the document passed in. Does NOT publish
     * diagnostics — providers call this on every change, so publishing here would defeat the
     * A2 debounce. Diagnostics are published separately via publishDiagnostics().
     */
    public static getListener(document: vscode.TextDocument): ASTListener | undefined {
        return ParserContext.ensureParsed(document).listener;
    }

    /** Parse `document` if the cache is missing or stale; cache and return the result. No side effects. */
    private static ensureParsed(document: vscode.TextDocument): ParsedDocument {
        const key = document.uri.toString();
        const cached = ParserContext.cache.get(key);
        if (cached && cached.version === document.version) {
            return cached;
        }

        const inputStream = CharStream.fromString(document.getText());
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);

        const listener = new ASTListener();
        parser.removeParseListeners();
        parser.addParseListener(listener as ParseTreeListener);

        // G20: parser-ambiguity reporting is opt-in. Exact-ambiguity detection is only enabled
        // when the setting is on, since it makes prediction more expensive.
        const reportAmbiguities = vscode.workspace.getConfiguration(ParserContext.ebnfName).get<boolean>("diagnostics.parserAmbiguity", false);
        const errorListener = new EBNFErrorListener(document, reportAmbiguities);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        if (reportAmbiguities) {
            parser.interpreter.predictionMode = PredictionMode.LL_EXACT_AMBIG_DETECTION;
        }

        parser.syntax();

        const parsed: ParsedDocument = {
            listener,
            version: document.version,
            tokens: tokenStream.getTokens(),
            syntaxDiagnostics: errorListener.diagnostics
        };
        ParserContext.cache.set(key, parsed);
        return parsed;
    }

    /** Drops all cached parse results and cancels pending parses (used on deactivate). */
    public static clear() {
        ParserContext.cache.clear();
        for (const timer of ParserContext.debounceTimers.values()) {
            clearTimeout(timer);
        }
        ParserContext.debounceTimers.clear();
    }

    /**
     * A2: after a quiet period, publish diagnostics for the document, coalescing rapid edits so
     * the (potentially expensive) semantic analysis and diagnostic refresh run once instead of
     * on every keystroke. Symbol-table parsing still happens on demand via getListener() so
     * interactive features (outline, navigation, hover) stay live; only diagnostic publishing
     * is debounced.
     */
    private static schedulePublish(document: vscode.TextDocument) {
        const key = document.uri.toString();
        const existing = ParserContext.debounceTimers.get(key);
        if (existing) {
            clearTimeout(existing);
        }
        const timer = setTimeout(() => {
            ParserContext.debounceTimers.delete(key);
            ParserContext.publishDiagnostics(document);
        }, ParserContext.parseDebounceMs);
        ParserContext.debounceTimers.set(key, timer);
    }

    public static OnDocumentOpen(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            ParserContext.publishDiagnostics(document);
        }
    }

    public static OnDocumentChange(event: vscode.TextDocumentChangeEvent) {
        if (event && ParserContext.isEBNFFile(event.document)) {
            ParserContext.schedulePublish(event.document);
        }
    }

    public static OnDocumentClose(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            const key = document.uri.toString();
            const timer = ParserContext.debounceTimers.get(key);
            if (timer) {
                clearTimeout(timer);
                ParserContext.debounceTimers.delete(key);
            }
            ParserContext.cache.delete(key);
            ParserContext.diagnosticsCollection.delete(document.uri)
            ParserContext.ebnfStatusBarItem.hide();
        }
    }

    public static OnActiveTextEditorChanged(editor: vscode.TextEditor | undefined) {
        if (editor && ParserContext.isEBNFFile(editor.document)) {
            ParserContext.publishDiagnostics(editor.document);
        }
    }

    /**
     * Re-parse every open EBNF document so diagnostics reflect changed settings (e.g.
     * `identifierStyle`, `diagnostics.parserAmbiguity`). Called from the configuration-change
     * handler. Each result is cached per document, so order does not matter.
     */
    public static reparseOpenDocuments() {
        for (const document of vscode.workspace.textDocuments) {
            if (ParserContext.isEBNFFile(document)) {
                ParserContext.publishDiagnostics(document);
            }
        }
    }

    private static isEBNFFile(document: vscode.TextDocument): boolean {
        if (!document) {
            return false;
        }

        return (document.languageId === ParserContext.ebnfSelector.language
             && document.uri.scheme === ParserContext.ebnfSelector.scheme);
    }

    /**
     * Parse `document` (via the cache) and publish its diagnostics + status bar + telemetry.
     * This is the debounced/background path; getListener() is the on-demand symbol path.
     */
    public static publishDiagnostics(document: vscode.TextDocument): void {
        const parsed = ParserContext.ensureParsed(document);

        const diagnostics = parsed.syntaxDiagnostics
            .concat(ParserContext.identifierDeprecationDiagnostics(parsed.tokens))
            .concat(ParserContext.semanticDiagnostics(parsed.listener))
            .concat(ParserContext.invalidSequenceDiagnostics(document));
        ParserContext.diagnosticsCollection.set(document.uri, diagnostics);
        ParserContext.updateStatusBarItem();

        Telemetry.reportGrammarAnalyzed(document, ParserContext.computeGrammarStats(parsed.tokens));
    }

    /**
     * Issue #36: non-standard meta-identifier characters. Parsing is unchanged (still
     * backward-compatible); we only surface a non-blocking Warning linking to the tracking
     * issue. The set of flagged characters and the message adapt to `EBNF.identifierStyle`:
     *  - modern (default): only "-" is flagged (deprecated — it is the except-symbol); "_" is allowed.
     *  - standard: both "-" and "_" are flagged as non-standard ISO/IEC 14977 identifier characters.
     */
    private static identifierDeprecationDiagnostics(tokens: Token[]): vscode.Diagnostic[] {
        const style = vscode.workspace.getConfiguration(ParserContext.ebnfName).get<string>("identifierStyle", "modern");
        const flaggedChars = style === "standard" ? HYPHEN + UNDERSCORE : HYPHEN;
        const diagnostics: vscode.Diagnostic[] = [];

        for (const identifier of migratableIdentifiersFromTokens(tokens, flaggedChars)) {
            const message = style === "standard"
                ? `"${identifier.text}" is not a standard ISO/IEC 14977 meta-identifier — "-" and "_" are not identifier characters. Use space-separated words (e.g. "syntax rule") or letters and digits only.`
                : `Hyphens in identifiers are deprecated: "-" is the EBNF except-symbol. "${identifier.text}" still works for now but will change meaning in a future release. Use "_" or space-separated words instead.`;

            const diagnostic = new vscode.Diagnostic(identifier.range, message, vscode.DiagnosticSeverity.Warning);
            diagnostic.source = ParserContext.ebnfName;
            diagnostic.code = { value: IDENTIFIER_MIGRATION_CODE, target: vscode.Uri.parse(ParserContext.issueUrl) };
            diagnostics.push(diagnostic);
        }

        return diagnostics;
    }

    /**
     * M2 semantic linter (G1/G2/G3): undefined, duplicate and unused rules. The
     * analysis itself lives in a VS Code-independent module; here we only map its
     * findings onto vscode.Diagnostic values.
     */
    private static semanticDiagnostics(listener: ASTListener): vscode.Diagnostic[] {
        return analyze(listener).map(finding => {
            const range = new vscode.Range(
                finding.startLine, finding.startColumn,
                finding.endLine, finding.endColumn);
            const diagnostic = new vscode.Diagnostic(range, finding.message, ParserContext.toSeverity(finding.severity));
            diagnostic.source = ParserContext.ebnfName;
            diagnostic.code = finding.code;
            return diagnostic;
        });
    }

    /**
     * G24 (ISO/IEC 14977 §7.8): flag the invalid character sequences "(*)", "(:)" and "(/)".
     */
    private static invalidSequenceDiagnostics(document: vscode.TextDocument): vscode.Diagnostic[] {
        return findInvalidSequences(document.getText()).map(found => {
            const range = new vscode.Range(
                document.positionAt(found.index),
                document.positionAt(found.index + found.sequence.length));
            const diagnostic = new vscode.Diagnostic(
                range,
                `"${found.sequence}" is an invalid character sequence in EBNF (ISO/IEC 14977 §7.8).`,
                vscode.DiagnosticSeverity.Warning);
            diagnostic.source = ParserContext.ebnfName;
            diagnostic.code = "ebnf.invalidSequence";
            return diagnostic;
        });
    }

    private static toSeverity(severity: AnalysisSeverity): vscode.DiagnosticSeverity {
        switch (severity) {
            case "warning": return vscode.DiagnosticSeverity.Warning;
            case "information": return vscode.DiagnosticSeverity.Information;
            case "hint": return vscode.DiagnosticSeverity.Hint;
        }
    }

    private static computeGrammarStats(tokens: Token[]): GrammarStats {
        let identifierCount = 0;
        let hyphenIdentifiers = 0;
        let underscoreIdentifiers = 0;
        let adjacentIdentifiers = 0; // two META_IDENTIFIERs in a row ⇒ space-separated multi-word name
        let prevWasIdentifier = false;

        for (const token of tokens) {
            const isIdentifier = token.type === EBNFLexer.META_IDENTIFIER;
            if (isIdentifier) {
                identifierCount++;
                const text = token.text ?? "";
                if (text.includes("-")) { hyphenIdentifiers++; }
                if (text.includes("_")) { underscoreIdentifiers++; }
                if (prevWasIdentifier) { adjacentIdentifiers++; }
            }
            prevWasIdentifier = isIdentifier;
        }

        return { identifierCount, hyphenIdentifiers, underscoreIdentifiers, adjacentIdentifiers };
    }

    public static updateStatusBarItem() {
        // Always reflect the active editor's document, not whichever was parsed last.
        const active = vscode.window.activeTextEditor?.document;
        const cached = active && ParserContext.isEBNFFile(active)
            ? ParserContext.cache.get(active.uri.toString())
            : undefined;

        if (cached) {
            ParserContext.ebnfStatusBarItem.text = `Rules: ${cached.listener.definitions.length}`;
            ParserContext.ebnfStatusBarItem.show();
        }
        else {
            ParserContext.ebnfStatusBarItem.hide();
        }
    }
}