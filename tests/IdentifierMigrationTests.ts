import { CharStream, CommonTokenStream } from "antlr4ng";
import { EBNFLexer } from "../src/parser/EBNFLexer";

// Mirrors the tokenization-accuracy guarantee of src/migration/IdentifierMigration.ts
// without importing that module (it depends on `vscode`, which jest can't load).
// A hyphenated identifier is a META_IDENTIFIER token whose text contains "-".
function hyphenatedIdentifiers(input: string): string[] {
    const lexer = new EBNFLexer(CharStream.fromString(input));
    lexer.removeErrorListeners();
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();
    return tokenStream.getTokens()
        .filter(t => t.type === EBNFLexer.META_IDENTIFIER && (t.text ?? "").includes("-"))
        .map(t => t.text as string);
}

test("only hyphens inside meta-identifiers are detected (not strings, special seqs, comments, or except)", () => {
    // a-b, e-f are identifiers; "x-y" / 'p-q' are strings; ? s-p ? is a special sequence;
    // (* m-n *) is a comment; c - d is `c` except `d`.
    const input = `a-b = "x-y", 'p-q', ? s-p ?, c - d, (* m-n *) e-f;`;
    expect(hyphenatedIdentifiers(input).sort()).toEqual(["a-b", "e-f"]);
});

test("hyphen without surrounding spaces is one identifier; with spaces it is the except-symbol", () => {
    expect(hyphenatedIdentifiers("consonant = letter-vowel;")).toEqual(["letter-vowel"]);
    expect(hyphenatedIdentifiers("consonant = letter - vowel;")).toEqual([]);
});

test("multiple hyphens in one identifier are all captured (for _ replacement)", () => {
    const found = hyphenatedIdentifiers("x = a-b-c;");
    expect(found).toEqual(["a-b-c"]);
    // convertIdentifier replaces every "-": "a-b-c" -> "a_b_c"
    expect(found[0].split("-").join("_")).toEqual("a_b_c");
});
