import { levenshtein, nearestNames } from '../src/analysis/editDistance';

// G16 — nearest-name ranking for the "Did you mean…?" quick fix.

test('levenshtein computes basic edit distances', () => {
    expect(levenshtein("identifier", "identifier")).toBe(0);
    expect(levenshtein("identifer", "identifier")).toBe(1);   // one insertion
    expect(levenshtein("digit", "digits")).toBe(1);
    expect(levenshtein("", "abc")).toBe(3);
    expect(levenshtein("kitten", "sitting")).toBe(3);
});

test('nearestNames returns close matches, nearest first, excluding exact matches', () => {
    const defined = ["identifier", "digit", "letter", "number"];
    expect(nearestNames("identifer", defined, 3, 3)).toEqual(["identifier"]);
    expect(nearestNames("digit", defined, 3, 3)).not.toContain("digit"); // exact excluded
});

test('nearestNames respects the distance threshold', () => {
    const defined = ["identifier", "letter"];
    // "xyz" is far from everything → no suggestions within distance 1.
    expect(nearestNames("xyz", defined, 1, 3)).toEqual([]);
});

test('nearestNames ranks by distance then alphabetically and honours the limit', () => {
    const defined = ["aaa", "aab", "aac", "abc"];
    // all within distance 1-2 of "aaa"; nearest are the single-edit ones, alpha-ordered.
    const result = nearestNames("aaa", defined, 2, 2);
    expect(result).toEqual(["aab", "aac"]);
});
