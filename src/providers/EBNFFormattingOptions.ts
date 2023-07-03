import * as vscode from "vscode";

export class EBNFFormattingOptions implements vscode.FormattingOptions {
    [key: string]: string | number | boolean;

    public enable: boolean;
    public tabSize: number = 4;
    public insertSpaces: boolean = true;
    public definingSymbolOnNewLine: boolean = true;
    public indentDefiningSymbol: boolean = true;
    public terminatorSymbolOnNewLine: boolean = false;
    public definitionSeparatorSymbolOnNewLine: boolean = true;
    public insertSpaceBeforeConcatenateSymbol: boolean = false;
    public insertSpaceAtSequenceSymbols: boolean = true;
    public defaultDefinitionSeparatorSymbol: string = "|";
    public defaultOptionSymbols: string = "[ ]";
    public defaultRepeatSymbols: string = "{ }";
    public defaultTerminatorSymbol: string = ";";
}