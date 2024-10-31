import { AbstractParseTreeVisitor } from 'antlr4ng/dist/tree/AbstractParseTreeVisitor';
import { SyntaxContext, SyntaxRuleContext, DefinitionsListContext, SingleDefinitionContext, TermContext, ExceptionRuleContext, FactorContext, PrimaryContext, OptionalSequenceContext, RepeatedSequenceContext, GroupedSequenceContext, TerminalStringContext, SpecialSequenceContext, CommentContext, Comment_symbolContext} from "../parser/EBNFParser";
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

        if (ctx.comment().length > 0) {
            for (var cmt of ctx.comment()) { 
                result += cmt.comment_symbol.toString();
                result += "\n";
            }
        }

        result += ctx.IDENTIFIER().symbol.text;
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
        //var i: number = 0;

        for (var def of ctx.singleDefinition()) {
            if (!first) {
                result += this.options.definitionSeparatorSymbolOnNewLine ? "\n" : " ";
                result += (this.options.definitionSeparatorSymbolOnNewLine && this.options.indentDefiningSymbol) ? this.indent() : "";
                result += this.options.defaultDefinitionSeparatorSymbol; // ctx.DEFINITION_SEPARATOR_SYMBOL()[i].symbol.text;
                result += " ";
                //i += 1;
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

        for (var term of ctx.term()) {
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

    public visitTerm(ctx: TermContext): string {
        var result: string = "";

        result += this.visit(ctx.factor());

        const exceptSymbol = ctx.EXCEPT_SYMBOL();
        if (exceptSymbol) {
            result += " ";
            result += exceptSymbol.symbol.text;
        }

        const exceptionRule = ctx.exceptionRule();
        if (exceptionRule) {
            result += " ";
            result += this.visit(exceptionRule);
        }

        return result;
    }

    public visitExceptionRule(ctx: ExceptionRuleContext): string {
        return this.visit(ctx.factor());
    }

    public visitFactor(ctx: FactorContext): string {
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

        result += this.visit(ctx.primary());

        return result;
    }

    public visitPrimary(ctx: PrimaryContext): string {
        var result: string = "";

        const os = ctx.optionalSequence();
        const rs = ctx.repeatedSequence();
        const ss = ctx.specialSequence();
        const gs = ctx.groupedSequence();
        const identifier = ctx.IDENTIFIER();
        const ts = ctx.terminalString();

        if (os) {
            result += this.visit(os);
        }
        else if (rs) {
            result += this.visit(rs);
        }
        else if (ss) {
            result += this.visit(ss);
        }
        else if (gs) {
            result += this.visit(gs);
        }
        else if (identifier) {
            result += identifier.symbol.text;
        }
        else if (ts) {
            result += this.visit(ts);
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

    public visitTerminalString(ctx: TerminalStringContext): string {
        var result: string = "";

        const hasFqs = ctx.FIRST_QUOTE_SYMBOL().length;
        const hasSqs = ctx.SECOND_QUOTE_SYMBOL().length;

        if (hasFqs > 0) {
            for (var child of ctx.children) {
                result += child.getText();
            }
        }
        else if (hasSqs > 0) {
            for (var child of ctx.children) {
                result += child.getText();
            }
        }

        return result;
    }

    public visitSpecialSequence(ctx: SpecialSequenceContext): string {
        var result: string = "";

        const hasSss = ctx.SPECIAL_SEQUENCE_SYMBOL().length;

        if (hasSss > 0) {
            //result += ctx.SPECIAL_SEQUENCE_SYMBOL()[0];
            var first: boolean = true;

            for (var child of ctx.children) {
                if (!first) {
                    result += " ";
                }

                result += child.getText();
                first = false;
            }

            //result += ctx.SPECIAL_SEQUENCE_SYMBOL()[1];
        }

        return result;
    }

    public visitComment(ctx: CommentContext): string {
        var result: string = "";

        result += ctx.START_COMMENT_SYMBOL().symbol.text;

        for (var cs of ctx.comment_symbol()) {
            result += this.visit(cs);
        }
        
        result += ctx.END_COMMENT_SYMBOL().symbol.text;
        
        return result;
    }

    public visitComment_symbol(ctx: Comment_symbolContext): string {
        var result: string = "";

        const cmt = ctx.comment();
        const ts = ctx.terminalString();
        const ss = ctx.specialSequence();
        
        if (cmt) {
            result += this.visit(cmt);
        }
        else if (ts) {
            result += this.visit(ts);
        }
        else if (ss) {
            result += this.visit(ss);
        }
        // else { 
        //     for (var chr of ctx.CHARACTER()) { 
        //         result += chr.text;
        //     }
        // }

        // var first: boolean = true;

        // for (var child of ctx.children) {
        //     if (!first) {
        //         result += " ";
        //     }

        //     result += child.text;
        //     first = false;
        // }

        return result;
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