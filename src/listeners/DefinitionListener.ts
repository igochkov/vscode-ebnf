import { Token } from 'antlr4ts';
import { SyntaxRuleContext } from '../parser/EBNFParser';
import { EBNFParserListener } from '../parser/EBNFParserListener';

export class DefinitionListener implements EBNFParserListener {
    public definitions: Token[] = [];

    exitSyntaxRule(ctx: SyntaxRuleContext) {
        const terminalNode = ctx.IDENTIFIER();

        if (terminalNode !== undefined) {
            this.definitions.push(terminalNode.symbol);
        }
    }
}