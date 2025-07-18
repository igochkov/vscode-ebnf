parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

comment : (START_COMMENT_SYMBOL | NESTED_START_COMMENT_SYMBOL) commentSymbol* END_COMMENT_SYMBOL;

commentSymbol
    : comment
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

// syntactic-factor containing no meta-identifiers.
syntacticExceptionFactor
	: (integerWithComments repetitionSymbolWithComments)? syntacticExceptionPrimary
	;

integerWithComments
	: INTEGER comment*
	;

repetitionSymbolWithComments
	: REPETITION_SYMBOL comment*
	;

// syntactic-primary containing no meta-identifiers
syntacticExceptionPrimary
	: 
	( optionalSequence
	| repeatedSequence
	| groupedSequence 
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