import * as vscode from "vscode";
import { EBNFLexer } from "../parser/EBNFLexer";
import { CharStream, CommonTokenStream, ParseTreeListener } from "antlr4ng";
import { EBNFParser, SyntaxContext } from "../parser/EBNFParser";
import { FormattingVisitor } from "../visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "./EBNFFormattingOptions";
import { ParserContext } from "../ParserContext";
import { ASTListener, RuleInfo } from "../listeners/ASTListener";

export class EBNFFormattingProvider implements
    vscode.DocumentFormattingEditProvider,
    vscode.DocumentRangeFormattingEditProvider,
    vscode.OnTypeFormattingEditProvider {

    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, _token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        if (this.hasErrors(document)) {
            vscode.window.showInformationMessage("Fix all syntax errors before formatting the document.");
            return [];
        }

        const content: string = document.getText();
        const { syntax } = this.parse(content);
        const formattedText = new FormattingVisitor(this.formattingOptions(options)).visit(syntax) ?? "";

        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(content.length));

        return [vscode.TextEdit.replace(fullRange, formattedText)];
    }

    // G18 — format only the syntax-rules overlapping the selection.
    provideDocumentRangeFormattingEdits(document: vscode.TextDocument, range: vscode.Range, options: vscode.FormattingOptions, _token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        if (this.hasErrors(document)) {
            return [];
        }

        const selectionStart = document.offsetAt(range.start);
        const selectionEnd = document.offsetAt(range.end);

        return this.formatRules(document, options, rule => {
            const ruleStart = rule.startToken.start;
            const ruleEnd = rule.stopToken.stop + 1;
            return ruleEnd > selectionStart && ruleStart < selectionEnd;
        });
    }

    // G19 — reformat the rule just completed when a terminator (or newline) is typed.
    provideOnTypeFormattingEdits(document: vscode.TextDocument, position: vscode.Position, _ch: string, options: vscode.FormattingOptions, _token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        if (this.hasErrors(document)) {
            return [];
        }

        const offset = document.offsetAt(position);

        return this.formatRules(document, options, rule => {
            const ruleStart = rule.startToken.start;
            const ruleEnd = rule.stopToken.stop + 1;
            return ruleStart <= offset && offset <= ruleEnd;
        });
    }

    /** Formats each syntax-rule matching the predicate and returns replacement edits. */
    private formatRules(document: vscode.TextDocument, options: vscode.FormattingOptions, predicate: (rule: RuleInfo) => boolean): vscode.TextEdit[] {
        const { listener } = this.parse(document.getText());
        const visitor = new FormattingVisitor(this.formattingOptions(options));

        const edits: vscode.TextEdit[] = [];
        for (const rule of listener.rules) {
            if (!predicate(rule)) {
                continue;
            }

            const formatted = visitor.visit(rule.ctx) ?? "";
            const ruleRange = new vscode.Range(
                document.positionAt(rule.startToken.start),
                document.positionAt(rule.stopToken.stop + 1));
            edits.push(vscode.TextEdit.replace(ruleRange, formatted));
        }

        return edits;
    }

    private parse(content: string): { syntax: SyntaxContext; listener: ASTListener } {
        const inputStream = CharStream.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);

        const listener = new ASTListener();
        parser.removeParseListeners();
        parser.addParseListener(listener as unknown as ParseTreeListener);

        const syntax = parser.syntax();
        return { syntax, listener };
    }

    private hasErrors(document: vscode.TextDocument): boolean {
        return vscode.languages.getDiagnostics(document.uri)
            .some(d => d.severity === vscode.DiagnosticSeverity.Error);
    }

    private formattingOptions(vsOptions: vscode.FormattingOptions): EBNFFormattingOptions {
        const settings = vscode.workspace.getConfiguration(ParserContext.ebnfName);

        const options = new EBNFFormattingOptions();
        options.enable = settings.get<boolean>("format.enable", true);
        options.tabSize = vsOptions.tabSize;
        options.insertSpaces = vsOptions.insertSpaces;
        options.definingSymbolOnNewLine = settings.get<boolean>("format.definingSymbolOnNewLine", true);
        options.indentDefiningSymbol = settings.get<boolean>("format.indentDefiningSymbol", true);
        options.terminatorSymbolOnNewLine = settings.get<boolean>("format.terminatorSymbolOnNewLine", false);
        options.definitionSeparatorSymbolOnNewLine = settings.get<boolean>("format.definitionSeparatorSymbolOnNewLine", true);
        options.insertSpaceBeforeConcatenateSymbol = settings.get<boolean>("format.insertSpaceBeforeConcatenateSymbol", false);
        options.insertSpaceAtSequenceSymbols = settings.get<boolean>("format.insertSpaceAtSequenceSymbols", true);
        options.defaultDefinitionSeparatorSymbol = settings.get<string>("format.defaultDefinitionSeparatorSymbol", "|");
        options.defaultOptionSymbols = settings.get<string>("format.defaultOptionSymbols", "[ ]");
        options.defaultRepeatSymbols = settings.get<string>("format.defaultRepeatSymbols", "{ }");
        options.defaultTerminatorSymbol = settings.get<string>("format.defaultTerminatorSymbol", ";");

        return options;
    }
}
