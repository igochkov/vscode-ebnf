import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { ruleRange } from "./ProviderUtils";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";

export class EBNFHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover>
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
        const matches = listener.rules.filter(rule => normalizeMetaIdentifier(rule.name) === target);
        if (matches.length === 0) {
            return;
        }

        const markdown = new vscode.MarkdownString();
        for (const rule of matches) {
            for (const comment of rule.comments) {
                markdown.appendText(comment);
                markdown.appendMarkdown("\n\n");
            }
            markdown.appendCodeblock(document.getText(ruleRange(rule)), "ebnf");
        }

        return new vscode.Hover(markdown, wordRange);
    }
}
