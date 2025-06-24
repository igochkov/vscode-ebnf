// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser81_4.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { EBNFParser81_4Listener } from "./EBNFParser81_4Listener.js";
import { EBNFParser81_4Visitor } from "./EBNFParser81_4Visitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class EBNFParser81_4 extends antlr.Parser {
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
    public static readonly RULE_syntaxRule = 1;
    public static readonly RULE_definitionsList = 2;
    public static readonly RULE_singleDefinition = 3;
    public static readonly RULE_syntacticTerm = 4;
    public static readonly RULE_syntacticException = 5;
    public static readonly RULE_syntacticExceptionFactor = 6;
    public static readonly RULE_syntacticExceptionPrimary = 7;
    public static readonly RULE_syntacticFactor = 8;
    public static readonly RULE_syntacticPrimary = 9;
    public static readonly RULE_optionalSequence = 10;
    public static readonly RULE_repeatedSequence = 11;
    public static readonly RULE_groupedSequence = 12;
    public static readonly RULE_emptySequence = 13;

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
        "syntax", "syntaxRule", "definitionsList", "singleDefinition", "syntacticTerm", 
        "syntacticException", "syntacticExceptionFactor", "syntacticExceptionPrimary", 
        "syntacticFactor", "syntacticPrimary", "optionalSequence", "repeatedSequence", 
        "groupedSequence", "emptySequence",
    ];

    public get grammarFileName(): string { return "EBNFParser81_4.g4"; }
    public get literalNames(): (string | null)[] { return EBNFParser81_4.literalNames; }
    public get symbolicNames(): (string | null)[] { return EBNFParser81_4.symbolicNames; }
    public get ruleNames(): string[] { return EBNFParser81_4.ruleNames; }
    public get serializedATN(): number[] { return EBNFParser81_4._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, EBNFParser81_4._ATN, EBNFParser81_4.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public syntax(): SyntaxContext {
        let localContext = new SyntaxContext(this.context, this.state);
        this.enterRule(localContext, 0, EBNFParser81_4.RULE_syntax);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 29;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 28;
                this.syntaxRule();
                }
                }
                this.state = 31;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 28);
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
    public syntaxRule(): SyntaxRuleContext {
        let localContext = new SyntaxRuleContext(this.context, this.state);
        this.enterRule(localContext, 2, EBNFParser81_4.RULE_syntaxRule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 33;
            this.match(EBNFParser81_4.META_IDENTIFIER);
            this.state = 34;
            this.match(EBNFParser81_4.DEFINING_SYMBOL);
            this.state = 35;
            this.definitionsList();
            this.state = 36;
            this.match(EBNFParser81_4.TERMINATOR_SYMBOL);
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
    public definitionsList(): DefinitionsListContext {
        let localContext = new DefinitionsListContext(this.context, this.state);
        this.enterRule(localContext, 4, EBNFParser81_4.RULE_definitionsList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 38;
            this.singleDefinition();
            this.state = 43;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 39;
                this.match(EBNFParser81_4.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 40;
                this.singleDefinition();
                }
                }
                this.state = 45;
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
    public singleDefinition(): SingleDefinitionContext {
        let localContext = new SingleDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 6, EBNFParser81_4.RULE_singleDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 46;
            this.syntacticTerm();
            this.state = 51;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 47;
                this.match(EBNFParser81_4.CONCATENATE_SYMBOL);
                this.state = 48;
                this.syntacticTerm();
                }
                }
                this.state = 53;
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
    public syntacticTerm(): SyntacticTermContext {
        let localContext = new SyntacticTermContext(this.context, this.state);
        this.enterRule(localContext, 8, EBNFParser81_4.RULE_syntacticTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.syntacticFactor();
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 55;
                this.match(EBNFParser81_4.EXCEPT_SYMBOL);
                this.state = 56;
                this.syntacticException();
                }
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
    public syntacticException(): SyntacticExceptionContext {
        let localContext = new SyntacticExceptionContext(this.context, this.state);
        this.enterRule(localContext, 10, EBNFParser81_4.RULE_syntacticException);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 59;
            this.syntacticExceptionFactor();
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
    public syntacticExceptionFactor(): SyntacticExceptionFactorContext {
        let localContext = new SyntacticExceptionFactorContext(this.context, this.state);
        this.enterRule(localContext, 12, EBNFParser81_4.RULE_syntacticExceptionFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 61;
                this.match(EBNFParser81_4.INTEGER);
                this.state = 62;
                this.match(EBNFParser81_4.REPETITION_SYMBOL);
                }
            }

            this.state = 65;
            this.syntacticExceptionPrimary();
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
    public syntacticExceptionPrimary(): SyntacticExceptionPrimaryContext {
        let localContext = new SyntacticExceptionPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 14, EBNFParser81_4.RULE_syntacticExceptionPrimary);
        try {
            this.state = 73;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser81_4.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 67;
                this.optionalSequence();
                }
                break;
            case EBNFParser81_4.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 68;
                this.repeatedSequence();
                }
                break;
            case EBNFParser81_4.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 69;
                this.groupedSequence();
                }
                break;
            case EBNFParser81_4.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 70;
                this.match(EBNFParser81_4.TERMINAL_STRING);
                }
                break;
            case EBNFParser81_4.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 71;
                this.match(EBNFParser81_4.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser81_4.CONCATENATE_SYMBOL:
            case EBNFParser81_4.END_GROUP_SYMBOL:
            case EBNFParser81_4.END_OPTION_SYMBOL:
            case EBNFParser81_4.END_REPEAT_SYMBOL:
            case EBNFParser81_4.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser81_4.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 72;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public syntacticFactor(): SyntacticFactorContext {
        let localContext = new SyntacticFactorContext(this.context, this.state);
        this.enterRule(localContext, 16, EBNFParser81_4.RULE_syntacticFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 75;
                this.match(EBNFParser81_4.INTEGER);
                this.state = 76;
                this.match(EBNFParser81_4.REPETITION_SYMBOL);
                }
            }

            this.state = 79;
            this.syntacticPrimary();
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
    public syntacticPrimary(): SyntacticPrimaryContext {
        let localContext = new SyntacticPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 18, EBNFParser81_4.RULE_syntacticPrimary);
        try {
            this.state = 88;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser81_4.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 81;
                this.optionalSequence();
                }
                break;
            case EBNFParser81_4.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 82;
                this.repeatedSequence();
                }
                break;
            case EBNFParser81_4.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 83;
                this.groupedSequence();
                }
                break;
            case EBNFParser81_4.META_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 84;
                this.match(EBNFParser81_4.META_IDENTIFIER);
                }
                break;
            case EBNFParser81_4.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 85;
                this.match(EBNFParser81_4.TERMINAL_STRING);
                }
                break;
            case EBNFParser81_4.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 86;
                this.match(EBNFParser81_4.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser81_4.CONCATENATE_SYMBOL:
            case EBNFParser81_4.EXCEPT_SYMBOL:
            case EBNFParser81_4.END_GROUP_SYMBOL:
            case EBNFParser81_4.END_OPTION_SYMBOL:
            case EBNFParser81_4.END_REPEAT_SYMBOL:
            case EBNFParser81_4.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser81_4.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 87;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public optionalSequence(): OptionalSequenceContext {
        let localContext = new OptionalSequenceContext(this.context, this.state);
        this.enterRule(localContext, 20, EBNFParser81_4.RULE_optionalSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 90;
            this.match(EBNFParser81_4.START_OPTION_SYMBOL);
            this.state = 91;
            this.definitionsList();
            this.state = 92;
            this.match(EBNFParser81_4.END_OPTION_SYMBOL);
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
    public repeatedSequence(): RepeatedSequenceContext {
        let localContext = new RepeatedSequenceContext(this.context, this.state);
        this.enterRule(localContext, 22, EBNFParser81_4.RULE_repeatedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            this.match(EBNFParser81_4.START_REPEAT_SYMBOL);
            this.state = 95;
            this.definitionsList();
            this.state = 96;
            this.match(EBNFParser81_4.END_REPEAT_SYMBOL);
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
    public groupedSequence(): GroupedSequenceContext {
        let localContext = new GroupedSequenceContext(this.context, this.state);
        this.enterRule(localContext, 24, EBNFParser81_4.RULE_groupedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.match(EBNFParser81_4.START_GROUP_SYMBOL);
            this.state = 99;
            this.definitionsList();
            this.state = 100;
            this.match(EBNFParser81_4.END_GROUP_SYMBOL);
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
    public emptySequence(): EmptySequenceContext {
        let localContext = new EmptySequenceContext(this.context, this.state);
        this.enterRule(localContext, 26, EBNFParser81_4.RULE_emptySequence);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
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
        4,1,31,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,
        42,8,2,10,2,12,2,45,9,2,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,
        1,4,1,4,1,4,3,4,58,8,4,1,5,1,5,1,6,1,6,3,6,64,8,6,1,6,1,6,1,7,1,
        7,1,7,1,7,1,7,1,7,3,7,74,8,7,1,8,1,8,3,8,78,8,8,1,8,1,8,1,9,1,9,
        1,9,1,9,1,9,1,9,1,9,3,9,89,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
        1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,0,0,107,0,29,1,0,0,0,2,33,1,0,0,0,4,38,1,0,0,0,
        6,46,1,0,0,0,8,54,1,0,0,0,10,59,1,0,0,0,12,63,1,0,0,0,14,73,1,0,
        0,0,16,77,1,0,0,0,18,88,1,0,0,0,20,90,1,0,0,0,22,94,1,0,0,0,24,98,
        1,0,0,0,26,102,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,
        31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,28,0,0,34,35,5,
        2,0,0,35,36,3,4,2,0,36,37,5,17,0,0,37,3,1,0,0,0,38,43,3,6,3,0,39,
        40,5,16,0,0,40,42,3,6,3,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,
        0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,46,51,3,8,4,0,47,48,
        5,1,0,0,48,50,3,8,4,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,
        51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,57,3,16,8,0,55,56,5,
        3,0,0,56,58,3,10,5,0,57,55,1,0,0,0,57,58,1,0,0,0,58,9,1,0,0,0,59,
        60,3,12,6,0,60,11,1,0,0,0,61,62,5,27,0,0,62,64,5,5,0,0,63,61,1,0,
        0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,14,7,0,66,13,1,0,0,0,67,
        74,3,20,10,0,68,74,3,22,11,0,69,74,3,24,12,0,70,74,5,22,0,0,71,74,
        5,29,0,0,72,74,3,26,13,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,
        0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,15,1,0,0,0,75,76,
        5,27,0,0,76,78,5,5,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,
        79,80,3,18,9,0,80,17,1,0,0,0,81,89,3,20,10,0,82,89,3,22,11,0,83,
        89,3,24,12,0,84,89,5,28,0,0,85,89,5,22,0,0,86,89,5,29,0,0,87,89,
        3,26,13,0,88,81,1,0,0,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,1,0,0,
        0,88,85,1,0,0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,19,1,0,0,0,90,91,
        5,14,0,0,91,92,3,4,2,0,92,93,5,12,0,0,93,21,1,0,0,0,94,95,5,15,0,
        0,95,96,3,4,2,0,96,97,5,13,0,0,97,23,1,0,0,0,98,99,5,9,0,0,99,100,
        3,4,2,0,100,101,5,8,0,0,101,25,1,0,0,0,102,103,1,0,0,0,103,27,1,
        0,0,0,8,31,43,51,57,63,73,77,88
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!EBNFParser81_4.__ATN) {
            EBNFParser81_4.__ATN = new antlr.ATNDeserializer().deserialize(EBNFParser81_4._serializedATN);
        }

        return EBNFParser81_4.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(EBNFParser81_4.literalNames, EBNFParser81_4.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return EBNFParser81_4.vocabulary;
    }

    private static readonly decisionsToDFA = EBNFParser81_4._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SyntaxContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntaxRule(): SyntaxRuleContext[];
    public syntaxRule(i: number): SyntaxRuleContext | null;
    public syntaxRule(i?: number): SyntaxRuleContext[] | SyntaxRuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxRuleContext);
        }

        return this.getRuleContext(i, SyntaxRuleContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntax;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntax) {
             listener.enterSyntax(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntax) {
             listener.exitSyntax(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntax) {
            return visitor.visitSyntax(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntaxRuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public META_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.META_IDENTIFIER, 0)!;
    }
    public DEFINING_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.DEFINING_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public TERMINATOR_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.TERMINATOR_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntaxRule;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntaxRule) {
             listener.enterSyntaxRule(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntaxRule) {
             listener.exitSyntaxRule(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntaxRule) {
            return visitor.visitSyntaxRule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefinitionsListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleDefinition(): SingleDefinitionContext[];
    public singleDefinition(i: number): SingleDefinitionContext | null;
    public singleDefinition(i?: number): SingleDefinitionContext[] | SingleDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleDefinitionContext);
        }

        return this.getRuleContext(i, SingleDefinitionContext);
    }
    public DEFINITION_SEPARATOR_SYMBOL(): antlr.TerminalNode[];
    public DEFINITION_SEPARATOR_SYMBOL(i: number): antlr.TerminalNode | null;
    public DEFINITION_SEPARATOR_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser81_4.DEFINITION_SEPARATOR_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser81_4.DEFINITION_SEPARATOR_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_definitionsList;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterDefinitionsList) {
             listener.enterDefinitionsList(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitDefinitionsList) {
             listener.exitDefinitionsList(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitDefinitionsList) {
            return visitor.visitDefinitionsList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntacticTerm(): SyntacticTermContext[];
    public syntacticTerm(i: number): SyntacticTermContext | null;
    public syntacticTerm(i?: number): SyntacticTermContext[] | SyntacticTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SyntacticTermContext);
        }

        return this.getRuleContext(i, SyntacticTermContext);
    }
    public CONCATENATE_SYMBOL(): antlr.TerminalNode[];
    public CONCATENATE_SYMBOL(i: number): antlr.TerminalNode | null;
    public CONCATENATE_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser81_4.CONCATENATE_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser81_4.CONCATENATE_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_singleDefinition;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSingleDefinition) {
             listener.enterSingleDefinition(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSingleDefinition) {
             listener.exitSingleDefinition(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSingleDefinition) {
            return visitor.visitSingleDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntacticFactor(): SyntacticFactorContext {
        return this.getRuleContext(0, SyntacticFactorContext)!;
    }
    public EXCEPT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.EXCEPT_SYMBOL, 0);
    }
    public syntacticException(): SyntacticExceptionContext | null {
        return this.getRuleContext(0, SyntacticExceptionContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticTerm;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticTerm) {
             listener.enterSyntacticTerm(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticTerm) {
             listener.exitSyntacticTerm(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticTerm) {
            return visitor.visitSyntacticTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticExceptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntacticExceptionFactor(): SyntacticExceptionFactorContext {
        return this.getRuleContext(0, SyntacticExceptionFactorContext)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticException;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticException) {
             listener.enterSyntacticException(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticException) {
             listener.exitSyntacticException(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticException) {
            return visitor.visitSyntacticException(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticExceptionFactorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntacticExceptionPrimary(): SyntacticExceptionPrimaryContext {
        return this.getRuleContext(0, SyntacticExceptionPrimaryContext)!;
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.INTEGER, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.REPETITION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticExceptionFactor;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticExceptionFactor) {
             listener.enterSyntacticExceptionFactor(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticExceptionFactor) {
             listener.exitSyntacticExceptionFactor(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticExceptionFactor) {
            return visitor.visitSyntacticExceptionFactor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticExceptionPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optionalSequence(): OptionalSequenceContext | null {
        return this.getRuleContext(0, OptionalSequenceContext);
    }
    public repeatedSequence(): RepeatedSequenceContext | null {
        return this.getRuleContext(0, RepeatedSequenceContext);
    }
    public groupedSequence(): GroupedSequenceContext | null {
        return this.getRuleContext(0, GroupedSequenceContext);
    }
    public TERMINAL_STRING(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.TERMINAL_STRING, 0);
    }
    public SPECIAL_SEQUENCE(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.SPECIAL_SEQUENCE, 0);
    }
    public emptySequence(): EmptySequenceContext | null {
        return this.getRuleContext(0, EmptySequenceContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticExceptionPrimary;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticExceptionPrimary) {
             listener.enterSyntacticExceptionPrimary(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticExceptionPrimary) {
             listener.exitSyntacticExceptionPrimary(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticExceptionPrimary) {
            return visitor.visitSyntacticExceptionPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticFactorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public syntacticPrimary(): SyntacticPrimaryContext {
        return this.getRuleContext(0, SyntacticPrimaryContext)!;
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.INTEGER, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.REPETITION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticFactor;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticFactor) {
             listener.enterSyntacticFactor(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticFactor) {
             listener.exitSyntacticFactor(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticFactor) {
            return visitor.visitSyntacticFactor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntacticPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optionalSequence(): OptionalSequenceContext | null {
        return this.getRuleContext(0, OptionalSequenceContext);
    }
    public repeatedSequence(): RepeatedSequenceContext | null {
        return this.getRuleContext(0, RepeatedSequenceContext);
    }
    public groupedSequence(): GroupedSequenceContext | null {
        return this.getRuleContext(0, GroupedSequenceContext);
    }
    public META_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.META_IDENTIFIER, 0);
    }
    public TERMINAL_STRING(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.TERMINAL_STRING, 0);
    }
    public SPECIAL_SEQUENCE(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser81_4.SPECIAL_SEQUENCE, 0);
    }
    public emptySequence(): EmptySequenceContext | null {
        return this.getRuleContext(0, EmptySequenceContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_syntacticPrimary;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterSyntacticPrimary) {
             listener.enterSyntacticPrimary(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitSyntacticPrimary) {
             listener.exitSyntacticPrimary(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitSyntacticPrimary) {
            return visitor.visitSyntacticPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OptionalSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START_OPTION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.START_OPTION_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_OPTION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.END_OPTION_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_optionalSequence;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterOptionalSequence) {
             listener.enterOptionalSequence(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitOptionalSequence) {
             listener.exitOptionalSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitOptionalSequence) {
            return visitor.visitOptionalSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RepeatedSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START_REPEAT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.START_REPEAT_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_REPEAT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.END_REPEAT_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_repeatedSequence;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterRepeatedSequence) {
             listener.enterRepeatedSequence(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitRepeatedSequence) {
             listener.exitRepeatedSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitRepeatedSequence) {
            return visitor.visitRepeatedSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupedSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START_GROUP_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.START_GROUP_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_GROUP_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser81_4.END_GROUP_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_groupedSequence;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterGroupedSequence) {
             listener.enterGroupedSequence(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitGroupedSequence) {
             listener.exitGroupedSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitGroupedSequence) {
            return visitor.visitGroupedSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptySequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EBNFParser81_4.RULE_emptySequence;
    }
    public override enterRule(listener: EBNFParser81_4Listener): void {
        if(listener.enterEmptySequence) {
             listener.enterEmptySequence(this);
        }
    }
    public override exitRule(listener: EBNFParser81_4Listener): void {
        if(listener.exitEmptySequence) {
             listener.exitEmptySequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParser81_4Visitor<Result>): Result | null {
        if (visitor.visitEmptySequence) {
            return visitor.visitEmptySequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
