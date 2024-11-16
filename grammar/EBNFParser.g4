parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

// Source: ISO/IEC 14977 : 1996(E) 
// 8.2 Extended BNF used to define itself informally

syntax
	: syntaxRule+;

syntaxRule
	: comment* IDENTIFIER comment* DEFINING_SYMBOL comment* definitionsList comment* TERMINATOR_SYMBOL;

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
	: FIRST_QUOTE_SYMBOL (~FIRST_QUOTE_SYMBOL | ESC_SEQ)* FIRST_QUOTE_SYMBOL
	| SECOND_QUOTE_SYMBOL (~SECOND_QUOTE_SYMBOL | ESC_SEQ)* SECOND_QUOTE_SYMBOL;

specialSequence
	: SPECIAL_SEQUENCE_SYMBOL (~SPECIAL_SEQUENCE_SYMBOL)+ SPECIAL_SEQUENCE_SYMBOL; 

comment
	: START_COMMENT_SYMBOL comment_symbol* END_COMMENT_SYMBOL;

comment_symbol
	: comment			 // nested comments
	| terminalString
	| specialSequence
	| CHARACTER;         // Any other character