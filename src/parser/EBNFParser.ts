// Generated from d:/projects/Private/vscode-ebnf/grammar/EBNFParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { EBNFParserListener } from "./EBNFParserListener.js";
import { EBNFParserVisitor } from "./EBNFParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class EBNFParser extends antlr.Parser {
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
    public static readonly RULE_syntax = 0;
    public static readonly RULE_syntaxRule = 1;
    public static readonly RULE_definitionsList = 2;
    public static readonly RULE_singleDefinition = 3;
    public static readonly RULE_term = 4;
    public static readonly RULE_exceptionRule = 5;
    public static readonly RULE_factor = 6;
    public static readonly RULE_primary = 7;
    public static readonly RULE_empty = 8;
    public static readonly RULE_optionalSequence = 9;
    public static readonly RULE_repeatedSequence = 10;
    public static readonly RULE_groupedSequence = 11;
    public static readonly RULE_terminalString = 12;
    public static readonly RULE_specialSequence = 13;
    public static readonly RULE_comment = 14;
    public static readonly RULE_comment_symbol = 15;

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
    public static readonly ruleNames = [
        "syntax", "syntaxRule", "definitionsList", "singleDefinition", "term", 
        "exceptionRule", "factor", "primary", "empty", "optionalSequence", 
        "repeatedSequence", "groupedSequence", "terminalString", "specialSequence", 
        "comment", "comment_symbol",
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
            this.state = 33;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 32;
                this.syntaxRule();
                }
                }
                this.state = 35;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 1 || _la === 19);
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 37;
                this.comment();
                }
                }
                this.state = 42;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 43;
            this.match(EBNFParser.IDENTIFIER);
            this.state = 44;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 45;
            this.definitionsList();
            this.state = 46;
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
            this.state = 48;
            this.singleDefinition();
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 49;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 50;
                this.singleDefinition();
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
    public singleDefinition(): SingleDefinitionContext {
        let localContext = new SingleDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 6, EBNFParser.RULE_singleDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.term();
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 57;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 58;
                this.term();
                }
                }
                this.state = 63;
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
    public term(): TermContext {
        let localContext = new TermContext(this.context, this.state);
        this.enterRule(localContext, 8, EBNFParser.RULE_term);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.factor();
            this.state = 67;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 65;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 66;
                this.exceptionRule();
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
    public exceptionRule(): ExceptionRuleContext {
        let localContext = new ExceptionRuleContext(this.context, this.state);
        this.enterRule(localContext, 10, EBNFParser.RULE_exceptionRule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.factor();
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
    public factor(): FactorContext {
        let localContext = new FactorContext(this.context, this.state);
        this.enterRule(localContext, 12, EBNFParser.RULE_factor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 71;
                this.match(EBNFParser.INTEGER);
                this.state = 72;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 75;
            this.primary();
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 14, EBNFParser.RULE_primary);
        try {
            this.state = 84;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 77;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 78;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 79;
                this.groupedSequence();
                }
                break;
            case EBNFParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 80;
                this.match(EBNFParser.IDENTIFIER);
                }
                break;
            case EBNFParser.FIRST_QUOTE_SYMBOL:
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 81;
                this.terminalString();
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE_SYMBOL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 82;
                this.specialSequence();
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.EXCEPT_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 83;
                this.empty();
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
    public empty(): EmptyContext {
        let localContext = new EmptyContext(this.context, this.state);
        this.enterRule(localContext, 16, EBNFParser.RULE_empty);
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
    public optionalSequence(): OptionalSequenceContext {
        let localContext = new OptionalSequenceContext(this.context, this.state);
        this.enterRule(localContext, 18, EBNFParser.RULE_optionalSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 88;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 89;
            this.definitionsList();
            this.state = 90;
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
        this.enterRule(localContext, 20, EBNFParser.RULE_repeatedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 93;
            this.definitionsList();
            this.state = 94;
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
        this.enterRule(localContext, 22, EBNFParser.RULE_groupedSequence);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 96;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 97;
            this.definitionsList();
            this.state = 98;
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
    public terminalString(): TerminalStringContext {
        let localContext = new TerminalStringContext(this.context, this.state);
        this.enterRule(localContext, 24, EBNFParser.RULE_terminalString);
        let _la: number;
        try {
            this.state = 118;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.FIRST_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 100;
                this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
                this.state = 105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4161534) !== 0)) {
                    {
                    this.state = 103;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        this.state = 101;
                        _la = this.tokenStream.LA(1);
                        if(_la<=0 || _la === 15) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case 2:
                        {
                        this.state = 102;
                        this.match(EBNFParser.ESC_SEQ);
                        }
                        break;
                    }
                    }
                    this.state = 107;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 108;
                this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
                }
                break;
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 109;
                this.match(EBNFParser.SECOND_QUOTE_SYMBOL);
                this.state = 114;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4128766) !== 0)) {
                    {
                    this.state = 112;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                    case 1:
                        {
                        this.state = 110;
                        _la = this.tokenStream.LA(1);
                        if(_la<=0 || _la === 16) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case 2:
                        {
                        this.state = 111;
                        this.match(EBNFParser.ESC_SEQ);
                        }
                        break;
                    }
                    }
                    this.state = 116;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 117;
                this.match(EBNFParser.SECOND_QUOTE_SYMBOL);
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
    public specialSequence(): SpecialSequenceContext {
        let localContext = new SpecialSequenceContext(this.context, this.state);
        this.enterRule(localContext, 26, EBNFParser.RULE_specialSequence);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.match(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 121;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 17) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 124;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4063230) !== 0));
            this.state = 126;
            this.match(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
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
    public comment(): CommentContext {
        let localContext = new CommentContext(this.context, this.state);
        this.enterRule(localContext, 28, EBNFParser.RULE_comment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 128;
            this.match(EBNFParser.START_COMMENT_SYMBOL);
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 753664) !== 0)) {
                {
                {
                this.state = 129;
                this.comment_symbol();
                }
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 135;
            this.match(EBNFParser.END_COMMENT_SYMBOL);
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
    public comment_symbol(): Comment_symbolContext {
        let localContext = new Comment_symbolContext(this.context, this.state);
        this.enterRule(localContext, 30, EBNFParser.RULE_comment_symbol);
        try {
            this.state = 140;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_COMMENT_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 137;
                this.comment();
                }
                break;
            case EBNFParser.FIRST_QUOTE_SYMBOL:
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 138;
                this.terminalString();
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 139;
                this.specialSequence();
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

    public static readonly _serializedATN: number[] = [
        4,1,21,143,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,5,1,39,8,1,10,
        1,12,1,42,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,52,8,2,10,2,12,
        2,55,9,2,1,3,1,3,1,3,5,3,60,8,3,10,3,12,3,63,9,3,1,4,1,4,1,4,3,4,
        68,8,4,1,5,1,5,1,6,1,6,3,6,74,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,3,7,85,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,12,1,12,1,12,5,12,104,8,12,10,12,12,12,107,9,12,
        1,12,1,12,1,12,1,12,5,12,113,8,12,10,12,12,12,116,9,12,1,12,3,12,
        119,8,12,1,13,1,13,4,13,123,8,13,11,13,12,13,124,1,13,1,13,1,14,
        1,14,5,14,131,8,14,10,14,12,14,134,9,14,1,14,1,14,1,15,1,15,1,15,
        3,15,141,8,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,0,3,1,0,15,15,1,0,16,16,1,0,17,17,147,0,33,1,0,0,0,2,40,1,0,0,
        0,4,48,1,0,0,0,6,56,1,0,0,0,8,64,1,0,0,0,10,69,1,0,0,0,12,73,1,0,
        0,0,14,84,1,0,0,0,16,86,1,0,0,0,18,88,1,0,0,0,20,92,1,0,0,0,22,96,
        1,0,0,0,24,118,1,0,0,0,26,120,1,0,0,0,28,128,1,0,0,0,30,140,1,0,
        0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,
        1,0,0,0,36,1,1,0,0,0,37,39,3,28,14,0,38,37,1,0,0,0,39,42,1,0,0,0,
        40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,0,0,0,43,44,5,
        1,0,0,44,45,5,4,0,0,45,46,3,4,2,0,46,47,5,14,0,0,47,3,1,0,0,0,48,
        53,3,6,3,0,49,50,5,5,0,0,50,52,3,6,3,0,51,49,1,0,0,0,52,55,1,0,0,
        0,53,51,1,0,0,0,53,54,1,0,0,0,54,5,1,0,0,0,55,53,1,0,0,0,56,61,3,
        8,4,0,57,58,5,3,0,0,58,60,3,8,4,0,59,57,1,0,0,0,60,63,1,0,0,0,61,
        59,1,0,0,0,61,62,1,0,0,0,62,7,1,0,0,0,63,61,1,0,0,0,64,67,3,12,6,
        0,65,66,5,12,0,0,66,68,3,10,5,0,67,65,1,0,0,0,67,68,1,0,0,0,68,9,
        1,0,0,0,69,70,3,12,6,0,70,11,1,0,0,0,71,72,5,2,0,0,72,74,5,13,0,
        0,73,71,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,3,14,7,0,76,13,
        1,0,0,0,77,85,3,18,9,0,78,85,3,20,10,0,79,85,3,22,11,0,80,85,5,1,
        0,0,81,85,3,24,12,0,82,85,3,26,13,0,83,85,3,16,8,0,84,77,1,0,0,0,
        84,78,1,0,0,0,84,79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,
        0,0,0,84,83,1,0,0,0,85,15,1,0,0,0,86,87,1,0,0,0,87,17,1,0,0,0,88,
        89,5,8,0,0,89,90,3,4,2,0,90,91,5,9,0,0,91,19,1,0,0,0,92,93,5,10,
        0,0,93,94,3,4,2,0,94,95,5,11,0,0,95,21,1,0,0,0,96,97,5,6,0,0,97,
        98,3,4,2,0,98,99,5,7,0,0,99,23,1,0,0,0,100,105,5,15,0,0,101,104,
        8,0,0,0,102,104,5,18,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,107,
        1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,105,
        1,0,0,0,108,119,5,15,0,0,109,114,5,16,0,0,110,113,8,1,0,0,111,113,
        5,18,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,
        1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,119,
        5,16,0,0,118,100,1,0,0,0,118,109,1,0,0,0,119,25,1,0,0,0,120,122,
        5,17,0,0,121,123,8,2,0,0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,
        1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,5,17,0,0,127,27,
        1,0,0,0,128,132,5,19,0,0,129,131,3,30,15,0,130,129,1,0,0,0,131,134,
        1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,
        1,0,0,0,135,136,5,20,0,0,136,29,1,0,0,0,137,141,3,28,14,0,138,141,
        3,24,12,0,139,141,3,26,13,0,140,137,1,0,0,0,140,138,1,0,0,0,140,
        139,1,0,0,0,141,31,1,0,0,0,15,35,40,53,61,67,73,84,103,105,112,114,
        118,124,132,140
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
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(EBNFParser.IDENTIFIER, 0)!;
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public term(): TermContext[];
    public term(i: number): TermContext | null;
    public term(i?: number): TermContext[] | TermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }

        return this.getRuleContext(i, TermContext);
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


export class TermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public factor(): FactorContext {
        return this.getRuleContext(0, FactorContext)!;
    }
    public EXCEPT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.EXCEPT_SYMBOL, 0);
    }
    public exceptionRule(): ExceptionRuleContext | null {
        return this.getRuleContext(0, ExceptionRuleContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_term;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterTerm) {
             listener.enterTerm(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitTerm) {
             listener.exitTerm(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExceptionRuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public factor(): FactorContext {
        return this.getRuleContext(0, FactorContext)!;
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_exceptionRule;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterExceptionRule) {
             listener.enterExceptionRule(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitExceptionRule) {
             listener.exitExceptionRule(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitExceptionRule) {
            return visitor.visitExceptionRule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FactorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.INTEGER, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.REPETITION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_factor;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterFactor) {
             listener.enterFactor(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitFactor) {
             listener.exitFactor(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
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
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.IDENTIFIER, 0);
    }
    public terminalString(): TerminalStringContext | null {
        return this.getRuleContext(0, TerminalStringContext);
    }
    public specialSequence(): SpecialSequenceContext | null {
        return this.getRuleContext(0, SpecialSequenceContext);
    }
    public empty(): EmptyContext | null {
        return this.getRuleContext(0, EmptyContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_primary;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_empty;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterEmpty) {
             listener.enterEmpty(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitEmpty) {
             listener.exitEmpty(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitEmpty) {
            return visitor.visitEmpty(this);
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


export class TerminalStringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIRST_QUOTE_SYMBOL(): antlr.TerminalNode[];
    public FIRST_QUOTE_SYMBOL(i: number): antlr.TerminalNode | null;
    public FIRST_QUOTE_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser.FIRST_QUOTE_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser.FIRST_QUOTE_SYMBOL, i);
    	}
    }
    public ESC_SEQ(): antlr.TerminalNode[];
    public ESC_SEQ(i: number): antlr.TerminalNode | null;
    public ESC_SEQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser.ESC_SEQ);
    	} else {
    		return this.getToken(EBNFParser.ESC_SEQ, i);
    	}
    }
    public SECOND_QUOTE_SYMBOL(): antlr.TerminalNode[];
    public SECOND_QUOTE_SYMBOL(i: number): antlr.TerminalNode | null;
    public SECOND_QUOTE_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser.SECOND_QUOTE_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser.SECOND_QUOTE_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_terminalString;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterTerminalString) {
             listener.enterTerminalString(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitTerminalString) {
             listener.exitTerminalString(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitTerminalString) {
            return visitor.visitTerminalString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpecialSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SPECIAL_SEQUENCE_SYMBOL(): antlr.TerminalNode[];
    public SPECIAL_SEQUENCE_SYMBOL(i: number): antlr.TerminalNode | null;
    public SPECIAL_SEQUENCE_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
    	} else {
    		return this.getToken(EBNFParser.SPECIAL_SEQUENCE_SYMBOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_specialSequence;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterSpecialSequence) {
             listener.enterSpecialSequence(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitSpecialSequence) {
             listener.exitSpecialSequence(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitSpecialSequence) {
            return visitor.visitSpecialSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START_COMMENT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.START_COMMENT_SYMBOL, 0)!;
    }
    public END_COMMENT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.END_COMMENT_SYMBOL, 0)!;
    }
    public comment_symbol(): Comment_symbolContext[];
    public comment_symbol(i: number): Comment_symbolContext | null;
    public comment_symbol(i?: number): Comment_symbolContext[] | Comment_symbolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Comment_symbolContext);
        }

        return this.getRuleContext(i, Comment_symbolContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_comment;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterComment) {
             listener.enterComment(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitComment) {
             listener.exitComment(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Comment_symbolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comment(): CommentContext | null {
        return this.getRuleContext(0, CommentContext);
    }
    public terminalString(): TerminalStringContext | null {
        return this.getRuleContext(0, TerminalStringContext);
    }
    public specialSequence(): SpecialSequenceContext | null {
        return this.getRuleContext(0, SpecialSequenceContext);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_comment_symbol;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterComment_symbol) {
             listener.enterComment_symbol(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitComment_symbol) {
             listener.exitComment_symbol(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitComment_symbol) {
            return visitor.visitComment_symbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
