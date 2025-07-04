lexer grammar EBNFLexer;

channels {
    COMMENTS_CHANNEL,
    WHITESPACE_CHANNEL
}

// 8.1 Part 1: Naming the characters
// ------------------

CONCATENATE_SYMBOL      	: ',' ;
DEFINING_SYMBOL         	: '=' ;
EXCEPT_SYMBOL           	: '-' ;
FIRST_QUOTE_SYMBOL      	: '\'';
REPETITION_SYMBOL       	: '*' ;
SECOND_QUOTE_SYMBOL     	: '"' ;
SPECIAL_SEQUENCE_SYMBOL 	: '?' ;
END_GROUP_SYMBOL            : ')' ;
START_GROUP_SYMBOL          : '(' ;
START_COMMENT_SYMBOL        : '(*'; // -> pushMode(COMMENT) ;
END_COMMENT_SYMBOL          : '*)';
END_OPTION_SYMBOL           : ']' | '/)';
END_REPEAT_SYMBOL           : '}' | ':)';
START_OPTION_SYMBOL         : '[' | '(/';
START_REPEAT_SYMBOL         : '{' | '(:';
DEFINITION_SEPARATOR_SYMBOL : '|' | '/' | '!';
TERMINATOR_SYMBOL     		: ';' | '.' ;

fragment SPACE_CHARACTER                 : ' ';
fragment NEW_LINE                        : '\r'* '\n' '\r'*;
fragment FORM_FEED                       : '\f';
fragment HORIZONTAL_TABULATION_CHARACTER : '\t';
fragment VERTICAL_TABULATION_CHARACTER   : '\u000B';
fragment LETTER                          :  [a-zA-Z];
fragment DECIMAL_DIGIT                   :  [0-9];

// OTHER_CHARACTER                          : [ :+_%@&#$<>\\^`~]; // Removed SPACE here to avoid ambiguity with GAP_SEPARATOR 

// 8.1 Part 2: Defining the removal of unnecessary nonprinting characters
// ------------------------------------------------------------------

// // 6.2
// TERMINAL_CHARACTER
//     : LETTER
//     | DECIMAL_DIGIT
//     | CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_COMMENT_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | FIRST_QUOTE_SYMBOL
//     | REPETITION_SYMBOL
//     | SECOND_QUOTE_SYMBOL
//     | SPECIAL_SEQUENCE_SYMBOL
//     | START_COMMENT_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | OTHER_CHARACTER
//    ;

// // 6.3
// // A gap-free-symbol is either:
// // a) a terminal-character that is neither a first-quotesymbol nor a second-quote-symbol, or
// // b) a terminal-string.
// GAP_FREE_SYMBOL
//     : GAP_FREE_TERMINAL_CHARACTER
//     | TERMINAL_STRING
//    ;

// // Derived from 6.3
// GAP_FREE_TERMINAL_CHARACTER
//     : LETTER
//     | DECIMAL_DIGIT
//     | CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_COMMENT_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | REPETITION_SYMBOL
//     | SPECIAL_SEQUENCE_SYMBOL
//     | START_COMMENT_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | OTHER_CHARACTER
//    ;

// 6.4
// A gap-separator is one of the non-printing characters:
// space, horizontal-tabulation, new-line, vertical-tabulation, or form-feed.
// One or more gap-separators may be placed:
// a) before a syntax, and
// b) between any two gap-free-symbols of a syntax, and
// c) after a syntax without affecting the language defined by the syntax.
// channel(WHITESPACE_CHANNEL)
GAP_SEPARATOR
    : 
    ( SPACE_CHARACTER
    | HORIZONTAL_TABULATION_CHARACTER
    | NEW_LINE
    | VERTICAL_TABULATION_CHARACTER
    | FORM_FEED
    )+ -> skip 
    ;

// Part 3: Defining the removal of textual comments
// ------------------------------------------------

// 4.15
// A meta-identifier-character is a letter or a decimal-digit.
// -----------
fragment META_IDENTIFIER_CHARACTER 
    : LETTER 
    | DECIMAL_DIGIT 
    | '_' | '-' // Added to allow modern identifier patterns
    ;

// 4.9
// An integer consists of an ordered list of one or more decimal-digits.
INTEGER : DECIMAL_DIGIT+;

// 4.14
// A meta-identifier consists of an ordered list of one or more
// meta-identifier-characters subject to the condition that the
// first meta-identifier-character is a letter.
META_IDENTIFIER : LETTER META_IDENTIFIER_CHARACTER*;

