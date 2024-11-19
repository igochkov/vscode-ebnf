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
    public static readonly START_COMMENT_SYMBOL = 6;
    public static readonly END_COMMENT_SYMBOL = 7;
    public static readonly START_OPTION_SYMBOL = 8;
    public static readonly END_OPTION_SYMBOL = 9;
    public static readonly START_REPEAT_SYMBOL = 10;
    public static readonly END_REPEAT_SYMBOL = 11;
    public static readonly START_GROUP_SYMBOL = 12;
    public static readonly END_GROUP_SYMBOL = 13;
    public static readonly EXCEPT_SYMBOL = 14;
    public static readonly REPETITION_SYMBOL = 15;
    public static readonly TERMINATOR_SYMBOL = 16;
    public static readonly FIRST_QUOTE_SYMBOL = 17;
    public static readonly SECOND_QUOTE_SYMBOL = 18;
    public static readonly SPECIAL_SEQUENCE_SYMBOL = 19;
    public static readonly ESC_SEQ = 20;
    public static readonly GAP_SEPARATOR = 21;
    public static readonly CHARACTER = 22;
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
        null, null, null, "','", "'='", null, "'(*'", "'*)'", null, null, 
        null, null, "'('", "')'", "'-'", "'*'", null, "'''", "'\"'", "'?'"
    ];

    public static readonly symbolicNames = [
        null, "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", 
        "DEFINITION_SEPARATOR_SYMBOL", "START_COMMENT_SYMBOL", "END_COMMENT_SYMBOL", 
        "START_OPTION_SYMBOL", "END_OPTION_SYMBOL", "START_REPEAT_SYMBOL", 
        "END_REPEAT_SYMBOL", "START_GROUP_SYMBOL", "END_GROUP_SYMBOL", "EXCEPT_SYMBOL", 
        "REPETITION_SYMBOL", "TERMINATOR_SYMBOL", "FIRST_QUOTE_SYMBOL", 
        "SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", "ESC_SEQ", "GAP_SEPARATOR", 
        "CHARACTER"
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
            } while (_la === 1 || _la === 6);
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
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
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
            this.state = 47;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 44;
                this.comment();
                }
                }
                this.state = 49;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 50;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 54;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 51;
                    this.comment();
                    }
                    }
                }
                this.state = 56;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            this.state = 57;
            this.definitionsList();
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 58;
                this.comment();
                }
                }
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 64;
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
            this.state = 66;
            this.singleDefinition();
            this.state = 71;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 67;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 68;
                this.singleDefinition();
                }
                }
                this.state = 73;
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
            this.state = 74;
            this.term();
            this.state = 79;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 75;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 76;
                this.term();
                }
                }
                this.state = 81;
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
            this.state = 82;
            this.factor();
            this.state = 85;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 83;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 84;
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
            this.state = 87;
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
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 89;
                this.match(EBNFParser.INTEGER);
                this.state = 90;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 93;
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
            this.state = 102;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 95;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 96;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 97;
                this.groupedSequence();
                }
                break;
            case EBNFParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 98;
                this.match(EBNFParser.IDENTIFIER);
                }
                break;
            case EBNFParser.FIRST_QUOTE_SYMBOL:
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 99;
                this.terminalString();
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE_SYMBOL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 100;
                this.specialSequence();
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.START_COMMENT_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.EXCEPT_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 101;
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
            this.state = 106;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 107;
            this.definitionsList();
            this.state = 108;
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
            this.state = 110;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 111;
            this.definitionsList();
            this.state = 112;
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
            this.state = 114;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 115;
            this.definitionsList();
            this.state = 116;
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
            this.state = 136;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.FIRST_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 118;
                this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
                this.state = 123;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8257534) !== 0)) {
                    {
                    this.state = 121;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                    case 1:
                        {
                        this.state = 119;
                        _la = this.tokenStream.LA(1);
                        if(_la<=0 || _la === 17) {
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
                        this.state = 120;
                        this.match(EBNFParser.ESC_SEQ);
                        }
                        break;
                    }
                    }
                    this.state = 125;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 126;
                this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
                }
                break;
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 127;
                this.match(EBNFParser.SECOND_QUOTE_SYMBOL);
                this.state = 132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8126462) !== 0)) {
                    {
                    this.state = 130;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
                    case 1:
                        {
                        this.state = 128;
                        _la = this.tokenStream.LA(1);
                        if(_la<=0 || _la === 18) {
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
                        this.state = 129;
                        this.match(EBNFParser.ESC_SEQ);
                        }
                        break;
                    }
                    }
                    this.state = 134;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 135;
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
            this.state = 138;
            this.match(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 139;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 19) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 142;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7864318) !== 0));
            this.state = 144;
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
            this.state = 146;
            this.match(EBNFParser.START_COMMENT_SYMBOL);
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 5111872) !== 0)) {
                {
                {
                this.state = 147;
                this.comment_symbol();
                }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 153;
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
            this.state = 159;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_COMMENT_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 155;
                this.comment();
                }
                break;
            case EBNFParser.FIRST_QUOTE_SYMBOL:
            case EBNFParser.SECOND_QUOTE_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 156;
                this.terminalString();
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 157;
                this.specialSequence();
                }
                break;
            case EBNFParser.CHARACTER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 158;
                this.match(EBNFParser.CHARACTER);
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
        4,1,22,162,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,5,1,39,8,1,10,
        1,12,1,42,9,1,1,1,1,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,1,1,5,1,53,
        8,1,10,1,12,1,56,9,1,1,1,1,1,5,1,60,8,1,10,1,12,1,63,9,1,1,1,1,1,
        1,2,1,2,1,2,5,2,70,8,2,10,2,12,2,73,9,2,1,3,1,3,1,3,5,3,78,8,3,10,
        3,12,3,81,9,3,1,4,1,4,1,4,3,4,86,8,4,1,5,1,5,1,6,1,6,3,6,92,8,6,
        1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,103,8,7,1,8,1,8,1,9,1,9,
        1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,5,
        12,122,8,12,10,12,12,12,125,9,12,1,12,1,12,1,12,1,12,5,12,131,8,
        12,10,12,12,12,134,9,12,1,12,3,12,137,8,12,1,13,1,13,4,13,141,8,
        13,11,13,12,13,142,1,13,1,13,1,14,1,14,5,14,149,8,14,10,14,12,14,
        152,9,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,160,8,15,1,15,0,0,16,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,3,1,0,17,17,1,0,18,
        18,1,0,19,19,170,0,33,1,0,0,0,2,40,1,0,0,0,4,66,1,0,0,0,6,74,1,0,
        0,0,8,82,1,0,0,0,10,87,1,0,0,0,12,91,1,0,0,0,14,102,1,0,0,0,16,104,
        1,0,0,0,18,106,1,0,0,0,20,110,1,0,0,0,22,114,1,0,0,0,24,136,1,0,
        0,0,26,138,1,0,0,0,28,146,1,0,0,0,30,159,1,0,0,0,32,34,3,2,1,0,33,
        32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,
        0,37,39,3,28,14,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,
        1,0,0,0,41,43,1,0,0,0,42,40,1,0,0,0,43,47,5,1,0,0,44,46,3,28,14,
        0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,
        1,0,0,0,49,47,1,0,0,0,50,54,5,4,0,0,51,53,3,28,14,0,52,51,1,0,0,
        0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,
        1,0,0,0,57,61,3,4,2,0,58,60,3,28,14,0,59,58,1,0,0,0,60,63,1,0,0,
        0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,
        5,16,0,0,65,3,1,0,0,0,66,71,3,6,3,0,67,68,5,5,0,0,68,70,3,6,3,0,
        69,67,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,5,1,0,
        0,0,73,71,1,0,0,0,74,79,3,8,4,0,75,76,5,3,0,0,76,78,3,8,4,0,77,75,
        1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,7,1,0,0,0,81,
        79,1,0,0,0,82,85,3,12,6,0,83,84,5,14,0,0,84,86,3,10,5,0,85,83,1,
        0,0,0,85,86,1,0,0,0,86,9,1,0,0,0,87,88,3,12,6,0,88,11,1,0,0,0,89,
        90,5,2,0,0,90,92,5,15,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,93,1,0,
        0,0,93,94,3,14,7,0,94,13,1,0,0,0,95,103,3,18,9,0,96,103,3,20,10,
        0,97,103,3,22,11,0,98,103,5,1,0,0,99,103,3,24,12,0,100,103,3,26,
        13,0,101,103,3,16,8,0,102,95,1,0,0,0,102,96,1,0,0,0,102,97,1,0,0,
        0,102,98,1,0,0,0,102,99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,0,
        103,15,1,0,0,0,104,105,1,0,0,0,105,17,1,0,0,0,106,107,5,8,0,0,107,
        108,3,4,2,0,108,109,5,9,0,0,109,19,1,0,0,0,110,111,5,10,0,0,111,
        112,3,4,2,0,112,113,5,11,0,0,113,21,1,0,0,0,114,115,5,12,0,0,115,
        116,3,4,2,0,116,117,5,13,0,0,117,23,1,0,0,0,118,123,5,17,0,0,119,
        122,8,0,0,0,120,122,5,20,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,
        125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,
        123,1,0,0,0,126,137,5,17,0,0,127,132,5,18,0,0,128,131,8,1,0,0,129,
        131,5,20,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,134,1,0,0,0,132,
        130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,
        137,5,18,0,0,136,118,1,0,0,0,136,127,1,0,0,0,137,25,1,0,0,0,138,
        140,5,19,0,0,139,141,8,2,0,0,140,139,1,0,0,0,141,142,1,0,0,0,142,
        140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,5,19,0,0,145,
        27,1,0,0,0,146,150,5,6,0,0,147,149,3,30,15,0,148,147,1,0,0,0,149,
        152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,
        150,1,0,0,0,153,154,5,7,0,0,154,29,1,0,0,0,155,160,3,28,14,0,156,
        160,3,24,12,0,157,160,3,26,13,0,158,160,5,22,0,0,159,155,1,0,0,0,
        159,156,1,0,0,0,159,157,1,0,0,0,159,158,1,0,0,0,160,31,1,0,0,0,18,
        35,40,47,54,61,71,79,85,91,102,121,123,130,132,136,142,150,159
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
    public CHARACTER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.CHARACTER, 0);
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
