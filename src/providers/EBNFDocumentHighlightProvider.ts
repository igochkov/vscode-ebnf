import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { tokenRange } from "./ProviderUtils";

export class EBNFDocumentHighlightProvider implements vscode.DocumentHighlightProvider {
    public provideDocumentHighlights(
        document: vscode.TextDocument,
        position: vscode.Position,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentHighlight[]>
    {
        const wordRange = document.getWordRangeAtPosition(position);
        const text = wordRange ? document.getText(wordRange) : "";

        if (!text) {
            return;
        }

        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        const definitions = new Set(listener.definitions.filter(d => d.text === text));

        return listener.symbols
            .filter(symbol => symbol.text === text)
            .map(symbol => new vscode.DocumentHighlight(
                tokenRange(symbol),
                definitions.has(symbol)
                    ? vscode.DocumentHighlightKind.Write
                    : vscode.DocumentHighlightKind.Read));
    }
}
