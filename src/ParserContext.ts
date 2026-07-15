import * as vscode from "vscode";
import { CharStream, CommonTokenStream, ParseTreeListener, Token } from 'antlr4ng';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";
import { EBNFErrorListener } from "./listeners/EBNFErrorListener";
import { Telemetry, GrammarStats } from "./telemetry/Telemetry";
import { hyphenIdentifiersFromTokens, HYPHEN_DIAGNOSTIC_CODE } from "./migration/IdentifierMigration";
import { analyze, AnalysisSeverity } from "./analysis/GrammarAnalyzer";
import { findInvalidSequences } from "./analysis/invalidSequences";

export class ParserContext {
    public static ebnfSelector: vscode.DocumentFilter = { language: "ebnf", scheme: "file" };
    public static ebnfName: string = "EBNF";
    public static readonly issueUrl = "https://github.com/igochkov/vscode-ebnf/issues/36";
    public static listener: ASTListener | undefined;
    public static diagnosticsCollection = vscode.languages.createDiagnosticCollection(ParserContext.ebnfName);
    public static ebnfStatusBarItem =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 500);

    /** Ensures the given document has been parsed and returns its symbol listener (if any). */
    public static getListener(document: vscode.TextDocument): ASTListener | undefined {
        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }
        return ParserContext.listener;
    }

    public static OnDocumentOpen(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            ParserContext.parse(document);
        }
    }

    public static OnDocumentChange(event: vscode.TextDocumentChangeEvent) {
        if (event && ParserContext.isEBNFFile(event.document)) {
            ParserContext.parse(event.document);
        }
    }

    public static OnDocumentClose(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            ParserContext.diagnosticsCollection.delete(document.uri)
            ParserContext.ebnfStatusBarItem.hide();
        }
    }

    public static OnActiveTextEditorChanged(editor: vscode.TextEditor | undefined) {
        if (editor && ParserContext.isEBNFFile(editor.document)) {
            ParserContext.parse(editor.document);
        }
    }

    private static isEBNFFile(document: vscode.TextDocument): boolean {
        if (!document) {
            return false;
        }

        return (document.languageId === ParserContext.ebnfSelector.language
             && document.uri.scheme === ParserContext.ebnfSelector.scheme);
    }

    public static parse(document: vscode.TextDocument): void {
        const content = document.getText();
        const inputStream = CharStream.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);

        ParserContext.listener = new ASTListener();
        parser.removeParseListeners();
        parser.addParseListener(ParserContext.listener as ParseTreeListener);
        
        const errorListener = new EBNFErrorListener(document);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener)

        parser.syntax();

        const tokens = tokenStream.getTokens();
        const diagnostics = errorListener.diagnostics
            .concat(ParserContext.identifierDeprecationDiagnostics(tokens))
            .concat(ParserContext.semanticDiagnostics())
            .concat(ParserContext.invalidSequenceDiagnostics(document));
        ParserContext.diagnosticsCollection.set(document.uri, diagnostics);
        ParserContext.updateStatusBarItem();

        const stats = ParserContext.computeGrammarStats(tokens);
        Telemetry.reportGrammarAnalyzed(document, stats);
    }

    /**
     * Phase 1 of #36: hyphens in meta-identifiers are deprecated because "-" is the
     * ISO/IEC 14977 except-symbol. Parsing is unchanged (still backward-compatible);
     * we only surface a non-blocking Warning that links to the tracking issue. The
     * message adapts to the configured `EBNF.identifierStyle`.
     */
    private static identifierDeprecationDiagnostics(tokens: Token[]): vscode.Diagnostic[] {
        const style = vscode.workspace.getConfiguration(ParserContext.ebnfName).get<string>("identifierStyle", "modern");
        const diagnostics: vscode.Diagnostic[] = [];

        for (const identifier of hyphenIdentifiersFromTokens(tokens)) {
            const message = style === "standard"
                ? `"-" is not a standard EBNF identifier character — it is the except-symbol in ISO/IEC 14977. Use "_" instead.`
                : `Hyphens in identifiers are deprecated: "-" is the EBNF except-symbol. "${identifier.text}" still works for now but will change meaning in a future release. Use "_" instead.`;

            const diagnostic = new vscode.Diagnostic(identifier.range, message, vscode.DiagnosticSeverity.Warning);
            diagnostic.source = ParserContext.ebnfName;
            diagnostic.code = { value: HYPHEN_DIAGNOSTIC_CODE, target: vscode.Uri.parse(ParserContext.issueUrl) };
            diagnostics.push(diagnostic);
        }

        return diagnostics;
    }

    /**
     * M2 semantic linter (G1/G2/G3): undefined, duplicate and unused rules. The
     * analysis itself lives in a VS Code-independent module; here we only map its
     * findings onto vscode.Diagnostic values.
     */
    private static semanticDiagnostics(): vscode.Diagnostic[] {
        if (!ParserContext.listener) {
            return [];
        }

        return analyze(ParserContext.listener).map(finding => {
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
        if (ParserContext.ebnfStatusBarItem && ParserContext.listener) {
            ParserContext.ebnfStatusBarItem.text = `Rules: ${ParserContext.listener.definitions.length}`;
            ParserContext.ebnfStatusBarItem.show();
        }
    }
}