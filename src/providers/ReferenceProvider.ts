import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";

export class EBNFReferenceProvider implements vscode.ReferenceProvider {
    public provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        const range = document.getWordRangeAtPosition(position);
        const text = document.getText(range);

        if (!text) {
            return;
        }

        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }

        var result: vscode.Location[]
            = ParserContext.listener.symbols.filter(symbol => symbol.text === text)
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