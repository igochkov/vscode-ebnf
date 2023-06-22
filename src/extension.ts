import { DocumentFilter, languages, workspace, TextDocumentChangeEvent, Disposable, Event, TextDocument } from 'vscode'
import { EBNFRenameProvider } from './providers/RenameProvider'
import { EBNFDefinitionProvider } from './providers/DefinitionProvider';

const EbnfSelector: DocumentFilter = { language: 'ebnf', scheme: 'file' };

languages.registerRenameProvider(EbnfSelector, new EBNFRenameProvider());
languages.registerDefinitionProvider(EbnfSelector, new EBNFDefinitionProvider());

workspace.onDidOpenTextDocument(OnDocumentOpen);
workspace.onDidChangeTextDocument(OnDocumentChange);
workspace.onDidCloseTextDocument(OnDocumentClose);

function OnDocumentOpen(document: TextDocument) {
    // TODO: Not implemented yet
    // if the file is ebnf
    // parse and cache AST 
}

function OnDocumentChange(event: TextDocumentChangeEvent) {
    // TODO: Not implemented yet
    // if changes and file is ebnf
    // re-parse
}

function OnDocumentClose(document: TextDocument) {
    // TODO: Not implemented yet
    // if the file is ebnf
    // remove from cache
}