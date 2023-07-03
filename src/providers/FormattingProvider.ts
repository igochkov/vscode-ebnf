import * as vscode from "vscode";
import { EBNFLexer } from "../parser/EBNFLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { EBNFParser } from "../parser/EBNFParser";
import { FormattingVisitor } from "../visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "./EBNFFormattingOptions";

export class EBNFFormattingProvider implements vscode.DocumentFormattingEditProvider, vscode.DocumentRangeFormattingEditProvider, vscode.OnTypeFormattingEditProvider {
    private settings: vscode.WorkspaceConfiguration;

    constructor(settings: vscode.WorkspaceConfiguration) {
        this.settings = settings;
    }

    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        const content: string = document.getText();
        const formattedText = this.format(content, options);

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

        const content: string = document.getText(extendedRange);
        const formattedText = this.format(content, options);

        return [vscode.TextEdit.replace(extendedRange, formattedText)];
    };

    provideOnTypeFormattingEdits(document: vscode.TextDocument, position: vscode.Position, ch: string, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        let line = document.lineAt(position.line);
        let lineRange = line.range;

        const content: string = document.getText(lineRange);
        const formattedText = this.format(content, options);

        return [vscode.TextEdit.replace(lineRange, formattedText)];
    }

    private format(content: string, options: vscode.FormattingOptions): string {
        const inputStream = CharStreams.fromString(content);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        const tree = parser.syntax();
        var visitor = new FormattingVisitor(this.formattingOptions(options));
        return visitor.visit(tree);
    }

    private formattingOptions(vsOptions: vscode.FormattingOptions): EBNFFormattingOptions {
        var options = new EBNFFormattingOptions();
        options.enable = this.settings.get("format.enable");
        options.tabSize = vsOptions.tabSize;
        options.insertSpaces = vsOptions.insertSpaces;
        options.definingSymbolOnNewLine = this.settings.get("format.definingSymbolOnNewLine");
        options.indentDefiningSymbol = this.settings.get("format.indentDefiningSymbol");
        options.terminatorSymbolOnNewLine = this.settings.get("format.terminatorSymbolOnNewLine");
        options.definitionSeparatorSymbolOnNewLine = this.settings.get("format.definitionSeparatorSymbolOnNewLine");
        options.insertSpaceBeforeConcatenateSymbol = this.settings.get("format.insertSpaceBeforeConcatenateSymbol");
        options.insertSpaceAtSequenceSymbols = this.settings.get("format.insertSpaceAtSequenceSymbols");
        options.defaultDefinitionSeparatorSymbol = this.settings.get("format.defaultDefinitionSeparatorSymbol");
        options.defaultOptionSymbols = this.settings.get("format.defaultOptionSymbols");
        options.defaultRepeatSymbols = this.settings.get("format.defaultRepeatSymbols");
        options.defaultTerminatorSymbol = this.settings.get("format.defaultTerminatorSymbol");

        return options;
    }
}