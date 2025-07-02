import * as vscode from "vscode";
import { ISymbolInfo } from '../ISymbolInfo';
import { ParserContext } from "../ParserContext";

export class EBNFCodeActionsProvider implements vscode.CodeActionProvider<vscode.CodeAction> {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {
        throw new Error("Method not implemented.");
    }
    resolveCodeAction?(codeAction: vscode.CodeAction, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeAction> {
        throw new Error("Method not implemented.");
    }
    
}