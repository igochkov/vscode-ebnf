import * as vscode from "vscode";
   
export class EBNFCodeActionsProvider implements vscode.CodeActionProvider<vscode.CodeAction> {
    provideCodeActions(
        document: vscode.TextDocument, 
        range: vscode.Range | vscode.Selection, 
        context: vscode.CodeActionContext, 
        token: vscode.CancellationToken): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {

        const fix = new vscode.CodeAction("This is a fix", vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
		fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, 2)), "###");
        return [fix];
    }

    resolveCodeAction?(codeAction: vscode.CodeAction, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeAction> {
        throw new Error("Method not implemented.");
    }
    
}