import { SyntaxContext } from "../src/parser/EBNFParser";
import { parseRule, collectErrorNodes } from "./utils";
import { FormattingVisitor } from "../src/visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "../src/providers/EBNFFormattingOptions";

function format(input: string, tweak?: (o: EBNFFormattingOptions) => void): string {
    const syntax: SyntaxContext = parseRule('syntax', input);
    expect(collectErrorNodes(syntax)).toHaveLength(0);

    const options = new EBNFFormattingOptions();
    // Keep separators inline so the output is easy to assert on a single line.
    options.definitionSeparatorSymbolOnNewLine = false;
    tweak?.(options);

    return new FormattingVisitor(options).visit(syntax) ?? "";
}

function count(haystack: string, needle: string): number {
    return haystack.split(needle).length - 1;
}

// B3 — comments must not be duplicated/misplaced across separators in a definitions-list.
test('B3 - each definitions-list comment is emitted exactly once, next to its own separator', () => {
    const result = format(`rule = a | (* first *) b | (* second *) c;`);

    expect(count(result, "(* first *)")).toBe(1);
    expect(count(result, "(* second *)")).toBe(1);
    // The comment attaches to the separator that precedes its alternative.
    expect(result).toContain("| (* first *) b");
    expect(result).toContain("| (* second *) c");
});

// B3 — same defect existed for concatenation comments in a single-definition.
test('B3 - each single-definition comment is emitted exactly once, next to its own concatenate symbol', () => {
    const result = format(`rule = a , (* first *) b , (* second *) c;`);

    expect(count(result, "(* first *)")).toBe(1);
    expect(count(result, "(* second *)")).toBe(1);
    expect(result).toContain(", (* first *) b");
    expect(result).toContain(", (* second *) c");
});

test('B3 - formatter output re-parses without errors', () => {
    const result = format(`rule = a | (* first *) b | (* second *) c;`);
    const reparsed: SyntaxContext = parseRule('syntax', result);
    expect(collectErrorNodes(reparsed)).toHaveLength(0);
});

// G18/G19 — range and on-type formatting re-serialize a single syntaxRule context.
test('G18/G19 - a single syntaxRule formats independently and re-parses', () => {
    const ruleCtx = parseRule('syntaxRule', `rule=a,b|c;`);
    const options = new EBNFFormattingOptions();
    options.definitionSeparatorSymbolOnNewLine = false;
    options.definingSymbolOnNewLine = false;

    const formatted = new FormattingVisitor(options).visit(ruleCtx) ?? "";

    expect(formatted).toContain("rule = a, b | c");
    expect(collectErrorNodes(parseRule('syntax', formatted))).toHaveLength(0);
});
