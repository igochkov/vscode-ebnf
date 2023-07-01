import * as vscode from 'vscode';
import { EBNFRenameProvider } from './providers/RenameProvider';
import { EBNFDefinitionProvider } from './providers/DefinitionProvider';
import { EBNFReferenceProvider } from './providers/ReferenceProvider';
import { ParserContext } from './ParserContext';

export function activate(context: vscode.ExtensionContext) 
{
    const EbnfSelector: vscode.DocumentFilter = { language: 'ebnf', scheme: 'file' };

    context.subscriptions.push(vscode.languages.registerRenameProvider(EbnfSelector, new EBNFRenameProvider()));
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(EbnfSelector, new EBNFDefinitionProvider()));
    context.subscriptions.push(vscode.languages.registerReferenceProvider(EbnfSelector, new EBNFReferenceProvider()));

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(ParserContext.OnDocumentOpen));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(ParserContext.OnDocumentChange));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(ParserContext.OnDocumentClose));
}

export function deactivate() { }