import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";
import { tokenRange } from "./ProviderUtils";

/**
 * Semantic-token legend. We only colour meta-identifiers that are *used but never defined*
 * (as `variable`), so they stand out from resolved references even before the G1 diagnostic
 * is read. Defined identifiers are intentionally left to the TextMate grammar, which already
 * distinguishes a rule declaration (LHS) from a reference (RHS) — emitting semantic tokens for
 * them would override and flatten that distinction.
 */
export const EBNF_SEMANTIC_TOKENS_LEGEND = new vscode.SemanticTokensLegend(
    ["variable"],
    []);

export class EBNFSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    public provideDocumentSemanticTokens(
        document: vscode.TextDocument,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens>
    {
        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        const definedNames = new Set(
            listener.definitions
                .map(d => d.text)
                .filter((name): name is string => name !== undefined && name.length > 0));

        // Only undefined usages, in ascending (line, column) order as the builder requires.
        const undefinedUsages = listener.usages
            .filter(usage => usage.text !== undefined && !definedNames.has(usage.text))
            .sort((a, b) => a.line - b.line || a.column - b.column);

        const builder = new vscode.SemanticTokensBuilder(EBNF_SEMANTIC_TOKENS_LEGEND);
        for (const usage of undefinedUsages) {
            builder.push(tokenRange(usage), "variable", []);
        }

        return builder.build();
    }
}
