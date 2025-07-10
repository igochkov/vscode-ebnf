parser grammar EBNFParser;

options {
	tokenVocab = EBNFLexer;
}

syntax
	: syntaxRule+ EOF
	;

syntaxRule
	: META_IDENTIFIER DEFINING_SYMBOL definitionsList TERMINATOR_SYMBOL
	;

definitionsList
	: singleDefinition (DEFINITION_SEPARATOR_SYMBOL singleDefinition)*
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