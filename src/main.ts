import { DocumentFilter, languages } from 'vscode'
import { EBNFRenameProvider } from './providers/RenameProvider'

const EbnfSelector: DocumentFilter = { language: 'ebnf', scheme: 'file' };

languages.registerRenameProvider(EbnfSelector, new EBNFRenameProvider());