lexer grammar EBNFLexer;

fragment LETTER
	: [a-zA-Z];
fragment DECIMAL_DIGIT
	: [0-9];

// Original specification doesn't allow underscore or hyphen in the meta identifier! In the official
// examples a space is used, which is difficult to implement in the parser.
IDENTIFIER
	: LETTER (LETTER | DECIMAL_DIGIT | '_' | '-')*;
INTEGER
	: DECIMAL_DIGIT+;

CONCATENATE_SYMBOL
	: ',';
DEFINING_SYMBOL
	: '=';
DEFINITION_SEPARATOR_SYMBOL
	: '|'
	| '/'
	| '!';

START_COMMENT_SYMBOL
	: '(*';
END_COMMENT_SYMBOL
	: '*)';

START_OPTION_SYMBOL
	: '['
	| '(/';
END_OPTION_SYMBOL
	: ']'
	| '/)';

START_REPEAT_SYMBOL
	: '{'
	| '(:';
END_REPEAT_SYMBOL
	: '}'
	| ':)';

START_GROUP_SYMBOL
	: '(';
END_GROUP_SYMBOL
	: ')';

EXCEPT_SYMBOL
	: '-';
REPETITION_SYMBOL
	: '*';
TERMINATOR_SYMBOL
	: ';'
	| '.';

FIRST_QUOTE_SYMBOL
	: '\'';
SECOND_QUOTE_SYMBOL
	: '"';
SPECIAL_SEQUENCE_SYMBOL
	: '?';

ESC_SEQ
	: '\\"'|'\\\''|'\\\\';

fragment SPACE_CHARACTER
	: ' ';
fragment HORIZONTAL_TABULATION_CHARACTER
	: '\t';
fragment NEW_LINE
	: '\r'* '\n' '\r'*;
fragment VERTICAL_TABULATION_CHARACTER
	: '\u000B';
fragment FORM_FEED
	: '\f';

GAP_SEPARATOR
	: (
		SPACE_CHARACTER
		| HORIZONTAL_TABULATION_CHARACTER
		| NEW_LINE
		| VERTICAL_TABULATION_CHARACTER
		| FORM_FEED
	)+ -> skip;

// Match any other character as a token
CHARACTER
	: . ; // Must be placed at the end to not override other tokens