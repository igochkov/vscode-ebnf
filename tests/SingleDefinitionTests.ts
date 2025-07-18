import { EBNFParser, SingleDefinitionContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// singleDefinition
// 	: syntacticTerm (CONCATENATE_SYMBOL syntacticTerm)*
// 	;

test('should find single definition with 1 syntactic term', () => {
    const input = "'terminal string'";
    const context: SingleDefinitionContext = parseRule('singleDefinition', input);

    const syntacticTerms = context.syntacticTerm();
    const concatenateSymbol = context.CONCATENATE_SYMBOL();

    expect(syntacticTerms).not.toBeNull();
    expect(syntacticTerms).toHaveLength(1);
    expect(syntacticTerms[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntacticTerm);
    expect(collectErrorNodes(syntacticTerms[0])).toHaveLength(0);

    expect(concatenateSymbol).not.toBeNull();
    expect(concatenateSymbol).toHaveLength(0);
});

test('should find single definition with 2 syntactic terms - with spaces', () => {
    const input = "'terminal string' , meta_identifier";
    const context: SingleDefinitionContext = parseRule('singleDefinition', input);

    const syntacticTerms = context.syntacticTerm();
    const concatenateSymbol = context.CONCATENATE_SYMBOL();

    expect(syntacticTerms).not.toBeNull();
    expect(syntacticTerms).toHaveLength(2);
    expect(syntacticTerms[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntacticTerm);
    expect(syntacticTerms[1]?.ruleIndex).toEqual(EBNFParser.RULE_syntacticTerm);
    expect(collectErrorNodes(syntacticTerms[0])).toHaveLength(0);

    expect(concatenateSymbol).not.toBeNull();
    expect(concatenateSymbol[0]?.symbol.type).toEqual(EBNFParser.CONCATENATE_SYMBOL);
});

test('should find single definition with 2 syntactic terms - no spaces', () => {
    const input = "'terminal string',meta_identifier";
    const context: SingleDefinitionContext = parseRule('singleDefinition', input);

    const syntacticTerms = context.syntacticTerm();
    const concatenateSymbol = context.CONCATENATE_SYMBOL();

    expect(syntacticTerms).not.toBeNull();
    expect(syntacticTerms).toHaveLength(2);
    expect(syntacticTerms[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntacticTerm);
    expect(syntacticTerms[1]?.ruleIndex).toEqual(EBNFParser.RULE_syntacticTerm);
    expect(collectErrorNodes(syntacticTerms[0])).toHaveLength(0);

    expect(concatenateSymbol).not.toBeNull();
    expect(concatenateSymbol[0]?.symbol.type).toEqual(EBNFParser.CONCATENATE_SYMBOL);
});
