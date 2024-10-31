// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EBNFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class EBNFParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `EBNFParser.syntax`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntax?: (ctx: SyntaxContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntaxRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntaxRule?: (ctx: SyntaxRuleContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.definitionsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinitionsList?: (ctx: DefinitionsListContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.singleDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleDefinition?: (ctx: SingleDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerm?: (ctx: TermContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.exceptionRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptionRule?: (ctx: ExceptionRuleContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.factor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactor?: (ctx: FactorContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.empty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmpty?: (ctx: EmptyContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.optionalSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalSequence?: (ctx: OptionalSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.repeatedSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatedSequence?: (ctx: RepeatedSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.groupedSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedSequence?: (ctx: GroupedSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.terminalString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerminalString?: (ctx: TerminalStringContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.specialSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialSequence?: (ctx: SpecialSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.comment_symbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_symbol?: (ctx: Comment_symbolContext) => Result;
}

