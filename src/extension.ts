import * as vscode from 'vscode';
import { ParserContext } from './ParserContext';
// import { EBNFRenameProvider } from './providers/RenameProvider';
// import { EBNFDefinitionProvider } from './providers/DefinitionProvider';
// import { EBNFReferenceProvider } from './providers/ReferenceProvider';
import { EBNFCodeActionsProvider } from './providers/EBNFCodeActionsProvider';
import { EBNFFormattingProvider } from './providers/EBNFFormattingProvider';

let formattingRegistrations: vscode.Disposable;

export function activate(context: vscode.ExtensionContext) {
    // context.subscriptions.push(vscode.languages.registerRenameProvider(ParserContext.ebnfSelector, new EBNFRenameProvider()));
    // context.subscriptions.push(vscode.languages.registerDefinitionProvider(ParserContext.ebnfSelector, new EBNFDefinitionProvider()));
    // context.subscriptions.push(vscode.languages.registerReferenceProvider(ParserContext.ebnfSelector, new EBNFReferenceProvider()));
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(ParserContext.ebnfSelector, new EBNFCodeActionsProvider()));

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(ParserContext.OnDocumentOpen));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(ParserContext.OnDocumentChange));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(ParserContext.OnDocumentClose));

    const settings = vscode.workspace.getConfiguration(ParserContext.ebnfConfigurationName);

    if (settings.format.enable) {
        formattingRegistrations = registerFormatting();
    }

    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(handleSettingChange));
}

export function deactivate() { }

function handleSettingChange(event: vscode.ConfigurationChangeEvent) {
    if (event.affectsConfiguration(ParserContext.ebnfConfigurationName)) {
        const settings = vscode.workspace.getConfiguration(ParserContext.ebnfConfigurationName);

        if (settings.format.enable && !formattingRegistrations) {
            formattingRegistrations = registerFormatting();
        }
        else if (!settings.format.enable && formattingRegistrations) {
            formattingRegistrations.dispose();
            formattingRegistrations = undefined;
        }
    }
}

function registerFormatting(): vscode.Disposable {
    const formattingProvider = new EBNFFormattingProvider();

    return vscode.Disposable.from(
        vscode.languages.registerDocumentFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider)
        // vscode.languages.registerDocumentRangeFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider),
        // vscode.languages.registerOnTypeFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider, ";", ".", "\n")); //, "}", ":)", "]", "/)", "*)", ","
    );
}
