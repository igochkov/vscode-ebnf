import { DocumentFilter, languages, workspace, TextDocumentChangeEvent, ExtensionContext, TextDocument } from 'vscode';
import { EBNFRenameProvider } from './providers/RenameProvider';
import { EBNFDefinitionProvider } from './providers/DefinitionProvider';
import { EBNFReferenceProvider } from './providers/EBNFReferenceProvider';

export function activate(ctx: ExtensionContext): void
{
    const EbnfSelector: DocumentFilter = { language: 'ebnf', scheme: 'file' };

    ctx.subscriptions.push(languages.registerRenameProvider(EbnfSelector, new EBNFRenameProvider()));
    ctx.subscriptions.push(languages.registerDefinitionProvider(EbnfSelector, new EBNFDefinitionProvider()));
    ctx.subscriptions.push(languages.registerReferenceProvider(EbnfSelector, new EBNFReferenceProvider()));

    // workspace.onDidOpenTextDocument(OnDocumentOpen);
    // workspace.onDidChangeTextDocument(OnDocumentChange);
    // workspace.onDidCloseTextDocument(OnDocumentClose);
}

// function OnDocumentOpen(document: TextDocument)
// {
//     // TODO: Not implemented yet
//     // if the file is ebnf
//     // parse and cache AST 
// }

// function OnDocumentChange(event: TextDocumentChangeEvent)
// {
//     // TODO: Not implemented yet
//     // if changes and file is ebnf
//     // re-parse
// }

// function OnDocumentClose(document: TextDocument)
// {
//     // TODO: Not implemented yet
//     // if the file is ebnf
//     // remove from cache
// }