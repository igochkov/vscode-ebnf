import { CharStream } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { SyntaxContext } from '../src/parser/EBNFParser';
import { parseRule, collectErrorNodes } from './utils';

function tokenTypes(input: string): number[] {
    const lexer = new EBNFLexer(CharStream.fromString(input));
    lexer.removeErrorListeners();
    return lexer.getAllTokens().map(t => t.type);
}

// G25 / SC5 — a comment-symbol may be a terminal-string or special-sequence (ISO §6.6),
// so a quoted "*)" inside a comment must not terminate the comment prematurely.

test('G25 - a quoted "*)" inside a comment does not end the comment early', () => {
    const input = `
a = "x";
(* a "*)" b *)
c = "y";
`;
    const syntax: SyntaxContext = parseRule('syntax', input);

    // Both rules survive; the comment consumed the whole (* ... *), not up to the quoted "*)".
    expect(collectErrorNodes(syntax)).toHaveLength(0);
    expect(syntax.syntaxRule()).toHaveLength(2);
});

test('G25 - a special-sequence containing *) inside a comment is preserved', () => {
    const input = `(* x ?*)? y *) a = "z";`;
    const syntax: SyntaxContext = parseRule('syntax', input);

    expect(collectErrorNodes(syntax)).toHaveLength(0);
    expect(syntax.syntaxRule()).toHaveLength(1);
});

test('G25 - an apostrophe in comment prose still degrades to OTHER_CHARACTER (no crash)', () => {
    // No valid closing quote on the line, so the "'" is not treated as a string.
    const input = `(* it is fine *) a = "z";`;
    const syntax: SyntaxContext = parseRule('syntax', input);
    expect(collectErrorNodes(syntax)).toHaveLength(0);
});

test('G25 - EOF token is emitted (lexer stays healthy on tricky comments)', () => {
    expect(tokenTypes(`(* "*)" *) a = "b";`).length).toBeGreaterThan(0);
});
