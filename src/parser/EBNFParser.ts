// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { EBNFParserListener } from "./EBNFParserListener.js";
import { EBNFParserVisitor } from "./EBNFParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class EBNFParser extends antlr.Parser {
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
        "DEFINITION_SEPARATOR_SYMBOL", "TERMINATOR_SYMBOL", "GAP_SEPARATOR", 
        "INTEGER", "META_IDENTIFIER", "TERMINAL_STRING", "SPECIAL_SEQUENCE", 
        "COMMENT_SYMBOL", "BRACKETED_TEXTUAL_COMMENT"
    ];
    public static readonly ruleNames = [
        "syntax", "syntaxRule", "definitionsList", "singleDefinition", "syntacticTerm", 
        "syntacticException", "syntacticExceptionFactor", "syntacticExceptionPrimary", 
        "syntacticFactor", "syntacticPrimary", "optionalSequence", "repeatedSequence", 
        "groupedSequence", "emptySequence",
    ];

    public get grammarFileName(): string { return "EBNFParser.g4"; }
    public get literalNames(): (string | null)[] { return EBNFParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return EBNFParser.symbolicNames; }
    public get ruleNames(): string[] { return EBNFParser.ruleNames; }
    public get serializedATN(): number[] { return EBNFParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, EBNFParser._ATN, EBNFParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public syntax(): SyntaxContext {
        let localContext = new SyntaxContext(this.context, this.state);
        this.enterRule(localContext, 0, EBNFParser.RULE_syntax);
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
            } while (_la === 20);
            this.state = 33;
            this.match(EBNFParser.EOF);
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
        this.enterRule(localContext, 2, EBNFParser.RULE_syntaxRule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 35;
            this.match(EBNFParser.META_IDENTIFIER);
            this.state = 36;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 37;
            this.definitionsList();
            this.state = 38;
            this.match(EBNFParser.TERMINATOR_SYMBOL);
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
        this.enterRule(localContext, 4, EBNFParser.RULE_definitionsList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.singleDefinition();
            this.state = 45;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 41;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 42;
                this.singleDefinition();
                }
                }
                this.state = 47;
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
        this.enterRule(localContext, 6, EBNFParser.RULE_singleDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            this.syntacticTerm();
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 49;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 50;
                this.syntacticTerm();
                }
                }
                this.state = 55;
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
        this.enterRule(localContext, 8, EBNFParser.RULE_syntacticTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.syntacticFactor();
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 57;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 58;
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
        this.enterRule(localContext, 10, EBNFParser.RULE_syntacticException);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 61;
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
        this.enterRule(localContext, 12, EBNFParser.RULE_syntacticExceptionFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 65;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 63;
                this.match(EBNFParser.INTEGER);
                this.state = 64;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 67;
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
        this.enterRule(localContext, 14, EBNFParser.RULE_syntacticExceptionPrimary);
        try {
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 69;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 70;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 71;
                this.groupedSequence();
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 72;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 73;
                this.match(EBNFParser.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 74;
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
        this.enterRule(localContext, 16, EBNFParser.RULE_syntacticFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 77;
                this.match(EBNFParser.INTEGER);
                this.state = 78;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 81;
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
        this.enterRule(localContext, 18, EBNFParser.RULE_syntacticPrimary);
        try {
            this.state = 90;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 83;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 84;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 85;
                this.groupedSequence();
                }
                break;
            case EBNFParser.META_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 86;
                this.match(EBNFParser.META_IDENTIFIER);
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 87;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 88;
                this.match(EBNFParser.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.EXCEPT_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 89;
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
        this.enterRule(localContext, 20, EBNFParser.RULE_optionalSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 93;
            this.definitionsList();
            this.state = 94;
            this.match(EBNFParser.END_OPTION_SYMBOL);
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
        this.enterRule(localContext, 22, EBNFParser.RULE_repeatedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 96;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 97;
            this.definitionsList();
            this.state = 98;
            this.match(EBNFParser.END_REPEAT_SYMBOL);
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
        this.enterRule(localContext, 24, EBNFParser.RULE_groupedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 100;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 101;
            this.definitionsList();
            this.state = 102;
            this.match(EBNFParser.END_GROUP_SYMBOL);
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
        this.enterRule(localContext, 26, EBNFParser.RULE_emptySequence);
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
        4,1,24,107,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,
        1,2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,1,3,1,3,5,3,52,8,3,10,3,12,3,
        55,9,3,1,4,1,4,1,4,3,4,60,8,4,1,5,1,5,1,6,1,6,3,6,66,8,6,1,6,1,6,
        1,7,1,7,1,7,1,7,1,7,1,7,3,7,76,8,7,1,8,1,8,3,8,80,8,8,1,8,1,8,1,
        9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,91,8,9,1,10,1,10,1,10,1,10,1,11,1,
        11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,
        10,12,14,16,18,20,22,24,26,0,0,109,0,29,1,0,0,0,2,35,1,0,0,0,4,40,
        1,0,0,0,6,48,1,0,0,0,8,56,1,0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,
        75,1,0,0,0,16,79,1,0,0,0,18,90,1,0,0,0,20,92,1,0,0,0,22,96,1,0,0,
        0,24,100,1,0,0,0,26,104,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,
        1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,
        34,1,1,0,0,0,35,36,5,20,0,0,36,37,5,2,0,0,37,38,3,4,2,0,38,39,5,
        17,0,0,39,3,1,0,0,0,40,45,3,6,3,0,41,42,5,16,0,0,42,44,3,6,3,0,43,
        41,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,0,
        0,47,45,1,0,0,0,48,53,3,8,4,0,49,50,5,1,0,0,50,52,3,8,4,0,51,49,
        1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,7,1,0,0,0,55,
        53,1,0,0,0,56,59,3,16,8,0,57,58,5,3,0,0,58,60,3,10,5,0,59,57,1,0,
        0,0,59,60,1,0,0,0,60,9,1,0,0,0,61,62,3,12,6,0,62,11,1,0,0,0,63,64,
        5,19,0,0,64,66,5,5,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,
        67,68,3,14,7,0,68,13,1,0,0,0,69,76,3,20,10,0,70,76,3,22,11,0,71,
        76,3,24,12,0,72,76,5,21,0,0,73,76,5,22,0,0,74,76,3,26,13,0,75,69,
        1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,
        75,74,1,0,0,0,76,15,1,0,0,0,77,78,5,19,0,0,78,80,5,5,0,0,79,77,1,
        0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,3,18,9,0,82,17,1,0,0,0,83,
        91,3,20,10,0,84,91,3,22,11,0,85,91,3,24,12,0,86,91,5,20,0,0,87,91,
        5,21,0,0,88,91,5,22,0,0,89,91,3,26,13,0,90,83,1,0,0,0,90,84,1,0,
        0,0,90,85,1,0,0,0,90,86,1,0,0,0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,
        1,0,0,0,91,19,1,0,0,0,92,93,5,14,0,0,93,94,3,4,2,0,94,95,5,12,0,
        0,95,21,1,0,0,0,96,97,5,15,0,0,97,98,3,4,2,0,98,99,5,13,0,0,99,23,
        1,0,0,0,100,101,5,9,0,0,101,102,3,4,2,0,102,103,5,8,0,0,103,25,1,
        0,0,0,104,105,1,0,0,0,105,27,1,0,0,0,8,31,45,53,59,65,75,79,90
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!EBNFParser.__ATN) {
            EBNFParser.__ATN = new antlr.ATNDeserializer().deserialize(EBNFParser._serializedATN);
        }

        return EBNFParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(EBNFParser.literalNames, EBNFParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return EBNFParser.vocabulary;
    }

    private static readonly decisionsToDFA = EBNFParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SyntaxContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(EBNFParser.EOF, 0)!;
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
        return EBNFParser.RULE_syntax;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntax) {
             listener.enterSyntax(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntax) {
             listener.exitSyntax(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.META_IDENTIFIER, 0)!;
    }
    public DEFINING_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.DEFINING_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public TERMINATOR_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.TERMINATOR_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntaxRule;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntaxRule) {
             listener.enterSyntaxRule(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntaxRule) {
             listener.exitSyntaxRule(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
    		return this.getTokens(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser.DEFINITION_SEPARATOR_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_definitionsList;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterDefinitionsList) {
             listener.enterDefinitionsList(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitDefinitionsList) {
             listener.exitDefinitionsList(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
    		return this.getTokens(EBNFParser.CONCATENATE_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser.CONCATENATE_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_singleDefinition;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSingleDefinition) {
             listener.enterSingleDefinition(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSingleDefinition) {
             listener.exitSingleDefinition(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.EXCEPT_SYMBOL, 0);
    }
    public syntacticException(): SyntacticExceptionContext | null {
        return this.getRuleContext(0, SyntacticExceptionContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntacticTerm;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticTerm) {
             listener.enterSyntacticTerm(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticTerm) {
             listener.exitSyntacticTerm(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return EBNFParser.RULE_syntacticException;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticException) {
             listener.enterSyntacticException(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticException) {
             listener.exitSyntacticException(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.INTEGER, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.REPETITION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntacticExceptionFactor;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticExceptionFactor) {
             listener.enterSyntacticExceptionFactor(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticExceptionFactor) {
             listener.exitSyntacticExceptionFactor(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.TERMINAL_STRING, 0);
    }
    public SPECIAL_SEQUENCE(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.SPECIAL_SEQUENCE, 0);
    }
    public emptySequence(): EmptySequenceContext | null {
        return this.getRuleContext(0, EmptySequenceContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntacticExceptionPrimary;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticExceptionPrimary) {
             listener.enterSyntacticExceptionPrimary(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticExceptionPrimary) {
             listener.exitSyntacticExceptionPrimary(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.INTEGER, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.REPETITION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntacticFactor;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticFactor) {
             listener.enterSyntacticFactor(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticFactor) {
             listener.exitSyntacticFactor(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.META_IDENTIFIER, 0);
    }
    public TERMINAL_STRING(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.TERMINAL_STRING, 0);
    }
    public SPECIAL_SEQUENCE(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.SPECIAL_SEQUENCE, 0);
    }
    public emptySequence(): EmptySequenceContext | null {
        return this.getRuleContext(0, EmptySequenceContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_syntacticPrimary;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSyntacticPrimary) {
             listener.enterSyntacticPrimary(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSyntacticPrimary) {
             listener.exitSyntacticPrimary(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.START_OPTION_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_OPTION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.END_OPTION_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_optionalSequence;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterOptionalSequence) {
             listener.enterOptionalSequence(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitOptionalSequence) {
             listener.exitOptionalSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.START_REPEAT_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_REPEAT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.END_REPEAT_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_repeatedSequence;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterRepeatedSequence) {
             listener.enterRepeatedSequence(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitRepeatedSequence) {
             listener.exitRepeatedSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return this.getToken(EBNFParser.START_GROUP_SYMBOL, 0)!;
    }
    public definitionsList(): DefinitionsListContext {
        return this.getRuleContext(0, DefinitionsListContext)!;
    }
    public END_GROUP_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.END_GROUP_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_groupedSequence;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterGroupedSequence) {
             listener.enterGroupedSequence(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitGroupedSequence) {
             listener.exitGroupedSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
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
        return EBNFParser.RULE_emptySequence;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterEmptySequence) {
             listener.enterEmptySequence(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitEmptySequence) {
             listener.exitEmptySequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitEmptySequence) {
            return visitor.visitEmptySequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
