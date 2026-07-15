import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";

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

        const listener = ParserContext.listener;
        if (!listener) {
            return;
        }

        const target = normalizeMetaIdentifier(text);
        const result: vscode.Location[]
            = listener.symbols.filter(symbol => normalizeMetaIdentifier(symbol.text) === target)
                .map(ref => new vscode.Location(document.uri,
                    new vscode.Range(
                        ref.line - 1,
                        ref.column,
                        ref.line - 1,
                        ref.column + ref.text!.length
                    )));

        return result;
    }
}