import { CharStream, CommonTokenStream, PredictionMode } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { EBNFParser } from '../src/parser/EBNFParser';

// G20 — the extension surfaces ANTLR parser ambiguities (opt-in). These tests exercise the
// underlying mechanism the EBNFErrorListener relies on (LL_EXACT_AMBIG_DETECTION +
// reportAmbiguity), without VS Code, and lock in the documented example grammar so a future
// grammar change that silently removes the ambiguity is caught.
function ambiguityCount(input: string): number {
    const lexer = new EBNFLexer(CharStream.fromString(input));
    lexer.removeErrorListeners();
    const parser = new EBNFParser(new CommonTokenStream(lexer));
    parser.removeErrorListeners();

    let count = 0;
    parser.addErrorListener({
        syntaxError: () => {},
        reportAmbiguity: () => { count++; },
        reportAttemptingFullContext: () => {},
        reportContextSensitivity: () => {},
    } as any);
    parser.interpreter.predictionMode = PredictionMode.LL_EXACT_AMBIG_DETECTION;
    parser.syntax();

    return count;
}

test('G20 - a comment after a syntactic-exception is ambiguous (documented example)', () => {
    expect(ambiguityCount(`a = b - c (* d *);`)).toBeGreaterThan(0);
});

test('G20 - two comments after an exception are still ambiguous', () => {
    expect(ambiguityCount(`a = b - c (* d *) (* e *);`)).toBeGreaterThan(0);
});

test('G20 - unambiguous grammars report no ambiguity', () => {
    expect(ambiguityCount(`a = b | c;`)).toBe(0);
    expect(ambiguityCount(`a = b, c;`)).toBe(0);
    expect(ambiguityCount(`a = ( b | c ), d;`)).toBe(0);
    expect(ambiguityCount(`a = b; b = "x";`)).toBe(0);
});
