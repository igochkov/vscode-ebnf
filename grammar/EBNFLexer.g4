lexer grammar EBNFLexer;

channels {
	COMMENTS_CHANNEL
}

fragment LETTER
	: ('a' .. 'z' | 'A' .. 'Z');
fragment DECIMAL_DIGIT
	: ('0' .. '9');

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

START_GROUP_SYMBOL
	: '(';
END_GROUP_SYMBOL
	: ')';

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

EXCEPT_SYMBOL
	: '-';
REPETITION_SYMBOL
	: '*';
TERMINATOR_SYMBOL
	: ';'
	| '.';

FIRST_QUOTE_SYMBOL
	: '\''
	| '’'; // extra quote symbol added to the grammar
SECOND_QUOTE_SYMBOL
	: '"';
SPECIAL_SEQUENCE_SYMBOL
	: '?';

ESC_SEQ
	: '\\"'|'\\\''|'\\’'|'\\\\';

START_COMMENT_SYMBOL
	: '(*';
END_COMMENT_SYMBOL
	: '*)';
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
fragment OTHER_CHARACTER
	: ':'
	| '+'
	| '_'
	| '%'
	| '@'
	| '&'
	| '#'
	| '$'
	| '<'
	| '>'
	| '\\'
	| '^'
	| '~'; // | ' ' // Space is removed here as it is used in the GAP_SEPARATOR

GAP_SEPARATOR
	: (
		SPACE_CHARACTER
		| HORIZONTAL_TABULATION_CHARACTER
		| NEW_LINE
		| VERTICAL_TABULATION_CHARACTER
		| FORM_FEED
	)+ -> skip;

// COMMENT
// 	: START_COMMENT_SYMBOL .*? END_COMMENT_SYMBOL;