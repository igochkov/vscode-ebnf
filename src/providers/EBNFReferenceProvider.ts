import * as vscode from "vscode";
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { EBNFLexer } from '../parser/EBNFLexer';
import { EBNFParser } from '../parser/EBNFParser';
import { ISymbolInfo } from '../ISymbolInfo';
import { IdentifierListener } from '../listeners/IdentifierListener';

export class EBNFReferenceProvider implements vscode.ReferenceProvider
{
    public provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]>
    {
        const range = document.getWordRangeAtPosition(position);
        const text = document.getText(range);

        if (!text)
        {
            return;
        }

        const content = document.getText();
        const inputStream = CharStreams.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        const listener = new IdentifierListener();
        parser.addParseListener(listener as ParseTreeListener);

        parser.syntax();

        var result: vscode.Location[]
            = listener.symbols.filter(symbol => symbol.text == text)
                .map(ref => new vscode.Location(document.uri,
                    new vscode.Range(
                        ref.line - 1,
                        ref.charPositionInLine,
                        ref.line - 1,
                        ref.charPositionInLine + ref.text.length
                    )));

        return result;
    }
}