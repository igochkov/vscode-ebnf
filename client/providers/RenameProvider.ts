import { TextDocument, Position, CancellationToken, Range, ProviderResult, WorkspaceEdit, RenameProvider, TextEdit } from 'vscode'
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { EBNFLexer } from '../parser/EBNFLexer';
import { EBNFParser } from '../parser/EBNFParser';
import { ISymbolInfo } from '../ISymbolInfo';
import { IdentifierListener } from '../listeners/IdentifierListener';

export class EBNFRenameProvider implements RenameProvider {
    public provideRenameEdits(
        document: TextDocument,
        position: Position,
        newName: string,
        _: CancellationToken): ProviderResult<WorkspaceEdit> {

        const content = document.getText();
        const inputStream = CharStreams.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        const listener = new IdentifierListener();
        parser.addParseListener(listener as ParseTreeListener);

        parser.syntax();

        var result: ISymbolInfo[] = [];
        for (var symbol of listener.symbols) {
            result.push({
                name: symbol.text,
                range: new Range(
                    symbol.line - 1,
                    symbol.charPositionInLine,
                    symbol.line - 1,
                    symbol.charPositionInLine + symbol.text.length
                )
            });
        }

        var currentSymbol: ISymbolInfo
            = result.find(symbol => symbol.range.contains(position));

        var edits: TextEdit[] = [];
        if (currentSymbol !== undefined) {
            edits
                = result.filter(symbol => symbol.name == currentSymbol.name)
                    .map(symbol => new TextEdit(symbol.range, newName));
        }

        var workspaceEdit = new WorkspaceEdit();
        workspaceEdit.set(document.uri, edits);
        return workspaceEdit;
    }
}