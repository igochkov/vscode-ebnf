import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { tokenRange } from "./ProviderUtils";

export class EBNFCodeLensProvider implements vscode.CodeLensProvider {
    public provideCodeLenses(
        document: vscode.TextDocument,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeLens[]>
    {
        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        return listener.rules
            .filter(rule => rule.name.length > 0)
            .map(rule => {
                const locations = listener.usages
                    .filter(usage => usage.text === rule.name)
                    .map(usage => new vscode.Location(document.uri, tokenRange(usage)));

                const nameRange = tokenRange(rule.nameToken);
                const command: vscode.Command = {
                    title: `${locations.length} reference${locations.length === 1 ? "" : "s"}`,
                    command: "editor.action.showReferences",
                    arguments: [document.uri, nameRange.start, locations]
                };

                return new vscode.CodeLens(nameRange, command);
            });
    }
}
