import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { ruleRange, tokenRange } from "./ProviderUtils";

export class EBNFDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(
        document: vscode.TextDocument,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentSymbol[]>
    {
        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        return listener.rules
            .filter(rule => rule.name.length > 0)
            .map(rule => new vscode.DocumentSymbol(
                rule.name,
                "",
                vscode.SymbolKind.Function,
                ruleRange(rule),
                tokenRange(rule.nameToken)));
    }
}
