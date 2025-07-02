import * as vscode from "vscode";
import { CharStream, CommonTokenStream, ParseTreeListener } from 'antlr4ng';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";
//import { EBNFErrorListener } from "./listeners/EBNFErrorListener";

export class ParserContext {
    public static ebnfSelector: vscode.DocumentFilter = { language: "ebnf", scheme: "file" };
    public static ebnfConfigurationName: string = "EBNF";
    public static listener: ASTListener;

    public static OnDocumentOpen(document: vscode.TextDocument) {
        if (ParserContext.isEBNFFile(document)) {
            ParserContext.parse(document);
        }
    }

    public static OnDocumentChange(event: vscode.TextDocumentChangeEvent) {
        if (ParserContext.isEBNFFile(event.document)) {
            ParserContext.listener = undefined;
        }
    }

    public static OnDocumentClose(document: vscode.TextDocument) {
        if (ParserContext.isEBNFFile(document)) {
            ParserContext.listener = undefined;
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
        
        // const errorListener = new EBNFErrorListener();
        // parser.removeErrorListeners();
        // parser.addErrorListener(errorListener)

        parser.syntax();
    }
}