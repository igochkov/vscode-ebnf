parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

comment : (START_COMMENT_SYMBOL | NESTED_START_COMMENT_SYMBOL) commentSymbol* END_COMMENT_SYMBOL;

commentSymbol
    : comment
	| TERMINAL_STRING
	| SPECIAL_SEQUENCE
	| OTHER_CHARACTER
	;

syntax
	: syntaxRule+ comment* EOF
	;

syntaxRule
	: comment* metaWithComments defintitionSymbolWithComments definitionsList TERMINATOR_SYMBOL
	;

metaWithComments
	: META_IDENTIFIER comment*
	;

defintitionSymbolWithComments
	: DEFINING_SYMBOL comment*
	;

definitionsList
	: singleDefinition (DEFINITION_SEPARATOR_SYMBOL comment* singleDefinition)*
	;

singleDefinition
	: syntacticTerm (CONCATENATE_SYMBOL comment* syntacticTerm)*
	;

syntacticTerm
	: syntacticFactor (EXCEPT_SYMBOL comment* syntacticException)?
	;

syntacticException
	:  syntacticExceptionFactor comment*
	;

// A syntactic-factor used as an exception. ISO/IEC 14977 §4.7 requires that it "could
// equally be represented by a syntactic-factor containing no meta-identifiers" — a semantic
// property. We do not enforce it syntactically, because the standard's own §8.1 grammar uses
// meta-identifiers inside exceptions (e.g. "terminal character - first quote symbol"); see
// SC7 in the code-quality review. META_IDENTIFIER is therefore allowed here.
syntacticExceptionFactor
	: (integerWithComments repetitionSymbolWithComments)? syntacticExceptionPrimary
	;

integerWithComments
	: INTEGER comment*
	;

repetitionSymbolWithComments
	: REPETITION_SYMBOL comment*
	;

// syntactic-primary used as an exception. META_IDENTIFIER is permitted (see note on
// syntacticExceptionFactor above) so the ISO §8.1 self-defining grammar parses.
syntacticExceptionPrimary
	:
	( optionalSequence
	| repeatedSequence
	| groupedSequence
	| META_IDENTIFIER
	| TERMINAL_STRING
    | SPECIAL_SEQUENCE
	| emptySequence
	) comment*
	;

syntacticFactor
	: (integerWithComments repetitionSymbolWithComments)? syntacticPrimary
	;

syntacticPrimary
	: 
	( optionalSequence
	| repeatedSequence
	| groupedSequence 
	| META_IDENTIFIER 
	| TERMINAL_STRING 
    | SPECIAL_SEQUENCE
	| emptySequence
	) comment*   
	;
	
optionalSequence
	: START_OPTION_SYMBOL comment* definitionsList END_OPTION_SYMBOL
	;

repeatedSequence
	: START_REPEAT_SYMBOL comment* definitionsList END_REPEAT_SYMBOL
	;

groupedSequence
	: START_GROUP_SYMBOL comment* definitionsList END_GROUP_SYMBOL
	;

emptySequence
	: /* empty */
	;