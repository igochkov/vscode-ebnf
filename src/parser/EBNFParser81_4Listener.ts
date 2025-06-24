// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_4.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `EBNFParser81_4`.
 */
export class EBNFParser81_4Listener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntax`.
     * @param ctx the parse tree
     */
    enterSyntax?: (ctx: SyntaxContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntax`.
     * @param ctx the parse tree
     */
    exitSyntax?: (ctx: SyntaxContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntaxRule`.
     * @param ctx the parse tree
     */
    enterSyntaxRule?: (ctx: SyntaxRuleContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntaxRule`.
     * @param ctx the parse tree
     */
    exitSyntaxRule?: (ctx: SyntaxRuleContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.definitionsList`.
     * @param ctx the parse tree
     */
    enterDefinitionsList?: (ctx: DefinitionsListContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.definitionsList`.
     * @param ctx the parse tree
     */
    exitDefinitionsList?: (ctx: DefinitionsListContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.singleDefinition`.
     * @param ctx the parse tree
     */
    enterSingleDefinition?: (ctx: SingleDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.singleDefinition`.
     * @param ctx the parse tree
     */
    exitSingleDefinition?: (ctx: SingleDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticTerm`.
     * @param ctx the parse tree
     */
    enterSyntacticTerm?: (ctx: SyntacticTermContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticTerm`.
     * @param ctx the parse tree
     */
    exitSyntacticTerm?: (ctx: SyntacticTermContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticException`.
     * @param ctx the parse tree
     */
    enterSyntacticException?: (ctx: SyntacticExceptionContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticException`.
     * @param ctx the parse tree
     */
    exitSyntacticException?: (ctx: SyntacticExceptionContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticExceptionFactor`.
     * @param ctx the parse tree
     */
    enterSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticExceptionFactor`.
     * @param ctx the parse tree
     */
    exitSyntacticExceptionFactor?: (ctx: SyntacticExceptionFactorContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     */
    enterSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticExceptionPrimary`.
     * @param ctx the parse tree
     */
    exitSyntacticExceptionPrimary?: (ctx: SyntacticExceptionPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticFactor`.
     * @param ctx the parse tree
     */
    enterSyntacticFactor?: (ctx: SyntacticFactorContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticFactor`.
     * @param ctx the parse tree
     */
    exitSyntacticFactor?: (ctx: SyntacticFactorContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.syntacticPrimary`.
     * @param ctx the parse tree
     */
    enterSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.syntacticPrimary`.
     * @param ctx the parse tree
     */
    exitSyntacticPrimary?: (ctx: SyntacticPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.optionalSequence`.
     * @param ctx the parse tree
     */
    enterOptionalSequence?: (ctx: OptionalSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.optionalSequence`.
     * @param ctx the parse tree
     */
    exitOptionalSequence?: (ctx: OptionalSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.repeatedSequence`.
     * @param ctx the parse tree
     */
    enterRepeatedSequence?: (ctx: RepeatedSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.repeatedSequence`.
     * @param ctx the parse tree
     */
    exitRepeatedSequence?: (ctx: RepeatedSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.groupedSequence`.
     * @param ctx the parse tree
     */
    enterGroupedSequence?: (ctx: GroupedSequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.groupedSequence`.
     * @param ctx the parse tree
     */
    exitGroupedSequence?: (ctx: GroupedSequenceContext) => void;
    /**
     * Enter a parse tree produced by `EBNFParser81_4.emptySequence`.
     * @param ctx the parse tree
     */
    enterEmptySequence?: (ctx: EmptySequenceContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_4.emptySequence`.
     * @param ctx the parse tree
     */
    exitEmptySequence?: (ctx: EmptySequenceContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

