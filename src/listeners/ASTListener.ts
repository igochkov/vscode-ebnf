import { ErrorNode, ParserRuleContext, TerminalNode, Token } from 'antlr4ng/dist';
import { SyntacticPrimaryContext, SyntaxRuleContext } from '../parser/EBNFParser';
import { EBNFParserListener } from '../parser/EBNFParserListener';

export class ASTListener implements EBNFParserListener {
    public symbols: Token[] = [];
    public definitions: Token[] = [];

    exitSyntaxRule(ctx: SyntaxRuleContext) {
        const metaWithComments = ctx.metaWithComments();

        if (metaWithComments) {
            const ruleName = metaWithComments.META_IDENTIFIER();

            if (ruleName) {
                this.symbols.push(ruleName.symbol);
                this.definitions.push(ruleName.symbol);
            }
        }
    }

    exitSyntacticPrimary(ctx: SyntacticPrimaryContext) {
        const terminalNode = ctx.META_IDENTIFIER();

        if (terminalNode) {
            this.symbols.push(terminalNode.symbol);
        }
    }

    visitTerminal(node: TerminalNode): void {}    
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}