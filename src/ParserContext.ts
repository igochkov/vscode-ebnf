import * as vscode from "vscode";
import { CharStream, CommonTokenStream, ParseTreeListener, Token } from 'antlr4ng';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";
import { EBNFErrorListener } from "./listeners/EBNFErrorListener";
import { Telemetry, GrammarStats } from "./telemetry/Telemetry";

export class ParserContext {
    public static ebnfSelector: vscode.DocumentFilter = { language: "ebnf", scheme: "file" };
    public static ebnfName: string = "EBNF";
    public static readonly issueUrl = "https://github.com/igochkov/vscode-ebnf/issues/36";
    public static listener: ASTListener;
    public static diagnosticsCollection = vscode.languages.createDiagnosticCollection(ParserContext.ebnfName);
    public static ebnfStatusBarItem =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 500);

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

    public static OnActiveTextEditorChanged(editor: vscode.TextEditor) {
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
        const diagnostics = errorListener.diagnostics.concat(ParserContext.identifierDeprecationDiagnostics(tokens));
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

        for (const token of tokens) {
            if (token.type !== EBNFLexer.META_IDENTIFIER) {
                continue;
            }
            const text = token.text ?? "";
            if (!text.includes("-")) {
                continue;
            }

            const line = token.line - 1; // ANTLR lines are 1-based; VS Code is 0-based
            const range = new vscode.Range(line, token.column, line, token.column + text.length);
            const message = style === "standard"
                ? `"-" is not a standard EBNF identifier character — it is the except-symbol in ISO/IEC 14977. Use "_" instead.`
                : `Hyphens in identifiers are deprecated: "-" is the EBNF except-symbol. "${text}" still works for now but will change meaning in a future release. Use "_" instead.`;

            const diagnostic = new vscode.Diagnostic(range, message, vscode.DiagnosticSeverity.Warning);
            diagnostic.source = ParserContext.ebnfName;
            diagnostic.code = { value: "hyphen-in-identifier", target: vscode.Uri.parse(ParserContext.issueUrl) };
            diagnostics.push(diagnostic);
        }

        return diagnostics;
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