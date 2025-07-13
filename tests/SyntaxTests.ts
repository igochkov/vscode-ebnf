import { EBNFParser, SyntaxContext, SyntaxRuleContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";

// syntax
// 	: syntaxRule+ EOF
// 	;

test('should find single syntax rule', () => {
    const input = "syntacticPrimary = optionalSequence | repeatedSequence;";
    const context: SyntaxContext = parseRule('syntax', input);

    const syntaxRules = context.syntaxRule();

    expect(syntaxRules).not.toBeNull();
    expect(syntaxRules).toHaveLength(1);
    expect(syntaxRules[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
    expect(collectErrorNodes(syntaxRules[0])).toHaveLength(0);
});

test('should find 2 syntax rules', () => {
    const input = `
    program
        = { item };

    item
        = fn-defn
        | fn-decl;
    `;
    const context: SyntaxContext = parseRule('syntax', input);
    const syntaxRules = context.syntaxRule();

    expect(syntaxRules).not.toBeNull();
    expect(syntaxRules).toHaveLength(2);
    expect(syntaxRules[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
    expect(syntaxRules[1]?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
    expect(collectErrorNodes(syntaxRules[0])).toHaveLength(0);
    expect(collectErrorNodes(syntaxRules[1])).toHaveLength(0);
});

test('issue #18', () => {
    const input = `
    special-symbol = '+' | '-' | '*' | '/' | '¬' | '=' | '<' | '>' | '[' | ']' | '.' | ',' | ':' |
                 ';' | '^' | '(' | ')' | '<>' | '<=' | '>=' | ':=' | '..' | 
                 'and' | 'array' | 'begin' | 'case' | 'const' | 'div' | 'do' | 'downto' | 'else' |
              'end' | 'file' | 'for' | 'function' | 'goto' | 'if' | 'in' | 'label' | 'mod' |
              'nil' | 'not' | 'of' | 'or' | 'packed' | 'procedure' | 'program' | 'record' |
              'repeat' | 'set' | 'then' | 'to' | 'type' | 'until' | 'var' | 'while' | 'with' ;
    `;

    const context: SyntaxContext = parseRule('syntax', input);
    const syntaxRules = context.syntaxRule();

    syntaxRules.forEach((syntaxRule: SyntaxRuleContext) => {
        expect(syntaxRule?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
        expect(collectErrorNodes(syntaxRule)).toHaveLength(0);
    });
});

test('issue #21', () => {
    const input = `
    register = "%", letter, { letter | digit };
    immediate = "$", [ "0x" ], digit, { digit };
    address = [ "0x" ], digit, { digit };
    identifier = letter, { letter | digit };
    whitespace = { " " | "\\t" };
    line_terminator = { "\\n" | ";" };
    `;

    const context: SyntaxContext = parseRule('syntax', input);
    const syntaxRules = context.syntaxRule();

    syntaxRules.forEach((syntaxRule: SyntaxRuleContext) => {
        expect(syntaxRule?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
        expect(collectErrorNodes(syntaxRule)).toHaveLength(0);
    });
});

test('allow comments', () => {
    const input = `
    (* comment *)
    rule1 (* comment *)
    = (* comment *) "a" (* comment *)
    | (* comment *) "b" (* comment *)
    | (* comment *) "c" (* comment *)
    ;
    (* comment *)(* comment *)
    rule2 (* comment *)
    = (* comment *) item1 (* comment *)
    , (* comment *) 
    { (* comment *) item2
    , (* comment *) item3 (* comment *) 
    } (* comment *) 
    .
    (* comment *)
    rule3 (* comment *)
    = (* comment *) 
    [ (* comment *) option1 (* comment *)
    ] (* comment *)
    ;
    (* comment *)
    `;

    const context: SyntaxContext = parseRule('syntax', input);
    const syntaxRules = context.syntaxRule();

    syntaxRules.forEach((syntaxRule: SyntaxRuleContext) => {
        expect(syntaxRule?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
        expect(collectErrorNodes(syntaxRule)).toHaveLength(0);
    });
});