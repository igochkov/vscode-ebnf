parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

// Source: ISO/IEC 14977 : 1996(E) 
// 8.2 Extended BNF used to define itself informally

syntax
	: syntaxRule+;

syntaxRule
	: COMMENT* IDENTIFIER DEFINING_SYMBOL definitionsList TERMINATOR_SYMBOL;

definitionsList
	: singleDefinition (DEFINITION_SEPARATOR_SYMBOL singleDefinition)*;

singleDefinition
	: term (CONCATENATE_SYMBOL term)*;

term
	: factor (EXCEPT_SYMBOL exceptionRule)?;

exceptionRule
	: factor;

factor
	: (INTEGER REPETITION_SYMBOL)? primary;

primary
	: optionalSequence
	| repeatedSequence
	| groupedSequence
	| IDENTIFIER
	| terminalString
	| specialSequence
	| empty;

empty
	:;

optionalSequence
	: START_OPTION_SYMBOL definitionsList END_OPTION_SYMBOL;

repeatedSequence
	: START_REPEAT_SYMBOL definitionsList END_REPEAT_SYMBOL;

groupedSequence
	: START_GROUP_SYMBOL definitionsList END_GROUP_SYMBOL;

terminalString
	: FIRST_QUOTE_SYMBOL (~FIRST_QUOTE_SYMBOL)+ FIRST_QUOTE_SYMBOL
	| SECOND_QUOTE_SYMBOL (~SECOND_QUOTE_SYMBOL)+ SECOND_QUOTE_SYMBOL;

specialSequence
	: SPECIAL_SEQUENCE_SYMBOL (~SPECIAL_SEQUENCE_SYMBOL)+ SPECIAL_SEQUENCE_SYMBOL; 

/*
 NOTE: Comment is defined in the lexer.
 As a result, the parser has difficulties parsing it's own
 grammar, in particularly this line:
 ----------------------------------------
 comment = ’(*’, {comment symbol}, ’*)’;
 ----------------------------------------
 Everything between (* and *) is considered a comment by the lexer.
 Because the lexer has already matched the comment the
 parser sees only the rest: 
 ----------------------------------------
 comment = ’’;
 ----------------------------------------
 The solution is to define the comment rule in the parser,
 and not in the lexer, however it will 'pollute' the grammar 
 with the comment rule everywhere.
 
 According the official EBNF grammar, a comment is allowed anywhere outside a
 <terminal string>, <meta identifier>, <integer> or <special sequence>.
 -----------------------------------------
 comment = ’(*’, {comment symbol}, ’*)’;
 comment symbol = comment | terminal string | special sequence | character;
 -----------------------------------------
 */