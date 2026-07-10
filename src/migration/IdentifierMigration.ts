import * as vscode from "vscode";
import { CharStream, CommonTokenStream, Token } from "antlr4ng";
import { EBNFLexer } from "../parser/EBNFLexer";

//
// Tokenization-accurate identifier migration for issue #36.
//
// The ONLY reliable way to know which "-" characters belong to an identifier (vs. an
// except-symbol, or a "-" inside a terminal string / special sequence / comment) is to
// run the modern lexer and inspect META_IDENTIFIER tokens. A regex over raw text would
// mis-handle e.g. "a-b" (except) vs. `foo-bar` (identifier) vs. "utf-8" (string).
//
// Both the deprecation diagnostic (ParserContext) and the migration commands share this
// finder so they agree exactly on what counts as a hyphenated identifier.
//

/** Diagnostic `code.value` used to tag the hyphen-deprecation warning (shared so the Quick Fix can match it). */
export const HYPHEN_DIAGNOSTIC_CODE = "hyphen-in-identifier";

export interface HyphenIdentifier {
    /** Range of the whole META_IDENTIFIER token in the document. */
    range: vscode.Range;
    /** Raw identifier text, e.g. "syntax-rule". */
    text: string;
}

/** Extract hyphenated META_IDENTIFIER tokens from an already-lexed token list. */
export function hyphenIdentifiersFromTokens(tokens: Token[]): HyphenIdentifier[] {
    const result: HyphenIdentifier[] = [];

    for (const token of tokens) {
        if (token.type !== EBNFLexer.META_IDENTIFIER) {
            continue;
        }
        const text = token.text ?? "";
        if (!text.includes("-")) {
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

/** Lex a document with the modern lexer and return its hyphenated identifiers. */
export function findHyphenIdentifiers(document: vscode.TextDocument): HyphenIdentifier[] {
    const lexer = new EBNFLexer(CharStream.fromString(document.getText()));
    lexer.removeErrorListeners(); // no console noise; token stream is still produced
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();
    return hyphenIdentifiersFromTokens(tokenStream.getTokens());
}

/** Replace every "-" in an identifier with the target character (e.g. "_"). */
export function convertIdentifier(text: string, target: string): string {
    return text.split("-").join(target);
}
