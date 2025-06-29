import { TerminalNode } from 'antlr4ng';
import { DefinitionsListContext, EBNFParser, GroupedSequenceContext } from '../src/parser/EBNFParser';
import { parseRule, collectErrorNodes } from './utils'

test('should find grouped sequence rule in input "( test )"', () => {
    const input = "( test )";
    const context: GroupedSequenceContext = parseRule('groupedSequence', input)
    expect(context.ruleIndex).toEqual(EBNFParser.RULE_groupedSequence)
});

test('should find 3 children in input "( test )"', () => {
    const input = "( test )";
    const context: GroupedSequenceContext = parseRule('groupedSequence', input)
    expect(context.children).toHaveLength(3)
});

describe('Start group symbol', () => {
    function getStartGroupedSymbol(input: string): TerminalNode  {
        const context: GroupedSequenceContext = parseRule('groupedSequence', input);
        return context.START_GROUP_SYMBOL();
    }

    test('should match the correct symbol type', () => {
        const startOptionSymbol = getStartGroupedSymbol("(foo)");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.symbol.type).toEqual(EBNFParser.START_GROUP_SYMBOL);
    });

    test('should find START_GROUP_SYMBOL at the correct position', () => {
        const startOptionSymbol =  getStartGroupedSymbol("(abc)");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.symbol.start).toBe(0);
    });
    
    test('should find START_GROUP_SYMBOL in input "( test )"', () => {
        const startOptionSymbol = getStartGroupedSymbol("( test )");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.getText()).toBe("(");
    });

    test('should not find START_GROUP_SYMBOL in input without "("', () => {
        const startOption = getStartGroupedSymbol("test )");
        expect(startOption.symbol.tokenIndex).toBe(-1);
        expect(startOption.getText()).toContain('<missing')
    });
})

describe('End group symbol', () => {
    function getEndGroupedSymbol(input: string): TerminalNode  {
        const context: GroupedSequenceContext = parseRule('groupedSequence', input);
        return context.END_GROUP_SYMBOL();
    }

    test('should find END_GROUP_SYMBOL in input "( test )"', () => {
        const endOptionSymbol = getEndGroupedSymbol("( test )");
        expect(endOptionSymbol).not.toBeNull();
        expect(endOptionSymbol.getText()).toBe(")");
    });
})

describe('Definition list', () => {
    function getDefinitionList(input: string): DefinitionsListContext  {
        const context: GroupedSequenceContext = parseRule('groupedSequence', input);
        return context.definitionsList();
    }

    test('should find definitionsList in input "( test )"', () => {
        const definitionList = getDefinitionList("( test )");
        expect(definitionList).not.toBeNull()
        expect(collectErrorNodes(definitionList)).toHaveLength(0);
    });
});