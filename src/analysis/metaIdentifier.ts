/**
 * Canonicalizes a meta-identifier for comparison. Per ISO/IEC 14977 §4.14 the gap-separators
 * inside a space-separated meta-identifier ("syntax  rule" vs "syntax rule") have no formal
 * effect, so internal runs of spaces/tabs collapse to a single space and the ends are trimmed.
 * Used wherever identifiers are compared (diagnostics, definition, references, rename, hover,
 * highlights, completion, code lens) so whitespace variants resolve to the same rule (SC1).
 */
export function normalizeMetaIdentifier(text: string | undefined | null): string {
    return (text ?? "").trim().replace(/[ \t]+/g, " ");
}
