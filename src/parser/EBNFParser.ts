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
    public static readonly RULE_comment = 0;
    public static readonly RULE_commentSymbol = 1;
    public static readonly RULE_commentlessSymbol = 2;
    public static readonly RULE_syntax = 3;
    public static readonly RULE_syntaxRule = 4;
    public static readonly RULE_definitionsList = 5;
    public static readonly RULE_singleDefinition = 6;
    public static readonly RULE_syntacticTerm = 7;
    public static readonly RULE_syntacticException = 8;
    public static readonly RULE_syntacticExceptionFactor = 9;
    public static readonly RULE_syntacticExceptionPrimary = 10;
    public static readonly RULE_syntacticFactor = 11;
    public static readonly RULE_syntacticPrimary = 12;
    public static readonly RULE_optionalSequence = 13;
    public static readonly RULE_repeatedSequence = 14;
    public static readonly RULE_groupedSequence = 15;
    public static readonly RULE_emptySequence = 16;

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
    public static readonly ruleNames = [
        "comment", "commentSymbol", "commentlessSymbol", "syntax", "syntaxRule", 
        "definitionsList", "singleDefinition", "syntacticTerm", "syntacticException", 
        "syntacticExceptionFactor", "syntacticExceptionPrimary", "syntacticFactor", 
        "syntacticPrimary", "optionalSequence", "repeatedSequence", "groupedSequence", 
        "emptySequence",
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
    public comment(): CommentContext {
        let localContext = new CommentContext(this.context, this.state);
        this.enterRule(localContext, 0, EBNFParser.RULE_comment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 34;
            this.match(EBNFParser.START_COMMENT_SYMBOL);
            this.state = 38;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1834750) !== 0)) {
                {
                {
                this.state = 35;
                this.commentSymbol();
                }
                }
                this.state = 40;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 41;
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
    public commentSymbol(): CommentSymbolContext {
        let localContext = new CommentSymbolContext(this.context, this.state);
        this.enterRule(localContext, 2, EBNFParser.RULE_commentSymbol);
        try {
            this.state = 46;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_COMMENT_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 43;
                this.comment();
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.DEFINING_SYMBOL:
            case EBNFParser.EXCEPT_SYMBOL:
            case EBNFParser.REPETITION_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.START_GROUP_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.START_OPTION_SYMBOL:
            case EBNFParser.START_REPEAT_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
            case EBNFParser.INTEGER:
            case EBNFParser.META_IDENTIFIER:
            case EBNFParser.TERMINAL_STRING:
            case EBNFParser.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 44;
                this.commentlessSymbol();
                }
                break;
            case EBNFParser.OTHER_CHARACTER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 45;
                this.match(EBNFParser.OTHER_CHARACTER);
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
    public commentlessSymbol(): CommentlessSymbolContext {
        let localContext = new CommentlessSymbolContext(this.context, this.state);
        this.enterRule(localContext, 4, EBNFParser.RULE_commentlessSymbol);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1801854) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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
    public syntax(): SyntaxContext {
        let localContext = new SyntaxContext(this.context, this.state);
        this.enterRule(localContext, 6, EBNFParser.RULE_syntax);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 52;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 52;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case EBNFParser.START_COMMENT_SYMBOL:
                    {
                    this.state = 50;
                    this.comment();
                    }
                    break;
                case EBNFParser.META_IDENTIFIER:
                    {
                    this.state = 51;
                    this.syntaxRule();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 54;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 7 || _la === 17);
            this.state = 56;
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
        this.enterRule(localContext, 8, EBNFParser.RULE_syntaxRule);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(EBNFParser.META_IDENTIFIER);
            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 59;
                this.comment();
                }
                }
                this.state = 64;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 65;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 69;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 66;
                    this.comment();
                    }
                    }
                }
                this.state = 71;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 72;
            this.definitionsList();
            this.state = 76;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 73;
                this.comment();
                }
                }
                this.state = 78;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 79;
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
        this.enterRule(localContext, 10, EBNFParser.RULE_definitionsList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.singleDefinition();
            this.state = 85;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 82;
                    this.comment();
                    }
                    }
                }
                this.state = 87;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 88;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 92;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 89;
                        this.comment();
                        }
                        }
                    }
                    this.state = 94;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                }
                this.state = 95;
                this.singleDefinition();
                }
                }
                this.state = 100;
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
        this.enterRule(localContext, 12, EBNFParser.RULE_singleDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 101;
            this.syntacticTerm();
            this.state = 105;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 102;
                    this.comment();
                    }
                    }
                }
                this.state = 107;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 108;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 112;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 109;
                        this.comment();
                        }
                        }
                    }
                    this.state = 114;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                }
                this.state = 115;
                this.syntacticTerm();
                }
                }
                this.state = 120;
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
        this.enterRule(localContext, 14, EBNFParser.RULE_syntacticTerm);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 121;
            this.syntacticFactor();
            this.state = 125;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 122;
                    this.comment();
                    }
                    }
                }
                this.state = 127;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 128;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 132;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 129;
                        this.comment();
                        }
                        }
                    }
                    this.state = 134;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
                }
                this.state = 135;
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
        this.enterRule(localContext, 16, EBNFParser.RULE_syntacticException);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
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
        this.enterRule(localContext, 18, EBNFParser.RULE_syntacticExceptionFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 140;
                this.match(EBNFParser.INTEGER);
                this.state = 141;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 144;
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
        this.enterRule(localContext, 20, EBNFParser.RULE_syntacticExceptionPrimary);
        try {
            this.state = 152;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 146;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 147;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 148;
                this.groupedSequence();
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 149;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 150;
                this.match(EBNFParser.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.START_COMMENT_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 151;
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
        this.enterRule(localContext, 22, EBNFParser.RULE_syntacticFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 154;
                this.match(EBNFParser.INTEGER);
                this.state = 155;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 158;
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
        this.enterRule(localContext, 24, EBNFParser.RULE_syntacticPrimary);
        try {
            this.state = 167;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 160;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 161;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 162;
                this.groupedSequence();
                }
                break;
            case EBNFParser.META_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 163;
                this.match(EBNFParser.META_IDENTIFIER);
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 164;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 165;
                this.match(EBNFParser.SPECIAL_SEQUENCE);
                }
                break;
            case EBNFParser.CONCATENATE_SYMBOL:
            case EBNFParser.EXCEPT_SYMBOL:
            case EBNFParser.END_GROUP_SYMBOL:
            case EBNFParser.START_COMMENT_SYMBOL:
            case EBNFParser.END_OPTION_SYMBOL:
            case EBNFParser.END_REPEAT_SYMBOL:
            case EBNFParser.DEFINITION_SEPARATOR_SYMBOL:
            case EBNFParser.TERMINATOR_SYMBOL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 166;
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
        this.enterRule(localContext, 26, EBNFParser.RULE_optionalSequence);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 169;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 173;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 170;
                    this.comment();
                    }
                    }
                }
                this.state = 175;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 176;
            this.definitionsList();
            this.state = 180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 177;
                this.comment();
                }
                }
                this.state = 182;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 183;
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
        this.enterRule(localContext, 28, EBNFParser.RULE_repeatedSequence);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 185;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 189;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 186;
                    this.comment();
                    }
                    }
                }
                this.state = 191;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 192;
            this.definitionsList();
            this.state = 196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 193;
                this.comment();
                }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 199;
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
        this.enterRule(localContext, 30, EBNFParser.RULE_groupedSequence);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 205;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 202;
                    this.comment();
                    }
                    }
                }
                this.state = 207;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 208;
            this.definitionsList();
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 209;
                this.comment();
                }
                }
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 215;
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
        this.enterRule(localContext, 32, EBNFParser.RULE_emptySequence);
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
        4,1,20,220,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,5,0,37,8,0,10,0,12,0,40,9,
        0,1,0,1,0,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,3,1,3,4,3,53,8,3,11,3,
        12,3,54,1,3,1,3,1,4,1,4,5,4,61,8,4,10,4,12,4,64,9,4,1,4,1,4,5,4,
        68,8,4,10,4,12,4,71,9,4,1,4,1,4,5,4,75,8,4,10,4,12,4,78,9,4,1,4,
        1,4,1,5,1,5,5,5,84,8,5,10,5,12,5,87,9,5,1,5,1,5,5,5,91,8,5,10,5,
        12,5,94,9,5,1,5,5,5,97,8,5,10,5,12,5,100,9,5,1,6,1,6,5,6,104,8,6,
        10,6,12,6,107,9,6,1,6,1,6,5,6,111,8,6,10,6,12,6,114,9,6,1,6,5,6,
        117,8,6,10,6,12,6,120,9,6,1,7,1,7,5,7,124,8,7,10,7,12,7,127,9,7,
        1,7,1,7,5,7,131,8,7,10,7,12,7,134,9,7,1,7,3,7,137,8,7,1,8,1,8,1,
        9,1,9,3,9,143,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,153,
        8,10,1,11,1,11,3,11,157,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
        1,12,1,12,3,12,168,8,12,1,13,1,13,5,13,172,8,13,10,13,12,13,175,
        9,13,1,13,1,13,5,13,179,8,13,10,13,12,13,182,9,13,1,13,1,13,1,14,
        1,14,5,14,188,8,14,10,14,12,14,191,9,14,1,14,1,14,5,14,195,8,14,
        10,14,12,14,198,9,14,1,14,1,14,1,15,1,15,5,15,204,8,15,10,15,12,
        15,207,9,15,1,15,1,15,5,15,211,8,15,10,15,12,15,214,9,15,1,15,1,
        15,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,0,1,4,0,1,6,9,14,16,17,19,20,238,0,34,1,0,0,0,2,46,1,0,0,0,
        4,48,1,0,0,0,6,52,1,0,0,0,8,58,1,0,0,0,10,81,1,0,0,0,12,101,1,0,
        0,0,14,121,1,0,0,0,16,138,1,0,0,0,18,142,1,0,0,0,20,152,1,0,0,0,
        22,156,1,0,0,0,24,167,1,0,0,0,26,169,1,0,0,0,28,185,1,0,0,0,30,201,
        1,0,0,0,32,217,1,0,0,0,34,38,5,7,0,0,35,37,3,2,1,0,36,35,1,0,0,0,
        37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,
        0,0,0,41,42,5,8,0,0,42,1,1,0,0,0,43,47,3,0,0,0,44,47,3,4,2,0,45,
        47,5,15,0,0,46,43,1,0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,3,1,0,0,
        0,48,49,7,0,0,0,49,5,1,0,0,0,50,53,3,0,0,0,51,53,3,8,4,0,52,50,1,
        0,0,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,
        56,1,0,0,0,56,57,5,0,0,1,57,7,1,0,0,0,58,62,5,17,0,0,59,61,3,0,0,
        0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,65,
        1,0,0,0,64,62,1,0,0,0,65,69,5,2,0,0,66,68,3,0,0,0,67,66,1,0,0,0,
        68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,
        0,0,0,72,76,3,10,5,0,73,75,3,0,0,0,74,73,1,0,0,0,75,78,1,0,0,0,76,
        74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,76,1,0,0,0,79,80,5,14,
        0,0,80,9,1,0,0,0,81,85,3,12,6,0,82,84,3,0,0,0,83,82,1,0,0,0,84,87,
        1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,98,1,0,0,0,87,85,1,0,0,0,
        88,92,5,13,0,0,89,91,3,0,0,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,
        0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,0,0,0,95,97,3,12,6,0,96,
        88,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,11,1,0,
        0,0,100,98,1,0,0,0,101,105,3,14,7,0,102,104,3,0,0,0,103,102,1,0,
        0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,118,1,0,
        0,0,107,105,1,0,0,0,108,112,5,1,0,0,109,111,3,0,0,0,110,109,1,0,
        0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,1,0,
        0,0,114,112,1,0,0,0,115,117,3,14,7,0,116,108,1,0,0,0,117,120,1,0,
        0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,13,1,0,0,0,120,118,1,0,0,
        0,121,125,3,22,11,0,122,124,3,0,0,0,123,122,1,0,0,0,124,127,1,0,
        0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,136,1,0,0,0,127,125,1,0,
        0,0,128,132,5,3,0,0,129,131,3,0,0,0,130,129,1,0,0,0,131,134,1,0,
        0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,
        0,0,135,137,3,16,8,0,136,128,1,0,0,0,136,137,1,0,0,0,137,15,1,0,
        0,0,138,139,3,18,9,0,139,17,1,0,0,0,140,141,5,16,0,0,141,143,5,4,
        0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,3,20,
        10,0,145,19,1,0,0,0,146,153,3,26,13,0,147,153,3,28,14,0,148,153,
        3,30,15,0,149,153,5,19,0,0,150,153,5,20,0,0,151,153,3,32,16,0,152,
        146,1,0,0,0,152,147,1,0,0,0,152,148,1,0,0,0,152,149,1,0,0,0,152,
        150,1,0,0,0,152,151,1,0,0,0,153,21,1,0,0,0,154,155,5,16,0,0,155,
        157,5,4,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,
        159,3,24,12,0,159,23,1,0,0,0,160,168,3,26,13,0,161,168,3,28,14,0,
        162,168,3,30,15,0,163,168,5,17,0,0,164,168,5,19,0,0,165,168,5,20,
        0,0,166,168,3,32,16,0,167,160,1,0,0,0,167,161,1,0,0,0,167,162,1,
        0,0,0,167,163,1,0,0,0,167,164,1,0,0,0,167,165,1,0,0,0,167,166,1,
        0,0,0,168,25,1,0,0,0,169,173,5,11,0,0,170,172,3,0,0,0,171,170,1,
        0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,
        0,0,0,175,173,1,0,0,0,176,180,3,10,5,0,177,179,3,0,0,0,178,177,1,
        0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,183,1,
        0,0,0,182,180,1,0,0,0,183,184,5,9,0,0,184,27,1,0,0,0,185,189,5,12,
        0,0,186,188,3,0,0,0,187,186,1,0,0,0,188,191,1,0,0,0,189,187,1,0,
        0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,0,0,192,196,3,10,
        5,0,193,195,3,0,0,0,194,193,1,0,0,0,195,198,1,0,0,0,196,194,1,0,
        0,0,196,197,1,0,0,0,197,199,1,0,0,0,198,196,1,0,0,0,199,200,5,10,
        0,0,200,29,1,0,0,0,201,205,5,6,0,0,202,204,3,0,0,0,203,202,1,0,0,
        0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,
        0,207,205,1,0,0,0,208,212,3,10,5,0,209,211,3,0,0,0,210,209,1,0,0,
        0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,215,1,0,0,
        0,214,212,1,0,0,0,215,216,5,5,0,0,216,31,1,0,0,0,217,218,1,0,0,0,
        218,33,1,0,0,0,26,38,46,52,54,62,69,76,85,92,98,105,112,118,125,
        132,136,142,152,156,167,173,180,189,196,205,212
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
    public commentSymbol(): CommentSymbolContext[];
    public commentSymbol(i: number): CommentSymbolContext | null;
    public commentSymbol(i?: number): CommentSymbolContext[] | CommentSymbolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentSymbolContext);
        }

        return this.getRuleContext(i, CommentSymbolContext);
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


