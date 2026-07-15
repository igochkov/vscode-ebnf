import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { tokenRange } from "./ProviderUtils";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";

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

        const target = normalizeMetaIdentifier(text);
        const definitions = new Set(listener.definitions.filter(d => normalizeMetaIdentifier(d.text) === target));

        return listener.symbols
            .filter(symbol => normalizeMetaIdentifier(symbol.text) === target)
            .map(symbol => new vscode.DocumentHighlight(
                tokenRange(symbol),
                definitions.has(symbol)
                    ? vscode.DocumentHighlightKind.Write
                    : vscode.DocumentHighlightKind.Read));
    }
}
