import * as vscode from "vscode";
import { ParserContext } from "../ParserContext";

// Region markers, mirroring syntaxes/ebnf.configuration.json `folding.markers`. Registering
// a FoldingRangeProvider replaces the language-configuration marker folding, so we re-emit it
// here to keep (* region *) / (* endregion *) blocks foldable.
const REGION_START = /^\(\*\s*region(\s*\w*)*\*\)/;
const REGION_END = /^\(\*\s*endregion\s*\*\)/;

export class EBNFFoldingRangeProvider implements vscode.FoldingRangeProvider {
    public provideFoldingRanges(
        document: vscode.TextDocument,
        _context: vscode.FoldingContext,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.FoldingRange[]>
    {
        const listener = ParserContext.getListener(document);
        if (!listener) {
            return;
        }

        // Structural folding: one region per multi-line syntax-rule. We fold from the rule's
        // name line (not ctx.start) because a rule's *leading* comments belong to its context;
        // folding from ctx.start would swallow a preceding (* region *) / (* endregion *) marker
        // into the rule and break marker-based folding. Marker folding comes from the language
        // configuration and now stays independent.
        const ranges: vscode.FoldingRange[] = [];
        for (const rule of listener.rules) {
            const startLine = rule.nameToken.line - 1;
            const endLine = rule.stopToken.line - 1;
            if (endLine > startLine) {
                ranges.push(new vscode.FoldingRange(startLine, endLine));
            }
        }

        ranges.push(...this.regionRanges(document));

        return ranges;
    }

    /** Marker-based folding: pair (* region *) with (* endregion *), supporting nesting. */
    private regionRanges(document: vscode.TextDocument): vscode.FoldingRange[] {
        const ranges: vscode.FoldingRange[] = [];
        const starts: number[] = [];

        for (let line = 0; line < document.lineCount; line++) {
            const text = document.lineAt(line).text;
            if (REGION_START.test(text)) {
                starts.push(line);
            }
            else if (REGION_END.test(text)) {
                const start = starts.pop();
                if (start !== undefined && line > start) {
                    ranges.push(new vscode.FoldingRange(start, line, vscode.FoldingRangeKind.Region));
                }
            }
        }

        return ranges;
    }
}
