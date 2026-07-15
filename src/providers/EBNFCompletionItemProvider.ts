import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";

export class EBNFCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const range = document.getWordRangeAtPosition(position);
        const text = range ? document.getText(range) : "";

        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }

        const listener = ParserContext.listener;
        if (!listener) {
            return;
        }

        const current = normalizeMetaIdentifier(text);
        const names = new Set(
            listener.symbols
                .map(sym => normalizeMetaIdentifier(sym.text))
                .filter(name => name.length > 0 && name !== current));

        return [...names].map(name =>
            new vscode.CompletionItem(name, vscode.CompletionItemKind.Keyword));
    }
}
