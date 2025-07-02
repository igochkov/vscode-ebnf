import { EBNFParser, EmptySequenceContext, SyntacticFactorContext, SyntacticPrimaryContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// syntacticFactor
// 	: (INTEGER REPETITION_SYMBOL)? syntacticPrimary
// 	;

test('should find only syntactic primary', () => {
    const input = "'terminal string'";
    const context: SyntacticFactorContext = parseRule('syntacticFactor', input);
    const integer = context.INTEGER();
    const repetitionSymbol = context.REPETITION_SYMBOL();
    const syntacticPrimary = context.syntacticPrimary();

    expect(integer).toBeNull();
    expect(repetitionSymbol).toBeNull();

    expect(syntacticPrimary).not.toBeNull();
    expect(syntacticPrimary?.ruleIndex).toEqual(EBNFParser.RULE_syntacticPrimary);

    expect(collectErrorNodes(syntacticPrimary)).toHaveLength(0);
});

test('should find full semantic factor - no space after integer', () => {
    const input = "2* 'terminal string'";
    const context: SyntacticFactorContext = parseRule('syntacticFactor', input);
    const integer = context.INTEGER();
    const repetitionSymbol = context.REPETITION_SYMBOL();
    const syntacticPrimary = context.syntacticPrimary();

    expect(integer).not.toBeNull();
    expect(integer?.symbol.type).toEqual(EBNFParser.INTEGER);

    expect(repetitionSymbol).not.toBeNull();
    expect(repetitionSymbol?.symbol.type).toEqual(EBNFParser.REPETITION_SYMBOL);

    expect(syntacticPrimary).not.toBeNull();
    expect(syntacticPrimary?.ruleIndex).toEqual(EBNFParser.RULE_syntacticPrimary);

    expect(collectErrorNodes(syntacticPrimary)).toHaveLength(0);
});

test('should find full semantic factor - with space after integer', () => {
    const input = "2 * 'terminal string'";
    const context: SyntacticFactorContext = parseRule('syntacticFactor', input);
    const integer = context.INTEGER();
    const repetitionSymbol = context.REPETITION_SYMBOL();
    const syntacticPrimary = context.syntacticPrimary();

    expect(integer).not.toBeNull();
    expect(integer?.symbol.type).toEqual(EBNFParser.INTEGER);

    expect(repetitionSymbol).not.toBeNull();
    expect(repetitionSymbol?.symbol.type).toEqual(EBNFParser.REPETITION_SYMBOL);

    expect(syntacticPrimary).not.toBeNull();
    expect(syntacticPrimary?.ruleIndex).toEqual(EBNFParser.RULE_syntacticPrimary);

    expect(collectErrorNodes(syntacticPrimary)).toHaveLength(0);
});

test('should find full semantic factor - no spaces', () => {
    const input = "2*'terminal string'";
    const context: SyntacticFactorContext = parseRule('syntacticFactor', input);
    const integer = context.INTEGER();
    const repetitionSymbol = context.REPETITION_SYMBOL();
    const syntacticPrimary = context.syntacticPrimary();

    expect(integer).not.toBeNull();
    expect(integer?.symbol.type).toEqual(EBNFParser.INTEGER);

    expect(repetitionSymbol).not.toBeNull();
    expect(repetitionSymbol?.symbol.type).toEqual(EBNFParser.REPETITION_SYMBOL);

    expect(syntacticPrimary).not.toBeNull();
    expect(syntacticPrimary?.ruleIndex).toEqual(EBNFParser.RULE_syntacticPrimary);

    expect(collectErrorNodes(syntacticPrimary)).toHaveLength(0);
});

// test('should fail wrong syntax', () => {
//     const input = "2*4*'terminal string'";
//     const context: SyntacticFactorContext = parseRule('syntacticFactor', input);
//     const integer = context.INTEGER();
//     const repetitionSymbol = context.REPETITION_SYMBOL();
//     const syntacticPrimary = context.syntacticPrimary();

//     expect(integer).not.toBeNull();
//     expect(integer?.symbol.type).toEqual(EBNFParser.INTEGER);

//     expect(repetitionSymbol).not.toBeNull();
//     expect(repetitionSymbol?.symbol.type).toEqual(EBNFParser.REPETITION_SYMBOL);

//     expect(syntacticPrimary).not.toBeNull();
//     expect(collectErrorNodes(syntacticPrimary).length).toBeGreaterThan(0);
// });