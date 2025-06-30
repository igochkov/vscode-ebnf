import { CharStream, CommonTokenStream, ErrorNode, ParserRuleContext } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { EBNFParser } from '../src/parser/EBNFParser';

export function parseRule(rule: keyof EBNFParser, input: string) {
    const inputStream = CharStream.fromString(input);
    const lexer = new EBNFLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new EBNFParser(tokenStream);
    // @ts-ignore
    return parser[rule]();
}

export function collectErrorNodes(parseRule: ParserRuleContext | null | undefined): ErrorNode[] {
    if (!parseRule || !parseRule.children) return [];

    let errors: ErrorNode[] = [];
    for (const child of parseRule.children) {
        if (child instanceof ErrorNode) {
            errors.push(child);
        } else if (child && typeof child === 'object' && 'children' in child) {
            errors = errors.concat(collectErrorNodes(child as ParserRuleContext));
        }
    }

    return errors;
}