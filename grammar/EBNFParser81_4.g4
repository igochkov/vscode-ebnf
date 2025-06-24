parser grammar EBNFParser81_4;

options {
	tokenVocab = EBNFLexer;
}

// Source: ISO/IEC 14977 : 1996(E) 
// 8.1 Part 4: defines the abstract syntax of Extended BNF, 
// i.e. the structure in terms of the commentless symbols.

// 4.2
// The syntax of a language consists of one or more syntax-rules.
syntax
	: syntaxRule+
	;

// 4.3
// A syntax-rule consists of a meta-identifier (the name of
// the non-terminal symbol being defined) followed by a
// defining-symbol followed by a definitions-list followed by
// a terminator-symbol.
syntaxRule
	: META_IDENTIFIER DEFINING_SYMBOL definitionsList TERMINATOR_SYMBOL
	;

// 4.4
// A definitions-list consists of an ordered list of one or
// more single-definitions separated from each other by a
// definition-separator-symbol.
definitionsList
	: singleDefinition (DEFINITION_SEPARATOR_SYMBOL singleDefinition)*
	;

// 4.5
// A single-definition consists of an ordered list of one
// or more syntactic-terms separated from each other by a
// concatenate-symbol.
singleDefinition
	: syntacticTerm (CONCATENATE_SYMBOL syntacticTerm)*
	;

// 4.6
// A syntactic-term consists of either:
// a) a syntactic-factor, or
// b) a syntactic-factor followed by an except-symbol
//    followed by a syntactic-exception.
syntacticTerm
	: syntacticFactor (EXCEPT_SYMBOL syntacticException)?
	;

// 4.7 
// A syntactic-exception consists of a syntactic-factor subject
// to the restriction that the sequences of symbols represented
// by the syntactic-exception could equally be represented by
// a syntactic-factor containing no meta-identifiers.
syntacticException
	:  syntacticExceptionFactor
	;

// Resulting from 4.7
// A syntactic-factor in syntatic exeption consists of either:
// a) an integer followed by a repetition-symbol followed by a syntactic-primary containing no meta-identifiers, or
// b) a syntactic-primary containing no meta-identifiers.
syntacticExceptionFactor
	: (INTEGER REPETITION_SYMBOL)? syntacticExceptionPrimary
	;

// Resulting from 4.7
// A syntactic-primary in syntactic-exception is
// a syntactic-primary containing no meta-identifiers
syntacticExceptionPrimary
	: optionalSequence
	| repeatedSequence
	| groupedSequence
	| TERMINAL_STRING
	| SPECIAL_SEQUENCE
	| emptySequence
	;

// 4.8
// A syntactic-factor consists of either:
// a) an integer followed by a repetition-symbol followed by a syntactic-primary, or
// b) a syntactic-primary.
syntacticFactor
	: (INTEGER REPETITION_SYMBOL)? syntacticPrimary
	;

// 4.10
// A syntactic-primary consists of one of the following:
// a) an optional-sequence;
// b) a repeated-sequence;
// c) a grouped-sequence;
// d) a meta-identifier;
// e) a terminal-string;
// f) a special-sequence;
// g) an empty-sequence.
syntacticPrimary
	: optionalSequence
	| repeatedSequence
	| groupedSequence
	| META_IDENTIFIER
	| TERMINAL_STRING
	| SPECIAL_SEQUENCE
	| emptySequence
	;
	
// 4.11
optionalSequence
	: START_OPTION_SYMBOL definitionsList END_OPTION_SYMBOL
	;

// 4.12
repeatedSequence
	: START_REPEAT_SYMBOL definitionsList END_REPEAT_SYMBOL
	;

// 4.13
groupedSequence
	: START_GROUP_SYMBOL definitionsList END_GROUP_SYMBOL
	;

// 4.21
emptySequence
	: /* empty */
	;