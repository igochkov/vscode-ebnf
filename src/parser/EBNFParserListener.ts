// Generated from ebnf/EBNFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `EBNFParser`.
 */
export interface EBNFParserListener extends ParseTreeListener {
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
}

