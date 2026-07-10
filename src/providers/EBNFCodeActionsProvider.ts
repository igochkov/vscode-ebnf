import * as vscode from "vscode";
import { HYPHEN_DIAGNOSTIC_CODE, convertIdentifier } from "../migration/IdentifierMigration";
import { CONVERT_IDENTIFIERS_COMMAND } from "../commands/ConvertIdentifiers";

/**
 * Quick Fixes for the hyphen-in-identifier deprecation (#36):
 *  - per-identifier: replace "-" with "_" in the offending identifier (direct, undoable edit);
 *  - whole-file: run `EBNF: Convert identifiers…` (target choice + Refactor Preview).
 * Edits are in-memory and undoable — nothing is written to disk until the user saves.
 */
export class EBNFCodeActionsProvider implements vscode.CodeActionProvider {
    public static readonly providedCodeActionKinds = [vscode.CodeActionKind.QuickFix];

    public provideCodeActions(
        document: vscode.TextDocument,
        _range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext): vscode.CodeAction[] {

        if (document.uri.scheme !== "file") {
            return []; // don't offer edits on diff/git/untitled/virtual documents
        }

        const hyphenDiagnostics = context.diagnostics.filter(EBNFCodeActionsProvider.isHyphenDiagnostic);
        if (hyphenDiagnostics.length === 0) {
            return [];
        }

        const actions: vscode.CodeAction[] = [];

        for (const diagnostic of hyphenDiagnostics) {
            const current = document.getText(diagnostic.range);
            const replacement = convertIdentifier(current, "_");

            const fix = new vscode.CodeAction(`Convert "${current}" → "${replacement}"`, vscode.CodeActionKind.QuickFix);
            fix.diagnostics = [diagnostic];
            fix.isPreferred = true;
            fix.edit = new vscode.WorkspaceEdit();
            fix.edit.replace(document.uri, diagnostic.range, replacement);
            actions.push(fix);
        }

        // Whole-file option routes through the command so the user gets the target
        // choice and the Refactor Preview.
        const convertAll = new vscode.CodeAction(
            "Convert all hyphenated identifiers in file…", vscode.CodeActionKind.QuickFix);
        convertAll.command = { command: CONVERT_IDENTIFIERS_COMMAND, title: "EBNF: Convert identifiers…" };
        actions.push(convertAll);

        return actions;
    }

    private static isHyphenDiagnostic(diagnostic: vscode.Diagnostic): boolean {
        const code = diagnostic.code;
        return typeof code === "object" && code !== null && (code as { value?: unknown }).value === HYPHEN_DIAGNOSTIC_CODE;
    }
}
