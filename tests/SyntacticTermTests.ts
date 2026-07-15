import { EBNFParser, EmptySequenceContext, SyntacticTermContext, SyntacticPrimaryContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// syntacticTerm
// 	: syntacticFactor (EXCEPT_SYMBOL syntacticException)?
// 	;

test('should find only syntactic factor', () => {
    const input = "'terminal string'";
    const context: SyntacticTermContext = parseRule('syntacticTerm', input);

    const syntacticFactor = context.syntacticFactor();
    const exceptSymbol = context.EXCEPT_SYMBOL();
    const syntacticException = context.syntacticException();

    expect(exceptSymbol).toBeNull();
    expect(syntacticException).toBeNull();

    expect(syntacticFactor).not.toBeNull();
    expect(syntacticFactor?.ruleIndex).toEqual(EBNFParser.RULE_syntacticFactor);

    expect(collectErrorNodes(syntacticFactor)).toHaveLength(0);
});

test('should find full syntactic term - no spaces', () => {
    const input = "'string'-'a'";
    const context: SyntacticTermContext = parseRule('syntacticTerm', input);
    
    const syntacticFactor = context.syntacticFactor();
    const exceptSymbol = context.EXCEPT_SYMBOL();
    const syntacticException = context.syntacticException();

    expect(syntacticFactor).not.toBeNull();
    expect(syntacticFactor?.ruleIndex).toEqual(EBNFParser.RULE_syntacticFactor);
    expect(collectErrorNodes(syntacticFactor)).toHaveLength(0);

    expect(exceptSymbol).not.toBeNull();
    expect(exceptSymbol?.symbol.type).toEqual(EBNFParser.EXCEPT_SYMBOL);

    expect(syntacticException).not.toBeNull();
    expect(syntacticException?.ruleIndex).toEqual(EBNFParser.RULE_syntacticException);
    expect(collectErrorNodes(syntacticException)).toHaveLength(0);
});

test('should find full semantic term - with spaces', () => {
    const input = "meta_identifier - 'a'";
    const context: SyntacticTermContext = parseRule('syntacticTerm', input);
    
    const syntacticFactor = context.syntacticFactor();
    const exceptSymbol = context.EXCEPT_SYMBOL();
    const syntacticException = context.syntacticException();

    expect(syntacticFactor).not.toBeNull();
    expect(syntacticFactor?.ruleIndex).toEqual(EBNFParser.RULE_syntacticFactor);
    expect(collectErrorNodes(syntacticFactor)).toHaveLength(0);

    expect(exceptSymbol).not.toBeNull();
    expect(exceptSymbol?.symbol.type).toEqual(EBNFParser.EXCEPT_SYMBOL);

    expect(syntacticException).not.toBeNull();
    expect(syntacticException?.ruleIndex).toEqual(EBNFParser.RULE_syntacticException);
    expect(collectErrorNodes(syntacticException)).toHaveLength(0);
});

// ISO/IEC 14977 §4.7: an exception must be reducible to a factor with no meta-identifiers,
// but that is a *semantic* property. The standard's own §8.1 grammar uses meta-identifiers
// inside exceptions (e.g. "terminal character - first quote symbol"), so we accept them
// syntactically. (Was previously asserted as an error; relaxed for SC1 / issue #36 Phase 2.)
test('meta-identifiers are allowed inside an exception (ISO §8.1 usage)', () => {
    const input = "'string' - test";
    const context: SyntacticTermContext = parseRule('syntacticTerm', input);

    const syntacticFactor = context.syntacticFactor();
    const exceptSymbol = context.EXCEPT_SYMBOL();
    const syntacticException = context.syntacticException();

    expect(syntacticFactor).not.toBeNull();
    expect(syntacticFactor?.ruleIndex).toEqual(EBNFParser.RULE_syntacticFactor);
    expect(collectErrorNodes(syntacticFactor)).toHaveLength(0);

    expect(exceptSymbol).not.toBeNull();
    expect(exceptSymbol?.symbol.type).toEqual(EBNFParser.EXCEPT_SYMBOL);

    expect(syntacticException).not.toBeNull();
    expect(syntacticException?.ruleIndex).toEqual(EBNFParser.RULE_syntacticException);
    expect(collectErrorNodes(syntacticException)).toHaveLength(0);
});