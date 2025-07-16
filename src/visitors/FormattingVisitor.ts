import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SyntaxContext, SyntaxRuleContext, DefinitionsListContext, SingleDefinitionContext, SyntacticTermContext, SyntacticExceptionContext, SyntacticExceptionFactorContext, SyntacticExceptionPrimaryContext, SyntacticFactorContext, SyntacticPrimaryContext, OptionalSequenceContext, RepeatedSequenceContext, GroupedSequenceContext, EmptySequenceContext, CommentContext, MetaWithCommentsContext, DefintitionSymbolWithCommentsContext, IntegerWithCommentsContext, RepetitionSymbolWithCommentsContext, CommentSymbolContext } from "../parser/EBNFParser";
import { EBNFParserVisitor } from "../parser/EBNFParserVisitor";
import { EBNFFormattingOptions } from '../providers/EBNFFormattingOptions';

export class FormattingVisitor extends AbstractParseTreeVisitor<string> implements EBNFParserVisitor<string> {
    private options: EBNFFormattingOptions;

    protected defaultResult() { return ""; }

    constructor(options: EBNFFormattingOptions) {
        super();
        this.options = options;
    }

    public visitComment(ctx: CommentContext): string {
        var result: string = "";

        result += "(*";

        for (var cs of ctx.commentSymbol()) {
            result += this.visit(cs);
        }
        
        result += "*)";
        
        return result;
    }

    public visitCommentSymbol(ctx: CommentSymbolContext): string {
        var result: string = "";

        const cmt = ctx.comment();
        const os = ctx.OTHER_CHARACTER();
        
        if (cmt) {
            result += this.visit(cmt);
        }
        else if (os) {
            result += os.symbol.text;
        }

        return result;
    }

    public visitSyntax(ctx: SyntaxContext): string {
        var result: string = "";
        var first: boolean = true;

        for (var rule of ctx.syntaxRule()) {
            if (!first) {
                result += "\n\n";
            }

            result += this.visit(rule);
            first = false;
        }

        ctx.comment().forEach((comment: CommentContext) => {
            result += "\n\n" + this.visit(comment);
        });

        return result;
    }