export class CommentSymbolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comment(): CommentContext | null {
        return this.getRuleContext(0, CommentContext);
    }
    public commentlessSymbol(): CommentlessSymbolContext | null {
        return this.getRuleContext(0, CommentlessSymbolContext);
    }
    public OTHER_CHARACTER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.OTHER_CHARACTER, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_commentSymbol;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterCommentSymbol) {
             listener.enterCommentSymbol(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitCommentSymbol) {
             listener.exitCommentSymbol(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitCommentSymbol) {
            return visitor.visitCommentSymbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommentlessSymbolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONCATENATE_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.CONCATENATE_SYMBOL, 0);
    }
    public DEFINING_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.DEFINING_SYMBOL, 0);
    }
    public DEFINITION_SEPARATOR_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.DEFINITION_SEPARATOR_SYMBOL, 0);
    }
    public END_GROUP_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.END_GROUP_SYMBOL, 0);
    }
    public END_OPTION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.END_OPTION_SYMBOL, 0);
    }
    public END_REPEAT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.END_REPEAT_SYMBOL, 0);
    }
    public EXCEPT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.EXCEPT_SYMBOL, 0);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.REPETITION_SYMBOL, 0);
    }
    public START_GROUP_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.START_GROUP_SYMBOL, 0);
    }
    public START_OPTION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.START_OPTION_SYMBOL, 0);
    }
    public START_REPEAT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.START_REPEAT_SYMBOL, 0);
    }
    public TERMINATOR_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.TERMINATOR_SYMBOL, 0);
    }
    public META_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.META_IDENTIFIER, 0);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.INTEGER, 0);
    }
    public TERMINAL_STRING(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.TERMINAL_STRING, 0);
    }
    public SPECIAL_SEQUENCE(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.SPECIAL_SEQUENCE, 0);
    }
    public override get ruleIndex(): number {
        return EBNFParser.RULE_commentlessSymbol;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterCommentlessSymbol) {
             listener.enterCommentlessSymbol(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitCommentlessSymbol) {
             listener.exitCommentlessSymbol(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitCommentlessSymbol) {
            return visitor.visitCommentlessSymbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SyntaxContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(EBNFParser.EOF, 0)!;
    }
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
