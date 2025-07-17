import * as vscode from "vscode";
import { EBNFLexer } from "../parser/EBNFLexer";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { EBNFParser } from "../parser/EBNFParser";
import { FormattingVisitor } from "../visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "./EBNFFormattingOptions";
import { ParserContext } from "../ParserContext";

export class EBNFFormattingProvider implements vscode.DocumentFormattingEditProvider, vscode.DocumentRangeFormattingEditProvider, vscode.OnTypeFormattingEditProvider {
    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
        const content: string = document.getText();
        const formattedText = this.format(content, options, hasDiagnostics);

        var fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(content.length));

        return [vscode.TextEdit.replace(fullRange, formattedText)];
    };

    provideDocumentRangeFormattingEdits(document: vscode.TextDocument, range: vscode.Range, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        let startLine = document.lineAt(range.start.line);
        let endLine = document.lineAt(range.end.line);

        let extendedRange = new vscode.Range(
            startLine.range.start,
            endLine.range.end
        );

        const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
        const content: string = document.getText(extendedRange);
        const formattedText = this.format(content, options, hasDiagnostics);

        return [vscode.TextEdit.replace(extendedRange, formattedText)];
    };

    provideOnTypeFormattingEdits(document: vscode.TextDocument, position: vscode.Position, ch: string, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        let line = document.lineAt(position.line);
        let lineRange = line.range;

        const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
        const content: string = document.getText(lineRange);
        const formattedText = this.format(content, options, hasDiagnostics);

        return [vscode.TextEdit.replace(lineRange, formattedText)];
    }

    private format(content: string, options: vscode.FormattingOptions, hasDiagnostics: boolean): string {
        if (hasDiagnostics) {
            // If there are diagnostics, we don't format the document
            return content;
        }

        const inputStream = CharStream.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        const syntax = parser.syntax();
        var visitor = new FormattingVisitor(this.formattingOptions(options));
        return visitor.visit(syntax);
    }

    private formattingOptions(vsOptions: vscode.FormattingOptions): EBNFFormattingOptions {
        const settings = vscode.workspace.getConfiguration(ParserContext.ebnfName);

        var options = new EBNFFormattingOptions();
        options.enable = settings.get("format.enable");
        options.tabSize = vsOptions.tabSize;
        options.insertSpaces = vsOptions.insertSpaces;
        options.definingSymbolOnNewLine = settings.get("format.definingSymbolOnNewLine");
        options.indentDefiningSymbol = settings.get("format.indentDefiningSymbol");
        options.terminatorSymbolOnNewLine = settings.get("format.terminatorSymbolOnNewLine");
        options.definitionSeparatorSymbolOnNewLine = settings.get("format.definitionSeparatorSymbolOnNewLine");
        options.insertSpaceBeforeConcatenateSymbol = settings.get("format.insertSpaceBeforeConcatenateSymbol");
        options.insertSpaceAtSequenceSymbols = settings.get("format.insertSpaceAtSequenceSymbols");
        options.defaultDefinitionSeparatorSymbol = settings.get("format.defaultDefinitionSeparatorSymbol");
        options.defaultOptionSymbols = settings.get("format.defaultOptionSymbols");
        options.defaultRepeatSymbols = settings.get("format.defaultRepeatSymbols");
        options.defaultTerminatorSymbol = settings.get("format.defaultTerminatorSymbol");

        return options;
    }
}