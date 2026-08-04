import * as vscode from "vscode";
import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";

export class EBNFErrorListener implements ANTLRErrorListener {
    document: vscode.TextDocument;
    diagnostics: vscode.Diagnostic[];
    private readonly reportAmbiguities: boolean;

    /**
     * @param reportAmbiguities G20: when true, ANTLR ambiguity reports are surfaced as
     *   Information diagnostics. Off by default because these reflect where *this parser*
     *   found more than one parse (a meta-grammar signal), which can be noisy/confusing.
     */
    constructor(document: vscode.TextDocument, reportAmbiguities: boolean = false) {
        this.document = document;
        this.diagnostics = [];
        this.reportAmbiguities = reportAmbiguities;
    }

    syntaxError<S extends Token, T extends ATNSimulator>(
        recognizer: Recognizer<T>, 
        offendingSymbol: S | null, 
        line: number, 
        charPositionInLine: number, 
        message: string, 
        exception: RecognitionException | null): void {

        let startLine: number = line - 1;
        let startIndex: number = charPositionInLine;
        let endLine: number = startLine;
        let endIndex: number = charPositionInLine + 1;

        if (offendingSymbol && offendingSymbol.text) {
            const lines = offendingSymbol.text.split(/\n/);

            if (lines.length === 1) {
                endIndex = startIndex + offendingSymbol.text.trim().length;
            }
            else 
            {
                endLine = startLine + lines.length - 1;
                endIndex = lines[lines.length - 1].trim().length;
            }
        }

        let range = new vscode.Range(startLine, startIndex, endLine, endIndex);
        let diagnostic = new vscode.Diagnostic(range, message, vscode.DiagnosticSeverity.Error);
        diagnostic.code = "SyntaxError";

	    this.diagnostics.push(diagnostic);
    }

    // G20 — surface parser ambiguities (opt-in). startIndex/stopIndex are token indices into
    // the parser's token stream; we map them to a document range via the input token stream.
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
        if (!this.reportAmbiguities) {
            return;
        }

        const tokens = recognizer.inputStream;
        const start = tokens.get(startIndex);
        const stop = tokens.get(stopIndex);
        if (!start || !stop) {
            return;
        }

        const range = new vscode.Range(
            start.line - 1,
            start.column,
            stop.line - 1,
            stop.column + (stop.text?.length ?? 1));
        const diagnostic = new vscode.Diagnostic(
            range,
            "This input can be parsed in more than one way (grammar ambiguity).",
            vscode.DiagnosticSeverity.Information);
        diagnostic.code = "ebnf.ambiguity";

        this.diagnostics.push(diagnostic);
    }

    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
        // //vscode.DiagnosticSeverity.Warning
        // let range = new vscode.Range(recognizer.context.start.line, recognizer.context.start.column, recognizer.context.stop.line, recognizer.context.stop.column);
        // let diagnostic = new vscode.Diagnostic(range, "Parser is about to use the full context information to make an LL decision.", vscode.DiagnosticSeverity.Warning);
        // diagnostic.code = "SyntaxWarning";

	    // this.diagnostics.push(diagnostic);
    }

    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
        //vscode.DiagnosticSeverity.Warning
        // throw new Error("Method not implemented.");
    }  
}