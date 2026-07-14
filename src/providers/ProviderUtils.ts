import * as vscode from "vscode";
import { Token } from "antlr4ng";
import { RuleInfo } from "../listeners/ASTListener";

/** Range covering a single token (its line/column to end of its text). */
export function tokenRange(token: Token): vscode.Range {
    const length = (token.text ?? "").length;
    return new vscode.Range(
        token.line - 1,
        token.column,
        token.line - 1,
        token.column + length);
}

/** Range covering a whole syntax-rule, from its first token to the end of its last token. */
export function ruleRange(rule: RuleInfo): vscode.Range {
    const stopLength = (rule.stopToken.text ?? "").length;
    return new vscode.Range(
        rule.startToken.line - 1,
        rule.startToken.column,
        rule.stopToken.line - 1,
        rule.stopToken.column + stopLength);
}
