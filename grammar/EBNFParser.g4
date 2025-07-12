parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

comment : START_COMMENT_SYMBOL commentSymbol* END_COMMENT_SYMBOL;

commentSymbol
    : comment
    | commentlessSymbol
	| OTHER_CHARACTER
	;

commentlessSymbol
    : CONCATENATE_SYMBOL
    | DEFINING_SYMBOL
    | DEFINITION_SEPARATOR_SYMBOL
    | END_GROUP_SYMBOL
    | END_OPTION_SYMBOL
    | END_REPEAT_SYMBOL
    | EXCEPT_SYMBOL
    | REPETITION_SYMBOL
    | START_GROUP_SYMBOL
    | START_OPTION_SYMBOL
    | START_REPEAT_SYMBOL
    | TERMINATOR_SYMBOL
    // -------------------
    | META_IDENTIFIER
    | INTEGER
    | TERMINAL_STRING
    | SPECIAL_SEQUENCE
    ;

syntax
	: (comment | syntaxRule)+ EOF
	;

syntaxRule
	: META_IDENTIFIER comment* DEFINING_SYMBOL definitionsList comment* TERMINATOR_SYMBOL
	;

definitionsList
	: singleDefinition (comment* DEFINITION_SEPARATOR_SYMBOL singleDefinition)*
	;

singleDefinition
	: syntacticTerm (CONCATENATE_SYMBOL syntacticTerm)*
	;

syntacticTerm
	: syntacticFactor (EXCEPT_SYMBOL syntacticException)?
	;

syntacticException
	:  syntacticExceptionFactor
	;

// syntactic-factor containing no meta-identifiers.
syntacticExceptionFactor
	: (INTEGER REPETITION_SYMBOL)? syntacticExceptionPrimary
	;

// syntactic-primary containing no meta-identifiers
syntacticExceptionPrimary
	: optionalSequence
	| repeatedSequence
	| groupedSequence
	| TERMINAL_STRING
    | SPECIAL_SEQUENCE
	| emptySequence
	;

syntacticFactor
	: (INTEGER REPETITION_SYMBOL)? syntacticPrimary
	;

syntacticPrimary
	: optionalSequence
	| repeatedSequence
	| groupedSequence
	| META_IDENTIFIER
	| TERMINAL_STRING
    | SPECIAL_SEQUENCE
	| emptySequence
	;
	
optionalSequence
	: START_OPTION_SYMBOL definitionsList END_OPTION_SYMBOL
	;

repeatedSequence
	: START_REPEAT_SYMBOL definitionsList END_REPEAT_SYMBOL
	;

groupedSequence
	: START_GROUP_SYMBOL definitionsList END_GROUP_SYMBOL
	;

emptySequence
	: /* empty */
	;