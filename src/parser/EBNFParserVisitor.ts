// Generated from grammar/EBNFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SyntaxContext } from "./EBNFParser";
import { SyntaxRuleContext } from "./EBNFParser";
import { DefinitionsListContext } from "./EBNFParser";
import { SingleDefinitionContext } from "./EBNFParser";
import { TermContext } from "./EBNFParser";
import { ExceptionRuleContext } from "./EBNFParser";
import { FactorContext } from "./EBNFParser";
import { PrimaryContext } from "./EBNFParser";
import { EmptyContext } from "./EBNFParser";
import { OptionalSequenceContext } from "./EBNFParser";
import { RepeatedSequenceContext } from "./EBNFParser";
import { GroupedSequenceContext } from "./EBNFParser";
import { TerminalStringContext } from "./EBNFParser";
import { SpecialSequenceContext } from "./EBNFParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EBNFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface EBNFParserVisitor<Result> extends ParseTreeVisitor<Result> {
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
}

