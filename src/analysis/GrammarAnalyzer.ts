import { Token } from 'antlr4ng';
import { ASTListener, RuleInfo } from '../listeners/ASTListener';

/** Diagnostic codes emitted by the semantic analyzer (stable identifiers). */
export const DiagnosticCode = {
    UndefinedRule: "ebnf.undefinedRule",
    DuplicateDefinition: "ebnf.duplicateDefinition",
    UnusedRule: "ebnf.unusedRule"
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
 *   is treated as the grammar's start symbol and is never flagged (ISO §3.5).
 */
export function analyze(listener: ASTListener): AnalysisFinding[] {
    const findings: AnalysisFinding[] = [];
    const rules = listener.rules.filter(rule => rule.name.length > 0);

    const definedNames = new Set(rules.map(rule => rule.name));
    const usedNames = new Set(
        listener.usages
            .map(usage => usage.text)
            .filter((text): text is string => text !== undefined && text.length > 0));

    // G1 — undefined rules.
    for (const usage of listener.usages) {
        const name = usage.text;
        if (name && !definedNames.has(name)) {
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
        countByName.set(rule.name, (countByName.get(rule.name) ?? 0) + 1);
    }
    for (const rule of rules) {
        const count = countByName.get(rule.name) ?? 0;
        if (count > 1) {
            findings.push({
                code: DiagnosticCode.DuplicateDefinition,
                message: `Rule "${rule.name}" is defined ${count} times.`,
                severity: "information",
                ...rangeOfToken(rule.nameToken)
            });
        }
    }

    // G3 — unused rules (the first-defined rule is the start symbol).
    const startSymbol: RuleInfo | undefined = rules[0];
    for (const rule of rules) {
        if (startSymbol && rule.name === startSymbol.name) {
            continue;
        }
        if (!usedNames.has(rule.name)) {
            findings.push({
                code: DiagnosticCode.UnusedRule,
                message: `Rule "${rule.name}" is defined but never used.`,
                severity: "information",
                ...rangeOfToken(rule.nameToken)
            });
        }
    }

    return findings;
}
