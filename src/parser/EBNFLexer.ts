
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
        "META_IDENTIFIER_WORD", "META_IDENTIFIER_GAP", "INTEGER", "META_IDENTIFIER", 
        "GAP_SEPARATOR", "TERMINAL_STRING", "SPECIAL_SEQUENCE", "END_COMMENT_SYMBOL", 
        "NESTED_START_COMMENT_SYMBOL", "COMMENT_TERMINAL_STRING", "COMMENT_SPECIAL_SEQUENCE", 
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
        4,0,21,271,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,
        7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,
        1,6,1,7,1,7,1,7,3,7,101,8,7,1,8,1,8,1,8,3,8,106,8,8,1,9,1,9,1,9,
        3,9,111,8,9,1,10,1,10,1,10,3,10,116,8,10,1,11,1,11,1,12,1,12,1,13,
        1,13,1,14,5,14,125,8,14,10,14,12,14,128,9,14,1,14,1,14,5,14,132,
        8,14,10,14,12,14,135,9,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,
        1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,
        1,25,1,26,1,26,1,26,3,26,162,8,26,1,27,1,27,5,27,166,8,27,10,27,
        12,27,169,9,27,1,28,1,28,4,28,173,8,28,11,28,12,28,174,1,29,4,29,
        178,8,29,11,29,12,29,179,1,30,1,30,1,30,1,30,5,30,186,8,30,10,30,
        12,30,189,9,30,1,31,1,31,1,31,1,31,1,31,4,31,196,8,31,11,31,12,31,
        197,1,31,1,31,1,32,1,32,4,32,204,8,32,11,32,12,32,205,1,32,1,32,
        1,32,1,32,4,32,212,8,32,11,32,12,32,213,1,32,1,32,3,32,218,8,32,
        1,33,1,33,5,33,222,8,33,10,33,12,33,225,9,33,1,33,1,33,1,34,1,34,
        1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,4,36,241,8,36,
        11,36,12,36,242,1,36,1,36,1,36,1,36,4,36,249,8,36,11,36,12,36,250,
        1,36,1,36,3,36,255,8,36,1,36,1,36,1,37,1,37,5,37,261,8,37,10,37,
        12,37,264,9,37,1,37,1,37,1,37,1,37,1,38,1,38,0,0,39,2,1,4,2,6,3,
        8,4,10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,0,30,0,32,
        0,34,0,36,0,38,0,40,0,42,0,44,0,46,0,48,0,50,0,52,0,54,0,56,0,58,
        0,60,14,62,15,64,16,66,17,68,18,70,19,72,20,74,0,76,0,78,21,2,0,
        1,8,3,0,33,33,47,47,124,124,2,0,46,46,59,59,3,0,9,10,12,13,39,39,
        3,0,9,10,12,13,34,34,3,0,9,10,12,13,63,63,2,0,65,90,97,122,1,0,48,
        57,2,0,45,45,95,95,279,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,
        0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,
        0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,60,1,
        0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,68,1,0,0,0,1,70,1,
        0,0,0,1,72,1,0,0,0,1,74,1,0,0,0,1,76,1,0,0,0,1,78,1,0,0,0,2,80,1,
        0,0,0,4,82,1,0,0,0,6,84,1,0,0,0,8,86,1,0,0,0,10,88,1,0,0,0,12,90,
        1,0,0,0,14,92,1,0,0,0,16,100,1,0,0,0,18,105,1,0,0,0,20,110,1,0,0,
        0,22,115,1,0,0,0,24,117,1,0,0,0,26,119,1,0,0,0,28,121,1,0,0,0,30,
        126,1,0,0,0,32,136,1,0,0,0,34,138,1,0,0,0,36,140,1,0,0,0,38,142,
        1,0,0,0,40,144,1,0,0,0,42,146,1,0,0,0,44,148,1,0,0,0,46,150,1,0,
        0,0,48,152,1,0,0,0,50,154,1,0,0,0,52,156,1,0,0,0,54,161,1,0,0,0,
        56,163,1,0,0,0,58,172,1,0,0,0,60,177,1,0,0,0,62,181,1,0,0,0,64,195,
        1,0,0,0,66,217,1,0,0,0,68,219,1,0,0,0,70,228,1,0,0,0,72,233,1,0,
        0,0,74,254,1,0,0,0,76,258,1,0,0,0,78,269,1,0,0,0,80,81,5,44,0,0,
        81,3,1,0,0,0,82,83,5,61,0,0,83,5,1,0,0,0,84,85,5,45,0,0,85,7,1,0,
        0,0,86,87,5,42,0,0,87,9,1,0,0,0,88,89,5,41,0,0,89,11,1,0,0,0,90,
        91,5,40,0,0,91,13,1,0,0,0,92,93,5,40,0,0,93,94,5,42,0,0,94,95,1,
        0,0,0,95,96,6,6,0,0,96,15,1,0,0,0,97,101,5,93,0,0,98,99,5,47,0,0,
        99,101,5,41,0,0,100,97,1,0,0,0,100,98,1,0,0,0,101,17,1,0,0,0,102,
        106,5,125,0,0,103,104,5,58,0,0,104,106,5,41,0,0,105,102,1,0,0,0,
        105,103,1,0,0,0,106,19,1,0,0,0,107,111,5,91,0,0,108,109,5,40,0,0,
        109,111,5,47,0,0,110,107,1,0,0,0,110,108,1,0,0,0,111,21,1,0,0,0,
        112,116,5,123,0,0,113,114,5,40,0,0,114,116,5,58,0,0,115,112,1,0,
        0,0,115,113,1,0,0,0,116,23,1,0,0,0,117,118,7,0,0,0,118,25,1,0,0,
        0,119,120,7,1,0,0,120,27,1,0,0,0,121,122,5,32,0,0,122,29,1,0,0,0,
        123,125,5,13,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,
        126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,133,5,10,0,0,
        130,132,5,13,0,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,
        133,134,1,0,0,0,134,31,1,0,0,0,135,133,1,0,0,0,136,137,5,12,0,0,
        137,33,1,0,0,0,138,139,5,9,0,0,139,35,1,0,0,0,140,141,5,11,0,0,141,
        37,1,0,0,0,142,143,5,39,0,0,143,39,1,0,0,0,144,145,5,34,0,0,145,
        41,1,0,0,0,146,147,5,63,0,0,147,43,1,0,0,0,148,149,8,2,0,0,149,45,
        1,0,0,0,150,151,8,3,0,0,151,47,1,0,0,0,152,153,8,4,0,0,153,49,1,
        0,0,0,154,155,7,5,0,0,155,51,1,0,0,0,156,157,7,6,0,0,157,53,1,0,
        0,0,158,162,3,50,24,0,159,162,3,52,25,0,160,162,7,7,0,0,161,158,
        1,0,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,55,1,0,0,0,163,167,3,
        50,24,0,164,166,3,54,26,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,
        1,0,0,0,167,168,1,0,0,0,168,57,1,0,0,0,169,167,1,0,0,0,170,173,3,
        28,13,0,171,173,3,34,16,0,172,170,1,0,0,0,172,171,1,0,0,0,173,174,
        1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,59,1,0,0,0,176,178,3,
        52,25,0,177,176,1,0,0,0,178,179,1,0,0,0,179,177,1,0,0,0,179,180,
        1,0,0,0,180,61,1,0,0,0,181,187,3,56,27,0,182,183,3,58,28,0,183,184,
        3,56,27,0,184,186,1,0,0,0,185,182,1,0,0,0,186,189,1,0,0,0,187,185,
        1,0,0,0,187,188,1,0,0,0,188,63,1,0,0,0,189,187,1,0,0,0,190,196,3,
        28,13,0,191,196,3,34,16,0,192,196,3,30,14,0,193,196,3,36,17,0,194,
        196,3,32,15,0,195,190,1,0,0,0,195,191,1,0,0,0,195,192,1,0,0,0,195,
        193,1,0,0,0,195,194,1,0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,197,
        198,1,0,0,0,198,199,1,0,0,0,199,200,6,31,1,0,200,65,1,0,0,0,201,
        203,3,38,18,0,202,204,3,44,21,0,203,202,1,0,0,0,204,205,1,0,0,0,
        205,203,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,3,38,18,
        0,208,218,1,0,0,0,209,211,3,40,19,0,210,212,3,46,22,0,211,210,1,
        0,0,0,212,213,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,215,1,
        0,0,0,215,216,3,40,19,0,216,218,1,0,0,0,217,201,1,0,0,0,217,209,
        1,0,0,0,218,67,1,0,0,0,219,223,3,42,20,0,220,222,3,48,23,0,221,220,
        1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,
        1,0,0,0,225,223,1,0,0,0,226,227,3,42,20,0,227,69,1,0,0,0,228,229,
        5,42,0,0,229,230,5,41,0,0,230,231,1,0,0,0,231,232,6,34,2,0,232,71,
        1,0,0,0,233,234,5,40,0,0,234,235,5,42,0,0,235,236,1,0,0,0,236,237,
        6,35,0,0,237,73,1,0,0,0,238,240,3,38,18,0,239,241,3,44,21,0,240,
        239,1,0,0,0,241,242,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,
        244,1,0,0,0,244,245,3,38,18,0,245,255,1,0,0,0,246,248,3,40,19,0,
        247,249,3,46,22,0,248,247,1,0,0,0,249,250,1,0,0,0,250,248,1,0,0,
        0,250,251,1,0,0,0,251,252,1,0,0,0,252,253,3,40,19,0,253,255,1,0,
        0,0,254,238,1,0,0,0,254,246,1,0,0,0,255,256,1,0,0,0,256,257,6,36,
        3,0,257,75,1,0,0,0,258,262,3,42,20,0,259,261,3,48,23,0,260,259,1,
        0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,265,1,
        0,0,0,264,262,1,0,0,0,265,266,3,42,20,0,266,267,1,0,0,0,267,268,
        6,37,4,0,268,77,1,0,0,0,269,270,9,0,0,0,270,79,1,0,0,0,24,0,1,100,
        105,110,115,126,133,161,167,172,174,179,187,195,197,205,213,217,
        223,242,250,254,262,5,5,1,0,6,0,0,4,0,0,7,17,0,7,18,0
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