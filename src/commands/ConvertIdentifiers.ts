import * as vscode from "vscode";
import { findMigratableIdentifiers, convertIdentifier, HYPHEN, UNDERSCORE } from "../migration/IdentifierMigration";
import { ParserContext } from "../ParserContext";

export const CONVERT_IDENTIFIERS_COMMAND = "ebnf.convertIdentifiers";

interface TargetItem extends vscode.QuickPickItem {
    target: string;
}

/**
 * `EBNF: Convert identifiers…` — opt-in, user-invoked, whole-document migration of
 * non-standard meta-identifiers ("-" and "_"). Tokenization-accurate (only META_IDENTIFIER
 * tokens are touched). Converting the whole document at once keeps a rule's definition and
 * all its references in sync — converting a single identifier could desync them. Applied as
 * an undoable WorkspaceEdit that requests confirmation, so VS Code shows its Refactor Preview
 * panel (a reviewable diff) — never a silent write to disk. Skips non-file/read-only documents.
 */
export async function convertIdentifiersCommand(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "ebnf") {
        vscode.window.showInformationMessage("Open an EBNF (.ebnf) file to convert its identifiers.");
        return;
    }

    const document = editor.document;
    const blocked = await editabilityIssue(document);
    if (blocked) {
        vscode.window.showInformationMessage(`Cannot convert identifiers: ${blocked}.`);
        return;
    }

    // Find every identifier that uses a non-standard character ("-" or "_").
    const identifiers = findMigratableIdentifiers(document, HYPHEN + UNDERSCORE);
    if (identifiers.length === 0) {
        vscode.window.showInformationMessage("No identifiers with \"-\" or \"_\" found in this file.");
        return;
    }

    const count = identifiers.length;
    const plural = count === 1 ? "" : "s";
    const spaceItem: TargetItem = {
        label: "$(check) Space  ( standard ISO/IEC 14977 )",
        description: `Replace "-" and "_" with a space in ${count} identifier${plural} — e.g. "syntax_rule" → "syntax rule"`,
        target: " ",
    };
    const underscoreItem: TargetItem = {
        label: "Underscore  _  ( modern )",
        description: `Replace "-" with "_" in ${count} identifier${plural} — e.g. "syntax-rule" → "syntax_rule"`,
        target: UNDERSCORE,
    };

    // Offer the style-appropriate target first.
    const style = vscode.workspace.getConfiguration(ParserContext.ebnfName).get<string>("identifierStyle", "modern");
    const items = style === "standard" ? [spaceItem, underscoreItem] : [underscoreItem, spaceItem];

    const choice = await vscode.window.showQuickPick(items, {
        title: `EBNF: Convert ${count} identifier${plural}`,
        placeHolder: "Choose the replacement for \"-\" / \"_\"",
    });
    if (!choice) {
        return; // user dismissed
    }

    const edit = new vscode.WorkspaceEdit();
    for (const identifier of identifiers) {
        const replacement = convertIdentifier(identifier.text, choice.target);
        if (replacement === identifier.text) {
            continue; // nothing to change (e.g. an "_"-only identifier when converting to "_")
        }
        // needsConfirmation makes applyEdit surface the Refactor Preview (a reviewable diff).
        edit.replace(document.uri, identifier.range, replacement, {
            needsConfirmation: true,
            label: `Convert "${identifier.text}" → "${replacement}"`,
        });
    }

    await vscode.workspace.applyEdit(edit);
}

/**
 * Returns a human-readable reason the document must not be edited, or undefined if it's fine.
 * Guards: only real files on disk (skip git/diff/untitled/virtual), and not read-only.
 */
async function editabilityIssue(document: vscode.TextDocument): Promise<string | undefined> {
    if (document.uri.scheme !== "file") {
        return "it is not a file on disk (e.g. a diff, git, or untitled view)";
    }
    try {
        const stat = await vscode.workspace.fs.stat(document.uri);
        if (stat.permissions !== undefined && (stat.permissions & vscode.FilePermission.Readonly) !== 0) {
            return "the file is read-only";
        }
    } catch {
        // If we cannot stat it, fall through and let applyEdit be the final arbiter.
    }
    return undefined;
}
