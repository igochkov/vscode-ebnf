// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SyntaxContext } from "./EBNFParser.js";
import { SyntaxRuleContext } from "./EBNFParser.js";
import { DefinitionsListContext } from "./EBNFParser.js";
import { SingleDefinitionContext } from "./EBNFParser.js";
import { SyntacticTermContext } from "./EBNFParser.js";
import { SyntacticExceptionContext } from "./EBNFParser.js";
import { SyntacticExceptionFactorContext } from "./EBNFParser.js";
import { SyntacticExceptionPrimaryContext } from "./EBNFParser.js";
import { SyntacticFactorContext } from "./EBNFParser.js";
import { SyntacticPrimaryContext } from "./EBNFParser.js";
import { OptionalSequenceContext } from "./EBNFParser.js";
import { RepeatedSequenceContext } from "./EBNFParser.js";
import { GroupedSequenceContext } from "./EBNFParser.js";
import { EmptySequenceContext } from "./EBNFParser.js";


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
     * Visit a parse tree produced by `EBNFParser.syntacticTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticTerm?: (ctx: SyntacticTermContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntacticException`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticException?: (ctx: SyntacticExceptionContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntacticExceptionFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntacticFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticFactor?: (ctx: SyntacticFactorContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser.syntacticPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => Result;
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
     * Visit a parse tree produced by `EBNFParser.emptySequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptySequence?: (ctx: EmptySequenceContext) => Result;
}

