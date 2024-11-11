// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class EBNFLexer extends antlr.Lexer {
    public static readonly IDENTIFIER = 1;
    public static readonly INTEGER = 2;
    public static readonly CONCATENATE_SYMBOL = 3;
    public static readonly DEFINING_SYMBOL = 4;
    public static readonly DEFINITION_SEPARATOR_SYMBOL = 5;
    public static readonly START_COMMENT_SYMBOL = 6;
    public static readonly END_COMMENT_SYMBOL = 7;
    public static readonly START_OPTION_SYMBOL = 8;
    public static readonly END_OPTION_SYMBOL = 9;
    public static readonly START_REPEAT_SYMBOL = 10;
    public static readonly END_REPEAT_SYMBOL = 11;
    public static readonly START_GROUP_SYMBOL = 12;
    public static readonly END_GROUP_SYMBOL = 13;
    public static readonly EXCEPT_SYMBOL = 14;
    public static readonly REPETITION_SYMBOL = 15;
    public static readonly TERMINATOR_SYMBOL = 16;
    public static readonly FIRST_QUOTE_SYMBOL = 17;
    public static readonly SECOND_QUOTE_SYMBOL = 18;
    public static readonly SPECIAL_SEQUENCE_SYMBOL = 19;
    public static readonly ESC_SEQ = 20;
    public static readonly GAP_SEPARATOR = 21;
    public static readonly CHARACTER = 22;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, "','", "'='", null, "'(*'", "'*)'", null, null, 
        null, null, "'('", "')'", "'-'", "'*'", null, "'''", "'\"'", "'?'"
    ];

    public static readonly symbolicNames = [
        null, "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", 
        "DEFINITION_SEPARATOR_SYMBOL", "START_COMMENT_SYMBOL", "END_COMMENT_SYMBOL", 
        "START_OPTION_SYMBOL", "END_OPTION_SYMBOL", "START_REPEAT_SYMBOL", 
        "END_REPEAT_SYMBOL", "START_GROUP_SYMBOL", "END_GROUP_SYMBOL", "EXCEPT_SYMBOL", 
        "REPETITION_SYMBOL", "TERMINATOR_SYMBOL", "FIRST_QUOTE_SYMBOL", 
        "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", "ESC_SEQ", "GAP_SEPARATOR", 
        "CHARACTER"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "LETTER", "DECIMAL_DIGIT", "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", 
        "DEFINING_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_COMMENT_SYMBOL", "START_OPTION_SYMBOL", "END_OPTION_SYMBOL", 
        "START_REPEAT_SYMBOL", "END_REPEAT_SYMBOL", "START_GROUP_SYMBOL", 
        "END_GROUP_SYMBOL", "EXCEPT_SYMBOL", "REPETITION_SYMBOL", "TERMINATOR_SYMBOL", 
        "FIRST_QUOTE_SYMBOL", "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", 
        "ESC_SEQ", "SPACE_CHARACTER", "HORIZONTAL_TABULATION_CHARACTER", 
        "NEW_LINE", "VERTICAL_TABULATION_CHARACTER", "FORM_FEED", "GAP_SEPARATOR", 
        "CHARACTER",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, EBNFLexer._ATN, EBNFLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "EBNFLexer.g4"; }

    public get literalNames(): (string | null)[] { return EBNFLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return EBNFLexer.symbolicNames; }
    public get ruleNames(): string[] { return EBNFLexer.ruleNames; }

    public get serializedATN(): number[] { return EBNFLexer._serializedATN; }

    public get channelNames(): string[] { return EBNFLexer.channelNames; }

    public get modeNames(): string[] { return EBNFLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,22,167,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,5,2,
        68,8,2,10,2,12,2,71,9,2,1,3,4,3,74,8,3,11,3,12,3,75,1,4,1,4,1,5,
        1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,3,9,93,8,9,1,10,
        1,10,1,10,3,10,98,8,10,1,11,1,11,1,11,3,11,103,8,11,1,12,1,12,1,
        12,3,12,108,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,
        17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,
        21,132,8,21,1,22,1,22,1,23,1,23,1,24,5,24,139,8,24,10,24,12,24,142,
        9,24,1,24,1,24,5,24,146,8,24,10,24,12,24,149,9,24,1,25,1,25,1,26,
        1,26,1,27,1,27,1,27,1,27,1,27,4,27,160,8,27,11,27,12,27,161,1,27,
        1,27,1,28,1,28,0,0,29,1,0,3,0,5,1,7,2,9,3,11,4,13,5,15,6,17,7,19,
        8,21,9,23,10,25,11,27,12,29,13,31,14,33,15,35,16,37,17,39,18,41,
        19,43,20,45,0,47,0,49,0,51,0,53,0,55,21,57,22,1,0,5,2,0,65,90,97,
        122,1,0,48,57,2,0,45,45,95,95,3,0,33,33,47,47,124,124,2,0,46,46,
        59,59,176,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,1,59,1,0,0,0,3,61,1,0,0,0,5,63,
        1,0,0,0,7,73,1,0,0,0,9,77,1,0,0,0,11,79,1,0,0,0,13,81,1,0,0,0,15,
        83,1,0,0,0,17,86,1,0,0,0,19,92,1,0,0,0,21,97,1,0,0,0,23,102,1,0,
        0,0,25,107,1,0,0,0,27,109,1,0,0,0,29,111,1,0,0,0,31,113,1,0,0,0,
        33,115,1,0,0,0,35,117,1,0,0,0,37,119,1,0,0,0,39,121,1,0,0,0,41,123,
        1,0,0,0,43,131,1,0,0,0,45,133,1,0,0,0,47,135,1,0,0,0,49,140,1,0,
        0,0,51,150,1,0,0,0,53,152,1,0,0,0,55,159,1,0,0,0,57,165,1,0,0,0,
        59,60,7,0,0,0,60,2,1,0,0,0,61,62,7,1,0,0,62,4,1,0,0,0,63,69,3,1,
        0,0,64,68,3,1,0,0,65,68,3,3,1,0,66,68,7,2,0,0,67,64,1,0,0,0,67,65,
        1,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,
        70,6,1,0,0,0,71,69,1,0,0,0,72,74,3,3,1,0,73,72,1,0,0,0,74,75,1,0,
        0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,8,1,0,0,0,77,78,5,44,0,0,78,10,
        1,0,0,0,79,80,5,61,0,0,80,12,1,0,0,0,81,82,7,3,0,0,82,14,1,0,0,0,
        83,84,5,40,0,0,84,85,5,42,0,0,85,16,1,0,0,0,86,87,5,42,0,0,87,88,
        5,41,0,0,88,18,1,0,0,0,89,93,5,91,0,0,90,91,5,40,0,0,91,93,5,47,
        0,0,92,89,1,0,0,0,92,90,1,0,0,0,93,20,1,0,0,0,94,98,5,93,0,0,95,
        96,5,47,0,0,96,98,5,41,0,0,97,94,1,0,0,0,97,95,1,0,0,0,98,22,1,0,
        0,0,99,103,5,123,0,0,100,101,5,40,0,0,101,103,5,58,0,0,102,99,1,
        0,0,0,102,100,1,0,0,0,103,24,1,0,0,0,104,108,5,125,0,0,105,106,5,
        58,0,0,106,108,5,41,0,0,107,104,1,0,0,0,107,105,1,0,0,0,108,26,1,
        0,0,0,109,110,5,40,0,0,110,28,1,0,0,0,111,112,5,41,0,0,112,30,1,
        0,0,0,113,114,5,45,0,0,114,32,1,0,0,0,115,116,5,42,0,0,116,34,1,
        0,0,0,117,118,7,4,0,0,118,36,1,0,0,0,119,120,5,39,0,0,120,38,1,0,
        0,0,121,122,5,34,0,0,122,40,1,0,0,0,123,124,5,63,0,0,124,42,1,0,
        0,0,125,126,5,92,0,0,126,132,5,34,0,0,127,128,5,92,0,0,128,132,5,
        39,0,0,129,130,5,92,0,0,130,132,5,92,0,0,131,125,1,0,0,0,131,127,
        1,0,0,0,131,129,1,0,0,0,132,44,1,0,0,0,133,134,5,32,0,0,134,46,1,
        0,0,0,135,136,5,9,0,0,136,48,1,0,0,0,137,139,5,13,0,0,138,137,1,
        0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,1,
        0,0,0,142,140,1,0,0,0,143,147,5,10,0,0,144,146,5,13,0,0,145,144,
        1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,50,1,
        0,0,0,149,147,1,0,0,0,150,151,5,11,0,0,151,52,1,0,0,0,152,153,5,
        12,0,0,153,54,1,0,0,0,154,160,3,45,22,0,155,160,3,47,23,0,156,160,
        3,49,24,0,157,160,3,51,25,0,158,160,3,53,26,0,159,154,1,0,0,0,159,
        155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,0,159,158,1,0,0,0,160,
        161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,
        164,6,27,0,0,164,56,1,0,0,0,165,166,9,0,0,0,166,58,1,0,0,0,13,0,
        67,69,75,92,97,102,107,131,140,147,159,161,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!EBNFLexer.__ATN) {
            EBNFLexer.__ATN = new antlr.ATNDeserializer().deserialize(EBNFLexer._serializedATN);
        }

        return EBNFLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(EBNFLexer.literalNames, EBNFLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return EBNFLexer.vocabulary;
    }

    private static readonly decisionsToDFA = EBNFLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}