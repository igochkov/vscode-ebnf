lexer grammar EBNFLexer;

CONCATENATE_SYMBOL      	: ',' ;
DEFINING_SYMBOL         	: '=' ;
EXCEPT_SYMBOL           	: '-' ;
REPETITION_SYMBOL       	: '*' ;
END_GROUP_SYMBOL            : ')' ;
START_GROUP_SYMBOL          : '(' ;
START_COMMENT_SYMBOL        : '(*';
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

OTHER_CHARACTER                          : [:+_%@&#$<>\\^`~]; // Removed SPACE here to avoid ambiguity with GAP_SEPARATOR 
INTEGER : DECIMAL_DIGIT+;
META_IDENTIFIER : LETTER META_IDENTIFIER_CHARACTER*;
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