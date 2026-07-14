import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";

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

        const names = new Set(
            listener.symbols
                .map(sym => sym.text)
                .filter((name): name is string => name !== undefined && name !== text));

        return [...names].map(name =>
            new vscode.CompletionItem(name, vscode.CompletionItemKind.Keyword));
    }
}