    public visitSyntaxRule(ctx: SyntaxRuleContext): string {
        var result: string = "";

        ctx.comment().forEach((comment: CommentContext) => {
            result += this.visit(comment) + "\n";
        });
        
        result += this.visit(ctx.metaWithComments());
        result += this.visit(ctx.defintitionSymbolWithComments());
        result += this.visit(ctx.definitionsList());
        result += this.options.terminatorSymbolOnNewLine ? "\n" : "";
        result += (this.options.terminatorSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
        result += this.options.defaultTerminatorSymbol; // ctx.TERMINATOR_SYMBOL().symbol.text;

        return result;
    }

    public visitMetaWithComments(ctx: MetaWithCommentsContext): string {
        var result: string = "";

        result += ctx.META_IDENTIFIER().symbol.text;
        
        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        result += this.options.definingSymbolOnNewLine ? "\n" : " ";
        result += (this.options.definingSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
        
        return result;
    }

    public visitDefintitionSymbolWithComments(ctx: DefintitionSymbolWithCommentsContext): string {
        var result: string = "";

        result += ctx.DEFINING_SYMBOL().symbol.text;

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        result += " ";

        return result;
    }

    public visitDefinitionsList(ctx: DefinitionsListContext): string {
        var result: string = "";
        var first: boolean = true;

        for (var def of ctx.singleDefinition()) {
            if (!first) {
                result += this.options.definitionSeparatorSymbolOnNewLine ? "\n" : " ";
                result += (this.options.definitionSeparatorSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
                result += this.options.defaultDefinitionSeparatorSymbol; // ctx.DEFINITION_SEPARATOR_SYMBOL()[i].symbol.text;
                ctx.comment().forEach((comment: CommentContext) => {
                    result += " " + this.visit(comment);
                });
                result += " ";
            }

            result += this.visit(def);
            first = false;
        }

        return result;
    }

    public visitSingleDefinition(ctx: SingleDefinitionContext): string {
        var result: string = "";
        var first: boolean = true;
        var i: number = 0;

        for (var term of ctx.syntacticTerm()) {
            if (!first) {
                result += this.options.insertSpaceBeforeConcatenateSymbol ? " " : "";
                result += ctx.CONCATENATE_SYMBOL()[i].symbol.text;
                ctx.comment().forEach((comment: CommentContext) => {
                    result += " " + this.visit(comment);
                });
                result += " ";
                i += 1;
            }

            result += this.visit(term);
            first = false;
        }

        return result;
    }

    public visitSyntacticTerm(ctx: SyntacticTermContext): string {
        var result: string = "";

        result += this.visit(ctx.syntacticFactor());

        const exceptSymbol = ctx.EXCEPT_SYMBOL();
        if (exceptSymbol) {
            result += " ";
            result += exceptSymbol.symbol.text;

            ctx.comment().forEach((comment: CommentContext) => {
                result += " " + this.visit(comment);
            });
       
            const syntaxticException = ctx.syntacticException();
            if (syntaxticException) {
                result += " ";
                result += this.visit(syntaxticException);
            }
        }

        return result;
    }

    public visitSyntacticException(ctx: SyntacticExceptionContext): string {
        var result: string = "";

        result += this.visit(ctx.syntacticExceptionFactor());

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        return result;
    }

    public visitSyntacticExceptionFactor(ctx: SyntacticExceptionFactorContext): string {
        var result: string = "";

        const ic = ctx.integerWithComments()
        if (ic) {
            result += this.visit(ic);
        }

        const rsc = ctx.repetitionSymbolWithComments()
        if (rsc) {
            result += this.visit(rsc);
        }

        result += this.visit(ctx.syntacticExceptionPrimary());

        return result;
    }

    public visitIntegerWithComments(ctx: IntegerWithCommentsContext): string {
        var result: string = "";

        const integer = ctx.INTEGER();
        if (integer) {
            result += integer.symbol.text;
        }

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        if (integer) {
            result += " ";
        }

        return result;
    }

    public visitRepetitionSymbolWithComments(ctx: RepetitionSymbolWithCommentsContext): string {
        var result: string = "";

        const rs = ctx.REPETITION_SYMBOL();
        if (rs) {
            result += rs.symbol.text;
        }

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        if (rs) {
            result += " ";
        }

        return result;
    }

    public visitSyntacticExceptionPrimary(ctx: SyntacticExceptionPrimaryContext): string {
        var result: string = "";

        const os = ctx.optionalSequence();
        const rs = ctx.repeatedSequence();
        const gs = ctx.groupedSequence();
        const ts = ctx.TERMINAL_STRING();
        const ss = ctx.SPECIAL_SEQUENCE();
        const es = ctx.emptySequence();

        if (os) {
            result += this.visit(os);
        }
        else if (rs) {
            result += this.visit(rs);
        }
        else if (gs) {
            result += this.visit(gs);
        }
        else if (ts) {
            result += ts.symbol.text;
        }
        else if (ss) {
            result += ss.symbol.text;
        }
        else if (es) {
            result += this.visit(es);
        }

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        return result;
    }

    public visitSyntacticFactor(ctx: SyntacticFactorContext): string {
        var result: string = "";

        const ic = ctx.integerWithComments()
        if (ic) {
            result += this.visit(ic);
        }

        const rsc = ctx.repetitionSymbolWithComments()
        if (rsc) {
            result += this.visit(rsc);
        }

        result += this.visit(ctx.syntacticPrimary());

        return result;
    }
    
    public visitSyntacticPrimary(ctx: SyntacticPrimaryContext): string {
        var result: string = "";

        const os = ctx.optionalSequence();
        const rs = ctx.repeatedSequence();
        const gs = ctx.groupedSequence();
        const mi = ctx.META_IDENTIFIER();
        const ts = ctx.TERMINAL_STRING();
        const ss = ctx.SPECIAL_SEQUENCE();
        const es = ctx.emptySequence();

        if (os) {
            result += this.visit(os);
        }
        else if (rs) {
            result += this.visit(rs);
        }
        else if (gs) {
            result += this.visit(gs);
        }
        else if (mi) {
            result += mi.symbol.text;
        }
        else if (ts) {
            result += ts.symbol.text;
        }
        else if (ss) {
            result += ss.symbol.text;
        }
        else if (es) {
            result += this.visit(es);
        }

        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });

        return result;
    }

    public visitOptionalSequence(ctx: OptionalSequenceContext): string {
        var result: string = "";

        const startOptionSymbol: string = this.options.defaultOptionSymbols === "[ ]" ? "[" : "(/";
        const endOptionSymbol: string = this.options.defaultOptionSymbols === "[ ]" ? "]" : "/)";

        result += startOptionSymbol; //ctx.START_OPTION_SYMBOL().symbol.text;
        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += this.visit(ctx.definitionsList());
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += endOptionSymbol; //ctx.END_OPTION_SYMBOL().symbol.text;

        return result;
    }

    public visitRepeatedSequence(ctx: RepeatedSequenceContext): string {
        var result: string = "";

        const startRepeatSymbol: string = this.options.defaultRepeatSymbols === "{ }" ? "{" : "(:";
        const endRepeatSymbol: string = this.options.defaultRepeatSymbols === "{ }" ? "}" : ":)";

        result += startRepeatSymbol; // ctx.START_REPEAT_SYMBOL();
        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += this.visit(ctx.definitionsList());
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += endRepeatSymbol;  // ctx.END_REPEAT_SYMBOL();

        return result;
    }

    public visitGroupedSequence(ctx: GroupedSequenceContext): string {
        var result: string = "";

        result += ctx.START_GROUP_SYMBOL();
        ctx.comment().forEach((comment: CommentContext) => {
            result += " " + this.visit(comment);
        });
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += this.visit(ctx.definitionsList());
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += ctx.END_GROUP_SYMBOL();

        return result;
    }

    public visitEmptySequence(ctx: EmptySequenceContext): string {
        return "";
    }

    private indent(times: number = 1): string {
        var result = "";

        for (var i = 0; i < times; i++) {
            if (this.options.insertSpaces) {
                result += " ".repeat(this.options.tabSize);
            }
            else {
                result += "\t";
            }
        }

        return result;
    }
}