import { AbstractParseTreeVisitor } from 'antlr4ng';
import { SyntaxContext, SyntaxRuleContext, DefinitionsListContext, SingleDefinitionContext, SyntacticTermContext, SyntacticExceptionContext, SyntacticExceptionFactorContext, SyntacticExceptionPrimaryContext, SyntacticFactorContext, SyntacticPrimaryContext, OptionalSequenceContext, RepeatedSequenceContext, GroupedSequenceContext, EmptySequenceContext } from "../parser/EBNFParser";
import { EBNFParserVisitor } from "../parser/EBNFParserVisitor";
import { EBNFFormattingOptions } from '../providers/EBNFFormattingOptions';

export class FormattingVisitor extends AbstractParseTreeVisitor<string> implements EBNFParserVisitor<string> {
    private options: EBNFFormattingOptions;

    protected defaultResult() { return ""; }

    constructor(options: EBNFFormattingOptions) {
        super();
        this.options = options;
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

        return result;
    }

    public visitSyntaxRule(ctx: SyntaxRuleContext): string {
        var result: string = "";

        result += ctx.META_IDENTIFIER().symbol.text;
        result += this.options.definingSymbolOnNewLine ? "\n" : " ";
        result += (this.options.definingSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
        result += ctx.DEFINING_SYMBOL().symbol.text;
        result += " ";
        result += this.visit(ctx.definitionsList());
        result += this.options.terminatorSymbolOnNewLine ? "\n" : "";
        result += (this.options.terminatorSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
        result += this.options.defaultTerminatorSymbol; // ctx.TERMINATOR_SYMBOL().symbol.text;

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
        }

        const syntaxticException = ctx.syntacticException();
        if (syntaxticException) {
            result += " ";
            result += this.visit(syntaxticException);
        }

        return result;
    }

    public visitSyntacticException(ctx: SyntacticExceptionContext): string {
        return this.visit(ctx.syntacticExceptionFactor());
    }

    public visitSyntacticExceptionFactor(ctx: SyntacticExceptionFactorContext): string {
        var result: string = "";

        const integer = ctx.INTEGER();
        if (integer) {
            result += integer.symbol.text;
            result += " ";
        }

        const rs = ctx.REPETITION_SYMBOL();
        if (rs) {
            result += rs.symbol.text;
            result += " ";
        }

        result += this.visit(ctx.syntacticExceptionPrimary());

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

        return result;
    }

    public visitSyntacticFactor(ctx: SyntacticFactorContext): string {
        var result: string = "";

        const integer = ctx.INTEGER();
        if (integer) {
            result += integer.symbol.text;
            result += " ";
        }

        const rs = ctx.REPETITION_SYMBOL();
        if (rs) {
            result += rs.symbol.text;
            result += " ";
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

        return result;
    }

    public visitOptionalSequence(ctx: OptionalSequenceContext): string {
        var result: string = "";

        const startOptionSymbol: string = this.options.defaultOptionSymbols === "[ ]" ? "[" : "(/";
        const endOptionSymbol: string = this.options.defaultOptionSymbols === "[ ]" ? "]" : "/)";

        result += startOptionSymbol; //ctx.START_OPTION_SYMBOL().symbol.text;
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
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += this.visit(ctx.definitionsList());
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += endRepeatSymbol;  // ctx.END_REPEAT_SYMBOL();

        return result;
    }

    public visitGroupedSequence(ctx: GroupedSequenceContext): string {
        var result: string = "";

        result += ctx.START_GROUP_SYMBOL();
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += this.visit(ctx.definitionsList());
        result += this.options.insertSpaceAtSequenceSymbols ? " " : "";
        result += ctx.END_GROUP_SYMBOL();

        return result;
    }

    public visitEmptySequence(ctx: EmptySequenceContext): string {
        return "";
    }

    // // public visitTerminalString(ctx: TerminalStringContext): string {
    // //     var result: string = "";

    // //     const hasFqs = ctx.FIRST_QUOTE_SYMBOL().length;
    // //     const hasSqs = ctx.SECOND_QUOTE_SYMBOL().length;

    // //     if (hasFqs > 0) {
    // //         for (var child of ctx.children) {
    // //             result += child.getText();
    // //         }
    // //     }
    // //     else if (hasSqs > 0) {
    // //         for (var child of ctx.children) {
    // //             result += child.getText();
    // //         }
    // //     }

    // //     return result;
    // // }

    // // public visitSpecialSequence(ctx: SpecialSequenceContext): string {
    // //     var result: string = "";

    // //     const hasSss = ctx.SPECIAL_SEQUENCE_SYMBOL().length;

    // //     if (hasSss > 0) {
    // //         //result += ctx.SPECIAL_SEQUENCE_SYMBOL()[0];
    // //         var first: boolean = true;

    // //         for (var child of ctx.children) {
    // //             if (!first) {
    // //                 result += " ";
    // //             }

    // //             result += child.getText();
    // //             first = false;
    // //         }

    // //         //result += ctx.SPECIAL_SEQUENCE_SYMBOL()[1];
    // //     }

    // //     return result;
    // // }

    // public visitComment(ctx: CommentContext): string {
    //     var result: string = "";

    //     result += ctx.START_COMMENT_SYMBOL().symbol.text;

    //     for (var cs of ctx.commentSymbol()) {
    //         result += this.visit(cs);
    //     }
        
    //     result += ctx.END_COMMENT_SYMBOL().symbol.text;
        
    //     return result;
    // }

    // public visitCommentSymbol(ctx: CommentSymbolContext): string {
    //     var result: string = "";

    //     const cmt = ctx.comment();
    //     const cs = ctx.COMMENTLESS_SYMBOL();
    //     // const ts = ctx.terminalString();
    //     // const ss = ctx.specialSequence();
        
    //     if (cmt) {
    //         result += this.visit(cmt);
    //     }
    //     else if (cs) {
    //         result += cs.symbol.text
    //     }
    //     // else if (ts) {
    //     //     result += this.visit(ts);
    //     // }
    //     // else if (ss) {
    //     //     result += this.visit(ss);
    //     // }
    //     // else { 
    //     //     for (var chr of ctx.CHARACTER()) { 
    //     //         result += chr.text;
    //     //     }
    //     // }
        
    //     // var first: boolean = true;

    //     // for (var child of ctx.children) {
    //     //     if (!first) {
    //     //         result += " ";
    //     //     }

    //     //     result += child.text;
    //     //     first = false;
    //     // }

    //     return result;
    // }

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