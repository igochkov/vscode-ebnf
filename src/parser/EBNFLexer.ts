// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class EBNFLexer extends antlr.Lexer {
    public static readonly CONCATENATE_SYMBOL = 1;
    public static readonly DEFINING_SYMBOL = 2;
    public static readonly EXCEPT_SYMBOL = 3;
    public static readonly REPETITION_SYMBOL = 4;
    public static readonly END_GROUP_SYMBOL = 5;
    public static readonly START_GROUP_SYMBOL = 6;
    public static readonly START_COMMENT_SYMBOL = 7;
    public static readonly END_OPTION_SYMBOL = 8;
    public static readonly END_REPEAT_SYMBOL = 9;
    public static readonly START_OPTION_SYMBOL = 10;
    public static readonly START_REPEAT_SYMBOL = 11;
    public static readonly DEFINITION_SEPARATOR_SYMBOL = 12;
    public static readonly TERMINATOR_SYMBOL = 13;
    public static readonly INTEGER = 14;
    public static readonly META_IDENTIFIER = 15;
    public static readonly GAP_SEPARATOR = 16;
    public static readonly TERMINAL_STRING = 17;
    public static readonly SPECIAL_SEQUENCE = 18;
    public static readonly END_COMMENT_SYMBOL = 19;
    public static readonly NESTED_START_COMMENT_SYMBOL = 20;
    public static readonly OTHER_CHARACTER = 21;
    public static readonly COMMENT = 1;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "','", "'='", "'-'", "'*'", "')'", "'('", null, null, null, 
        null, null, null, null, null, null, null, null, null, "'*)'"
    ];

    public static readonly symbolicNames = [
        null, "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", 
        "REPETITION_SYMBOL", "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_OPTION_SYMBOL", "END_REPEAT_SYMBOL", "START_OPTION_SYMBOL", 
        "START_REPEAT_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", "TERMINATOR_SYMBOL", 
        "INTEGER", "META_IDENTIFIER", "GAP_SEPARATOR", "TERMINAL_STRING", 
        "SPECIAL_SEQUENCE", "END_COMMENT_SYMBOL", "NESTED_START_COMMENT_SYMBOL", 
        "OTHER_CHARACTER"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "COMMENT",
    ];

    public static readonly ruleNames = [
        "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", "REPETITION_SYMBOL", 
        "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_OPTION_SYMBOL", "END_REPEAT_SYMBOL", "START_OPTION_SYMBOL", 
        "START_REPEAT_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", "TERMINATOR_SYMBOL", 
        "SPACE_CHARACTER", "NEW_LINE", "FORM_FEED", "HORIZONTAL_TABULATION_CHARACTER", 
        "VERTICAL_TABULATION_CHARACTER", "FIRST_QUOTE_SYMBOL", "SECOND_QUOTE_SYMBOL", 
        "SPECIAL_SEQUENCE_SYMBOL", "FIRST_TERMINAL_CHARACTER", "SECOND_TERMINAL_CHARACTER", 
        "SPECIAL_SEQUENCE_CHARACTER", "LETTER", "DECIMAL_DIGIT", "META_IDENTIFIER_CHARACTER", 
        "INTEGER", "META_IDENTIFIER", "GAP_SEPARATOR", "TERMINAL_STRING", 
        "SPECIAL_SEQUENCE", "END_COMMENT_SYMBOL", "NESTED_START_COMMENT_SYMBOL", 
        "OTHER_CHARACTER",
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
        4,0,21,217,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,
        7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
        1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,3,7,93,8,7,1,8,1,8,1,8,3,
        8,98,8,8,1,9,1,9,1,9,3,9,103,8,9,1,10,1,10,1,10,3,10,108,8,10,1,
        11,1,11,1,12,1,12,1,13,1,13,1,14,5,14,117,8,14,10,14,12,14,120,9,
        14,1,14,1,14,5,14,124,8,14,10,14,12,14,127,9,14,1,15,1,15,1,16,1,
        16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,
        23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,26,3,26,154,8,26,1,27,4,
        27,157,8,27,11,27,12,27,158,1,28,1,28,5,28,163,8,28,10,28,12,28,
        166,9,28,1,29,1,29,1,29,1,29,1,29,4,29,173,8,29,11,29,12,29,174,
        1,29,1,29,1,30,1,30,4,30,181,8,30,11,30,12,30,182,1,30,1,30,1,30,
        1,30,4,30,189,8,30,11,30,12,30,190,1,30,1,30,3,30,195,8,30,1,31,
        1,31,5,31,199,8,31,10,31,12,31,202,9,31,1,31,1,31,1,32,1,32,1,32,
        1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,0,0,35,2,1,4,2,6,3,
        8,4,10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,0,30,0,32,
        0,34,0,36,0,38,0,40,0,42,0,44,0,46,0,48,0,50,0,52,0,54,0,56,14,58,
        15,60,16,62,17,64,18,66,19,68,20,70,21,2,0,1,8,3,0,33,33,47,47,124,
        124,2,0,46,46,59,59,3,0,9,10,12,13,39,39,3,0,9,10,12,13,34,34,3,
        0,9,10,12,13,63,63,2,0,65,90,97,122,1,0,48,57,2,0,45,45,95,95,220,
        0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,
        1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,
        1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,56,1,0,0,0,0,58,1,0,0,0,0,60,
        1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,1,66,1,0,0,0,1,68,1,0,0,0,1,70,
        1,0,0,0,2,72,1,0,0,0,4,74,1,0,0,0,6,76,1,0,0,0,8,78,1,0,0,0,10,80,
        1,0,0,0,12,82,1,0,0,0,14,84,1,0,0,0,16,92,1,0,0,0,18,97,1,0,0,0,
        20,102,1,0,0,0,22,107,1,0,0,0,24,109,1,0,0,0,26,111,1,0,0,0,28,113,
        1,0,0,0,30,118,1,0,0,0,32,128,1,0,0,0,34,130,1,0,0,0,36,132,1,0,
        0,0,38,134,1,0,0,0,40,136,1,0,0,0,42,138,1,0,0,0,44,140,1,0,0,0,
        46,142,1,0,0,0,48,144,1,0,0,0,50,146,1,0,0,0,52,148,1,0,0,0,54,153,
        1,0,0,0,56,156,1,0,0,0,58,160,1,0,0,0,60,172,1,0,0,0,62,194,1,0,
        0,0,64,196,1,0,0,0,66,205,1,0,0,0,68,210,1,0,0,0,70,215,1,0,0,0,
        72,73,5,44,0,0,73,3,1,0,0,0,74,75,5,61,0,0,75,5,1,0,0,0,76,77,5,
        45,0,0,77,7,1,0,0,0,78,79,5,42,0,0,79,9,1,0,0,0,80,81,5,41,0,0,81,
        11,1,0,0,0,82,83,5,40,0,0,83,13,1,0,0,0,84,85,5,40,0,0,85,86,5,42,
        0,0,86,87,1,0,0,0,87,88,6,6,0,0,88,15,1,0,0,0,89,93,5,93,0,0,90,
        91,5,47,0,0,91,93,5,41,0,0,92,89,1,0,0,0,92,90,1,0,0,0,93,17,1,0,
        0,0,94,98,5,125,0,0,95,96,5,58,0,0,96,98,5,41,0,0,97,94,1,0,0,0,
        97,95,1,0,0,0,98,19,1,0,0,0,99,103,5,91,0,0,100,101,5,40,0,0,101,
        103,5,47,0,0,102,99,1,0,0,0,102,100,1,0,0,0,103,21,1,0,0,0,104,108,
        5,123,0,0,105,106,5,40,0,0,106,108,5,58,0,0,107,104,1,0,0,0,107,
        105,1,0,0,0,108,23,1,0,0,0,109,110,7,0,0,0,110,25,1,0,0,0,111,112,
        7,1,0,0,112,27,1,0,0,0,113,114,5,32,0,0,114,29,1,0,0,0,115,117,5,
        13,0,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,
        0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,125,5,10,0,0,122,124,5,
        13,0,0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,
        0,0,0,126,31,1,0,0,0,127,125,1,0,0,0,128,129,5,12,0,0,129,33,1,0,
        0,0,130,131,5,9,0,0,131,35,1,0,0,0,132,133,5,11,0,0,133,37,1,0,0,
        0,134,135,5,39,0,0,135,39,1,0,0,0,136,137,5,34,0,0,137,41,1,0,0,
        0,138,139,5,63,0,0,139,43,1,0,0,0,140,141,8,2,0,0,141,45,1,0,0,0,
        142,143,8,3,0,0,143,47,1,0,0,0,144,145,8,4,0,0,145,49,1,0,0,0,146,
        147,7,5,0,0,147,51,1,0,0,0,148,149,7,6,0,0,149,53,1,0,0,0,150,154,
        3,50,24,0,151,154,3,52,25,0,152,154,7,7,0,0,153,150,1,0,0,0,153,
        151,1,0,0,0,153,152,1,0,0,0,154,55,1,0,0,0,155,157,3,52,25,0,156,
        155,1,0,0,0,157,158,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,
        57,1,0,0,0,160,164,3,50,24,0,161,163,3,54,26,0,162,161,1,0,0,0,163,
        166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,59,1,0,0,0,166,164,
        1,0,0,0,167,173,3,28,13,0,168,173,3,34,16,0,169,173,3,30,14,0,170,
        173,3,36,17,0,171,173,3,32,15,0,172,167,1,0,0,0,172,168,1,0,0,0,
        172,169,1,0,0,0,172,170,1,0,0,0,172,171,1,0,0,0,173,174,1,0,0,0,
        174,172,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,6,29,1,0,
        177,61,1,0,0,0,178,180,3,38,18,0,179,181,3,44,21,0,180,179,1,0,0,
        0,181,182,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,
        0,184,185,3,38,18,0,185,195,1,0,0,0,186,188,3,40,19,0,187,189,3,
        46,22,0,188,187,1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,
        1,0,0,0,191,192,1,0,0,0,192,193,3,40,19,0,193,195,1,0,0,0,194,178,
        1,0,0,0,194,186,1,0,0,0,195,63,1,0,0,0,196,200,3,42,20,0,197,199,
        3,48,23,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,
        1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,204,3,42,20,0,204,65,
        1,0,0,0,205,206,5,42,0,0,206,207,5,41,0,0,207,208,1,0,0,0,208,209,
        6,32,2,0,209,67,1,0,0,0,210,211,5,40,0,0,211,212,5,42,0,0,212,213,
        1,0,0,0,213,214,6,33,0,0,214,69,1,0,0,0,215,216,9,0,0,0,216,71,1,
        0,0,0,17,0,1,92,97,102,107,118,125,153,158,164,172,174,182,190,194,
        200,3,5,1,0,6,0,0,4,0,0
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