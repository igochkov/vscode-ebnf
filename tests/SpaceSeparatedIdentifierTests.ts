import { CharStream, Token } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { SyntaxContext } from '../src/parser/EBNFParser';
import { parseRule, collectErrorNodes } from './utils';

interface Lexeme { type: number; text: string; }

function lex(input: string): Lexeme[] {
    const lexer = new EBNFLexer(CharStream.fromString(input));
    lexer.removeErrorListeners();
    return lexer.getAllTokens()
        .filter(t => t.type !== Token.EOF)
        .map(t => ({ type: t.type, text: t.text ?? '' }));
}

function identifiers(input: string): string[] {
    return lex(input).filter(t => t.type === EBNFLexer.META_IDENTIFIER).map(t => t.text);
}

// SC1 / issue #36 Phase 2 — space-separated meta-identifiers.

test('SC1 - "foo bar" is a single meta-identifier', () => {
    expect(identifiers(`foo bar`)).toEqual([`foo bar`]);
});

test('SC1 - maximal munch stops before the defining-symbol: "foo bar = x"', () => {
    const toks = lex(`foo bar = x`);
    expect(toks.map(t => t.text)).toEqual([`foo bar`, `=`, `x`]);
    expect(toks[1].type).toBe(EBNFLexer.DEFINING_SYMBOL);
});

test('SC1 - the except-symbol is not a word: "a - b" stays a / - / b', () => {
    const toks = lex(`a - b`);
    expect(toks.map(t => t.text)).toEqual([`a`, `-`, `b`]);
    expect(toks[1].type).toBe(EBNFLexer.EXCEPT_SYMBOL);
});

test('SC1 - hyphen without surrounding spaces is still one (modern) identifier: "a-b"', () => {
    expect(identifiers(`a-b`)).toEqual([`a-b`]);
});

test('SC1 - identifiers do not merge across a newline', () => {
    expect(identifiers(`foo\nbar`)).toEqual([`foo`, `bar`]);
});

test('SC1 - multiple internal gaps are kept in the token text (normalized later): "foo   bar"', () => {
    expect(identifiers(`foo   bar`)).toEqual([`foo   bar`]);
});

// Acceptance: a representative slice of the ISO/IEC 14977 §8.1 self-defining grammar,
// which uses space-separated identifiers on both sides and next to the except-symbol.
test('SC1 - ISO §8.1 self-defining grammar slice parses without errors', () => {
    const input = `
concatenate symbol = ',';
defining symbol = '=';
definition separator symbol = '|' | '/' | '!';
gap free symbol
   = terminal character - (first quote symbol | second quote symbol)
   | terminal string;
first terminal character = terminal character - first quote symbol;
syntax
   = syntax rule, {syntax rule};
syntax rule
   = meta identifier, defining symbol, definitions list, terminator symbol;
`;
    const syntax: SyntaxContext = parseRule('syntax', input);
    expect(collectErrorNodes(syntax)).toHaveLength(0);
});
