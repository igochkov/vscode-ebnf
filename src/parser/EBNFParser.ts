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
    public static readonly RULE_comment = 0;
    public static readonly RULE_commentSymbol = 1;
    public static readonly RULE_syntax = 2;
    public static readonly RULE_syntaxRule = 3;
    public static readonly RULE_metaWithComments = 4;
    public static readonly RULE_defintitionSymbolWithComments = 5;
    public static readonly RULE_definitionsList = 6;
    public static readonly RULE_singleDefinition = 7;
    public static readonly RULE_syntacticTerm = 8;
    public static readonly RULE_syntacticException = 9;
    public static readonly RULE_syntacticExceptionFactor = 10;
    public static readonly RULE_integerWithComments = 11;
    public static readonly RULE_repetitionSymbolWithComments = 12;
    public static readonly RULE_syntacticExceptionPrimary = 13;
    public static readonly RULE_syntacticFactor = 14;
    public static readonly RULE_syntacticPrimary = 15;
    public static readonly RULE_optionalSequence = 16;
    public static readonly RULE_repeatedSequence = 17;
    public static readonly RULE_groupedSequence = 18;
    public static readonly RULE_emptySequence = 19;

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
    public static readonly ruleNames = [
        "comment", "commentSymbol", "syntax", "syntaxRule", "metaWithComments", 
        "defintitionSymbolWithComments", "definitionsList", "singleDefinition", 
        "syntacticTerm", "syntacticException", "syntacticExceptionFactor", 
        "integerWithComments", "repetitionSymbolWithComments", "syntacticExceptionPrimary", 
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
    public comment(): CommentContext {
        let localContext = new CommentContext(this.context, this.state);
        this.enterRule(localContext, 0, EBNFParser.RULE_comment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            _la = this.tokenStream.LA(1);
            if(!(_la === 7 || _la === 20)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 44;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3145856) !== 0)) {
                {
                {
                this.state = 41;
                this.commentSymbol();
                }
                }
                this.state = 46;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 47;
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
            this.state = 51;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_COMMENT_SYMBOL:
            case EBNFParser.NESTED_START_COMMENT_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 49;
                this.comment();
                }
                break;
            case EBNFParser.OTHER_CHARACTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 50;
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
    public syntax(): SyntaxContext {
        let localContext = new SyntaxContext(this.context, this.state);
        this.enterRule(localContext, 4, EBNFParser.RULE_syntax);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 53;
                    this.syntaxRule();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 56;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
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
        this.enterRule(localContext, 6, EBNFParser.RULE_syntaxRule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
                {
                {
                this.state = 66;
                this.comment();
                }
                }
                this.state = 71;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 72;
            this.metaWithComments();
            this.state = 73;
            this.defintitionSymbolWithComments();
            this.state = 74;
            this.definitionsList();
            this.state = 75;
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
        this.enterRule(localContext, 8, EBNFParser.RULE_metaWithComments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.match(EBNFParser.META_IDENTIFIER);
            this.state = 81;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
                {
                {
                this.state = 78;
                this.comment();
                }
                }
                this.state = 83;
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
        this.enterRule(localContext, 10, EBNFParser.RULE_defintitionSymbolWithComments);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 84;
            this.match(EBNFParser.DEFINING_SYMBOL);
            this.state = 88;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 85;
                    this.comment();
                    }
                    }
                }
                this.state = 90;
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
        this.enterRule(localContext, 12, EBNFParser.RULE_definitionsList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 91;
            this.singleDefinition();
            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12) {
                {
                {
                this.state = 92;
                this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
                this.state = 96;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 93;
                        this.comment();
                        }
                        }
                    }
                    this.state = 98;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                }
                this.state = 99;
                this.singleDefinition();
                }
                }
                this.state = 104;
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
        this.enterRule(localContext, 14, EBNFParser.RULE_singleDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.syntacticTerm();
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 106;
                this.match(EBNFParser.CONCATENATE_SYMBOL);
                this.state = 110;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 107;
                        this.comment();
                        }
                        }
                    }
                    this.state = 112;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                }
                this.state = 113;
                this.syntacticTerm();
                }
                }
                this.state = 118;
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
        this.enterRule(localContext, 16, EBNFParser.RULE_syntacticTerm);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 119;
            this.syntacticFactor();
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 120;
                this.match(EBNFParser.EXCEPT_SYMBOL);
                this.state = 124;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 121;
                        this.comment();
                        }
                        }
                    }
                    this.state = 126;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                }
                this.state = 127;
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
        this.enterRule(localContext, 18, EBNFParser.RULE_syntacticException);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.syntacticExceptionFactor();
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
                {
                {
                this.state = 131;
                this.comment();
                }
                }
                this.state = 136;
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
    public syntacticExceptionFactor(): SyntacticExceptionFactorContext {
        let localContext = new SyntacticExceptionFactorContext(this.context, this.state);
        this.enterRule(localContext, 20, EBNFParser.RULE_syntacticExceptionFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 137;
                this.integerWithComments();
                this.state = 138;
                this.repetitionSymbolWithComments();
                }
            }

            this.state = 142;
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
    public integerWithComments(): IntegerWithCommentsContext {
        let localContext = new IntegerWithCommentsContext(this.context, this.state);
        this.enterRule(localContext, 22, EBNFParser.RULE_integerWithComments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 144;
            this.match(EBNFParser.INTEGER);
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
                {
                {
                this.state = 145;
                this.comment();
                }
                }
                this.state = 150;
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
    public repetitionSymbolWithComments(): RepetitionSymbolWithCommentsContext {
        let localContext = new RepetitionSymbolWithCommentsContext(this.context, this.state);
        this.enterRule(localContext, 24, EBNFParser.RULE_repetitionSymbolWithComments);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 151;
            this.match(EBNFParser.REPETITION_SYMBOL);
            this.state = 155;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 152;
                    this.comment();
                    }
                    }
                }
                this.state = 157;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
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
    public syntacticExceptionPrimary(): SyntacticExceptionPrimaryContext {
        let localContext = new SyntacticExceptionPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 26, EBNFParser.RULE_syntacticExceptionPrimary);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                {
                this.state = 158;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                {
                this.state = 159;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                {
                this.state = 160;
                this.groupedSequence();
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                {
                this.state = 161;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                {
                this.state = 162;
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
            case EBNFParser.NESTED_START_COMMENT_SYMBOL:
                {
                this.state = 163;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 169;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 166;
                    this.comment();
                    }
                    }
                }
                this.state = 171;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
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
        this.enterRule(localContext, 28, EBNFParser.RULE_syntacticFactor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 175;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 172;
                this.integerWithComments();
                this.state = 173;
                this.repetitionSymbolWithComments();
                }
            }

            this.state = 177;
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
        this.enterRule(localContext, 30, EBNFParser.RULE_syntacticPrimary);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EBNFParser.START_OPTION_SYMBOL:
                {
                this.state = 179;
                this.optionalSequence();
                }
                break;
            case EBNFParser.START_REPEAT_SYMBOL:
                {
                this.state = 180;
                this.repeatedSequence();
                }
                break;
            case EBNFParser.START_GROUP_SYMBOL:
                {
                this.state = 181;
                this.groupedSequence();
                }
                break;
            case EBNFParser.META_IDENTIFIER:
                {
                this.state = 182;
                this.match(EBNFParser.META_IDENTIFIER);
                }
                break;
            case EBNFParser.TERMINAL_STRING:
                {
                this.state = 183;
                this.match(EBNFParser.TERMINAL_STRING);
                }
                break;
            case EBNFParser.SPECIAL_SEQUENCE:
                {
                this.state = 184;
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
            case EBNFParser.NESTED_START_COMMENT_SYMBOL:
                {
                this.state = 185;
                this.emptySequence();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 20) {
                {
                {
                this.state = 188;
                this.comment();
                }
                }
                this.state = 193;
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
        this.enterRule(localContext, 32, EBNFParser.RULE_optionalSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
            this.match(EBNFParser.START_OPTION_SYMBOL);
            this.state = 198;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
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
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 201;
            this.definitionsList();
            this.state = 202;
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
        this.enterRule(localContext, 34, EBNFParser.RULE_repeatedSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
            this.match(EBNFParser.START_REPEAT_SYMBOL);
            this.state = 208;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 205;
                    this.comment();
                    }
                    }
                }
                this.state = 210;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            this.state = 211;
            this.definitionsList();
            this.state = 212;
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
        this.enterRule(localContext, 36, EBNFParser.RULE_groupedSequence);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 214;
            this.match(EBNFParser.START_GROUP_SYMBOL);
            this.state = 218;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 215;
                    this.comment();
                    }
                    }
                }
                this.state = 220;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 221;
            this.definitionsList();
            this.state = 222;
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
        this.enterRule(localContext, 38, EBNFParser.RULE_emptySequence);
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
        4,1,21,227,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,
        1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,0,1,0,1,1,1,1,3,1,52,8,1,1,2,4,
        2,55,8,2,11,2,12,2,56,1,2,5,2,60,8,2,10,2,12,2,63,9,2,1,2,1,2,1,
        3,5,3,68,8,3,10,3,12,3,71,9,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,80,
        8,4,10,4,12,4,83,9,4,1,5,1,5,5,5,87,8,5,10,5,12,5,90,9,5,1,6,1,6,
        1,6,5,6,95,8,6,10,6,12,6,98,9,6,1,6,5,6,101,8,6,10,6,12,6,104,9,
        6,1,7,1,7,1,7,5,7,109,8,7,10,7,12,7,112,9,7,1,7,5,7,115,8,7,10,7,
        12,7,118,9,7,1,8,1,8,1,8,5,8,123,8,8,10,8,12,8,126,9,8,1,8,3,8,129,
        8,8,1,9,1,9,5,9,133,8,9,10,9,12,9,136,9,9,1,10,1,10,1,10,3,10,141,
        8,10,1,10,1,10,1,11,1,11,5,11,147,8,11,10,11,12,11,150,9,11,1,12,
        1,12,5,12,154,8,12,10,12,12,12,157,9,12,1,13,1,13,1,13,1,13,1,13,
        1,13,3,13,165,8,13,1,13,5,13,168,8,13,10,13,12,13,171,9,13,1,14,
        1,14,1,14,3,14,176,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,3,15,187,8,15,1,15,5,15,190,8,15,10,15,12,15,193,9,15,1,16,
        1,16,5,16,197,8,16,10,16,12,16,200,9,16,1,16,1,16,1,16,1,17,1,17,
        5,17,207,8,17,10,17,12,17,210,9,17,1,17,1,17,1,17,1,18,1,18,5,18,
        217,8,18,10,18,12,18,220,9,18,1,18,1,18,1,18,1,19,1,19,1,19,0,0,
        20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,1,2,
        0,7,7,20,20,240,0,40,1,0,0,0,2,51,1,0,0,0,4,54,1,0,0,0,6,69,1,0,
        0,0,8,77,1,0,0,0,10,84,1,0,0,0,12,91,1,0,0,0,14,105,1,0,0,0,16,119,
        1,0,0,0,18,130,1,0,0,0,20,140,1,0,0,0,22,144,1,0,0,0,24,151,1,0,
        0,0,26,164,1,0,0,0,28,175,1,0,0,0,30,186,1,0,0,0,32,194,1,0,0,0,
        34,204,1,0,0,0,36,214,1,0,0,0,38,224,1,0,0,0,40,44,7,0,0,0,41,43,
        3,2,1,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,
        45,47,1,0,0,0,46,44,1,0,0,0,47,48,5,19,0,0,48,1,1,0,0,0,49,52,3,
        0,0,0,50,52,5,21,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,3,1,0,0,0,53,
        55,3,6,3,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,
        0,57,61,1,0,0,0,58,60,3,0,0,0,59,58,1,0,0,0,60,63,1,0,0,0,61,59,
        1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,5,0,0,1,
        65,5,1,0,0,0,66,68,3,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,
        0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,3,8,4,0,73,74,
        3,10,5,0,74,75,3,12,6,0,75,76,5,13,0,0,76,7,1,0,0,0,77,81,5,15,0,
        0,78,80,3,0,0,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,
        1,0,0,0,82,9,1,0,0,0,83,81,1,0,0,0,84,88,5,2,0,0,85,87,3,0,0,0,86,
        85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,11,1,0,0,
        0,90,88,1,0,0,0,91,102,3,14,7,0,92,96,5,12,0,0,93,95,3,0,0,0,94,
        93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,
        0,98,96,1,0,0,0,99,101,3,14,7,0,100,92,1,0,0,0,101,104,1,0,0,0,102,
        100,1,0,0,0,102,103,1,0,0,0,103,13,1,0,0,0,104,102,1,0,0,0,105,116,
        3,16,8,0,106,110,5,1,0,0,107,109,3,0,0,0,108,107,1,0,0,0,109,112,
        1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,110,
        1,0,0,0,113,115,3,16,8,0,114,106,1,0,0,0,115,118,1,0,0,0,116,114,
        1,0,0,0,116,117,1,0,0,0,117,15,1,0,0,0,118,116,1,0,0,0,119,128,3,
        28,14,0,120,124,5,3,0,0,121,123,3,0,0,0,122,121,1,0,0,0,123,126,
        1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,124,
        1,0,0,0,127,129,3,18,9,0,128,120,1,0,0,0,128,129,1,0,0,0,129,17,
        1,0,0,0,130,134,3,20,10,0,131,133,3,0,0,0,132,131,1,0,0,0,133,136,
        1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,19,1,0,0,0,136,134,1,
        0,0,0,137,138,3,22,11,0,138,139,3,24,12,0,139,141,1,0,0,0,140,137,
        1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,3,26,13,0,143,21,
        1,0,0,0,144,148,5,14,0,0,145,147,3,0,0,0,146,145,1,0,0,0,147,150,
        1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,23,1,0,0,0,150,148,1,
        0,0,0,151,155,5,4,0,0,152,154,3,0,0,0,153,152,1,0,0,0,154,157,1,
        0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,25,1,0,0,0,157,155,1,0,
        0,0,158,165,3,32,16,0,159,165,3,34,17,0,160,165,3,36,18,0,161,165,
        5,17,0,0,162,165,5,18,0,0,163,165,3,38,19,0,164,158,1,0,0,0,164,
        159,1,0,0,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,1,0,0,0,164,
        163,1,0,0,0,165,169,1,0,0,0,166,168,3,0,0,0,167,166,1,0,0,0,168,
        171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,27,1,0,0,0,171,169,
        1,0,0,0,172,173,3,22,11,0,173,174,3,24,12,0,174,176,1,0,0,0,175,
        172,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,3,30,15,0,178,
        29,1,0,0,0,179,187,3,32,16,0,180,187,3,34,17,0,181,187,3,36,18,0,
        182,187,5,15,0,0,183,187,5,17,0,0,184,187,5,18,0,0,185,187,3,38,
        19,0,186,179,1,0,0,0,186,180,1,0,0,0,186,181,1,0,0,0,186,182,1,0,
        0,0,186,183,1,0,0,0,186,184,1,0,0,0,186,185,1,0,0,0,187,191,1,0,
        0,0,188,190,3,0,0,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,
        0,0,191,192,1,0,0,0,192,31,1,0,0,0,193,191,1,0,0,0,194,198,5,10,
        0,0,195,197,3,0,0,0,196,195,1,0,0,0,197,200,1,0,0,0,198,196,1,0,
        0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,202,3,12,
        6,0,202,203,5,8,0,0,203,33,1,0,0,0,204,208,5,11,0,0,205,207,3,0,
        0,0,206,205,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,
        0,0,209,211,1,0,0,0,210,208,1,0,0,0,211,212,3,12,6,0,212,213,5,9,
        0,0,213,35,1,0,0,0,214,218,5,6,0,0,215,217,3,0,0,0,216,215,1,0,0,
        0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,221,1,0,0,
        0,220,218,1,0,0,0,221,222,3,12,6,0,222,223,5,5,0,0,223,37,1,0,0,
        0,224,225,1,0,0,0,225,39,1,0,0,0,25,44,51,56,61,69,81,88,96,102,
        110,116,124,128,134,140,148,155,164,169,175,186,191,198,208,218
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
    public END_COMMENT_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.END_COMMENT_SYMBOL, 0)!;
    }
    public START_COMMENT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.START_COMMENT_SYMBOL, 0);
    }
    public NESTED_START_COMMENT_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(EBNFParser.NESTED_START_COMMENT_SYMBOL, 0);
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
    public comment(): CommentContext[];
    public comment(i: number): CommentContext | null;
    public comment(i?: number): CommentContext[] | CommentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }

        return this.getRuleContext(i, CommentContext);
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
    public integerWithComments(): IntegerWithCommentsContext | null {
        return this.getRuleContext(0, IntegerWithCommentsContext);
    }
    public repetitionSymbolWithComments(): RepetitionSymbolWithCommentsContext | null {
        return this.getRuleContext(0, RepetitionSymbolWithCommentsContext);
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


export class IntegerWithCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER(): antlr.TerminalNode {
        return this.getToken(EBNFParser.INTEGER, 0)!;
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
        return EBNFParser.RULE_integerWithComments;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterIntegerWithComments) {
             listener.enterIntegerWithComments(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitIntegerWithComments) {
             listener.exitIntegerWithComments(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerWithComments) {
            return visitor.visitIntegerWithComments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RepetitionSymbolWithCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REPETITION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(EBNFParser.REPETITION_SYMBOL, 0)!;
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
        return EBNFParser.RULE_repetitionSymbolWithComments;
    }
    public override enterRule(listener: EBNFParserListener): void {
        if(listener.enterRepetitionSymbolWithComments) {
             listener.enterRepetitionSymbolWithComments(this);
        }
    }
    public override exitRule(listener: EBNFParserListener): void {
        if(listener.exitRepetitionSymbolWithComments) {
             listener.exitRepetitionSymbolWithComments(this);
        }
    }
    public override accept<Result>(visitor: EBNFParserVisitor<Result>): Result | null {
        if (visitor.visitRepetitionSymbolWithComments) {
            return visitor.visitRepetitionSymbolWithComments(this);
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
    public integerWithComments(): IntegerWithCommentsContext | null {
        return this.getRuleContext(0, IntegerWithCommentsContext);
    }
    public repetitionSymbolWithComments(): RepetitionSymbolWithCommentsContext | null {
        return this.getRuleContext(0, RepetitionSymbolWithCommentsContext);
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
