// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_2.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SyntaxContext } from "./EBNFParser81_2.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EBNFParser81_2`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class EBNFParser81_2Visitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `EBNFParser81_2.syntax`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntax?: (ctx: SyntaxContext) => Result;
}

