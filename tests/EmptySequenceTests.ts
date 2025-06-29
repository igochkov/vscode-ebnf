import { EBNFParser, EmptySequenceContext } from "../src/parser/EBNFParser";
import { parseRule } from "./utils";


test('should find 1 rule in input ""', () => {
    const input = "";
    const context: EmptySequenceContext = parseRule('emptySequence', input)
    expect(context.ruleIndex).toEqual(EBNFParser.RULE_emptySequence)
    expect(context.children).toHaveLength(0)
});

test('should find 0 children in ""', () => {
    const input = "";
    const context: EmptySequenceContext = parseRule('emptySequence', input)
    expect(context.children).toHaveLength(0)
});