import * as vscode from "vscode";
import { ISymbolInfo } from '../ISymbolInfo';
import { ParserContext } from "../ParserContext";

export class EBNFRenameProvider implements vscode.RenameProvider {
    /**
     * Meta-identifier pattern accepted by the (modern) lexer: a letter followed by
     * letters, digits, "_" or "-". Renaming to anything else would produce an invalid
     * grammar, so it is rejected. See B5/G15 in the gap analysis.
     */
    private static readonly identifierPattern = /^[A-Za-z][A-Za-z0-9_-]*$/;

    private symbols(document: vscode.TextDocument): ISymbolInfo[] {
        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }

        const listener = ParserContext.listener;
        if (!listener) {
            return [];
        }

        return listener.symbols
            .filter(symbol => symbol.text !== undefined)
            .map(symbol => ({
                name: symbol.text!,
                range: new vscode.Range(
                    symbol.line - 1,
                    symbol.column,
                    symbol.line - 1,
                    symbol.column + symbol.text!.length
                )
            }));
    }

    public prepareRename(
        document: vscode.TextDocument,
        position: vscode.Position,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.Range | { range: vscode.Range; placeholder: string }>
    {
        const currentSymbol = this.symbols(document).find(symbol => symbol.range.contains(position));

        if (!currentSymbol) {
            throw new Error("You cannot rename this element.");
        }

        return { range: currentSymbol.range, placeholder: currentSymbol.name };
    }

    public provideRenameEdits(
        document: vscode.TextDocument,
        position: vscode.Position,
        newName: string,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit>
    {
        if (!EBNFRenameProvider.identifierPattern.test(newName)) {
            throw new Error(`"${newName}" is not a valid EBNF meta-identifier. Use a letter followed by letters, digits, "_" or "-".`);
        }

        const symbols = this.symbols(document);
        const currentSymbol = symbols.find(symbol => symbol.range.contains(position));

        const workspaceEdit = new vscode.WorkspaceEdit();

        if (currentSymbol) {
            const edits = symbols
                .filter(symbol => symbol.name === currentSymbol.name)
                .map(symbol => new vscode.TextEdit(symbol.range, newName));
            workspaceEdit.set(document.uri, edits);
        }

        return workspaceEdit;
    }
}
