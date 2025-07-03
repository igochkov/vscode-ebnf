import * as vscode from "vscode";
import { CharStream, CommonTokenStream, ParseTreeListener } from 'antlr4ng';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";
import { EBNFErrorListener } from "./listeners/EBNFErrorListener";

export class ParserContext {
    public static ebnfSelector: vscode.DocumentFilter = { language: "ebnf", scheme: "file" };
    public static ebnfName: string = "EBNF";
    public static listener: ASTListener;
    public static diagnosticsCollection = vscode.languages.createDiagnosticCollection(ParserContext.ebnfName);

    public static OnDocumentOpen(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            ParserContext.parse(document);
        }
    }

    public static OnDocumentChange(event: vscode.TextDocumentChangeEvent) {
        if (event && ParserContext.isEBNFFile(event.document)) {
            ParserContext.parse(event.document);
            ParserContext.listener = undefined;
        }
    }

    public static OnDocumentClose(document: vscode.TextDocument) {
        if (document && ParserContext.isEBNFFile(document)) {
            ParserContext.diagnosticsCollection.delete(document.uri)
            ParserContext.listener = undefined;
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

        // ParserContext.listener = new ASTListener();
        // parser.removeParseListeners();
        // parser.addParseListener(ParserContext.listener as ParseTreeListener);
        
        const errorListener = new EBNFErrorListener(document);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener)

        parser.syntax();

        ParserContext.diagnosticsCollection.set(document.uri, errorListener.diagnostics);
    }
}