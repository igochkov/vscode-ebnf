import { EBNFParser, SyntaxContext } from "../src/parser/EBNFParser";
import { collectErrorNodes, parseRule } from "./utils";
import { FormattingVisitor } from "../src/visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "../src/providers/EBNFFormattingOptions";

// https://github.com/igochkov/vscode-ebnf/issues/8
test('issue #8 - comment symbols in string', () => {
    const input = `
comment = '(*', {comment_symbol}, '*)';
comment_symbol = comment | terminal_string | special_sequence | character;
    `;
    const syntax: SyntaxContext = parseRule('syntax', input);
    const syntaxRules = syntax.syntaxRule();

    expect(syntaxRules).not.toBeNull();
    expect(syntaxRules).toHaveLength(2);
    expect(syntaxRules[0]?.ruleIndex).toEqual(EBNFParser.RULE_syntaxRule);
    expect(collectErrorNodes(syntax)).toHaveLength(0);
});

// // https://github.com/igochkov/vscode-ebnf/issues/9
// test('issue #9 - formatting selection', () => {
// });

// // https://github.com/igochkov/vscode-ebnf/issues/10
// test('issue #10 - formatting', () => {
// });

// // https://github.com/igochkov/vscode-ebnf/issues/15
// test('issue #15 - formatting with partially invalid syntax', () => {
// });

// https://github.com/igochkov/vscode-ebnf/issues/18
test('issue #18 - colorarization problem with ¬', () => {
    const input = `
    special-symbol = '+' | '-' | '*' | '/' | '¬' | '=' | '<' | '>' | '[' | ']' | '.' | ',' | ':' |
                 ';' | '^' | '(' | ')' | '<>' | '<=' | '>=' | ':=' | '..' | 
                 'and' | 'array' | 'begin' | 'case' | 'const' | 'div' | 'do' | 'downto' | 'else' |
              'end' | 'file' | 'for' | 'function' | 'goto' | 'if' | 'in' | 'label' | 'mod' |
              'nil' | 'not' | 'of' | 'or' | 'packed' | 'procedure' | 'program' | 'record' |
              'repeat' | 'set' | 'then' | 'to' | 'type' | 'until' | 'var' | 'while' | 'with' ;
    `;

    const context: SyntaxContext = parseRule('syntax', input);
    expect(collectErrorNodes(context)).toHaveLength(0);
});

// https://github.com/igochkov/vscode-ebnf/issues/21
test('issue #21 - formatting deletes string contents', () => {
    const input = `
register        = "%", letter, { letter | digit };
immediate       = "$", ["0x"], digit, {digit};
address         = [ "0x" ], digit, {digit};
identifier      = letter, { letter | digit };
whitespace      = { " " | "\\t" };
line_terminator = { "\\n" | ";" };

operand = register | immediate | address;

operand_list = [whitespace], operand, {",", [whitespace], operand};

instruction = identifier, [operand_list];

instruction_list = [whitespace], instruction, {line_terminator, [whitespace], instruction};
`;

    const syntax: SyntaxContext = parseRule('syntax', input);
    expect(collectErrorNodes(syntax)).toHaveLength(0);

    // format
    const options = new EBNFFormattingOptions();
    const visitor = new FormattingVisitor(options);
    const result = visitor.visit(syntax);
    
    const syntaxResult: SyntaxContext = parseRule('syntax', result??'');
    expect(collectErrorNodes(syntaxResult)).toHaveLength(0);
});