import * as vscode from "vscode";
import { EBNFLexer } from "../parser/EBNFLexer";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { EBNFParser } from "../parser/EBNFParser";
import { FormattingVisitor } from "../visitors/FormattingVisitor";
import { EBNFFormattingOptions } from "./EBNFFormattingOptions";
import { ParserContext } from "../ParserContext";

export class EBNFFormattingProvider implements vscode.DocumentFormattingEditProvider //, vscode.OnTypeFormattingEditProvider, vscode.DocumentRangeFormattingEditProvider
{
    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
        if (hasDiagnostics) {
            // If there are diagnostics, we don't format the document
            return [];
        }

        const content: string = document.getText();
        const formattedText = this.format(content, options);

        var fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(content.length));

        return [vscode.TextEdit.replace(fullRange, formattedText)];
    };

    // provideDocumentRangeFormattingEdits(document: vscode.TextDocument, range: vscode.Range, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
    //     const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
    //     if (hasDiagnostics) {
    //         // If there are diagnostics, we don't format the document
    //         return [];
    //     }

    //     // Parse the whole document
    //     const fullContent: string = document.getText();
    //     const inputStream = CharStream.fromString(fullContent);
    //     const lexer = new EBNFLexer(inputStream);
    //     const tokenStream = new CommonTokenStream(lexer);
    //     const parser = new EBNFParser(tokenStream);
    //     const syntax = parser.syntax();

    //     // Find all syntax rules that overlap with the selection
    //     // Assuming EBNFParser.SyntaxRuleContext is the context for a syntax rule
    //     // and syntax.children contains all rules
    //     const rulesToFormat: SyntaxRuleContext[] = [];
    //     const selectionStart = document.offsetAt(range.start);
    //     const selectionEnd = document.offsetAt(range.end);

    //     function collectRules(node: ParserRuleContext | null) {
    //         if (!node) return;
    //         if (node instanceof SyntaxRuleContext) {
    //             const ruleStart = node.start.start;
    //             const ruleEnd = node.stop.stop + 1; // stopIndex is inclusive
    //             if (ruleEnd > selectionStart && ruleStart < selectionEnd) {
    //                 rulesToFormat.push(node);
    //             }
    //         }
    //         if (node.children) {
    //             for (const child of node.children) {
    //                 collectRules(child as ParserRuleContext);
    //             }
    //         }
    //     }
    //     collectRules(syntax);

    //     if (rulesToFormat.length === 0) {
    //         // No rules found in selection, do nothing
    //         return [];
    //     }

    //     // Format each rule and build edits
    //     const edits: vscode.TextEdit[] = [];
    //     const formattingOptions = this.formattingOptions(options);
    //     const visitor = new FormattingVisitor(formattingOptions);
    //     for (const rule of rulesToFormat) {
    //         const ruleStart = rule.start.start;
    //         const ruleEnd = rule.stop.stop + 1;
    //         //const ruleText = fullContent.substring(ruleStart, ruleEnd);
    //         const formatted = visitor.visit(rule);
    //         const startPos = document.positionAt(ruleStart);
    //         const endPos = document.positionAt(ruleEnd);
    //         edits.push(vscode.TextEdit.replace(new vscode.Range(startPos, endPos), formatted));
    //     }
        
    //     return edits;
    // };

    // provideOnTypeFormattingEdits(document: vscode.TextDocument, position: vscode.Position, ch: string, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
    //     const hasDiagnostics = vscode.languages.getDiagnostics(document.uri).length > 0;
    //     if (hasDiagnostics) {
    //         // If there are diagnostics, we don't format the document
    //         return [];
    //     }

    //     let line = document.lineAt(position.line);
    //     let lineRange = line.range;

    //     const content: string = document.getText(lineRange);
    //     const formattedText = this.format(content, options);

    //     return [vscode.TextEdit.replace(lineRange, formattedText)];
    // }

    private format(content: string, options: vscode.FormattingOptions): string {
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