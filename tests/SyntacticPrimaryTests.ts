import { TerminalNode } from "antlr4ng";
import { EBNFParser, EmptySequenceContext, GroupedSequenceContext, OptionalSequenceContext, RepeatedSequenceContext, SyntacticPrimaryContext } from "../src/parser/EBNFParser";
import { parseRule } from "./utils";

// syntacticPrimary
// 	: optionalSequence
// 	| repeatedSequence
// 	| groupedSequence
// 	| META_IDENTIFIER
// 	| TERMINAL_STRING
//  | SPECIAL_SEQUENCE
// 	| emptySequence
// 	;

describe('Optional sequence', () => {
    function getOptionalSequence(input: string): OptionalSequenceContext | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.optionalSequence();
    }

    test('should find optional sequence', () => {
        const optionalSequence = getOptionalSequence("[ test ]");
        expect(optionalSequence).not.toBeNull();
        expect(optionalSequence?.ruleIndex).toEqual(EBNFParser.RULE_optionalSequence);
    });
});

describe('Repeated sequence', () => {
    function getRepeatedSequence(input: string): RepeatedSequenceContext | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.repeatedSequence();
    }

    test('should find repeated sequence', () => {
        const repeatedSequence = getRepeatedSequence("{ test }");
        expect(repeatedSequence).not.toBeNull();
        expect(repeatedSequence?.ruleIndex).toEqual(EBNFParser.RULE_repeatedSequence);
    });
});

describe('Grouped sequence', () => {
    function getGroupedSequence(input: string): GroupedSequenceContext | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.groupedSequence();
    }

    test('should find grouped sequence', () => {
        const groupedSequence = getGroupedSequence("( test )");
        expect(groupedSequence).not.toBeNull();
        expect(groupedSequence?.ruleIndex).toEqual(EBNFParser.RULE_groupedSequence);
    });
});

describe('Meta identifier', () => {
    function getMetaIdentifier(input: string): TerminalNode | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.META_IDENTIFIER();
    }

    test('should find meta identifier', () => {
        const metaIdentifier = getMetaIdentifier("identifier");
        expect(metaIdentifier).not.toBeNull();
        expect(metaIdentifier?.symbol.type).toEqual(EBNFParser.META_IDENTIFIER);
    });
});

describe('Terminal string', () => {
    function getTerminalString(input: string): TerminalNode | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.TERMINAL_STRING();
    }

    test('should find terminal string', () => {
        const terminalString = getTerminalString("'terminal string'");
        expect(terminalString).not.toBeNull();
        expect(terminalString?.symbol.type).toEqual(EBNFParser.TERMINAL_STRING);
    });

    test('should fail on multiline terminal string - single quote', () => {
        const terminalString = getTerminalString(`'terminal 
            string'`);
        expect(terminalString).toBeNull();
    });

    test('should fail on multiline terminal string - double quote', () => {
        const terminalString = getTerminalString(`"terminal 
            string"`);
        expect(terminalString).toBeNull();
    });
});

describe('Special sequence', () => {
    function getSpecialSequence(input: string): TerminalNode | null  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.SPECIAL_SEQUENCE();
    }

    test('should find special sequence', () => {
        const specialSequence = getSpecialSequence("? special sequence ?");
        expect(specialSequence).not.toBeNull();
        expect(specialSequence?.symbol.type).toEqual(EBNFParser.SPECIAL_SEQUENCE);
    });

    test('should fail on multiline special sequence', () => {
        const specialSequence = getSpecialSequence(`? special 
            sequence ?`);
        expect(specialSequence).toBeNull();
    });
});

describe('Empty sequence', () => {
    function getEmptySequence(input: string): EmptySequenceContext | null | undefined  {
        const context: SyntacticPrimaryContext = parseRule('syntacticPrimary', input);
        return context.groupedSequence()?.definitionsList()?.singleDefinition()[0]?.syntacticTerm()[0]?.syntacticFactor()?.syntacticPrimary()?.emptySequence();
    }

    test('should find empty sequence', () => {
        const emptySequence = getEmptySequence("()");
        expect(emptySequence).not.toBeNull();
        expect(emptySequence?.ruleIndex).toEqual(EBNFParser.RULE_emptySequence);
    });
});