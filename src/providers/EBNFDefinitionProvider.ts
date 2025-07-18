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

        const def = ParserContext.listener.definitions.find(d => d.text === text);

        var result: vscode.Definition = {
            uri: document.uri,
            range: new vscode.Range(
                def.line - 1,
                def.column,
                def.line - 1,
                def.column + def.text.length
            )
        };

        return result;
    }
}