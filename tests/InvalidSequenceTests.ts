import { findInvalidSequences } from '../src/analysis/invalidSequences';

function sequences(text: string): string[] {
    return findInvalidSequences(text).map(f => f.sequence);
}

// G24 — ISO/IEC 14977 §7.8 invalid sequences.

test('G24 - flags (*), (:) and (/) in normal grammar text', () => {
    expect(sequences(`a = (*);`)).toEqual([`(*)`]);
    expect(sequences(`a = (:);`)).toEqual([`(:)`]);
    expect(sequences(`a = (/);`)).toEqual([`(/)`]);
});

test('G24 - reports the correct offset', () => {
    const found = findInvalidSequences(`ab (:) cd`);
    expect(found).toHaveLength(1);
    expect(found[0]).toEqual({ index: 3, sequence: `(:)` });
});

test('G24 - flags multiple occurrences', () => {
    expect(sequences(`(*) x (/)`)).toEqual([`(*)`, `(/)`]);
});

test('G24 - does NOT flag sequences inside a terminal string', () => {
    expect(sequences(`a = "(*)" | '(:)';`)).toEqual([]);
});

test('G24 - does NOT flag sequences inside a special-sequence', () => {
    expect(sequences(`a = ? (/) ?;`)).toEqual([]);
});

test('G24 - does NOT flag sequences inside a comment', () => {
    expect(sequences(`(* here: (:) and (/) *) a = "x";`)).toEqual([]);
});

test('G24 - a valid empty comment (**) is not mistaken for (*)', () => {
    expect(sequences(`(**) a = "x";`)).toEqual([]);
});

test('G24 - a normal comment is left alone', () => {
    expect(sequences(`(* a comment *) a = "x";`)).toEqual([]);
});
