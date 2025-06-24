// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_4.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SyntaxContext } from "./EBNFParser81_4.js";
import { SyntaxRuleContext } from "./EBNFParser81_4.js";
import { DefinitionsListContext } from "./EBNFParser81_4.js";
import { SingleDefinitionContext } from "./EBNFParser81_4.js";
import { SyntacticTermContext } from "./EBNFParser81_4.js";
import { SyntacticExceptionContext } from "./EBNFParser81_4.js";
import { SyntacticExceptionFactorContext } from "./EBNFParser81_4.js";
import { SyntacticExceptionPrimaryContext } from "./EBNFParser81_4.js";
import { SyntacticFactorContext } from "./EBNFParser81_4.js";
import { SyntacticPrimaryContext } from "./EBNFParser81_4.js";
import { OptionalSequenceContext } from "./EBNFParser81_4.js";
import { RepeatedSequenceContext } from "./EBNFParser81_4.js";
import { GroupedSequenceContext } from "./EBNFParser81_4.js";
import { EmptySequenceContext } from "./EBNFParser81_4.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EBNFParser81_4`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class EBNFParser81_4Visitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntax`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntax?: (ctx: SyntaxContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntaxRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntaxRule?: (ctx: SyntaxRuleContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.definitionsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinitionsList?: (ctx: DefinitionsListContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.singleDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleDefinition?: (ctx: SingleDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticTerm?: (ctx: SyntacticTermContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticException`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticException?: (ctx: SyntacticExceptionContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticExceptionFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticFactor?: (ctx: SyntacticFactorContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.syntacticPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.optionalSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalSequence?: (ctx: OptionalSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.repeatedSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatedSequence?: (ctx: RepeatedSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.groupedSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedSequence?: (ctx: GroupedSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `EBNFParser81_4.emptySequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptySequence?: (ctx: EmptySequenceContext) => Result;
}

