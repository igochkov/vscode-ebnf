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
    public static readonly END_COMMENT_SYMBOL = 8;
    public static readonly END_OPTION_SYMBOL = 9;
    public static readonly END_REPEAT_SYMBOL = 10;
    public static readonly START_OPTION_SYMBOL = 11;
    public static readonly START_REPEAT_SYMBOL = 12;
    public static readonly DEFINITION_SEPARATOR_SYMBOL = 13;
    public static readonly TERMINATOR_SYMBOL = 14;
    public static readonly OTHER_CHARACTER = 15;
    public static readonly INTEGER = 16;
    public static readonly META_IDENTIFIER = 17;
    public static readonly GAP_SEPARATOR = 18;
    public static readonly TERMINAL_STRING = 19;
    public static readonly SPECIAL_SEQUENCE = 20;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "','", "'='", "'-'", "'*'", "')'", "'('", "'(*'", "'*)'"
    ];

    public static readonly symbolicNames = [
        null, "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", 
        "REPETITION_SYMBOL", "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_COMMENT_SYMBOL", "END_OPTION_SYMBOL", "END_REPEAT_SYMBOL", 
        "START_OPTION_SYMBOL", "START_REPEAT_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", 
        "TERMINATOR_SYMBOL", "OTHER_CHARACTER", "INTEGER", "META_IDENTIFIER", 
        "GAP_SEPARATOR", "TERMINAL_STRING", "SPECIAL_SEQUENCE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", "REPETITION_SYMBOL", 
        "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_COMMENT_SYMBOL", "END_OPTION_SYMBOL", "END_REPEAT_SYMBOL", 
        "START_OPTION_SYMBOL", "START_REPEAT_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", 
        "TERMINATOR_SYMBOL", "SPACE_CHARACTER", "NEW_LINE", "FORM_FEED", 
        "HORIZONTAL_TABULATION_CHARACTER", "VERTICAL_TABULATION_CHARACTER", 
        "FIRST_QUOTE_SYMBOL", "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", 
        "FIRST_TERMINAL_CHARACTER", "SECOND_TERMINAL_CHARACTER", "SPECIAL_SEQUENCE_CHARACTER", 
        "LETTER", "DECIMAL_DIGIT", "META_IDENTIFIER_CHARACTER", "OTHER_CHARACTER", 
        "INTEGER", "META_IDENTIFIER", "GAP_SEPARATOR", "TERMINAL_STRING", 
        "SPECIAL_SEQUENCE",
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
        4,0,20,205,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
        1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,3,8,91,8,8,1,9,1,9,1,9,3,9,96,8,
        9,1,10,1,10,1,10,3,10,101,8,10,1,11,1,11,1,11,3,11,106,8,11,1,12,
        1,12,1,13,1,13,1,14,1,14,1,15,5,15,115,8,15,10,15,12,15,118,9,15,
        1,15,1,15,5,15,122,8,15,10,15,12,15,125,9,15,1,16,1,16,1,17,1,17,
        1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,
        1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,3,27,152,8,27,1,28,1,28,
        1,29,4,29,157,8,29,11,29,12,29,158,1,30,1,30,5,30,163,8,30,10,30,
        12,30,166,9,30,1,31,1,31,1,31,1,31,1,31,4,31,173,8,31,11,31,12,31,
        174,1,31,1,31,1,32,1,32,4,32,181,8,32,11,32,12,32,182,1,32,1,32,
        1,32,1,32,4,32,189,8,32,11,32,12,32,190,1,32,1,32,3,32,195,8,32,
        1,33,1,33,5,33,199,8,33,10,33,12,33,202,9,33,1,33,1,33,0,0,34,1,
        1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
        14,29,0,31,0,33,0,35,0,37,0,39,0,41,0,43,0,45,0,47,0,49,0,51,0,53,
        0,55,0,57,15,59,16,61,17,63,18,65,19,67,20,1,0,9,3,0,33,33,47,47,
        124,124,2,0,46,46,59,59,3,0,9,10,12,13,39,39,3,0,9,10,12,13,34,34,
        3,0,9,10,12,13,63,63,2,0,65,90,97,122,1,0,48,57,2,0,45,45,95,95,
        9,0,35,38,43,43,58,58,60,60,62,62,64,64,92,92,94,96,126,126,209,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
        1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,57,1,0,0,0,0,59,
        1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,1,69,
        1,0,0,0,3,71,1,0,0,0,5,73,1,0,0,0,7,75,1,0,0,0,9,77,1,0,0,0,11,79,
        1,0,0,0,13,81,1,0,0,0,15,84,1,0,0,0,17,90,1,0,0,0,19,95,1,0,0,0,
        21,100,1,0,0,0,23,105,1,0,0,0,25,107,1,0,0,0,27,109,1,0,0,0,29,111,
        1,0,0,0,31,116,1,0,0,0,33,126,1,0,0,0,35,128,1,0,0,0,37,130,1,0,
        0,0,39,132,1,0,0,0,41,134,1,0,0,0,43,136,1,0,0,0,45,138,1,0,0,0,
        47,140,1,0,0,0,49,142,1,0,0,0,51,144,1,0,0,0,53,146,1,0,0,0,55,151,
        1,0,0,0,57,153,1,0,0,0,59,156,1,0,0,0,61,160,1,0,0,0,63,172,1,0,
        0,0,65,194,1,0,0,0,67,196,1,0,0,0,69,70,5,44,0,0,70,2,1,0,0,0,71,
        72,5,61,0,0,72,4,1,0,0,0,73,74,5,45,0,0,74,6,1,0,0,0,75,76,5,42,
        0,0,76,8,1,0,0,0,77,78,5,41,0,0,78,10,1,0,0,0,79,80,5,40,0,0,80,
        12,1,0,0,0,81,82,5,40,0,0,82,83,5,42,0,0,83,14,1,0,0,0,84,85,5,42,
        0,0,85,86,5,41,0,0,86,16,1,0,0,0,87,91,5,93,0,0,88,89,5,47,0,0,89,
        91,5,41,0,0,90,87,1,0,0,0,90,88,1,0,0,0,91,18,1,0,0,0,92,96,5,125,
        0,0,93,94,5,58,0,0,94,96,5,41,0,0,95,92,1,0,0,0,95,93,1,0,0,0,96,
        20,1,0,0,0,97,101,5,91,0,0,98,99,5,40,0,0,99,101,5,47,0,0,100,97,
        1,0,0,0,100,98,1,0,0,0,101,22,1,0,0,0,102,106,5,123,0,0,103,104,
        5,40,0,0,104,106,5,58,0,0,105,102,1,0,0,0,105,103,1,0,0,0,106,24,
        1,0,0,0,107,108,7,0,0,0,108,26,1,0,0,0,109,110,7,1,0,0,110,28,1,
        0,0,0,111,112,5,32,0,0,112,30,1,0,0,0,113,115,5,13,0,0,114,113,1,
        0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,
        0,0,0,118,116,1,0,0,0,119,123,5,10,0,0,120,122,5,13,0,0,121,120,
        1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,32,1,
        0,0,0,125,123,1,0,0,0,126,127,5,12,0,0,127,34,1,0,0,0,128,129,5,
        9,0,0,129,36,1,0,0,0,130,131,5,11,0,0,131,38,1,0,0,0,132,133,5,39,
        0,0,133,40,1,0,0,0,134,135,5,34,0,0,135,42,1,0,0,0,136,137,5,63,
        0,0,137,44,1,0,0,0,138,139,8,2,0,0,139,46,1,0,0,0,140,141,8,3,0,
        0,141,48,1,0,0,0,142,143,8,4,0,0,143,50,1,0,0,0,144,145,7,5,0,0,
        145,52,1,0,0,0,146,147,7,6,0,0,147,54,1,0,0,0,148,152,3,51,25,0,
        149,152,3,53,26,0,150,152,7,7,0,0,151,148,1,0,0,0,151,149,1,0,0,
        0,151,150,1,0,0,0,152,56,1,0,0,0,153,154,7,8,0,0,154,58,1,0,0,0,
        155,157,3,53,26,0,156,155,1,0,0,0,157,158,1,0,0,0,158,156,1,0,0,
        0,158,159,1,0,0,0,159,60,1,0,0,0,160,164,3,51,25,0,161,163,3,55,
        27,0,162,161,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,
        0,0,165,62,1,0,0,0,166,164,1,0,0,0,167,173,3,29,14,0,168,173,3,35,
        17,0,169,173,3,31,15,0,170,173,3,37,18,0,171,173,3,33,16,0,172,167,
        1,0,0,0,172,168,1,0,0,0,172,169,1,0,0,0,172,170,1,0,0,0,172,171,
        1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,176,
        1,0,0,0,176,177,6,31,0,0,177,64,1,0,0,0,178,180,3,39,19,0,179,181,
        3,45,22,0,180,179,1,0,0,0,181,182,1,0,0,0,182,180,1,0,0,0,182,183,
        1,0,0,0,183,184,1,0,0,0,184,185,3,39,19,0,185,195,1,0,0,0,186,188,
        3,41,20,0,187,189,3,47,23,0,188,187,1,0,0,0,189,190,1,0,0,0,190,
        188,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,3,41,20,0,193,
        195,1,0,0,0,194,178,1,0,0,0,194,186,1,0,0,0,195,66,1,0,0,0,196,200,
        3,43,21,0,197,199,3,49,24,0,198,197,1,0,0,0,199,202,1,0,0,0,200,
        198,1,0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,
        204,3,43,21,0,204,68,1,0,0,0,16,0,90,95,100,105,116,123,151,158,
        164,172,174,182,190,194,200,1,6,0,0
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