import { EBNFParser, SingleDefinitionContext, SyntaxRuleContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// syntaxRule
// 	: META_IDENTIFIER DEFINING_SYMBOL definitionsList TERMINATOR_SYMBOL
// 	;

test('should find empty syntax rule', () => {
    const input = "emptySequence = ;";
    const context: SyntaxRuleContext = parseRule('syntaxRule', input);

    const metaIdentifier = context.META_IDENTIFIER();
    const definingSymbol = context.DEFINING_SYMBOL();
    const definitionList = context.definitionsList();
    const terminatorSymbol = context.TERMINATOR_SYMBOL();

    expect(metaIdentifier).not.toBeNull();
    expect(metaIdentifier?.symbol.type).toEqual(EBNFParser.META_IDENTIFIER);

    expect(definingSymbol).not.toBeNull();
    expect(definingSymbol?.symbol.type).toEqual(EBNFParser.DEFINING_SYMBOL);

    expect(definitionList).not.toBeNull();
    expect(definitionList?.ruleIndex).toEqual(EBNFParser.RULE_definitionsList);
    expect(collectErrorNodes(definitionList)).toHaveLength(0);
    expect(definitionList?.singleDefinition()[0]?.syntacticTerm()[0]?.syntacticFactor()?.syntacticPrimary()?.emptySequence()?.ruleIndex).toEqual(EBNFParser.RULE_emptySequence);
    
    expect(terminatorSymbol).not.toBeNull();
    expect(terminatorSymbol?.symbol.type).toEqual(EBNFParser.TERMINATOR_SYMBOL);
});

test('should find full syntax rule with 2 syntactic terms', () => {
    const input = "syntacticPrimary = optionalSequence | repeatedSequence;";
    const context: SyntaxRuleContext = parseRule('syntaxRule', input);

    const metaIdentifier = context.META_IDENTIFIER();
    const definingSymbol = context.DEFINING_SYMBOL();
    const definitionList = context.definitionsList();
    const terminatorSymbol = context.TERMINATOR_SYMBOL();

    expect(metaIdentifier).not.toBeNull();
    expect(metaIdentifier?.symbol.type).toEqual(EBNFParser.META_IDENTIFIER);

    expect(definingSymbol).not.toBeNull();
    expect(definingSymbol?.symbol.type).toEqual(EBNFParser.DEFINING_SYMBOL);

    expect(definitionList).not.toBeNull();
    expect(definitionList?.ruleIndex).toEqual(EBNFParser.RULE_definitionsList);
    expect(collectErrorNodes(definitionList)).toHaveLength(0);
    
    expect(terminatorSymbol).not.toBeNull();
    expect(terminatorSymbol?.symbol.type).toEqual(EBNFParser.TERMINATOR_SYMBOL);
});
