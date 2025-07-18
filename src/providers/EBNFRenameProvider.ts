import * as vscode from "vscode";
import { ISymbolInfo } from '../ISymbolInfo';
import { ParserContext } from "../ParserContext";

export class EBNFRenameProvider implements vscode.RenameProvider {
    public provideRenameEdits(
        document: vscode.TextDocument,
        position: vscode.Position,
        newName: string,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit>
    {
        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }

        var result: ISymbolInfo[] = [];
        for (var rule of ParserContext.listener.symbols) {
            result.push({
                name: rule.text,
                range: new vscode.Range(
                    rule.line - 1,
                    rule.column,
                    rule.line - 1,
                    rule.column + rule.text.length
                )
            });
        }

        var currentSymbol: ISymbolInfo
            = result.find(symbol => symbol.range.contains(position));

        var edits: vscode.TextEdit[] = [];
        if (currentSymbol) {
            edits
                = result.filter(symbol => symbol.name == currentSymbol.name)
                    .map(symbol => new vscode.TextEdit(symbol.range, newName));
        }

        var workspaceEdit = new vscode.WorkspaceEdit();
        workspaceEdit.set(document.uri, edits);
        return workspaceEdit;
    }
}