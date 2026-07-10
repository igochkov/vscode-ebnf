import * as vscode from "vscode";
import { findHyphenIdentifiers, convertIdentifier } from "../migration/IdentifierMigration";

export const CONVERT_IDENTIFIERS_COMMAND = "ebnf.convertIdentifiers";

interface TargetItem extends vscode.QuickPickItem {
    target: string;
    enabled: boolean;
}

/**
 * `EBNF: Convert identifiers…` — opt-in, user-invoked migration of hyphenated
 * meta-identifiers. Tokenization-accurate (only META_IDENTIFIER tokens are touched).
 * Applied as an undoable WorkspaceEdit whose entries request confirmation, so VS Code
 * shows its Refactor Preview panel (a diff the user can review/uncheck) — never a
 * silent write to disk. Skips non-file/virtual and read-only documents.
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

    const identifiers = findHyphenIdentifiers(document);
    if (identifiers.length === 0) {
        vscode.window.showInformationMessage("No hyphenated identifiers found in this file.");
        return;
    }

    const items: TargetItem[] = [
        {
            label: "$(check) Underscore  _",
            description: `Replace "-" with "_" in ${identifiers.length} identifier${identifiers.length === 1 ? "" : "s"}`,
            target: "_",
            enabled: true,
        },
        {
            label: "Space",
            description: "Not available yet — needs space-separated identifier support (issue #36)",
            target: " ",
            enabled: false,
        },
    ];

    const choice = await vscode.window.showQuickPick(items, {
        title: `EBNF: Convert ${identifiers.length} hyphenated identifier${identifiers.length === 1 ? "" : "s"}`,
        placeHolder: "Choose the replacement character",
    });
    if (!choice) {
        return; // user dismissed
    }
    if (!choice.enabled) {
        vscode.window.showInformationMessage(
            "Converting to spaces will be available once space-separated identifiers are supported (issue #36). Use \"_\" for now.");
        return;
    }

    const edit = new vscode.WorkspaceEdit();
    for (const identifier of identifiers) {
        const replacement = convertIdentifier(identifier.text, choice.target);
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
