import { Token } from 'antlr4ts';
import { PrimaryContext, SyntaxRuleContext } from '../parser/EBNFParser';
import { EBNFParserListener } from '../parser/EBNFParserListener';

export class IdentifierListener implements EBNFParserListener {
    public symbols: Token[] = [];

    exitSyntaxRule(ctx: SyntaxRuleContext) {
        const terminalNode = ctx.IDENTIFIER();

        if (terminalNode !== undefined) {
            this.symbols.push(terminalNode.symbol);
        }
    }

    exitPrimary(ctx: PrimaryContext) {
        const terminalNode = ctx.IDENTIFIER();

        if (terminalNode !== undefined) {
            this.symbols.push(terminalNode.symbol);
        }
    }
}