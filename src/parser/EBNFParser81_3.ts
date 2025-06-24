// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_3.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { EBNFParser81_3Listener } from "./EBNFParser81_3Listener.js";
import { EBNFParser81_3Visitor } from "./EBNFParser81_3Visitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class EBNFParser81_3 extends antlr.Parser {
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
    public static readonly OTHER_CHARACTER = 18;
    public static readonly TERMINAL_CHARACTER = 19;
    public static readonly GAP_FREE_SYMBOL = 20;
    public static readonly GAP_FREE_TERMINAL_CHARACTER = 21;
    public static readonly TERMINAL_STRING = 22;
    public static readonly FIRST_TERMINAL_CHARACTER = 23;
    public static readonly SECOND_TERMINAL_CHARACTER = 24;
    public static readonly GAP_SEPARATOR = 25;
    public static readonly COMMENTLESS_SYMBOL = 26;
    public static readonly INTEGER = 27;
    public static readonly META_IDENTIFIER = 28;
    public static readonly SPECIAL_SEQUENCE = 29;
    public static readonly COMMENT_SYMBOL = 30;
    public static readonly BRACKETED_TEXTUAL_COMMENT = 31;
    public static readonly RULE_syntax = 0;

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
        "DEFINITION_SEPARATOR_SYMBOL", "TERMINATOR_SYMBOL", "OTHER_CHARACTER", 
        "TERMINAL_CHARACTER", "GAP_FREE_SYMBOL", "GAP_FREE_TERMINAL_CHARACTER", 
        "TERMINAL_STRING", "FIRST_TERMINAL_CHARACTER", "SECOND_TERMINAL_CHARACTER", 
        "GAP_SEPARATOR", "COMMENTLESS_SYMBOL", "INTEGER", "META_IDENTIFIER", 
        "SPECIAL_SEQUENCE", "COMMENT_SYMBOL", "BRACKETED_TEXTUAL_COMMENT"
    ];
    public static readonly ruleNames = [
        "syntax",
    ];

    public get grammarFileName(): string { return "EBNFParser81_3.g4"; }
    public get literalNames(): (string | null)[] { return EBNFParser81_3.literalNames; }
    public get symbolicNames(): (string | null)[] { return EBNFParser81_3.symbolicNames; }
    public get ruleNames(): string[] { return EBNFParser81_3.ruleNames; }
    public get serializedATN(): number[] { return EBNFParser81_3._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, EBNFParser81_3._ATN, EBNFParser81_3.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public syntax(): SyntaxContext {
        let localContext = new SyntaxContext(this.context, this.state);
        this.enterRule(localContext, 0, EBNFParser81_3.RULE_syntax);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 5;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 31) {
                {
                {
                this.state = 2;
                this.match(EBNFParser81_3.BRACKETED_TEXTUAL_COMMENT);
                }
                }
                this.state = 7;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 8;
            this.match(EBNFParser81_3.COMMENTLESS_SYMBOL);
            this.state = 12;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 31) {
                {
                {
                this.state = 9;
                this.match(EBNFParser81_3.BRACKETED_TEXTUAL_COMMENT);
                }
                }
                this.state = 14;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 24;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 15;
                this.match(EBNFParser81_3.COMMENTLESS_SYMBOL);
                this.state = 19;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 31) {
                    {
                    {
                    this.state = 16;
                    this.match(EBNFParser81_3.BRACKETED_TEXTUAL_COMMENT);
                    }
                    }
                    this.state = 21;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                }
                this.state = 26;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,31,28,2,0,7,0,1,0,5,0,4,8,0,10,0,12,0,7,9,0,1,0,1,0,5,0,11,8,
        0,10,0,12,0,14,9,0,1,0,1,0,5,0,18,8,0,10,0,12,0,21,9,0,5,0,23,8,
        0,10,0,12,0,26,9,0,1,0,0,0,1,0,0,0,30,0,5,1,0,0,0,2,4,5,31,0,0,3,
        2,1,0,0,0,4,7,1,0,0,0,5,3,1,0,0,0,5,6,1,0,0,0,6,8,1,0,0,0,7,5,1,
        0,0,0,8,12,5,26,0,0,9,11,5,31,0,0,10,9,1,0,0,0,11,14,1,0,0,0,12,
        10,1,0,0,0,12,13,1,0,0,0,13,24,1,0,0,0,14,12,1,0,0,0,15,19,5,26,
        0,0,16,18,5,31,0,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,
        20,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,22,15,1,0,0,0,23,26,1,0,0,
        0,24,22,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,24,1,0,0,0,4,5,12,
        19,24
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!EBNFParser81_3.__ATN) {
            EBNFParser81_3.__ATN = new antlr.ATNDeserializer().deserialize(EBNFParser81_3._serializedATN);
        }

        return EBNFParser81_3.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(EBNFParser81_3.literalNames, EBNFParser81_3.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return EBNFParser81_3.vocabulary;
    }

    private static readonly decisionsToDFA = EBNFParser81_3._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SyntaxContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENTLESS_SYMBOL(): antlr.TerminalNode[];
    public COMMENTLESS_SYMBOL(i: number): antlr.TerminalNode | null;
    public COMMENTLESS_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser81_3.COMMENTLESS_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser81_3.COMMENTLESS_SYMBOL, i);
    	}
    }
    public BRACKETED_TEXTUAL_COMMENT(): antlr.TerminalNode[];
    public BRACKETED_TEXTUAL_COMMENT(i: number): antlr.TerminalNode | null;
    public BRACKETED_TEXTUAL_COMMENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser81_3.BRACKETED_TEXTUAL_COMMENT);
    	} else {
    		return this.getToken(EBNFParser81_3.BRACKETED_TEXTUAL_COMMENT, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser81_3.RULE_syntax;
    }
    public override enterRule(listener: EBNFParser81_3Listener): void {
        if(listener.enterSyntax) {
             listener.enterSyntax(this);
        }
    }
    public override exitRule(listener: EBNFParser81_3Listener): void {
        if(listener.exitSyntax) {
             listener.exitSyntax(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_3Visitor<Result>): Result | null {
        if (visitor.visitSyntax) {
            return visitor.visitSyntax(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
