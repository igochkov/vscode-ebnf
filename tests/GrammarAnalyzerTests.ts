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
