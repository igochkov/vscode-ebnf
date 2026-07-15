import * as vscode from "vscode";
import { CharStream, CommonTokenStream, Token } from "antlr4ng";
import { EBNFLexer } from "../parser/EBNFLexer";

//
// Tokenization-accurate identifier migration for issue #36.
//
// The ONLY reliable way to know which "-"/"_" characters belong to an identifier (vs. an
// except-symbol, or a character inside a terminal string / special sequence / comment) is to
// run the modern lexer and inspect META_IDENTIFIER tokens. A regex over raw text would
// mis-handle e.g. "a-b" (except) vs. `foo-bar` (identifier) vs. "utf-8" (string).
//
// Both the deprecation diagnostic (ParserContext) and the migration command share this finder
// so they agree exactly on what counts as a non-standard identifier.
//

/** Diagnostic `code.value` tagging an identifier-migration warning (shared so the Quick Fix can match it). */
export const IDENTIFIER_MIGRATION_CODE = "nonstandard-identifier";

/** Non-standard meta-identifier characters. "-" is the except-symbol; "_" is an other-character
 *  under ISO/IEC 14977 (not a meta-identifier-character). Space-separated words are standard. */
export const HYPHEN = "-";
export const UNDERSCORE = "_";

export interface MigratableIdentifier {
    /** Range of the whole META_IDENTIFIER token in the document. */
    range: vscode.Range;
    /** Raw identifier text, e.g. "syntax-rule" or "syntax_rule". */
    text: string;
}

/** Extract META_IDENTIFIER tokens whose text contains any of `flaggedChars` (e.g. "-" or "-_"). */
export function migratableIdentifiersFromTokens(tokens: Token[], flaggedChars: string): MigratableIdentifier[] {
    const flagged = [...flaggedChars];
    const result: MigratableIdentifier[] = [];

    for (const token of tokens) {
        if (token.type !== EBNFLexer.META_IDENTIFIER) {
            continue;
        }
        const text = token.text ?? "";
        if (!flagged.some(c => text.includes(c))) {
            continue;
        }
        const line = token.line - 1; // ANTLR lines are 1-based; VS Code is 0-based
        result.push({
            range: new vscode.Range(line, token.column, line, token.column + text.length),
            text,
        });
    }

    return result;
}

/** Lex a document with the modern lexer and return identifiers containing any of `flaggedChars`. */
export function findMigratableIdentifiers(document: vscode.TextDocument, flaggedChars: string): MigratableIdentifier[] {
    const lexer = new EBNFLexer(CharStream.fromString(document.getText()));
    lexer.removeErrorListeners(); // no console noise; token stream is still produced
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();
    return migratableIdentifiersFromTokens(tokenStream.getTokens(), flaggedChars);
}

/**
 * Replace every non-standard identifier character ("-" and "_") with the target character.
 * - target "_" (modern): "foo-bar" → "foo_bar" (existing "_" are left as "_").
 * - target " " (ISO):     "foo-bar"/"foo_bar" → "foo bar" (a space-separated meta-identifier).
 */
export function convertIdentifier(text: string, target: string): string {
    return text.split(HYPHEN).join(target).split(UNDERSCORE).join(target);
}
