import * as vscode from "vscode";
import { IDENTIFIER_MIGRATION_CODE } from "../migration/IdentifierMigration";
import { CONVERT_IDENTIFIERS_COMMAND } from "../commands/ConvertIdentifiers";
import { DiagnosticCode } from "../analysis/GrammarAnalyzer";
import { ParserContext } from "../ParserContext";
import { ruleRange, tokenRange } from "./ProviderUtils";
import { normalizeMetaIdentifier } from "../analysis/metaIdentifier";
import { nearestNames } from "../analysis/editDistance";

/**
 * Quick Fixes for EBNF diagnostics:
 *  - non-standard identifier "-"/"_" (#36): a whole-file convert (to spaces or "_");
 *  - undefined rule (G1): create a stub for the missing rule;
 *  - unused rule (G3): delete the offending rule.
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

        return [
            ...this.migrationActions(document, context),
            ...this.semanticActions(document, context)
        ];
    }

    private migrationActions(document: vscode.TextDocument, context: vscode.CodeActionContext): vscode.CodeAction[] {
        const migrationDiagnostics = context.diagnostics.filter(EBNFCodeActionsProvider.isMigrationDiagnostic);
        if (migrationDiagnostics.length === 0) {
            return [];
        }

        // Whole-file conversion, routed through the command so the user picks the target
        // (spaces or "_") and gets the Refactor Preview. Converting the whole file keeps a
        // rule's definition and its references in sync — a per-identifier edit could desync them.
        const convertAll = new vscode.CodeAction(
            "Convert all identifiers in file…", vscode.CodeActionKind.QuickFix);
        convertAll.diagnostics = migrationDiagnostics;
        convertAll.isPreferred = true;
        convertAll.command = { command: CONVERT_IDENTIFIERS_COMMAND, title: "EBNF: Convert identifiers…" };

        return [convertAll];
    }

    private semanticActions(document: vscode.TextDocument, context: vscode.CodeActionContext): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];

        for (const diagnostic of context.diagnostics) {
            if (diagnostic.code === DiagnosticCode.UndefinedRule) {
                // G16: suggest the nearest defined rule name(s) first, then the create-stub fallback.
                actions.push(...this.didYouMeanActions(document, diagnostic));
                const action = this.createRuleAction(document, diagnostic);
                if (action) {
                    actions.push(action);
                }
            }
            else if (diagnostic.code === DiagnosticCode.UnusedRule) {
                const action = this.removeRuleAction(document, diagnostic);
                if (action) {
                    actions.push(action);
                }
            }
        }

        return actions;
    }

    /** G16: "Did you mean …?" — replace an undefined rule with the nearest defined name(s). */
    private didYouMeanActions(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction[] {
        const listener = ParserContext.getListener(document);
        if (!listener) {
            return [];
        }

        const target = normalizeMetaIdentifier(document.getText(diagnostic.range));
        if (!target) {
            return [];
        }

        const definedNames = new Set(
            listener.rules.map(rule => normalizeMetaIdentifier(rule.name)).filter(name => name.length > 0));

        // Tolerate more typos in longer names, but never suggest wildly different rules.
        const maxDistance = Math.min(3, Math.max(1, Math.floor(target.length / 3)));
        const suggestions = nearestNames(target, definedNames, maxDistance, 3);
        if (suggestions.length === 0) {
            return [];
        }

        // Replace every occurrence of the misspelled name so one fix corrects the whole file.
        const ranges = listener.usages
            .filter(usage => normalizeMetaIdentifier(usage.text) === target)
            .map(usage => tokenRange(usage));

        return suggestions.map((name, index) => {
            const fix = new vscode.CodeAction(`Change "${target}" to "${name}"`, vscode.CodeActionKind.QuickFix);
            fix.diagnostics = [diagnostic];
            fix.isPreferred = index === 0;
            fix.edit = new vscode.WorkspaceEdit();
            for (const range of ranges) {
                fix.edit.replace(document.uri, range, name);
            }
            return fix;
        });
    }

    /** G1: append a stub definition for a rule that is used but never defined. */
    private createRuleAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction | undefined {
        const name = document.getText(diagnostic.range);
        if (!name) {
            return undefined;
        }

        const fix = new vscode.CodeAction(`Create rule "${name}"`, vscode.CodeActionKind.QuickFix);
        fix.diagnostics = [diagnostic];
        fix.edit = new vscode.WorkspaceEdit();

        const end = document.lineAt(document.lineCount - 1).range.end;
        const prefix = end.character === 0 ? "\n" : "\n\n";
        fix.edit.insert(document.uri, end, `${prefix}${name} = ;`);

        return fix;
    }

    /** G3: delete the whole syntax-rule flagged as unused. */
    private removeRuleAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction | undefined {
        const listener = ParserContext.getListener(document);
        const rule = listener?.rules.find(r =>
            r.nameToken.line - 1 === diagnostic.range.start.line &&
            r.nameToken.column === diagnostic.range.start.character);

        if (!rule) {
            return undefined;
        }

        const extent = ruleRange(rule);
        // Delete the rule's full lines including the trailing newline, if any.
        const deletion = new vscode.Range(
            new vscode.Position(extent.start.line, 0),
            new vscode.Position(Math.min(extent.end.line + 1, document.lineCount), 0));

        const fix = new vscode.CodeAction(`Remove unused rule "${rule.name}"`, vscode.CodeActionKind.QuickFix);
        fix.diagnostics = [diagnostic];
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.delete(document.uri, deletion);

        return fix;
    }

    private static isMigrationDiagnostic(diagnostic: vscode.Diagnostic): boolean {
        const code = diagnostic.code;
        return typeof code === "object" && code !== null && (code as { value?: unknown }).value === IDENTIFIER_MIGRATION_CODE;
    }
}
