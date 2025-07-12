// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { CommentContext } from "./EBNFParser.js";
import { CommentSymbolContext } from "./EBNFParser.js";
import { CommentlessSymbolContext } from "./EBNFParser.js";
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
 * This interface defines a complete listener for a parse tree produced by
 * `EBNFParser`.
 */
export class EBNFParserListener implements ParseTreeListener {
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
     * Enter a parse tree produced by `EBNFParser.commentSymbol`.
     * @param ctx the parse tree
     */
    enterCommentSymbol?: (ctx: CommentSymbolContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.commentSymbol`.
     * @param ctx the parse tree
     */
    exitCommentSymbol?: (ctx: CommentSymbolContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.commentlessSymbol`.
     * @param ctx the parse tree
     */
    enterCommentlessSymbol?: (ctx: CommentlessSymbolContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.commentlessSymbol`.
     * @param ctx the parse tree
     */
    exitCommentlessSymbol?: (ctx: CommentlessSymbolContext) => void;
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
     * Enter a parse tree produced by `EBNFParser.syntacticTerm`.
     * @param ctx the parse tree
     */
    enterSyntacticTerm?: (ctx: SyntacticTermContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticTerm`.
     * @param ctx the parse tree
     */
    exitSyntacticTerm?: (ctx: SyntacticTermContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntacticException`.
     * @param ctx the parse tree
     */
    enterSyntacticException?: (ctx: SyntacticExceptionContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticException`.
     * @param ctx the parse tree
     */
    exitSyntacticException?: (ctx: SyntacticExceptionContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntacticExceptionFactor`.
     * @param ctx the parse tree
     */
    enterSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticExceptionFactor`.
     * @param ctx the parse tree
     */
    exitSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     */
    enterSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     */
    exitSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntacticFactor`.
     * @param ctx the parse tree
     */
    enterSyntacticFactor?: (ctx: SyntacticFactorContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticFactor`.
     * @param ctx the parse tree
     */
    exitSyntacticFactor?: (ctx: SyntacticFactorContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser.syntacticPrimary`.
     * @param ctx the parse tree
     */
    enterSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.syntacticPrimary`.
     * @param ctx the parse tree
     */
    exitSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => void;
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
     * Enter a parse tree produced by `EBNFParser.emptySequence`.
     * @param ctx the parse tree
     */
    enterEmptySequence?: (ctx: EmptySequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser.emptySequence`.
     * @param ctx the parse tree
     */
    exitEmptySequence?: (ctx: EmptySequenceContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

