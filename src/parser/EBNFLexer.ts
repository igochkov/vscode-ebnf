// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class EBNFLexer extends antlr.Lexer {
    public static readonly IDENTIFIER = 1;
    public static readonly INTEGER = 2;
    public static readonly CONCATENATE_SYMBOL = 3;
    public static readonly DEFINING_SYMBOL = 4;
    public static readonly DEFINITION_SEPARATOR_SYMBOL = 5;
    public static readonly START_GROUP_SYMBOL = 6;
    public static readonly END_GROUP_SYMBOL = 7;
    public static readonly START_OPTION_SYMBOL = 8;
    public static readonly END_OPTION_SYMBOL = 9;
    public static readonly START_REPEAT_SYMBOL = 10;
    public static readonly END_REPEAT_SYMBOL = 11;
    public static readonly EXCEPT_SYMBOL = 12;
    public static readonly REPETITION_SYMBOL = 13;
    public static readonly TERMINATOR_SYMBOL = 14;
    public static readonly FIRST_QUOTE_SYMBOL = 15;
    public static readonly SECOND_QUOTE_SYMBOL = 16;
    public static readonly SPECIAL_SEQUENCE_SYMBOL = 17;
    public static readonly ESC_SEQ = 18;
    public static readonly START_COMMENT_SYMBOL = 19;
    public static readonly END_COMMENT_SYMBOL = 20;
    public static readonly GAP_SEPARATOR = 21;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL"
    ];

    public static readonly literalNames = [
        null, null, null, "','", "'='", null, "'('", "')'", null, null, 
        null, null, "'-'", "'*'", null, null, "'\"'", "'?'", null, "'(*'", 
        "'*)'"
    ];

    public static readonly symbolicNames = [
        null, "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", 
        "DEFINITION_SEPARATOR_SYMBOL", "START_GROUP_SYMBOL", "END_GROUP_SYMBOL", 
        "START_OPTION_SYMBOL", "END_OPTION_SYMBOL", "START_REPEAT_SYMBOL", 
        "END_REPEAT_SYMBOL", "EXCEPT_SYMBOL", "REPETITION_SYMBOL", "TERMINATOR_SYMBOL", 
        "FIRST_QUOTE_SYMBOL", "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", 
        "ESC_SEQ", "START_COMMENT_SYMBOL", "END_COMMENT_SYMBOL", "GAP_SEPARATOR"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "LETTER", "DECIMAL_DIGIT", "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", 
        "DEFINING_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", "START_GROUP_SYMBOL", 
        "END_GROUP_SYMBOL", "START_OPTION_SYMBOL", "END_OPTION_SYMBOL", 
        "START_REPEAT_SYMBOL", "END_REPEAT_SYMBOL", "EXCEPT_SYMBOL", "REPETITION_SYMBOL", 
        "TERMINATOR_SYMBOL", "FIRST_QUOTE_SYMBOL", "SECOND_QUOTE_SYMBOL", 
        "SPECIAL_SEQUENCE_SYMBOL", "ESC_SEQ", "START_COMMENT_SYMBOL", "END_COMMENT_SYMBOL", 
        "SPACE_CHARACTER", "HORIZONTAL_TABULATION_CHARACTER", "NEW_LINE", 
        "VERTICAL_TABULATION_CHARACTER", "FORM_FEED", "OTHER_CHARACTER", 
        "GAP_SEPARATOR",
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
        4,0,21,175,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,5,2,
        68,8,2,10,2,12,2,71,9,2,1,3,4,3,74,8,3,11,3,12,3,75,1,4,1,4,1,5,
        1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,3,9,91,8,9,1,10,1,10,1,10,
        3,10,96,8,10,1,11,1,11,1,11,3,11,101,8,11,1,12,1,12,1,12,3,12,106,
        8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,3,16,118,
        8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,3,19,134,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,
        1,23,1,23,1,24,5,24,147,8,24,10,24,12,24,150,9,24,1,24,1,24,5,24,
        154,8,24,10,24,12,24,157,9,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,
        1,28,1,28,1,28,1,28,4,28,170,8,28,11,28,12,28,171,1,28,1,28,0,0,
        29,1,0,3,0,5,1,7,2,9,3,11,4,13,5,15,6,17,7,19,8,21,9,23,10,25,11,
        27,12,29,13,31,14,33,15,35,16,37,17,39,18,41,19,43,20,45,0,47,0,
        49,0,51,0,53,0,55,0,57,21,1,0,5,2,0,65,90,97,122,2,0,45,45,95,95,
        3,0,33,33,47,47,124,124,2,0,46,46,59,59,9,0,35,38,43,43,58,58,60,
        60,62,62,64,64,92,92,94,95,126,126,185,0,5,1,0,0,0,0,7,1,0,0,0,0,
        9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
        19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
        29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,
        39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,57,1,0,0,0,1,59,1,0,0,0,3,
        61,1,0,0,0,5,63,1,0,0,0,7,73,1,0,0,0,9,77,1,0,0,0,11,79,1,0,0,0,
        13,81,1,0,0,0,15,83,1,0,0,0,17,85,1,0,0,0,19,90,1,0,0,0,21,95,1,
        0,0,0,23,100,1,0,0,0,25,105,1,0,0,0,27,107,1,0,0,0,29,109,1,0,0,
        0,31,111,1,0,0,0,33,117,1,0,0,0,35,119,1,0,0,0,37,121,1,0,0,0,39,
        133,1,0,0,0,41,135,1,0,0,0,43,138,1,0,0,0,45,141,1,0,0,0,47,143,
        1,0,0,0,49,148,1,0,0,0,51,158,1,0,0,0,53,160,1,0,0,0,55,162,1,0,
        0,0,57,169,1,0,0,0,59,60,7,0,0,0,60,2,1,0,0,0,61,62,2,48,57,0,62,
        4,1,0,0,0,63,69,3,1,0,0,64,68,3,1,0,0,65,68,3,3,1,0,66,68,7,1,0,
        0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,
        1,0,0,0,69,70,1,0,0,0,70,6,1,0,0,0,71,69,1,0,0,0,72,74,3,3,1,0,73,
        72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,8,1,0,0,
        0,77,78,5,44,0,0,78,10,1,0,0,0,79,80,5,61,0,0,80,12,1,0,0,0,81,82,
        7,2,0,0,82,14,1,0,0,0,83,84,5,40,0,0,84,16,1,0,0,0,85,86,5,41,0,
        0,86,18,1,0,0,0,87,91,5,91,0,0,88,89,5,40,0,0,89,91,5,47,0,0,90,
        87,1,0,0,0,90,88,1,0,0,0,91,20,1,0,0,0,92,96,5,93,0,0,93,94,5,47,
        0,0,94,96,5,41,0,0,95,92,1,0,0,0,95,93,1,0,0,0,96,22,1,0,0,0,97,
        101,5,123,0,0,98,99,5,40,0,0,99,101,5,58,0,0,100,97,1,0,0,0,100,
        98,1,0,0,0,101,24,1,0,0,0,102,106,5,125,0,0,103,104,5,58,0,0,104,
        106,5,41,0,0,105,102,1,0,0,0,105,103,1,0,0,0,106,26,1,0,0,0,107,
        108,5,45,0,0,108,28,1,0,0,0,109,110,5,42,0,0,110,30,1,0,0,0,111,
        112,7,3,0,0,112,32,1,0,0,0,113,118,5,39,0,0,114,115,5,226,0,0,115,
        116,5,8364,0,0,116,118,5,8482,0,0,117,113,1,0,0,0,117,114,1,0,0,
        0,118,34,1,0,0,0,119,120,5,34,0,0,120,36,1,0,0,0,121,122,5,63,0,
        0,122,38,1,0,0,0,123,124,5,92,0,0,124,134,5,34,0,0,125,126,5,92,
        0,0,126,134,5,39,0,0,127,128,5,92,0,0,128,129,5,226,0,0,129,130,
        5,8364,0,0,130,134,5,8482,0,0,131,132,5,92,0,0,132,134,5,92,0,0,
        133,123,1,0,0,0,133,125,1,0,0,0,133,127,1,0,0,0,133,131,1,0,0,0,
        134,40,1,0,0,0,135,136,5,40,0,0,136,137,5,42,0,0,137,42,1,0,0,0,
        138,139,5,42,0,0,139,140,5,41,0,0,140,44,1,0,0,0,141,142,5,32,0,
        0,142,46,1,0,0,0,143,144,5,9,0,0,144,48,1,0,0,0,145,147,5,13,0,0,
        146,145,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,
        149,151,1,0,0,0,150,148,1,0,0,0,151,155,5,10,0,0,152,154,5,13,0,
        0,153,152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,
        0,156,50,1,0,0,0,157,155,1,0,0,0,158,159,5,11,0,0,159,52,1,0,0,0,
        160,161,5,12,0,0,161,54,1,0,0,0,162,163,7,4,0,0,163,56,1,0,0,0,164,
        170,3,45,22,0,165,170,3,47,23,0,166,170,3,49,24,0,167,170,3,51,25,
        0,168,170,3,53,26,0,169,164,1,0,0,0,169,165,1,0,0,0,169,166,1,0,
        0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,171,1,0,0,0,171,169,1,0,
        0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,174,6,28,0,0,174,58,1,0,
        0,0,14,0,67,69,75,90,95,100,105,117,133,148,155,169,171,1,6,0,0
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