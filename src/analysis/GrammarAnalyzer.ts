import { Token } from 'antlr4ng';
import { ASTListener, RuleInfo } from '../listeners/ASTListener';
import { normalizeMetaIdentifier } from './metaIdentifier';
import { isSpecialSequencePrimitive, referenceTokens, exceptionReferenceTokens, nodesReachingCycle } from './ruleGraph';

/** Diagnostic codes emitted by the semantic analyzer (stable identifiers). */
export const DiagnosticCode = {
    UndefinedRule: "ebnf.undefinedRule",
    DuplicateDefinition: "ebnf.duplicateDefinition",
    UnusedRule: "ebnf.unusedRule",
    NonRegularException: "ebnf.nonRegularException"
} as const;

export type AnalysisSeverity = "warning" | "information" | "hint";

/** A vscode-independent finding. Positions are 0-based (line and column). */
export interface AnalysisFinding {
    code: string;
    message: string;
    severity: AnalysisSeverity;
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}

function rangeOfToken(token: Token): Pick<AnalysisFinding, "startLine" | "startColumn" | "endLine" | "endColumn"> {
    const length = (token.text ?? "").length;
    return {
        startLine: token.line - 1,
        startColumn: token.column,
        endLine: token.line - 1,
        endColumn: token.column + length
    };
}

/**
 * Computes semantic diagnostics from a parsed grammar. Pure and free of any VS Code
 * dependency so it can be unit-tested directly against a walked parse tree.
 *
 * - G1 undefined-rule: a meta-identifier used on a right-hand side but never defined.
 * - G2 duplicate-definition: a rule name defined by more than one syntax-rule
 *   (legal per ISO/IEC 14977 §5.1 note 2, surfaced as information, not an error).
 * - G3 unused-rule: a defined rule never referenced anywhere. The first-defined rule
 *   is treated as the grammar's start symbol and is never flagged (ISO §3.5). Rules that are
 *   intentional primitives (defined only via special-sequence, G4) are also never flagged.
 */
export function analyze(listener: ASTListener): AnalysisFinding[] {
    const findings: AnalysisFinding[] = [];
    const rules = listener.rules.filter(rule => rule.name.length > 0);

    // Compare on the normalized name so whitespace variants of a space-separated
    // meta-identifier ("syntax  rule" vs "syntax rule") resolve to the same rule (SC1).
    const definedNames = new Set(rules.map(rule => normalizeMetaIdentifier(rule.name)));
    const usedNames = new Set(
        listener.usages
            .map(usage => normalizeMetaIdentifier(usage.text))
            .filter(name => name.length > 0));

    // G1 — undefined rules.
    for (const usage of listener.usages) {
        const name = normalizeMetaIdentifier(usage.text);
        if (name.length > 0 && !definedNames.has(name)) {
            findings.push({
                code: DiagnosticCode.UndefinedRule,
                message: `Rule "${name}" is used but never defined.`,
                severity: "warning",
                ...rangeOfToken(usage)
            });
        }
    }

    // G2 — duplicate definitions.
    const countByName = new Map<string, number>();
    for (const rule of rules) {
        const name = normalizeMetaIdentifier(rule.name);
        countByName.set(name, (countByName.get(name) ?? 0) + 1);
    }
    for (const rule of rules) {
        const name = normalizeMetaIdentifier(rule.name);
        const count = countByName.get(name) ?? 0;
        if (count > 1) {
            findings.push({
                code: DiagnosticCode.DuplicateDefinition,
                message: `Rule "${name}" is defined ${count} times.`,
                severity: "information",
                ...rangeOfToken(rule.nameToken)
            });
        }
    }

    // G6 — an exception must be reducible to a meta-identifier-free (regular) factor (ISO §4.7).
    // A meta-identifier used in an exception is fine if its rule is non-recursive (finite/regular,
    // like ISO §8.1's "first quote symbol"); it violates §4.7 if the referenced rule is recursive.
    const graph = new Map<string, Set<string>>();
    for (const rule of rules) {
        const from = normalizeMetaIdentifier(rule.name);
        const targets = graph.get(from) ?? new Set<string>();
        for (const ref of referenceTokens(rule.ctx)) {
            targets.add(normalizeMetaIdentifier(ref.text));
        }
        graph.set(from, targets);
    }
    const recursiveNames = nodesReachingCycle(graph);
    for (const rule of rules) {
        for (const ref of exceptionReferenceTokens(rule.ctx)) {
            const name = normalizeMetaIdentifier(ref.text);
            if (definedNames.has(name) && recursiveNames.has(name)) {
                findings.push({
                    code: DiagnosticCode.NonRegularException,
                    message: `Exception references "${name}", which is recursively defined and cannot be reduced to a meta-identifier-free factor (ISO/IEC 14977 §4.7).`,
                    severity: "warning",
                    ...rangeOfToken(ref)
                });
            }
        }
    }

    // G3 — unused rules (the first-defined rule is the start symbol).
    // G4 — intentional primitives (special-sequence-only rules) are exempt.
    const primitiveNames = new Set(
        rules.filter(rule => isSpecialSequencePrimitive(rule.ctx)).map(rule => normalizeMetaIdentifier(rule.name)));
    const startSymbol: RuleInfo | undefined = rules[0];
    const startName = startSymbol ? normalizeMetaIdentifier(startSymbol.name) : undefined;
    for (const rule of rules) {
        const name = normalizeMetaIdentifier(rule.name);
        if (name === startName || primitiveNames.has(name)) {
            continue;
        }
        if (!usedNames.has(name)) {
            findings.push({
                code: DiagnosticCode.UnusedRule,
                message: `Rule "${name}" is defined but never used.`,
                severity: "information",
                ...rangeOfToken(rule.nameToken)
            });
        }
    }

    return findings;
}
