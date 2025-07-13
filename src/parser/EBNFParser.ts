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
    public static readonly RULE_metaWithComments = 5;
    public static readonly RULE_defintitionSymbolWithComments = 6;
    public static readonly RULE_definitionsList = 7;
    public static readonly RULE_singleDefinition = 8;
    public static readonly RULE_syntacticTerm = 9;
    public static readonly RULE_syntacticException = 10;
    public static readonly RULE_syntacticExceptionFactor = 11;
    public static readonly RULE_syntacticExceptionPrimary = 12;
    public static readonly RULE_syntacticFactor = 13;
    public static readonly RULE_syntacticPrimary = 14;
    public static readonly RULE_optionalSequence = 15;
    public static readonly RULE_repeatedSequence = 16;
    public static readonly RULE_groupedSequence = 17;
    public static readonly RULE_emptySequence = 18;

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
        "metaWithComments", "defintitionSymbolWithComments", "definitionsList", 
        "singleDefinition", "syntacticTerm", "syntacticException", "syntacticExceptionFactor", 
        "syntacticExceptionPrimary", "syntacticFactor", "syntacticPrimary", 
        "optionalSequence", "repeatedSequence", "groupedSequence", "emptySequence",
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
            this.state = 38;
            this.match(EBNFParser.START_COMMENT_SYMBOL);
            this.state = 42;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1834750) !== 0)) {
                {
                {
                this.state = 39;
                this.commentSymbol();
                }
                }
                this.state = 44;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 45;
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
            this.state = 50;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_COMMENT_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 47;
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
                this.state = 48;
                this.commentlessSymbol();
                }
                break;
            case EBNFParser.OTHER_CHARACTER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 49;
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
            this.state = 52;
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
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 55;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 54;
                    this.syntaxRule();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 57;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 70;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 67;
                this.comment();
                }
                }
                this.state = 72;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 73;
            this.metaWithComments();
            this.state = 74;
            this.defintitionSymbolWithComments();
            this.state = 75;
            this.definitionsList();
            this.state = 76;
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
    public metaWithComments(): MetaWithCommentsContext {
        let localContext = new MetaWithCommentsContext(this.context, this.state);
        this.enterRule(localContext, 10, EBNFParser.RULE_metaWithComments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 78;
            this.match(EBNFParser.META_IDENTIFIER);
            this.state = 82;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 79;
                this.comment();
                }
                }
                this.state = 84;
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
    public defintitionSymbolWithComments(): DefintitionSymbolWithCommentsContext {
        let localContext = new DefintitionSymbolWithCommentsContext(this.context, this.state);
        this.enterRule(localContext, 12, EBNFParser.RULE_defintitionSymbolWithComments);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 89;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 86;
                    this.comment();
                    }
                    }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
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
    public definitionsList(): DefinitionsListContext {
        let localContext = new DefinitionsListContext(this.context, this.state);
        this.enterRule(localContext, 14, EBNFParser.RULE_definitionsList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.singleDefinition();
            this.state = 103;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 93;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 97;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 94;
                        this.comment();
                        }
                        }
                    }
                    this.state = 99;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                }
                this.state = 100;
                this.singleDefinition();
                }
                }
                this.state = 105;
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
        this.enterRule(localContext, 16, EBNFParser.RULE_singleDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.syntacticTerm();
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 107;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 111;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 108;
                        this.comment();
                        }
                        }
                    }
                    this.state = 113;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                }
                this.state = 114;
                this.syntacticTerm();
                }
                }
                this.state = 119;
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
        this.enterRule(localContext, 18, EBNFParser.RULE_syntacticTerm);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.syntacticFactor();
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 121;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 125;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
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
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                }
                this.state = 128;
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
        this.enterRule(localContext, 20, EBNFParser.RULE_syntacticException);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
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
        this.enterRule(localContext, 22, EBNFParser.RULE_syntacticExceptionFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 133;
                this.match(EBNFParser.INTEGER);
                this.state = 134;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 137;
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
        this.enterRule(localContext, 24, EBNFParser.RULE_syntacticExceptionPrimary);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                {
                this.state = 139;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                {
                this.state = 140;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                {
                this.state = 141;
                this.groupedSequence();
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                {
                this.state = 142;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                {
                this.state = 143;
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
                {
                this.state = 144;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 147;
                this.comment();
                }
                }
                this.state = 152;
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
    public syntacticFactor(): SyntacticFactorContext {
        let localContext = new SyntacticFactorContext(this.context, this.state);
        this.enterRule(localContext, 26, EBNFParser.RULE_syntacticFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 153;
                this.match(EBNFParser.INTEGER);
                this.state = 154;
                this.match(EBNFParser.REPETITION_SYMBOL);
                }
            }

            this.state = 157;
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
        this.enterRule(localContext, 28, EBNFParser.RULE_syntacticPrimary);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 166;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                {
                this.state = 159;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                {
                this.state = 160;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                {
                this.state = 161;
                this.groupedSequence();
                }
                break;
            case EBNFParser.META_IDENTIFIER:
                {
                this.state = 162;
                this.match(EBNFParser.META_IDENTIFIER);
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                {
                this.state = 163;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                {
                this.state = 164;
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
                {
                this.state = 165;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 168;
                this.comment();
                }
                }
                this.state = 173;
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
    public optionalSequence(): OptionalSequenceContext {
        let localContext = new OptionalSequenceContext(this.context, this.state);
        this.enterRule(localContext, 30, EBNFParser.RULE_optionalSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 178;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 175;
                    this.comment();
                    }
                    }
                }
                this.state = 180;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 181;
            this.definitionsList();
            this.state = 182;
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
        this.enterRule(localContext, 32, EBNFParser.RULE_repeatedSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 184;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 188;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 185;
                    this.comment();
                    }
                    }
                }
                this.state = 190;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 191;
            this.definitionsList();
            this.state = 192;
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
        this.enterRule(localContext, 34, EBNFParser.RULE_groupedSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 198;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 195;
                    this.comment();
                    }
                    }
                }
                this.state = 200;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 201;
            this.definitionsList();
            this.state = 202;
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
        this.enterRule(localContext, 36, EBNFParser.RULE_emptySequence);
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
        4,1,20,207,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,5,0,41,
        8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,3,
        4,3,56,8,3,11,3,12,3,57,1,3,5,3,61,8,3,10,3,12,3,64,9,3,1,3,1,3,
        1,4,5,4,69,8,4,10,4,12,4,72,9,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,
        81,8,5,10,5,12,5,84,9,5,1,6,1,6,5,6,88,8,6,10,6,12,6,91,9,6,1,7,
        1,7,1,7,5,7,96,8,7,10,7,12,7,99,9,7,1,7,5,7,102,8,7,10,7,12,7,105,
        9,7,1,8,1,8,1,8,5,8,110,8,8,10,8,12,8,113,9,8,1,8,5,8,116,8,8,10,
        8,12,8,119,9,8,1,9,1,9,1,9,5,9,124,8,9,10,9,12,9,127,9,9,1,9,3,9,
        130,8,9,1,10,1,10,1,11,1,11,3,11,136,8,11,1,11,1,11,1,12,1,12,1,
        12,1,12,1,12,1,12,3,12,146,8,12,1,12,5,12,149,8,12,10,12,12,12,152,
        9,12,1,13,1,13,3,13,156,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,3,14,167,8,14,1,14,5,14,170,8,14,10,14,12,14,173,9,14,
        1,15,1,15,5,15,177,8,15,10,15,12,15,180,9,15,1,15,1,15,1,15,1,16,
        1,16,5,16,187,8,16,10,16,12,16,190,9,16,1,16,1,16,1,16,1,17,1,17,
        5,17,197,8,17,10,17,12,17,200,9,17,1,17,1,17,1,17,1,18,1,18,1,18,
        0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,1,4,
        0,1,6,9,14,16,17,19,20,219,0,38,1,0,0,0,2,50,1,0,0,0,4,52,1,0,0,
        0,6,55,1,0,0,0,8,70,1,0,0,0,10,78,1,0,0,0,12,85,1,0,0,0,14,92,1,
        0,0,0,16,106,1,0,0,0,18,120,1,0,0,0,20,131,1,0,0,0,22,135,1,0,0,
        0,24,145,1,0,0,0,26,155,1,0,0,0,28,166,1,0,0,0,30,174,1,0,0,0,32,
        184,1,0,0,0,34,194,1,0,0,0,36,204,1,0,0,0,38,42,5,7,0,0,39,41,3,
        2,1,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,
        45,1,0,0,0,44,42,1,0,0,0,45,46,5,8,0,0,46,1,1,0,0,0,47,51,3,0,0,
        0,48,51,3,4,2,0,49,51,5,15,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,
        1,0,0,0,51,3,1,0,0,0,52,53,7,0,0,0,53,5,1,0,0,0,54,56,3,8,4,0,55,
        54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,62,1,0,0,
        0,59,61,3,0,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,
        1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,0,0,1,66,7,1,0,0,0,67,
        69,3,0,0,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,
        0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,3,10,5,0,74,75,3,12,6,0,75,76,
        3,14,7,0,76,77,5,14,0,0,77,9,1,0,0,0,78,82,5,17,0,0,79,81,3,0,0,
        0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,11,
        1,0,0,0,84,82,1,0,0,0,85,89,5,2,0,0,86,88,3,0,0,0,87,86,1,0,0,0,
        88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,13,1,0,0,0,91,89,1,
        0,0,0,92,103,3,16,8,0,93,97,5,13,0,0,94,96,3,0,0,0,95,94,1,0,0,0,
        96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,
        0,0,0,100,102,3,16,8,0,101,93,1,0,0,0,102,105,1,0,0,0,103,101,1,
        0,0,0,103,104,1,0,0,0,104,15,1,0,0,0,105,103,1,0,0,0,106,117,3,18,
        9,0,107,111,5,1,0,0,108,110,3,0,0,0,109,108,1,0,0,0,110,113,1,0,
        0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,111,1,0,
        0,0,114,116,3,18,9,0,115,107,1,0,0,0,116,119,1,0,0,0,117,115,1,0,
        0,0,117,118,1,0,0,0,118,17,1,0,0,0,119,117,1,0,0,0,120,129,3,26,
        13,0,121,125,5,3,0,0,122,124,3,0,0,0,123,122,1,0,0,0,124,127,1,0,
        0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,125,1,0,
        0,0,128,130,3,20,10,0,129,121,1,0,0,0,129,130,1,0,0,0,130,19,1,0,
        0,0,131,132,3,22,11,0,132,21,1,0,0,0,133,134,5,16,0,0,134,136,5,
        4,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,3,
        24,12,0,138,23,1,0,0,0,139,146,3,30,15,0,140,146,3,32,16,0,141,146,
        3,34,17,0,142,146,5,19,0,0,143,146,5,20,0,0,144,146,3,36,18,0,145,
        139,1,0,0,0,145,140,1,0,0,0,145,141,1,0,0,0,145,142,1,0,0,0,145,
        143,1,0,0,0,145,144,1,0,0,0,146,150,1,0,0,0,147,149,3,0,0,0,148,
        147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,
        25,1,0,0,0,152,150,1,0,0,0,153,154,5,16,0,0,154,156,5,4,0,0,155,
        153,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,3,28,14,0,158,
        27,1,0,0,0,159,167,3,30,15,0,160,167,3,32,16,0,161,167,3,34,17,0,
        162,167,5,17,0,0,163,167,5,19,0,0,164,167,5,20,0,0,165,167,3,36,
        18,0,166,159,1,0,0,0,166,160,1,0,0,0,166,161,1,0,0,0,166,162,1,0,
        0,0,166,163,1,0,0,0,166,164,1,0,0,0,166,165,1,0,0,0,167,171,1,0,
        0,0,168,170,3,0,0,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,
        0,0,171,172,1,0,0,0,172,29,1,0,0,0,173,171,1,0,0,0,174,178,5,11,
        0,0,175,177,3,0,0,0,176,175,1,0,0,0,177,180,1,0,0,0,178,176,1,0,
        0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,182,3,14,
        7,0,182,183,5,9,0,0,183,31,1,0,0,0,184,188,5,12,0,0,185,187,3,0,
        0,0,186,185,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,
        0,0,189,191,1,0,0,0,190,188,1,0,0,0,191,192,3,14,7,0,192,193,5,10,
        0,0,193,33,1,0,0,0,194,198,5,6,0,0,195,197,3,0,0,0,196,195,1,0,0,
        0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,
        0,200,198,1,0,0,0,201,202,3,14,7,0,202,203,5,5,0,0,203,35,1,0,0,
        0,204,205,1,0,0,0,205,37,1,0,0,0,22,42,50,57,62,70,82,89,97,103,
        111,117,125,129,135,145,150,155,166,171,178,188,198
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
    public syntaxRule(): SyntaxRuleContext[];
    public syntaxRule(i: number): SyntaxRuleContext | null;
    public syntaxRule(i?: number): SyntaxRuleContext[] | SyntaxRuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SyntaxRuleContext);
        }

        return this.getRuleContext(i, SyntaxRuleContext);
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
    public metaWithComments(): MetaWithCommentsContext {
        return this.getRuleContext(0, MetaWithCommentsContext)!;
    }
    public defintitionSymbolWithComments(): DefintitionSymbolWithCommentsContext {
        return this.getRuleContext(0, DefintitionSymbolWithCommentsContext)!;
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


export class MetaWithCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public META_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(EBNFParser.META_IDENTIFIER, 0)!;
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
        return EBNFParser.RULE_metaWithComments;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterMetaWithComments) {
             listener.enterMetaWithComments(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitMetaWithComments) {
             listener.exitMetaWithComments(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitMetaWithComments) {
            return visitor.visitMetaWithComments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefintitionSymbolWithCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFINING_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.DEFINING_SYMBOL, 0)!;
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
        return EBNFParser.RULE_defintitionSymbolWithComments;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterDefintitionSymbolWithComments) {
             listener.enterDefintitionSymbolWithComments(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitDefintitionSymbolWithComments) {
             listener.exitDefintitionSymbolWithComments(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitDefintitionSymbolWithComments) {
            return visitor.visitDefintitionSymbolWithComments(this);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
