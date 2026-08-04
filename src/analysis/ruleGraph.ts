import { ParseTree, TerminalNode, Token } from 'antlr4ng';
import { EBNFParser, SyntaxRuleContext, SyntacticExceptionContext, DefinitionsListContext, SyntacticPrimaryContext } from '../parser/EBNFParser';

/**
 * Structural helpers over a parsed syntax-rule, used by the semantic analyzer (G4/G5/G6).
 * Pure and free of any VS Code dependency so they can be unit-tested against a walked tree.
 */

/** Invoke `cb` with every terminal node under `node`, in document order. */
function forEachTerminal(node: ParseTree | null, cb: (terminal: TerminalNode) => void): void {
    if (!node) {
        return;
    }
    if (node instanceof TerminalNode) {
        cb(node);
        return;
    }
    const children = (node as { children?: ParseTree[] }).children;
    if (children) {
        for (const child of children) {
            forEachTerminal(child, cb);
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
    forEachTerminal(definitions, terminal => {
        if (terminal.symbol.type === EBNFParser.SPECIAL_SEQUENCE) {
            hasSpecialSequence = true;
        }
        else if (terminal.symbol.type === EBNFParser.META_IDENTIFIER) {
            hasMetaIdentifier = true;
        }
    });

    return hasSpecialSequence && !hasMetaIdentifier;
}

/** Every meta-identifier (rule reference) token on the right-hand side of the rule. */
export function referenceTokens(ctx: SyntaxRuleContext): Token[] {
    const tokens: Token[] = [];
    forEachTerminal(ctx.definitionsList(), terminal => {
        if (terminal.symbol.type === EBNFParser.META_IDENTIFIER) {
            tokens.push(terminal.symbol);
        }
    });
    return tokens;
}

/** Meta-identifier (rule reference) tokens that appear *inside a syntactic-exception*. */
export function exceptionReferenceTokens(ctx: SyntaxRuleContext): Token[] {
    const tokens: Token[] = [];
    const findExceptions = (node: ParseTree | null): void => {
        if (!node) {
            return;
        }
        if (node instanceof SyntacticExceptionContext) {
            forEachTerminal(node, terminal => {
                if (terminal.symbol.type === EBNFParser.META_IDENTIFIER) {
                    tokens.push(terminal.symbol);
                }
            });
            return;
        }
        const children = (node as { children?: ParseTree[] }).children;
        if (children) {
            for (const child of children) {
                findExceptions(child);
            }
        }
    };
    findExceptions(ctx);
    return tokens;
}

/**
 * G5 — the meta-identifiers that can appear *leftmost* in the rule (the first symbol of some
 * alternative). Descends into optional/repeated/grouped sequences that start an alternative.
 * Used to detect left recursion (a rule that is leftmost-reachable from itself). Nullable
 * prefixes are not propagated, so this under-approximates — it never reports false recursion.
 */
export function leftmostReferences(ctx: SyntaxRuleContext): string[] {
    const out: string[] = [];
    collectLeftmost(ctx.definitionsList(), out);
    return out;
}

function collectLeftmost(definitions: DefinitionsListContext | null, out: string[]): void {
    if (!definitions) {
        return;
    }
    for (const single of definitions.singleDefinition()) {
        const terms = single.syntacticTerm();
        if (terms.length === 0) {
            continue;
        }
        collectLeftmostFromPrimary(terms[0].syntacticFactor()?.syntacticPrimary() ?? null, out);
    }
}

function collectLeftmostFromPrimary(primary: SyntacticPrimaryContext | null, out: string[]): void {
    if (!primary) {
        return;
    }
    const metaIdentifier = primary.META_IDENTIFIER();
    if (metaIdentifier) {
        out.push(metaIdentifier.symbol.text ?? "");
        return;
    }
    const inner = primary.optionalSequence()?.definitionsList()
        ?? primary.repeatedSequence()?.definitionsList()
        ?? primary.groupedSequence()?.definitionsList()
        ?? null;
    collectLeftmost(inner, out);
}

/**
 * Returns the nodes that lie *on* a cycle (can return to themselves). With a leftmost-reference
 * graph this is exactly the set of left-recursive rules (G5).
 */
export function nodesOnCycle(graph: Map<string, Set<string>>): Set<string> {
    const onCycle = new Set<string>();

    for (const start of graph.keys()) {
        const seen = new Set<string>();
        const stack = [...(graph.get(start) ?? [])];
        while (stack.length > 0) {
            const node = stack.pop() as string;
            if (node === start) {
                onCycle.add(start);
                break;
            }
            if (seen.has(node)) {
                continue;
            }
            seen.add(node);
            for (const next of graph.get(node) ?? []) {
                stack.push(next);
            }
        }
    }

    return onCycle;
}

/**
 * Given a rule-reference graph (rule name → names it references), returns the set of nodes
 * from which a cycle is reachable — i.e. the recursively-defined (non-regular) rules. Used by
 * G6 (an exception must be reducible to a meta-identifier-free factor, ISO §4.7, which a
 * recursive rule is not).
 */
export function nodesReachingCycle(graph: Map<string, Set<string>>): Set<string> {
    const reaches = new Set<string>();
    const state = new Map<string, number>(); // 0/undefined = unvisited, 1 = in-progress, 2 = done

    const dfs = (node: string): boolean => {
        const s = state.get(node) ?? 0;
        if (s === 1) {
            return true; // back edge → this node is on a cycle
        }
        if (s === 2) {
            return reaches.has(node);
        }
        state.set(node, 1);
        let reachesCycle = false;
        for (const next of graph.get(node) ?? []) {
            if (dfs(next)) {
                reachesCycle = true;
            }
        }
        state.set(node, 2);
        if (reachesCycle) {
            reaches.add(node);
        }
        return reachesCycle;
    };

    for (const node of graph.keys()) {
        dfs(node);
    }
    return reaches;
}
