// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SyntaxContext } from "./EBNFParser.js";
import { SyntaxRuleContext } from "./EBNFParser.js";
import { DefinitionsListContext } from "./EBNFParser.js";
import { SingleDefinitionContext } from "./EBNFParser.js";
import { TermContext } from "./EBNFParser.js";
import { ExceptionRuleContext } from "./EBNFParser.js";
import { FactorContext } from "./EBNFParser.js";
import { PrimaryContext } from "./EBNFParser.js";
import { EmptyContext } from "./EBNFParser.js";
import { OptionalSequenceContext } from "./EBNFParser.js";
import { RepeatedSequenceContext } from "./EBNFParser.js";
import { GroupedSequenceContext } from "./EBNFParser.js";
import { TerminalStringContext } from "./EBNFParser.js";
import { SpecialSequenceContext } from "./EBNFParser.js";
import { CommentContext } from "./EBNFParser.js";
import { Comment_symbolContext } from "./EBNFParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EBNFParser`.
 */
export class EBNFParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `EBNFParser.syntax`.
     * @param ctx the parse tree
     */
    enterSyntax?: (ctx: SyntaxContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntax`.
     * @param ctx the parse tree
     */
    exitSyntax?: (ctx: SyntaxContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntaxRule`.
     * @param ctx the parse tree
     */
    enterSyntaxRule?: (ctx: SyntaxRuleContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntaxRule`.
     * @param ctx the parse tree
     */
    exitSyntaxRule?: (ctx: SyntaxRuleContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.definitionsList`.
     * @param ctx the parse tree
     */
    enterDefinitionsList?: (ctx: DefinitionsListContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.definitionsList`.
     * @param ctx the parse tree
     */
    exitDefinitionsList?: (ctx: DefinitionsListContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.singleDefinition`.
     * @param ctx the parse tree
     */
    enterSingleDefinition?: (ctx: SingleDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.singleDefinition`.
     * @param ctx the parse tree
     */
    exitSingleDefinition?: (ctx: SingleDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.term`.
     * @param ctx the parse tree
     */
    enterTerm?: (ctx: TermContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.term`.
     * @param ctx the parse tree
     */
    exitTerm?: (ctx: TermContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.exceptionRule`.
     * @param ctx the parse tree
     */
    enterExceptionRule?: (ctx: ExceptionRuleContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.exceptionRule`.
     * @param ctx the parse tree
     */
    exitExceptionRule?: (ctx: ExceptionRuleContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.factor`.
     * @param ctx the parse tree
     */
    enterFactor?: (ctx: FactorContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.factor`.
     * @param ctx the parse tree
     */
    exitFactor?: (ctx: FactorContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.empty`.
     * @param ctx the parse tree
     */
    enterEmpty?: (ctx: EmptyContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.empty`.
     * @param ctx the parse tree
     */
    exitEmpty?: (ctx: EmptyContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.optionalSequence`.
     * @param ctx the parse tree
     */
    enterOptionalSequence?: (ctx: OptionalSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.optionalSequence`.
     * @param ctx the parse tree
     */
    exitOptionalSequence?: (ctx: OptionalSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.repeatedSequence`.
     * @param ctx the parse tree
     */
    enterRepeatedSequence?: (ctx: RepeatedSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.repeatedSequence`.
     * @param ctx the parse tree
     */
    exitRepeatedSequence?: (ctx: RepeatedSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.groupedSequence`.
     * @param ctx the parse tree
     */
    enterGroupedSequence?: (ctx: GroupedSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.groupedSequence`.
     * @param ctx the parse tree
     */
    exitGroupedSequence?: (ctx: GroupedSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.terminalString`.
     * @param ctx the parse tree
     */
    enterTerminalString?: (ctx: TerminalStringContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.terminalString`.
     * @param ctx the parse tree
     */
    exitTerminalString?: (ctx: TerminalStringContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.specialSequence`.
     * @param ctx the parse tree
     */
    enterSpecialSequence?: (ctx: SpecialSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.specialSequence`.
     * @param ctx the parse tree
     */
    exitSpecialSequence?: (ctx: SpecialSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.comment_symbol`.
     * @param ctx the parse tree
     */
    enterComment_symbol?: (ctx: Comment_symbolContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.comment_symbol`.
     * @param ctx the parse tree
     */
    exitComment_symbol?: (ctx: Comment_symbolContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

