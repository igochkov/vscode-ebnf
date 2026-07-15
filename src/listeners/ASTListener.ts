import { ErrorNode, ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import { SyntacticExceptionPrimaryContext, SyntacticPrimaryContext, SyntaxRuleContext } from '../parser/EBNFParser';
import { EBNFParserListener } from '../parser/EBNFParserListener';

/**
 * A single left-hand-side definition of a syntax-rule, with enough positional
 * information to drive diagnostics, outline, hover and highlights.
 */
export interface RuleInfo {
    /** The defined meta-identifier (rule name). */
    name: string;
    /** The name token (LHS meta-identifier). */
    nameToken: Token;
    /** First token of the whole rule (for the full-rule range). */
    startToken: Token;
    /** Last token of the whole rule (for the full-rule range). */
    stopToken: Token;
    /** Leading comment texts attached to the rule name, in source order. */
    comments: string[];
    /** The parse-tree context for the whole syntax-rule (used by range/on-type formatting). */
    ctx: SyntaxRuleContext;
}

export class ASTListener implements EBNFParserListener {
    /** Every meta-identifier occurrence (definitions + usages). Kept for existing providers. */
    public symbols: Token[] = [];
    /** Left-hand-side (defining) meta-identifier occurrences. */
    public definitions: Token[] = [];
    /** Right-hand-side (referencing) meta-identifier occurrences. */
    public usages: Token[] = [];
    /** Rich per-rule model used by the semantic analyzer and the navigation providers. */
    public rules: RuleInfo[] = [];

    exitSyntaxRule(ctx: SyntaxRuleContext) {
        const metaWithComments = ctx.metaWithComments();

        if (metaWithComments) {
            const ruleName = metaWithComments.META_IDENTIFIER();

            if (ruleName) {
                this.symbols.push(ruleName.symbol);
                this.definitions.push(ruleName.symbol);

                const startToken = ctx.start ?? ruleName.symbol;
                const stopToken = ctx.stop ?? ruleName.symbol;
                const comments = metaWithComments.comment().map(c => c.getText());

                this.rules.push({
                    name: ruleName.symbol.text ?? "",
                    nameToken: ruleName.symbol,
                    startToken,
                    stopToken,
                    comments,
                    ctx
                });
            }
        }
    }

    exitSyntacticPrimary(ctx: SyntacticPrimaryContext) {
        const terminalNode = ctx.META_IDENTIFIER();

        if (terminalNode) {
            this.symbols.push(terminalNode.symbol);
            this.usages.push(terminalNode.symbol);
        }
    }

    exitSyntacticExceptionPrimary(ctx: SyntacticExceptionPrimaryContext) {
        // A meta-identifier used inside an exception (e.g. "a - b") is a reference too.
        const terminalNode = ctx.META_IDENTIFIER();

        if (terminalNode) {
            this.symbols.push(terminalNode.symbol);
            this.usages.push(terminalNode.symbol);
        }
    }

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}
