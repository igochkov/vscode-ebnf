import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";
import { tokenRange } from "./ProviderUtils";

export class EBNFReferenceProvider implements vscode.ReferenceProvider {
    public provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        const range = document.getWordRangeAtPosition(position);
        const text = document.getText(range);

        if (!text) {
            return;
        }

        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        // B6: honour includeDeclaration. `symbols` is definitions + usages; `usages` is the
        // right-hand-side references only, so drop the declaration when it isn't requested.
        const occurrences = context.includeDeclaration ? listener.symbols : listener.usages;

        const target = normalizeMetaIdentifier(text);
        return occurrences
            .filter(symbol => normalizeMetaIdentifier(symbol.text) === target)
            .map(ref => new vscode.Location(document.uri, tokenRange(ref)));
    }
}