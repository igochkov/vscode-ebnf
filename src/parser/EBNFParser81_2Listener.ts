// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_2.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SyntaxContext } from "./EBNFParser81_2.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EBNFParser81_2`.
 */
export class EBNFParser81_2Listener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `EBNFParser81_2.syntax`.
     * @param ctx the parse tree
     */
    enterSyntax?: (ctx: SyntaxContext) => void;
    /**
     * Exit a parse tree produced by `EBNFParser81_2.syntax`.
     * @param ctx the parse tree
     */
    exitSyntax?: (ctx: SyntaxContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

