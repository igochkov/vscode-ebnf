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
    public static readonly COMMENTLESS_SYMBOL = 23;
    public static readonly COMMENT_SYMBOL = 24;
    public static readonly BRACKETED_TEXTUAL_COMMENT = 25;

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
        "COMMENTLESS_SYMBOL", "COMMENT_SYMBOL", "BRACKETED_TEXTUAL_COMMENT"
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
        4,0,25,232,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,
        1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,
        1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,105,8,11,1,12,1,12,1,12,
        3,12,110,8,12,1,13,1,13,1,13,3,13,115,8,13,1,14,1,14,1,14,3,14,120,
        8,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,5,18,129,8,18,10,18,12,18,
        132,9,18,1,18,1,18,5,18,136,8,18,10,18,12,18,139,9,18,1,19,1,19,
        1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,1,24,
        4,24,156,8,24,11,24,12,24,157,1,24,1,24,1,25,1,25,1,25,3,25,165,
        8,25,1,26,4,26,168,8,26,11,26,12,26,169,1,27,1,27,5,27,174,8,27,
        10,27,12,27,177,9,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,4,31,
        187,8,31,11,31,12,31,188,1,31,1,31,1,31,1,31,4,31,195,8,31,11,31,
        12,31,196,1,31,1,31,3,31,201,8,31,1,32,1,32,5,32,205,8,32,10,32,
        12,32,208,9,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,3,34,218,
        8,34,1,34,1,34,1,35,1,35,5,35,224,8,35,10,35,12,35,227,9,35,1,35,
        1,35,1,35,1,35,0,0,36,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
        10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,0,37,0,39,0,41,0,
        43,0,45,0,47,0,49,18,51,0,53,19,55,20,57,0,59,0,61,0,63,21,65,22,
        67,23,69,24,71,25,1,0,8,3,0,33,33,47,47,124,124,2,0,46,46,59,59,
        2,0,65,90,97,122,1,0,48,57,2,0,45,45,95,95,3,0,9,10,12,13,39,39,
        3,0,9,10,12,13,34,34,3,0,9,10,12,13,63,63,241,0,1,1,0,0,0,0,3,1,
        0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
        0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
        0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,
        0,0,0,49,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,63,1,0,0,0,0,65,1,0,
        0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,1,73,1,0,0,0,3,75,1,0,
        0,0,5,77,1,0,0,0,7,79,1,0,0,0,9,81,1,0,0,0,11,83,1,0,0,0,13,85,1,
        0,0,0,15,87,1,0,0,0,17,89,1,0,0,0,19,91,1,0,0,0,21,96,1,0,0,0,23,
        104,1,0,0,0,25,109,1,0,0,0,27,114,1,0,0,0,29,119,1,0,0,0,31,121,
        1,0,0,0,33,123,1,0,0,0,35,125,1,0,0,0,37,130,1,0,0,0,39,140,1,0,
        0,0,41,142,1,0,0,0,43,144,1,0,0,0,45,146,1,0,0,0,47,148,1,0,0,0,
        49,155,1,0,0,0,51,164,1,0,0,0,53,167,1,0,0,0,55,171,1,0,0,0,57,178,
        1,0,0,0,59,180,1,0,0,0,61,182,1,0,0,0,63,200,1,0,0,0,65,202,1,0,
        0,0,67,211,1,0,0,0,69,217,1,0,0,0,71,221,1,0,0,0,73,74,5,44,0,0,
        74,2,1,0,0,0,75,76,5,61,0,0,76,4,1,0,0,0,77,78,5,45,0,0,78,6,1,0,
        0,0,79,80,5,39,0,0,80,8,1,0,0,0,81,82,5,42,0,0,82,10,1,0,0,0,83,
        84,5,34,0,0,84,12,1,0,0,0,85,86,5,63,0,0,86,14,1,0,0,0,87,88,5,41,
        0,0,88,16,1,0,0,0,89,90,5,40,0,0,90,18,1,0,0,0,91,92,5,40,0,0,92,
        93,5,42,0,0,93,94,1,0,0,0,94,95,6,9,0,0,95,20,1,0,0,0,96,97,5,42,
        0,0,97,98,5,41,0,0,98,99,1,0,0,0,99,100,6,10,0,0,100,22,1,0,0,0,
        101,105,5,93,0,0,102,103,5,47,0,0,103,105,5,41,0,0,104,101,1,0,0,
        0,104,102,1,0,0,0,105,24,1,0,0,0,106,110,5,125,0,0,107,108,5,58,
        0,0,108,110,5,41,0,0,109,106,1,0,0,0,109,107,1,0,0,0,110,26,1,0,
        0,0,111,115,5,91,0,0,112,113,5,40,0,0,113,115,5,47,0,0,114,111,1,
        0,0,0,114,112,1,0,0,0,115,28,1,0,0,0,116,120,5,123,0,0,117,118,5,
        40,0,0,118,120,5,58,0,0,119,116,1,0,0,0,119,117,1,0,0,0,120,30,1,
        0,0,0,121,122,7,0,0,0,122,32,1,0,0,0,123,124,7,1,0,0,124,34,1,0,
        0,0,125,126,5,32,0,0,126,36,1,0,0,0,127,129,5,13,0,0,128,127,1,0,
        0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,
        0,0,132,130,1,0,0,0,133,137,5,10,0,0,134,136,5,13,0,0,135,134,1,
        0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,38,1,0,
        0,0,139,137,1,0,0,0,140,141,5,12,0,0,141,40,1,0,0,0,142,143,5,9,
        0,0,143,42,1,0,0,0,144,145,5,11,0,0,145,44,1,0,0,0,146,147,7,2,0,
        0,147,46,1,0,0,0,148,149,7,3,0,0,149,48,1,0,0,0,150,156,3,35,17,
        0,151,156,3,41,20,0,152,156,3,37,18,0,153,156,3,43,21,0,154,156,
        3,39,19,0,155,150,1,0,0,0,155,151,1,0,0,0,155,152,1,0,0,0,155,153,
        1,0,0,0,155,154,1,0,0,0,156,157,1,0,0,0,157,155,1,0,0,0,157,158,
        1,0,0,0,158,159,1,0,0,0,159,160,6,24,1,0,160,50,1,0,0,0,161,165,
        3,45,22,0,162,165,3,47,23,0,163,165,7,4,0,0,164,161,1,0,0,0,164,
        162,1,0,0,0,164,163,1,0,0,0,165,52,1,0,0,0,166,168,3,47,23,0,167,
        166,1,0,0,0,168,169,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,
        54,1,0,0,0,171,175,3,45,22,0,172,174,3,51,25,0,173,172,1,0,0,0,174,
        177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,56,1,0,0,0,177,175,
        1,0,0,0,178,179,8,5,0,0,179,58,1,0,0,0,180,181,8,6,0,0,181,60,1,
        0,0,0,182,183,8,7,0,0,183,62,1,0,0,0,184,186,3,7,3,0,185,187,3,57,
        28,0,186,185,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,0,
        0,0,189,190,1,0,0,0,190,191,3,7,3,0,191,201,1,0,0,0,192,194,3,11,
        5,0,193,195,3,59,29,0,194,193,1,0,0,0,195,196,1,0,0,0,196,194,1,
        0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,199,3,11,5,0,199,201,1,
        0,0,0,200,184,1,0,0,0,200,192,1,0,0,0,201,64,1,0,0,0,202,206,3,13,
        6,0,203,205,3,61,30,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,1,
        0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,210,3,
        13,6,0,210,66,1,0,0,0,211,212,9,0,0,0,212,213,1,0,0,0,213,214,6,
        33,0,0,214,68,1,0,0,0,215,218,3,71,35,0,216,218,3,67,33,0,217,215,
        1,0,0,0,217,216,1,0,0,0,218,219,1,0,0,0,219,220,6,34,0,0,220,70,
        1,0,0,0,221,225,3,19,9,0,222,224,3,69,34,0,223,222,1,0,0,0,224,227,
        1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,1,0,0,0,227,225,
        1,0,0,0,228,229,3,21,10,0,229,230,1,0,0,0,230,231,6,35,0,0,231,72,
        1,0,0,0,18,0,104,109,114,119,130,137,155,157,164,169,175,188,196,
        200,206,217,225,2,0,2,0,6,0,0
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