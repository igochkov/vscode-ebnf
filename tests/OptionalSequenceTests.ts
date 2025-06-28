import { TerminalNode } from 'antlr4ng';
import { DefinitionsListContext, EBNFParser, OptionalSequenceContext } from '../src/parser/EBNFParser';
import { parseRule, collectErrorNodes } from './utils'

test('should find 3 rules in input "[ test ]"', () => {
    const input = "[ test ]";
    const context: OptionalSequenceContext = parseRule('optionalSequence', input)
    expect(context.children).toHaveLength(3)
});

describe('Start option symbol', () => {
    function getStartOptionalSymbol(input: string): TerminalNode  {
        const context: OptionalSequenceContext = parseRule('optionalSequence', input);
        return context.START_OPTION_SYMBOL();
    }

    test('should match the correct symbol type', () => {
        const startOptionSymbol = getStartOptionalSymbol("[foo]");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.symbol.type).toEqual(EBNFParser.START_OPTION_SYMBOL);
    });

    test('should find START_OPTION_SYMBOL at the correct position', () => {
        const startOptionSymbol =  getStartOptionalSymbol("[abc]");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.symbol.start).toBe(0);
    });
    
    test('should find START_OPTION_SYMBOL in input "[ test ]"', () => {
        const startOptionSymbol = getStartOptionalSymbol("[ test ]");
        expect(startOptionSymbol).not.toBeNull();
        expect(startOptionSymbol.getText()).toBe("[");
    });

    test('should not find START_OPTION_SYMBOL in input without "["', () => {
        const startOption = getStartOptionalSymbol("test ]");
        expect(startOption.symbol.tokenIndex).toBe(-1);
        expect(startOption.getText()).toBe('<missing START_OPTION_SYMBOL>')
    });
})

describe('End option symbol', () => {
    function getEndOptionalSymbol(input: string): TerminalNode  {
        const context: OptionalSequenceContext = parseRule('optionalSequence', input);
        return context.END_OPTION_SYMBOL();
    }

    test('should find END_OPTION_SYMBOL in input "[ test ]"', () => {
        const endOptionSymbol = getEndOptionalSymbol("[ test ]");
        expect(endOptionSymbol).not.toBeNull();
        expect(endOptionSymbol.getText()).toBe("]");
    });
})

describe('Definition list', () => {
    function getDefinitionList(input: string): DefinitionsListContext  {
        const context: OptionalSequenceContext = parseRule('optionalSequence', input);
        return context.definitionsList();
    }

    test('should find definitionsList in input "[ test ]"', () => {
        const definitionList = getDefinitionList("[ test ]");
        expect(definitionList).not.toBeNull()
        expect(collectErrorNodes(definitionList)).toHaveLength(0);
    });
});