lexer grammar EBNFLexer;

CONCATENATE_SYMBOL      	: ',' ;
DEFINING_SYMBOL         	: '=' ;
EXCEPT_SYMBOL           	: '-' ;
REPETITION_SYMBOL       	: '*' ;
END_GROUP_SYMBOL            : ')' ;
START_GROUP_SYMBOL          : '(' ;
START_COMMENT_SYMBOL        : '(*' -> pushMode(COMMENT);
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
fragment FIRST_QUOTE_SYMBOL      	     : '\'';
fragment SECOND_QUOTE_SYMBOL     	     : '"' ;
fragment SPECIAL_SEQUENCE_SYMBOL 	     : '?' ;
fragment FIRST_TERMINAL_CHARACTER        : ~['\t\r\n\f]; 
fragment SECOND_TERMINAL_CHARACTER       : ~["\t\r\n\f];
fragment SPECIAL_SEQUENCE_CHARACTER      : ~[?\t\r\n\f]; 
fragment LETTER                          :  [a-zA-Z];
fragment DECIMAL_DIGIT                   :  [0-9];

fragment META_IDENTIFIER_CHARACTER       : LETTER
                                         | DECIMAL_DIGIT
                                         | '_' | '-' // Added to allow modern identifier patterns
                                         ;

// A single gap-free word of a meta-identifier.
fragment META_IDENTIFIER_WORD            : LETTER META_IDENTIFIER_CHARACTER*;

// Horizontal gap (spaces/tabs, NOT newlines) that may appear *inside* a meta-identifier.
// Per ISO/IEC 14977 §6.4/§4.14 a meta-identifier such as "syntax rule" is a single
// identifier; gap-separators between its words have no formal effect (SC1 / issue #36
// Phase 2). Newlines are deliberately excluded so identifiers don't merge across lines.
fragment META_IDENTIFIER_GAP             : ( SPACE_CHARACTER | HORIZONTAL_TABULATION_CHARACTER )+;

INTEGER : DECIMAL_DIGIT+;

// Maximal munch keeps boundaries correct: "foo bar = x" stops before "=" (the trailing gap
// isn't followed by a word), and "a - b" stays a / - / b (the except-symbol isn't a word).
META_IDENTIFIER : META_IDENTIFIER_WORD ( META_IDENTIFIER_GAP META_IDENTIFIER_WORD )*;
GAP_SEPARATOR
    : 
    ( SPACE_CHARACTER
    | HORIZONTAL_TABULATION_CHARACTER
    | NEW_LINE
    | VERTICAL_TABULATION_CHARACTER
    | FORM_FEED
    )+ -> skip 
    ;

TERMINAL_STRING
    : FIRST_QUOTE_SYMBOL FIRST_TERMINAL_CHARACTER+ FIRST_QUOTE_SYMBOL
    | SECOND_QUOTE_SYMBOL SECOND_TERMINAL_CHARACTER+ SECOND_QUOTE_SYMBOL
    ;

SPECIAL_SEQUENCE : SPECIAL_SEQUENCE_SYMBOL SPECIAL_SEQUENCE_CHARACTER* SPECIAL_SEQUENCE_SYMBOL;

mode COMMENT;
END_COMMENT_SYMBOL : '*)' -> popMode;
NESTED_START_COMMENT_SYMBOL : '(*' -> pushMode(COMMENT);

// Per ISO/IEC 14977 §6.6 a comment-symbol may itself be a terminal-string or a
// special-sequence, so their contents (e.g. a quoted "*)") must not end the comment
// early (SC5). We recognize them as whole tokens and reuse the TERMINAL_STRING /
// SPECIAL_SEQUENCE token types so the parser's commentSymbol rule can consume them.
// If a quote/`?` has no valid closing delimiter (e.g. an apostrophe in prose) these
// rules simply don't match and the character falls through to OTHER_CHARACTER.
COMMENT_TERMINAL_STRING
    : ( FIRST_QUOTE_SYMBOL FIRST_TERMINAL_CHARACTER+ FIRST_QUOTE_SYMBOL
      | SECOND_QUOTE_SYMBOL SECOND_TERMINAL_CHARACTER+ SECOND_QUOTE_SYMBOL
      ) -> type(TERMINAL_STRING)
    ;
COMMENT_SPECIAL_SEQUENCE
    : SPECIAL_SEQUENCE_SYMBOL SPECIAL_SEQUENCE_CHARACTER* SPECIAL_SEQUENCE_SYMBOL -> type(SPECIAL_SEQUENCE)
    ;

OTHER_CHARACTER : .;