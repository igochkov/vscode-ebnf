parser grammar EBNFParser81_2;

options {
	tokenVocab = EBNFLexer;
}

// Source: ISO/IEC 14977 : 1996(E) 
// 8.1 Part 2: Defining the removal of unnecessary nonprinting characters

syntax
	: GAP_SEPARATOR* GAP_FREE_SYMBOL GAP_SEPARATOR* (GAP_FREE_SYMBOL GAP_SEPARATOR*)*;