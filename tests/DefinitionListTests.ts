import { DefinitionsListContext, EBNFParser } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// definitionsList
// 	: singleDefinition (DEFINITION_SEPARATOR_SYMBOL singleDefinition)*
// 	;

test('should find single definition with 1 single definition', () => {
    const input = "'terminal string'";
    const context: DefinitionsListContext = parseRule('definitionsList', input);

    const singleDefinitions = context.singleDefinition();
    const definitionSeparatorSymbol = context.DEFINITION_SEPARATOR_SYMBOL();

    expect(singleDefinitions).not.toBeNull();
    expect(singleDefinitions).toHaveLength(1);
    expect(singleDefinitions[0]?.ruleIndex).toEqual(EBNFParser.RULE_singleDefinition);
    expect(collectErrorNodes(singleDefinitions[0])).toHaveLength(0);

    expect(definitionSeparatorSymbol).not.toBeNull();
    expect(definitionSeparatorSymbol).toHaveLength(0);
});

test('should find single definition with 2 single definitions - with spaces', () => {
    const input = "'terminal string' | meta_identifier";
    const context: DefinitionsListContext = parseRule('definitionsList', input);

    const singleDefinitions = context.singleDefinition();
    const definitionSeparatorSymbol = context.DEFINITION_SEPARATOR_SYMBOL();

    expect(singleDefinitions).not.toBeNull();
    expect(singleDefinitions).toHaveLength(2);
    expect(singleDefinitions[0]?.ruleIndex).toEqual(EBNFParser.RULE_singleDefinition);
    expect(singleDefinitions[1]?.ruleIndex).toEqual(EBNFParser.RULE_singleDefinition);
    expect(collectErrorNodes(singleDefinitions[0])).toHaveLength(0);

    expect(definitionSeparatorSymbol).not.toBeNull();
    expect(definitionSeparatorSymbol[0]?.symbol.type).toEqual(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
});

test('should find single definition with 2 single definitions - no spaces', () => {
    const input = "'terminal string'|meta_identifier";
    const context: DefinitionsListContext = parseRule('definitionsList', input);

    const singleDefinitions = context.singleDefinition();
    const definitionSeparatorSymbol = context.DEFINITION_SEPARATOR_SYMBOL();

    expect(singleDefinitions).not.toBeNull();
    expect(singleDefinitions).toHaveLength(2);
    expect(singleDefinitions[0]?.ruleIndex).toEqual(EBNFParser.RULE_singleDefinition);
    expect(singleDefinitions[1]?.ruleIndex).toEqual(EBNFParser.RULE_singleDefinition);
    expect(collectErrorNodes(singleDefinitions[0])).toHaveLength(0);

    expect(definitionSeparatorSymbol).not.toBeNull();
    expect(definitionSeparatorSymbol[0]?.symbol.type).toEqual(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
});
