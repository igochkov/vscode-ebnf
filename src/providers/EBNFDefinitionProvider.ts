import * as vscode from 'vscode';
import { ParserContext } from '../ParserContext';

export class EBNFDefinitionProvider implements vscode.DefinitionProvider {
    public provideDefinition(
        document: vscode.TextDocument,
        position: vscode.Position,
        _: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]>
    {
        const range = document.getWordRangeAtPosition(position);
        const text = document.getText(range);

        if (!text) {
            return;
        }

        if (!ParserContext.listener) {
            ParserContext.parse(document);
        }

        const listener = ParserContext.listener;
        if (!listener) {
            return;
        }

        // G2: a meta-identifier may be defined by more than one syntax-rule
        // (ISO/IEC 14977 §5.1 note 2), so return every definition site, not just the first.
        const result: vscode.Location[] = listener.definitions
            .filter(d => d.text === text)
            .map(d => new vscode.Location(
                document.uri,
                new vscode.Range(
                    d.line - 1,
                    d.column,
                    d.line - 1,
                    d.column + (d.text ?? "").length
                )));

        if (result.length === 0) {
            return;
        }

        return result;
    }
}