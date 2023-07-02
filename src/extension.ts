import * as vscode from 'vscode';
import { ParserContext } from './ParserContext';
import { EBNFRenameProvider } from './providers/RenameProvider';
import { EBNFDefinitionProvider } from './providers/DefinitionProvider';
import { EBNFReferenceProvider } from './providers/ReferenceProvider';
import { EBNFFormattingProvider } from './providers/FormattingProvider';

const ebnfSelector: vscode.DocumentFilter = { language: 'ebnf', scheme: 'file' };
let formattingRegistrations: vscode.Disposable;

export function activate(context: vscode.ExtensionContext) 
{
    context.subscriptions.push(vscode.languages.registerRenameProvider(ebnfSelector, new EBNFRenameProvider()));
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(ebnfSelector, new EBNFDefinitionProvider()));
    context.subscriptions.push(vscode.languages.registerReferenceProvider(ebnfSelector, new EBNFReferenceProvider()));

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(ParserContext.OnDocumentOpen));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(ParserContext.OnDocumentChange));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(ParserContext.OnDocumentClose));

    const settings = vscode.workspace.getConfiguration(ebnfSelector.language);

    if (settings.format.enable)
    {
        formattingRegistrations = registerFormatting();
    }

    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(handleSettingChange));
}

export function deactivate() { }

function handleSettingChange(event: vscode.ConfigurationChangeEvent)
{
    if (event.affectsConfiguration(ebnfSelector.language))
    {
        const settings = vscode.workspace.getConfiguration(ebnfSelector.language);

        if (settings.format.enable)
        {
            formattingRegistrations = registerFormatting();
        }
        else { 
            formattingRegistrations.dispose();
        }
    }
}

function registerFormatting(): vscode.Disposable
{
    const formattingProvider = new EBNFFormattingProvider();

    return vscode.Disposable.from(
        vscode.languages.registerDocumentFormattingEditProvider(ebnfSelector, formattingProvider),
        vscode.languages.registerDocumentRangeFormattingEditProvider(ebnfSelector, formattingProvider),
        vscode.languages.registerOnTypeFormattingEditProvider(ebnfSelector, formattingProvider, ";", ".", "\n")); //, "}", ":)", "]", "/)", "*)", ","
}
