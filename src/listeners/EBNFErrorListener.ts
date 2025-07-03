import * as vscode from "vscode";
import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";

export class EBNFErrorListener implements ANTLRErrorListener {
    document: vscode.TextDocument;
    diagnostics: vscode.Diagnostic[];

    constructor(document: vscode.TextDocument) {
        this.document = document;
        this.diagnostics = [];
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

        if (offendingSymbol.text) {
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

    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
        //vscode.DiagnosticSeverity.Warning
        throw new Error("Method not implemented.");
    }

    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
        //vscode.DiagnosticSeverity.Warning
        throw new Error("Method not implemented.");
    }

    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
        //vscode.DiagnosticSeverity.Warning
        throw new Error("Method not implemented.");
    }  
}