fragment FIRST_TERMINAL_CHARACTER   : ~['\t\r\n\f]; 
fragment SECOND_TERMINAL_CHARACTER  : ~["\t\r\n\f];
fragment SPECIAL_SEQUENCE_CHARACTER : ~[?\t\r\n\f]; 

// 4.16
// A terminal-string consists of either:
// a) A first-quote-symbol followed by a sequence of
// one or more first-terminal-characters followed by a
// first-quote-symbol, or
// b) A second-quote-symbol, followed by a sequence of
// one or more second-terminal-characters followed by a
// second-quote-symbol.
TERMINAL_STRING
    : FIRST_QUOTE_SYMBOL FIRST_TERMINAL_CHARACTER+ FIRST_QUOTE_SYMBOL
    | SECOND_QUOTE_SYMBOL SECOND_TERMINAL_CHARACTER+ SECOND_QUOTE_SYMBOL
    ;


// // 4.17
// // A first-terminal-character is any terminal-character except a first-quote-symbol.
// fragment FIRST_TERMINAL_CHARACTER
//     : LETTER
//     | DECIMAL_DIGIT
//     | CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_COMMENT_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | REPETITION_SYMBOL
//     | SECOND_QUOTE_SYMBOL
//     | SPECIAL_SEQUENCE_SYMBOL
//     | START_COMMENT_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | OTHER_CHARACTER
//     | SPACE_CHARACTER // Added to avoid ambiguity with GAP_SEPARATOR
//     ;


// // 4.17
// // A second-terminal-character is any terminal-character except a second-quote-symbol.
// fragment SECOND_TERMINAL_CHARACTER
//     : LETTER
//     | DECIMAL_DIGIT
//     | CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_COMMENT_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | FIRST_QUOTE_SYMBOL
//     | REPETITION_SYMBOL
//     | SPECIAL_SEQUENCE_SYMBOL
//     | START_COMMENT_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | OTHER_CHARACTER
//     | SPACE_CHARACTER // Added to avoid ambiguity with GAP_SEPARATOR
//     ;

    
// 4.19
// A special-sequence consists of a special-sequence-symbol
// followed by a (possibly empty) sequence of specialsequence-
// characters followed by a special-sequencesymbol.
SPECIAL_SEQUENCE : SPECIAL_SEQUENCE_SYMBOL SPECIAL_SEQUENCE_CHARACTER* SPECIAL_SEQUENCE_SYMBOL;

// // 4.20
// // A special-sequence-character is any terminal-character except
// // a special-sequence-symbol.
// fragment SPECIAL_SEQUENCE_CHARACTER
//     : LETTER
//     | DECIMAL_DIGIT
//     | CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_COMMENT_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | FIRST_QUOTE_SYMBOL
//     | REPETITION_SYMBOL
//     | SECOND_QUOTE_SYMBOL
//     | START_COMMENT_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | OTHER_CHARACTER
//     | SPACE_CHARACTER // Added to avoid ambiguity with GAP_SEPARATOR
//     ;

// mode COMMENT;

// WHITESPACE                  : [ \t\r\n\f]+ -> channel(WHITESPACE_CHANNEL) ;

// // 6.5
// // A commentless-symbol is one of the following:
// // a) a terminal-character that is neither a letter nor a
// // decimal-digit nor a first-quote-symbol nor a secondquote-
// // symbol nor a start-comment-symbol nor an endcomment-
// // symbol nor a special-sequence-symbol nor an
// // other-character;
// // b) a meta-identifier;
// // c) an integer;
// // d) a terminal-string;
// // e) a special-sequence.
// COMMENTLESS_SYMBOL
//     : CONCATENATE_SYMBOL
//     | DEFINING_SYMBOL
//     | DEFINITION_SEPARATOR_SYMBOL
//     | END_GROUP_SYMBOL
//     | END_OPTION_SYMBOL
//     | END_REPEAT_SYMBOL
//     | EXCEPT_SYMBOL
//     | REPETITION_SYMBOL
//     | START_GROUP_SYMBOL
//     | START_OPTION_SYMBOL
//     | START_REPEAT_SYMBOL
//     | TERMINATOR_SYMBOL
//     | META_IDENTIFIER
//     | INTEGER
//     | TERMINAL_STRING
//     | SPECIAL_SEQUENCE
//     ;

fragment COMMENTLESS_SYMBOL : ~[(*)]; 

// 6.6
// A comment-symbol is one of the following:
// a) a bracketed-textual-comment;
// b) a commentless-symbol;
// c) an other-character.
COMMENT_SYMBOL
    : BRACKETED_TEXTUAL_COMMENT
	| COMMENTLESS_SYMBOL
	// | OTHER_CHARACTER
    // | SPACE_CHARACTER // Added to avoid ambiguity with GAP_SEPARATOR
	;

// 6.7
// A bracketed-textual-comment is a start-comment-symbol
// followed by a (possibly empty) sequence of comment-symbols
// followed by an end-comment-symbol.
// One or more bracketed-textual-comments may be placed:
// a) before a syntax, and
// b) between any two commentless-symbols of a syntax, and
// c) after a syntax without affecting the language defined by the syntax.
// ----------------
// Bracketed-textual-comments cannot appear in any of the following:
// a) a meta-identifier;
// b) an integer;
// c) a special-sequence;
// d) a terminal-string.
BRACKETED_TEXTUAL_COMMENT 
    : START_COMMENT_SYMBOL COMMENT_SYMBOL* END_COMMENT_SYMBOL 
    -> channel(COMMENTS_CHANNEL)
    ;

// END_COMMENT_SYMBOL : '*)' -> popMode ;