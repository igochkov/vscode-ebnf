import * as vscode from "vscode";
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { EBNFLexer } from './parser/EBNFLexer';
import { EBNFParser } from './parser/EBNFParser';
import { ASTListener } from "./listeners/ASTListener";

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
        const inputStream = CharStreams.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        ParserContext.listener = new ASTListener();
        parser.addParseListener(ParserContext.listener as ParseTreeListener);
        parser.syntax();
    }
}