import { TerminalNode } from 'antlr4ng';
import { DefinitionsListContext, EBNFParser, RepeatedSequenceContext } from '../src/parser/EBNFParser';
import { parseRule, collectErrorNodes } from './utils'

test('should find 3 children in input "{ test }"', () => {
    const input = "{ test }";
    const context: RepeatedSequenceContext = parseRule('repeatedSequence', input)
    expect(context.children).toHaveLength(3)
});

test('should find repeated sequence rule in input "{ test }"', () => {
    const input = "{ test }";
    const context: RepeatedSequenceContext = parseRule('repeatedSequence', input)
    expect(context.ruleIndex).toEqual(EBNFParser.RULE_repeatedSequence)
});

test('should find repeated sequence rule in input "(: test :)"', () => {
    const input = "(: test :)";
    const context: RepeatedSequenceContext = parseRule('repeatedSequence', input)
    expect(context.ruleIndex).toEqual(EBNFParser.RULE_repeatedSequence)
});

describe('Start repeat symbol', () => {
    function getStartRepeatSymbol(input: string): TerminalNode  {
        const context: RepeatedSequenceContext = parseRule('repeatedSequence', input);
        return context.START_REPEAT_SYMBOL();
    }

    test('should match the correct symbol type', () => {
        const startRepeatSymbol = getStartRepeatSymbol("{foo}");
        expect(startRepeatSymbol).not.toBeNull();
        expect(startRepeatSymbol.symbol.type).toEqual(EBNFParser.START_REPEAT_SYMBOL);
    });

    test('should find START_REPEATED_SYMBOL at the correct position', () => {
        const startRepeatSymbol =  getStartRepeatSymbol("{abc}");
        expect(startRepeatSymbol).not.toBeNull();
        expect(startRepeatSymbol.symbol.start).toBe(0);
    });
    
    test('should find START_REPEATED_SYMBOL in input "{ test }"', () => {
        const startRepeatSymbol = getStartRepeatSymbol("{ test }");
        expect(startRepeatSymbol).not.toBeNull();
        expect(startRepeatSymbol.getText()).toBe("{");
    });

    test('should not find START_REPEATED_SYMBOL in input without "{"', () => {
        const startRepeatSymbol = getStartRepeatSymbol("test }");
        expect(startRepeatSymbol.symbol.tokenIndex).toBe(-1);
        expect(startRepeatSymbol.getText()).toBe('<missing START_REPEAT_SYMBOL>')
    });
})

describe('End repeat symbol', () => {
    function getEndRepeatSymbol(input: string): TerminalNode  {
        const context: RepeatedSequenceContext = parseRule('repeatedSequence', input);
        return context.END_REPEAT_SYMBOL();
    }

        test('should match the correct symbol type', () => {
        const endRepeatSymbol = getEndRepeatSymbol("{foo}");
        expect(endRepeatSymbol).not.toBeNull();
        expect(endRepeatSymbol.symbol.type).toEqual(EBNFParser.END_REPEAT_SYMBOL);
    });

    test('should find END_REPEATED_SYMBOL in input "{ test }"', () => {
        const endRepeatSymbol = getEndRepeatSymbol("{ test }");
        expect(endRepeatSymbol).not.toBeNull();
        expect(endRepeatSymbol.getText()).toBe("}");
    });
})

describe('Definition list', () => {
    function getDefinitionList(input: string): DefinitionsListContext  {
        const context: RepeatedSequenceContext = parseRule('repeatedSequence', input);
        return context.definitionsList();
    }

    test('should find definitionsList in input "{ test }"', () => {
        const definitionList = getDefinitionList("{ test }");
        expect(definitionList).not.toBeNull()
        expect(collectErrorNodes(definitionList)).toHaveLength(0);
    });
});