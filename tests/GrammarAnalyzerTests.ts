import { CharStream, CommonTokenStream, ParseTreeListener } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { EBNFParser } from '../src/parser/EBNFParser';
import { ASTListener } from '../src/listeners/ASTListener';
import { analyze, AnalysisFinding, DiagnosticCode } from '../src/analysis/GrammarAnalyzer';

function findingsFor(input: string): AnalysisFinding[] {
    const inputStream = CharStream.fromString(input);
    const lexer = new EBNFLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new EBNFParser(tokenStream);

    const listener = new ASTListener();
    parser.removeParseListeners();
    parser.addParseListener(listener as unknown as ParseTreeListener);
    parser.removeErrorListeners();
    parser.syntax();

    return analyze(listener);
}

function codes(findings: AnalysisFinding[]): string[] {
    return findings.map(f => f.code);
}

// G1 — undefined rules
test('G1 - flags a meta-identifier used but never defined', () => {
    const findings = findingsFor(`start = a; a = b;`);
    const undefinedFindings = findings.filter(f => f.code === DiagnosticCode.UndefinedRule);

    expect(undefinedFindings).toHaveLength(1);
    expect(undefinedFindings[0].message).toContain('"b"');
    expect(undefinedFindings[0].severity).toBe('warning');
});

test('G1 - no finding when every used rule is defined', () => {
    const findings = findingsFor(`start = a; a = "x";`);
    expect(codes(findings)).not.toContain(DiagnosticCode.UndefinedRule);
});

// G2 — duplicate definitions
test('G2 - flags each definition site of a duplicated rule', () => {
    const findings = findingsFor(`start = a; a = "x"; a = "y";`);
    const duplicates = findings.filter(f => f.code === DiagnosticCode.DuplicateDefinition);

    expect(duplicates).toHaveLength(2);
    expect(duplicates[0].message).toContain('2 times');
    expect(duplicates[0].severity).toBe('information');
});

test('G2 - no finding for a singly-defined rule', () => {
    const findings = findingsFor(`start = a; a = "x";`);
    expect(codes(findings)).not.toContain(DiagnosticCode.DuplicateDefinition);
});

// G3 — unused rules / start symbol
test('G3 - flags a defined rule that is never referenced', () => {
    const findings = findingsFor(`start = "x"; orphan = "y";`);
    const unused = findings.filter(f => f.code === DiagnosticCode.UnusedRule);

    expect(unused).toHaveLength(1);
    expect(unused[0].message).toContain('"orphan"');
});

test('G3 - the first-defined rule is treated as the start symbol and never flagged', () => {
    const findings = findingsFor(`start = a; a = "x";`);
    const unused = findings.filter(f => f.code === DiagnosticCode.UnusedRule);

    // "start" is unreferenced but is the start symbol; "a" is used → no unused findings.
    expect(unused).toHaveLength(0);
});

test('a well-formed grammar produces no findings', () => {
    const findings = findingsFor(`start = a, b; a = "x"; b = "y";`);
    expect(findings).toHaveLength(0);
});

// SC1 — whitespace variants of a space-separated meta-identifier are the same rule.
test('SC1 - "foo   bar" (usage) resolves to "foo bar" (definition); no undefined/unused', () => {
    const findings = findingsFor(`start = foo   bar; foo bar = "x";`);
    expect(findings).toHaveLength(0);
});

// G4 — an unreferenced rule defined only via special-sequence is an intentional primitive.
test('G4 - a special-sequence-only rule is not flagged as unused', () => {
    // "character" is defined via ? ... ? and never referenced — but it is a primitive, not a typo.
    const findings = findingsFor(`start = "x"; character = ? any character ?;`);
    expect(codes(findings)).not.toContain(DiagnosticCode.UnusedRule);
});

test('G4 - a normal unused rule is still flagged (not a special-sequence primitive)', () => {
    const findings = findingsFor(`start = "x"; orphan = "y";`);
    expect(codes(findings)).toContain(DiagnosticCode.UnusedRule);
});

test('G4 - a rule mixing a special-sequence with a rule reference is not treated as primitive', () => {
    // "mixed" references "other", so it is not a leaf primitive; when unused it is still flagged.
    const findings = findingsFor(`start = "x"; mixed = ? sq ?, other; other = "y";`);
    const unused = findings.filter(f => f.code === DiagnosticCode.UnusedRule).map(f => f.message);
    expect(unused.some(m => m.includes('"mixed"'))).toBe(true);
});

// G6 — exceptions must be reducible to a meta-identifier-free factor (ISO §4.7).
test('G6 - an exception referencing a non-recursive rule is allowed (ISO §8.1 style)', () => {
    // "terminal char - quote" where both reduce to terminals — compliant, no warning.
    const findings = findingsFor(`start = terminal char - quote; terminal char = "a" | "b"; quote = "'";`);
    expect(codes(findings)).not.toContain(DiagnosticCode.NonRegularException);
});

test('G6 - an exception referencing a recursively-defined rule is flagged', () => {
    // "list" is recursive (list -> list), so it is not reducible to a terminal-only factor.
    const findings = findingsFor(`start = item - list; item = "x"; list = item, list | item;`);
    const nonRegular = findings.filter(f => f.code === DiagnosticCode.NonRegularException);
    expect(nonRegular).toHaveLength(1);
    expect(nonRegular[0].message).toContain('"list"');
    expect(nonRegular[0].severity).toBe('warning');
});

test('G6 - a directly self-recursive rule used in an exception is flagged', () => {
    const findings = findingsFor(`start = a - b; a = "x"; b = b, "y" | "z";`);
    expect(codes(findings)).toContain(DiagnosticCode.NonRegularException);
});

// G5 — left-recursion hints.
function leftRecursive(input: string): string[] {
    return findingsFor(input)
        .filter(f => f.code === DiagnosticCode.LeftRecursion)
        .map(f => f.message);
}

test('G5 - direct left recursion is flagged', () => {
    const messages = leftRecursive(`expr = expr, "+", term | term; term = "n";`);
    expect(messages).toHaveLength(1);
    expect(messages[0]).toContain('"expr"');
});

test('G5 - right recursion is NOT left recursion', () => {
    // "list" starts with "item", not itself → not left-recursive.
    expect(leftRecursive(`start = list; list = item, list | item; item = "x";`)).toHaveLength(0);
});

test('G5 - indirect (mutual) left recursion flags both rules', () => {
    const messages = leftRecursive(`start = a; a = b, "x"; b = a, "y" | "z";`);
    expect(messages.some(m => m.includes('"a"'))).toBe(true);
    expect(messages.some(m => m.includes('"b"'))).toBe(true);
});

test('G5 - left recursion through a grouped sequence is detected', () => {
    const messages = leftRecursive(`expr = (expr | term), "*"; term = "n";`);
    expect(messages.some(m => m.includes('"expr"'))).toBe(true);
});

test('G5 - severity is information (a hint, not an error)', () => {
    const findings = findingsFor(`expr = expr, "x" | "y";`);
    const lr = findings.filter(f => f.code === DiagnosticCode.LeftRecursion);
    expect(lr[0].severity).toBe('information');
});
