parser grammar EBNFParser81_3;

options {
	tokenVocab = EBNFLexer;
}

// Source: ISO/IEC 14977 : 1996(E) 
// 8.1 Part 3: Defining the removal of textual comments

syntax : BRACKETED_TEXTUAL_COMMENT* COMMENTLESS_SYMBOL BRACKETED_TEXTUAL_COMMENT* (COMMENTLESS_SYMBOL BRACKETED_TEXTUAL_COMMENT*)*;