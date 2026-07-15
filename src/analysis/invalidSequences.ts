/**
 * ISO/IEC 14977 §7.8 / Table 4: the character sequences "(*)", "(:)" and "(/)" are invalid
 * (they would be ambiguous with the comment/bracket symbols) and must not occur, except inside
 * a terminal-string or special-sequence where they are ordinary content. This scanner reports
 * every such occurrence in normal grammar text.
 *
 * It is a small stand-alone scanner (not token-based) so it stays correct even when the
 * sequence would otherwise derail the lexer, and so §7.8's rule — that "(*)" is the invalid
 * sequence rather than a comment start — is applied directly. It is free of any VS Code
 * dependency so it can be unit-tested.
 */

export interface InvalidSequence {
    /** 0-based character offset of the sequence within the text. */
    index: number;
    /** The offending sequence, one of "(*)", "(:)", "(/)". */
    sequence: string;
}

const INVALID = ["(*)", "(:)", "(/)"];

export function findInvalidSequences(text: string): InvalidSequence[] {
    const results: InvalidSequence[] = [];
    let i = 0;
    const n = text.length;

    while (i < n) {
        // §7.8 takes precedence over the comment/bracket symbols: check the invalid
        // three-character sequences before interpreting "(*" as a comment start.
        const three = text.substr(i, 3);
        if (INVALID.includes(three)) {
            results.push({ index: i, sequence: three });
            i += 3;
            continue;
        }

        const ch = text[i];

        if (ch === "(" && text[i + 1] === "*") {
            i = skipComment(text, i + 2);
        }
        else if (ch === "'" || ch === '"') {
            i = skipUntil(text, i + 1, ch);
        }
        else if (ch === "?") {
            i = skipUntil(text, i + 1, "?");
        }
        else {
            i++;
        }
    }

    return results;
}

/** Advances past a (possibly nested) comment whose "(*" was already consumed; returns the index after "*)". */
function skipComment(text: string, start: number): number {
    let i = start;
    let depth = 1;
    const n = text.length;

    while (i < n && depth > 0) {
        if (text[i] === "(" && text[i + 1] === "*") { depth++; i += 2; }
        else if (text[i] === "*" && text[i + 1] === ")") { depth--; i += 2; }
        else { i++; }
    }

    return i;
}

/** Advances past a delimited run (terminal-string / special-sequence) whose opening delimiter
 * was already consumed; returns the index after the closing delimiter (or end of text). */
function skipUntil(text: string, start: number, closing: string): number {
    let i = start;
    const n = text.length;

    while (i < n) {
        if (text[i] === closing) { return i + 1; }
        i++;
    }

    return i;
}
