import * as vscode from 'vscode';
import { ParserContext } from './ParserContext';
import { EBNFRenameProvider } from './providers/EBNFRenameProvider';
import { EBNFDefinitionProvider } from './providers/EBNFDefinitionProvider';
import { EBNFReferenceProvider } from './providers/EBNFReferenceProvider';
import { EBNFCodeActionsProvider } from './providers/EBNFCodeActionsProvider';
import { EBNFFormattingProvider } from './providers/EBNFFormattingProvider';
import { EBNFCompletionItemProvider } from './providers/EBNFCompletionItemProvider';
import { EBNFHoverProvider } from './providers/EBNFHoverProvider';
import { EBNFDocumentSymbolProvider } from './providers/EBNFDocumentSymbolProvider';
import { EBNFDocumentHighlightProvider } from './providers/EBNFDocumentHighlightProvider';
import { EBNFFoldingRangeProvider } from './providers/EBNFFoldingRangeProvider';
import { EBNFCodeLensProvider } from './providers/EBNFCodeLensProvider';
import { EBNFSemanticTokensProvider, EBNF_SEMANTIC_TOKENS_LEGEND } from './providers/EBNFSemanticTokensProvider';
import { Telemetry } from './telemetry/Telemetry';
import { CONVERT_IDENTIFIERS_COMMAND, convertIdentifiersCommand } from './commands/ConvertIdentifiers';

let formattingRegistrations: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
    Telemetry.initialize(context);

    context.subscriptions.push(vscode.languages.registerRenameProvider(ParserContext.ebnfSelector, new EBNFRenameProvider()));
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(ParserContext.ebnfSelector, new EBNFDefinitionProvider()));
    context.subscriptions.push(vscode.languages.registerReferenceProvider(ParserContext.ebnfSelector, new EBNFReferenceProvider()));
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(
        ParserContext.ebnfSelector,
        new EBNFCodeActionsProvider(),
        { providedCodeActionKinds: EBNFCodeActionsProvider.providedCodeActionKinds }));
    context.subscriptions.push(vscode.commands.registerCommand(CONVERT_IDENTIFIERS_COMMAND, convertIdentifiersCommand));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(ParserContext.ebnfSelector, new EBNFCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerHoverProvider(ParserContext.ebnfSelector, new EBNFHoverProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(ParserContext.ebnfSelector, new EBNFDocumentSymbolProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentHighlightProvider(ParserContext.ebnfSelector, new EBNFDocumentHighlightProvider()));
    context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(ParserContext.ebnfSelector, new EBNFFoldingRangeProvider()));
    context.subscriptions.push(vscode.languages.registerCodeLensProvider(ParserContext.ebnfSelector, new EBNFCodeLensProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(ParserContext.ebnfSelector, new EBNFSemanticTokensProvider(), EBNF_SEMANTIC_TOKENS_LEGEND));
    context.subscriptions.push(ParserContext.ebnfStatusBarItem);

    if (vscode.window.activeTextEditor) {
        ParserContext.parse(vscode.window.activeTextEditor.document);
	}

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(ParserContext.OnDocumentOpen));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(ParserContext.OnDocumentChange));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(ParserContext.OnDocumentClose));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(ParserContext.OnActiveTextEditorChanged));
    
    const settings = vscode.workspace.getConfiguration(ParserContext.ebnfName);

    if (settings.format.enable) {
        formattingRegistrations = registerFormatting();
    }

    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(handleSettingChange));
}

export async function deactivate() {
    if (formattingRegistrations) {
        formattingRegistrations.dispose();
        formattingRegistrations = undefined;
    }

    ParserContext.listener = undefined;
    ParserContext.diagnosticsCollection.clear();
    ParserContext.diagnosticsCollection.dispose();
    ParserContext.ebnfStatusBarItem.dispose();
    await Telemetry.dispose(); // flush the final day and let the request finish
}

function handleSettingChange(event: vscode.ConfigurationChangeEvent) {
    if (event.affectsConfiguration(ParserContext.ebnfName)) {
        const settings = vscode.workspace.getConfiguration(ParserContext.ebnfName);

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
        vscode.languages.registerDocumentFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider),
        vscode.languages.registerDocumentRangeFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider),
        vscode.languages.registerOnTypeFormattingEditProvider(ParserContext.ebnfSelector, formattingProvider, ";", ".")
    );
}