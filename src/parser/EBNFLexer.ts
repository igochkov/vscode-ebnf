// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class EBNFLexer extends antlr.Lexer {
    public static readonly CONCATENATE_SYMBOL = 1;
    public static readonly DEFINING_SYMBOL = 2;
    public static readonly EXCEPT_SYMBOL = 3;
    public static readonly FIRST_QUOTE_SYMBOL = 4;
    public static readonly REPETITION_SYMBOL = 5;
    public static readonly SECOND_QUOTE_SYMBOL = 6;
    public static readonly SPECIAL_SEQUENCE_SYMBOL = 7;
    public static readonly END_GROUP_SYMBOL = 8;
    public static readonly START_GROUP_SYMBOL = 9;
    public static readonly START_COMMENT_SYMBOL = 10;
    public static readonly END_COMMENT_SYMBOL = 11;
    public static readonly END_OPTION_SYMBOL = 12;
    public static readonly END_REPEAT_SYMBOL = 13;
    public static readonly START_OPTION_SYMBOL = 14;
    public static readonly START_REPEAT_SYMBOL = 15;
    public static readonly DEFINITION_SEPARATOR_SYMBOL = 16;
    public static readonly TERMINATOR_SYMBOL = 17;
    public static readonly GAP_SEPARATOR = 18;
    public static readonly INTEGER = 19;
    public static readonly META_IDENTIFIER = 20;
    public static readonly TERMINAL_STRING = 21;
    public static readonly SPECIAL_SEQUENCE = 22;
    public static readonly COMMENT_SYMBOL = 23;
    public static readonly BRACKETED_TEXTUAL_COMMENT = 24;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL", "WHITESPACE_CHANNEL"
    ];

    public static readonly literalNames = [
        null, "','", "'='", "'-'", "'''", "'*'", "'\"'", "'?'", "')'", "'('", 
        "'(*'", "'*)'"
    ];

    public static readonly symbolicNames = [
        null, "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", 
        "FIRST_QUOTE_SYMBOL", "REPETITION_SYMBOL", "SECOND_QUOTE_SYMBOL", 
        "SPECIAL_SEQUENCE_SYMBOL", "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", 
        "START_COMMENT_SYMBOL", "END_COMMENT_SYMBOL", "END_OPTION_SYMBOL", 
        "END_REPEAT_SYMBOL", "START_OPTION_SYMBOL", "START_REPEAT_SYMBOL", 
        "DEFINITION_SEPARATOR_SYMBOL", "TERMINATOR_SYMBOL", "GAP_SEPARATOR", 
        "INTEGER", "META_IDENTIFIER", "TERMINAL_STRING", "SPECIAL_SEQUENCE", 
        "COMMENT_SYMBOL", "BRACKETED_TEXTUAL_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", "EXCEPT_SYMBOL", "FIRST_QUOTE_SYMBOL", 
        "REPETITION_SYMBOL", "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", 
        "END_GROUP_SYMBOL", "START_GROUP_SYMBOL", "START_COMMENT_SYMBOL", 
        "END_COMMENT_SYMBOL", "END_OPTION_SYMBOL", "END_REPEAT_SYMBOL", 
        "START_OPTION_SYMBOL", "START_REPEAT_SYMBOL", "DEFINITION_SEPARATOR_SYMBOL", 
        "TERMINATOR_SYMBOL", "SPACE_CHARACTER", "NEW_LINE", "FORM_FEED", 
        "HORIZONTAL_TABULATION_CHARACTER", "VERTICAL_TABULATION_CHARACTER", 
        "LETTER", "DECIMAL_DIGIT", "GAP_SEPARATOR", "META_IDENTIFIER_CHARACTER", 
        "INTEGER", "META_IDENTIFIER", "FIRST_TERMINAL_CHARACTER", "SECOND_TERMINAL_CHARACTER", 
        "SPECIAL_SEQUENCE_CHARACTER", "TERMINAL_STRING", "SPECIAL_SEQUENCE", 
        "COMMENTLESS_SYMBOL", "COMMENT_SYMBOL", "BRACKETED_TEXTUAL_COMMENT",
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
        4,0,24,224,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,
        1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,
        10,1,11,1,11,1,11,3,11,101,8,11,1,12,1,12,1,12,3,12,106,8,12,1,13,
        1,13,1,13,3,13,111,8,13,1,14,1,14,1,14,3,14,116,8,14,1,15,1,15,1,
        16,1,16,1,17,1,17,1,18,5,18,125,8,18,10,18,12,18,128,9,18,1,18,1,
        18,5,18,132,8,18,10,18,12,18,135,9,18,1,19,1,19,1,20,1,20,1,21,1,
        21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,1,24,4,24,152,8,24,11,
        24,12,24,153,1,24,1,24,1,25,1,25,1,25,3,25,161,8,25,1,26,4,26,164,
        8,26,11,26,12,26,165,1,27,1,27,5,27,170,8,27,10,27,12,27,173,9,27,
        1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,4,31,183,8,31,11,31,12,31,
        184,1,31,1,31,1,31,1,31,4,31,191,8,31,11,31,12,31,192,1,31,1,31,
        3,31,197,8,31,1,32,1,32,5,32,201,8,32,10,32,12,32,204,9,32,1,32,
        1,32,1,33,1,33,1,34,1,34,3,34,212,8,34,1,35,1,35,5,35,216,8,35,10,
        35,12,35,219,9,35,1,35,1,35,1,35,1,35,0,0,36,1,1,3,2,5,3,7,4,9,5,
        11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
        17,35,0,37,0,39,0,41,0,43,0,45,0,47,0,49,18,51,0,53,19,55,20,57,
        0,59,0,61,0,63,21,65,22,67,0,69,23,71,24,1,0,9,3,0,33,33,47,47,124,
        124,2,0,46,46,59,59,2,0,65,90,97,122,1,0,48,57,2,0,45,45,95,95,3,
        0,9,10,12,13,39,39,3,0,9,10,12,13,34,34,3,0,9,10,12,13,63,63,1,0,
        40,42,232,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
        0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
        0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
        0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,49,1,0,0,0,0,53,1,0,0,0,0,55,1,
        0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,1,73,1,
        0,0,0,3,75,1,0,0,0,5,77,1,0,0,0,7,79,1,0,0,0,9,81,1,0,0,0,11,83,
        1,0,0,0,13,85,1,0,0,0,15,87,1,0,0,0,17,89,1,0,0,0,19,91,1,0,0,0,
        21,94,1,0,0,0,23,100,1,0,0,0,25,105,1,0,0,0,27,110,1,0,0,0,29,115,
        1,0,0,0,31,117,1,0,0,0,33,119,1,0,0,0,35,121,1,0,0,0,37,126,1,0,
        0,0,39,136,1,0,0,0,41,138,1,0,0,0,43,140,1,0,0,0,45,142,1,0,0,0,
        47,144,1,0,0,0,49,151,1,0,0,0,51,160,1,0,0,0,53,163,1,0,0,0,55,167,
        1,0,0,0,57,174,1,0,0,0,59,176,1,0,0,0,61,178,1,0,0,0,63,196,1,0,
        0,0,65,198,1,0,0,0,67,207,1,0,0,0,69,211,1,0,0,0,71,213,1,0,0,0,
        73,74,5,44,0,0,74,2,1,0,0,0,75,76,5,61,0,0,76,4,1,0,0,0,77,78,5,
        45,0,0,78,6,1,0,0,0,79,80,5,39,0,0,80,8,1,0,0,0,81,82,5,42,0,0,82,
        10,1,0,0,0,83,84,5,34,0,0,84,12,1,0,0,0,85,86,5,63,0,0,86,14,1,0,
        0,0,87,88,5,41,0,0,88,16,1,0,0,0,89,90,5,40,0,0,90,18,1,0,0,0,91,
        92,5,40,0,0,92,93,5,42,0,0,93,20,1,0,0,0,94,95,5,42,0,0,95,96,5,
        41,0,0,96,22,1,0,0,0,97,101,5,93,0,0,98,99,5,47,0,0,99,101,5,41,
        0,0,100,97,1,0,0,0,100,98,1,0,0,0,101,24,1,0,0,0,102,106,5,125,0,
        0,103,104,5,58,0,0,104,106,5,41,0,0,105,102,1,0,0,0,105,103,1,0,
        0,0,106,26,1,0,0,0,107,111,5,91,0,0,108,109,5,40,0,0,109,111,5,47,
        0,0,110,107,1,0,0,0,110,108,1,0,0,0,111,28,1,0,0,0,112,116,5,123,
        0,0,113,114,5,40,0,0,114,116,5,58,0,0,115,112,1,0,0,0,115,113,1,
        0,0,0,116,30,1,0,0,0,117,118,7,0,0,0,118,32,1,0,0,0,119,120,7,1,
        0,0,120,34,1,0,0,0,121,122,5,32,0,0,122,36,1,0,0,0,123,125,5,13,
        0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,
        0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,133,5,10,0,0,130,132,5,13,
        0,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,
        0,0,134,38,1,0,0,0,135,133,1,0,0,0,136,137,5,12,0,0,137,40,1,0,0,
        0,138,139,5,9,0,0,139,42,1,0,0,0,140,141,5,11,0,0,141,44,1,0,0,0,
        142,143,7,2,0,0,143,46,1,0,0,0,144,145,7,3,0,0,145,48,1,0,0,0,146,
        152,3,35,17,0,147,152,3,41,20,0,148,152,3,37,18,0,149,152,3,43,21,
        0,150,152,3,39,19,0,151,146,1,0,0,0,151,147,1,0,0,0,151,148,1,0,
        0,0,151,149,1,0,0,0,151,150,1,0,0,0,152,153,1,0,0,0,153,151,1,0,
        0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,156,6,24,0,0,156,50,1,0,
        0,0,157,161,3,45,22,0,158,161,3,47,23,0,159,161,7,4,0,0,160,157,
        1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,161,52,1,0,0,0,162,164,3,
        47,23,0,163,162,1,0,0,0,164,165,1,0,0,0,165,163,1,0,0,0,165,166,
        1,0,0,0,166,54,1,0,0,0,167,171,3,45,22,0,168,170,3,51,25,0,169,168,
        1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,56,1,
        0,0,0,173,171,1,0,0,0,174,175,8,5,0,0,175,58,1,0,0,0,176,177,8,6,
        0,0,177,60,1,0,0,0,178,179,8,7,0,0,179,62,1,0,0,0,180,182,3,7,3,
        0,181,183,3,57,28,0,182,181,1,0,0,0,183,184,1,0,0,0,184,182,1,0,
        0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,3,7,3,0,187,197,1,0,
        0,0,188,190,3,11,5,0,189,191,3,59,29,0,190,189,1,0,0,0,191,192,1,
        0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,195,3,
        11,5,0,195,197,1,0,0,0,196,180,1,0,0,0,196,188,1,0,0,0,197,64,1,
        0,0,0,198,202,3,13,6,0,199,201,3,61,30,0,200,199,1,0,0,0,201,204,
        1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,202,
        1,0,0,0,205,206,3,13,6,0,206,66,1,0,0,0,207,208,8,8,0,0,208,68,1,
        0,0,0,209,212,3,71,35,0,210,212,3,67,33,0,211,209,1,0,0,0,211,210,
        1,0,0,0,212,70,1,0,0,0,213,217,3,19,9,0,214,216,3,69,34,0,215,214,
        1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,220,
        1,0,0,0,219,217,1,0,0,0,220,221,3,21,10,0,221,222,1,0,0,0,222,223,
        6,35,1,0,223,72,1,0,0,0,18,0,100,105,110,115,126,133,151,153,160,
        165,171,184,192,196,202,211,217,2,6,0,0,0,2,0
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