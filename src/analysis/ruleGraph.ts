import { ParseTree, TerminalNode } from 'antlr4ng';
import { EBNFParser, SyntaxRuleContext } from '../parser/EBNFParser';

/**
 * Structural helpers over a parsed syntax-rule, used by the semantic analyzer (G4/G5/G6).
 * Pure and free of any VS Code dependency so they can be unit-tested against a walked tree.
 */

/** Invoke `cb` with the token type of every terminal under `node`, in document order. */
function forEachTerminalType(node: ParseTree | null, cb: (tokenType: number) => void): void {
    if (!node) {
        return;
    }
    if (node instanceof TerminalNode) {
        cb(node.symbol.type);
        return;
    }
    const children = (node as { children?: ParseTree[] }).children;
    if (children) {
        for (const child of children) {
            forEachTerminalType(child, cb);
        }
    }
}

/**
 * G4 — a rule is an "intentional primitive" when its definition is given entirely by
 * special-sequence(s) (e.g. `character = ? any ?;`) and references no other rule. Such a rule
 * is a leaf terminal defined outside the formalism, so it should not be treated like a normal
 * rule for diagnostics such as unused-rule.
 */
export function isSpecialSequencePrimitive(ctx: SyntaxRuleContext): boolean {
    const definitions = ctx.definitionsList();
    if (!definitions) {
        return false;
    }

    let hasSpecialSequence = false;
    let hasMetaIdentifier = false;
    forEachTerminalType(definitions, tokenType => {
        if (tokenType === EBNFParser.SPECIAL_SEQUENCE) {
            hasSpecialSequence = true;
        }
        else if (tokenType === EBNFParser.META_IDENTIFIER) {
            hasMetaIdentifier = true;
        }
    });

    return hasSpecialSequence && !hasMetaIdentifier;
}
