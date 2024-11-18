import { CharStream, CommonTokenStream } from 'antlr4ng';
import { EBNFLexer } from '../src/parser/EBNFLexer';
import { EBNFParser } from '../src/parser/EBNFParser';
import { ASTListener } from '../src/listeners/ASTListener';

describe('EBNFParser', () => {
    it('should parse comments correctly', () => {
        const input = "comment = '(*', {comment symbol}, '*)';";
        const inputStream = CharStream.fromString(input);
        const lexer = new EBNFLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new EBNFParser(tokenStream);
        const listener = new ASTListener();
        parser.addParseListener(listener);
        parser.syntax();

        expect(listener.symbols.length).toBeGreaterThan(0);
    });
});
