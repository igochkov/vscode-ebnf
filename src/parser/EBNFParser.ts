// Generated from grammar/EBNFParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { EBNFParserListener } from "./EBNFParserListener";
import { EBNFParserVisitor } from "./EBNFParserVisitor";


export class EBNFParser extends Parser {
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
	public static readonly GAP_SEPARATOR = 19;
	public static readonly COMMENT = 20;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"syntax", "syntaxRule", "definitionsList", "singleDefinition", "term", 
		"exceptionRule", "factor", "primary", "empty", "optionalSequence", "repeatedSequence", 
		"groupedSequence", "terminalString", "specialSequence",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "','", "'='", undefined, "'('", "')'", 
		undefined, undefined, undefined, undefined, "'-'", "'*'", undefined, undefined, 
		"'\"'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IDENTIFIER", "INTEGER", "CONCATENATE_SYMBOL", "DEFINING_SYMBOL", 
		"DEFINITION_SEPARATOR_SYMBOL", "START_GROUP_SYMBOL", "END_GROUP_SYMBOL", 
		"START_OPTION_SYMBOL", "END_OPTION_SYMBOL", "START_REPEAT_SYMBOL", "END_REPEAT_SYMBOL", 
		"EXCEPT_SYMBOL", "REPETITION_SYMBOL", "TERMINATOR_SYMBOL", "FIRST_QUOTE_SYMBOL", 
		"SECOND_QUOTE_SYMBOL", "SPECIAL_SEQUENCE_SYMBOL", "ESC_SEQ", "GAP_SEPARATOR", 
		"COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(EBNFParser._LITERAL_NAMES, EBNFParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return EBNFParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "EBNFParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return EBNFParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return EBNFParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(EBNFParser._ATN, this);
	}
	// @RuleVersion(0)
	public syntax(): SyntaxContext {
		let _localctx: SyntaxContext = new SyntaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, EBNFParser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 28;
				this.syntaxRule();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EBNFParser.IDENTIFIER || _la === EBNFParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntaxRule(): SyntaxRuleContext {
		let _localctx: SyntaxRuleContext = new SyntaxRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, EBNFParser.RULE_syntaxRule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EBNFParser.COMMENT) {
				{
				{
				this.state = 33;
				this.match(EBNFParser.COMMENT);
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 39;
			this.match(EBNFParser.IDENTIFIER);
			this.state = 40;
			this.match(EBNFParser.DEFINING_SYMBOL);
			this.state = 41;
			this.definitionsList();
			this.state = 42;
			this.match(EBNFParser.TERMINATOR_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionsList(): DefinitionsListContext {
		let _localctx: DefinitionsListContext = new DefinitionsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, EBNFParser.RULE_definitionsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.singleDefinition();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EBNFParser.DEFINITION_SEPARATOR_SYMBOL) {
				{
				{
				this.state = 45;
				this.match(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
				this.state = 46;
				this.singleDefinition();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleDefinition(): SingleDefinitionContext {
		let _localctx: SingleDefinitionContext = new SingleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, EBNFParser.RULE_singleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.term();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EBNFParser.CONCATENATE_SYMBOL) {
				{
				{
				this.state = 53;
				this.match(EBNFParser.CONCATENATE_SYMBOL);
				this.state = 54;
				this.term();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, EBNFParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.factor();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EBNFParser.EXCEPT_SYMBOL) {
				{
				this.state = 61;
				this.match(EBNFParser.EXCEPT_SYMBOL);
				this.state = 62;
				this.exceptionRule();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionRule(): ExceptionRuleContext {
		let _localctx: ExceptionRuleContext = new ExceptionRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, EBNFParser.RULE_exceptionRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.factor();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, EBNFParser.RULE_factor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EBNFParser.INTEGER) {
				{
				this.state = 67;
				this.match(EBNFParser.INTEGER);
				this.state = 68;
				this.match(EBNFParser.REPETITION_SYMBOL);
				}
			}

			this.state = 71;
			this.primary();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, EBNFParser.RULE_primary);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EBNFParser.START_OPTION_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.optionalSequence();
				}
				break;
			case EBNFParser.START_REPEAT_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.repeatedSequence();
				}
				break;
			case EBNFParser.START_GROUP_SYMBOL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.groupedSequence();
				}
				break;
			case EBNFParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 76;
				this.match(EBNFParser.IDENTIFIER);
				}
				break;
			case EBNFParser.FIRST_QUOTE_SYMBOL:
			case EBNFParser.SECOND_QUOTE_SYMBOL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 77;
				this.terminalString();
				}
				break;
			case EBNFParser.SPECIAL_SEQUENCE_SYMBOL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 78;
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
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 79;
				this.empty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, EBNFParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalSequence(): OptionalSequenceContext {
		let _localctx: OptionalSequenceContext = new OptionalSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, EBNFParser.RULE_optionalSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(EBNFParser.START_OPTION_SYMBOL);
			this.state = 85;
			this.definitionsList();
			this.state = 86;
			this.match(EBNFParser.END_OPTION_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatedSequence(): RepeatedSequenceContext {
		let _localctx: RepeatedSequenceContext = new RepeatedSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, EBNFParser.RULE_repeatedSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(EBNFParser.START_REPEAT_SYMBOL);
			this.state = 89;
			this.definitionsList();
			this.state = 90;
			this.match(EBNFParser.END_REPEAT_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupedSequence(): GroupedSequenceContext {
		let _localctx: GroupedSequenceContext = new GroupedSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, EBNFParser.RULE_groupedSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(EBNFParser.START_GROUP_SYMBOL);
			this.state = 93;
			this.definitionsList();
			this.state = 94;
			this.match(EBNFParser.END_GROUP_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terminalString(): TerminalStringContext {
		let _localctx: TerminalStringContext = new TerminalStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, EBNFParser.RULE_terminalString);
		let _la: number;
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EBNFParser.FIRST_QUOTE_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EBNFParser.IDENTIFIER) | (1 << EBNFParser.INTEGER) | (1 << EBNFParser.CONCATENATE_SYMBOL) | (1 << EBNFParser.DEFINING_SYMBOL) | (1 << EBNFParser.DEFINITION_SEPARATOR_SYMBOL) | (1 << EBNFParser.START_GROUP_SYMBOL) | (1 << EBNFParser.END_GROUP_SYMBOL) | (1 << EBNFParser.START_OPTION_SYMBOL) | (1 << EBNFParser.END_OPTION_SYMBOL) | (1 << EBNFParser.START_REPEAT_SYMBOL) | (1 << EBNFParser.END_REPEAT_SYMBOL) | (1 << EBNFParser.EXCEPT_SYMBOL) | (1 << EBNFParser.REPETITION_SYMBOL) | (1 << EBNFParser.TERMINATOR_SYMBOL) | (1 << EBNFParser.SECOND_QUOTE_SYMBOL) | (1 << EBNFParser.SPECIAL_SEQUENCE_SYMBOL) | (1 << EBNFParser.ESC_SEQ) | (1 << EBNFParser.GAP_SEPARATOR) | (1 << EBNFParser.COMMENT))) !== 0)) {
					{
					this.state = 99;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 97;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === EBNFParser.FIRST_QUOTE_SYMBOL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 2:
						{
						this.state = 98;
						this.match(EBNFParser.ESC_SEQ);
						}
						break;
					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 104;
				this.match(EBNFParser.FIRST_QUOTE_SYMBOL);
				}
				break;
			case EBNFParser.SECOND_QUOTE_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(EBNFParser.SECOND_QUOTE_SYMBOL);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EBNFParser.IDENTIFIER) | (1 << EBNFParser.INTEGER) | (1 << EBNFParser.CONCATENATE_SYMBOL) | (1 << EBNFParser.DEFINING_SYMBOL) | (1 << EBNFParser.DEFINITION_SEPARATOR_SYMBOL) | (1 << EBNFParser.START_GROUP_SYMBOL) | (1 << EBNFParser.END_GROUP_SYMBOL) | (1 << EBNFParser.START_OPTION_SYMBOL) | (1 << EBNFParser.END_OPTION_SYMBOL) | (1 << EBNFParser.START_REPEAT_SYMBOL) | (1 << EBNFParser.END_REPEAT_SYMBOL) | (1 << EBNFParser.EXCEPT_SYMBOL) | (1 << EBNFParser.REPETITION_SYMBOL) | (1 << EBNFParser.TERMINATOR_SYMBOL) | (1 << EBNFParser.FIRST_QUOTE_SYMBOL) | (1 << EBNFParser.SPECIAL_SEQUENCE_SYMBOL) | (1 << EBNFParser.ESC_SEQ) | (1 << EBNFParser.GAP_SEPARATOR) | (1 << EBNFParser.COMMENT))) !== 0)) {
					{
					this.state = 108;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 106;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === EBNFParser.SECOND_QUOTE_SYMBOL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 2:
						{
						this.state = 107;
						this.match(EBNFParser.ESC_SEQ);
						}
						break;
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 113;
				this.match(EBNFParser.SECOND_QUOTE_SYMBOL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialSequence(): SpecialSequenceContext {
		let _localctx: SpecialSequenceContext = new SpecialSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EBNFParser.RULE_specialSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 117;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === EBNFParser.SPECIAL_SEQUENCE_SYMBOL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EBNFParser.IDENTIFIER) | (1 << EBNFParser.INTEGER) | (1 << EBNFParser.CONCATENATE_SYMBOL) | (1 << EBNFParser.DEFINING_SYMBOL) | (1 << EBNFParser.DEFINITION_SEPARATOR_SYMBOL) | (1 << EBNFParser.START_GROUP_SYMBOL) | (1 << EBNFParser.END_GROUP_SYMBOL) | (1 << EBNFParser.START_OPTION_SYMBOL) | (1 << EBNFParser.END_OPTION_SYMBOL) | (1 << EBNFParser.START_REPEAT_SYMBOL) | (1 << EBNFParser.END_REPEAT_SYMBOL) | (1 << EBNFParser.EXCEPT_SYMBOL) | (1 << EBNFParser.REPETITION_SYMBOL) | (1 << EBNFParser.TERMINATOR_SYMBOL) | (1 << EBNFParser.FIRST_QUOTE_SYMBOL) | (1 << EBNFParser.SECOND_QUOTE_SYMBOL) | (1 << EBNFParser.ESC_SEQ) | (1 << EBNFParser.GAP_SEPARATOR) | (1 << EBNFParser.COMMENT))) !== 0));
			this.state = 122;
			this.match(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\x7F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x06\x02 \n\x02\r\x02\x0E\x02!\x03\x03" +
		"\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x07\x042\n\x04\f\x04\x0E\x045\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x07\x05:\n\x05\f\x05\x0E\x05=\v\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06B\n\x06\x03\x07\x03\x07\x03\b\x03\b\x05\bH\n\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tS\n\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0Ef\n\x0E\f\x0E\x0E\x0Ei\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0Eo\n\x0E\f\x0E\x0E\x0Er\v\x0E\x03\x0E\x05\x0Eu" +
		"\n\x0E\x03\x0F\x03\x0F\x06\x0Fy\n\x0F\r\x0F\x0E\x0Fz\x03\x0F\x03\x0F\x03" +
		"\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x05\x03\x02" +
		"\x11\x11\x03\x02\x12\x12\x03\x02\x13\x13\x02\x82\x02\x1F\x03\x02\x02\x02" +
		"\x04&\x03\x02\x02\x02\x06.\x03\x02\x02\x02\b6\x03\x02\x02\x02\n>\x03\x02" +
		"\x02\x02\fC\x03\x02\x02\x02\x0EG\x03\x02\x02\x02\x10R\x03\x02\x02\x02" +
		"\x12T\x03\x02\x02\x02\x14V\x03\x02\x02\x02\x16Z\x03\x02\x02\x02\x18^\x03" +
		"\x02\x02\x02\x1At\x03\x02\x02\x02\x1Cv\x03\x02\x02\x02\x1E \x05\x04\x03" +
		"\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"" +
		"\x03\x02\x02\x02\"\x03\x03\x02\x02\x02#%\x07\x16\x02\x02$#\x03\x02\x02" +
		"\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02" +
		"\x02\x02(&\x03\x02\x02\x02)*\x07\x03\x02\x02*+\x07\x06\x02\x02+,\x05\x06" +
		"\x04\x02,-\x07\x10\x02\x02-\x05\x03\x02\x02\x02.3\x05\b\x05\x02/0\x07" +
		"\x07\x02\x0202\x05\b\x05\x021/\x03\x02\x02\x0225\x03\x02\x02\x0231\x03" +
		"\x02\x02\x0234\x03\x02\x02\x024\x07\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"6;\x05\n\x06\x0278\x07\x05\x02\x028:\x05\n\x06\x0297\x03\x02\x02\x02:" +
		"=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<\t\x03\x02\x02\x02" +
		"=;\x03\x02\x02\x02>A\x05\x0E\b\x02?@\x07\x0E\x02\x02@B\x05\f\x07\x02A" +
		"?\x03\x02\x02\x02AB\x03\x02\x02\x02B\v\x03\x02\x02\x02CD\x05\x0E\b\x02" +
		"D\r\x03\x02\x02\x02EF\x07\x04\x02\x02FH\x07\x0F\x02\x02GE\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x05\x10\t\x02J\x0F\x03\x02" +
		"\x02\x02KS\x05\x14\v\x02LS\x05\x16\f\x02MS\x05\x18\r\x02NS\x07\x03\x02" +
		"\x02OS\x05\x1A\x0E\x02PS\x05\x1C\x0F\x02QS\x05\x12\n\x02RK\x03\x02\x02" +
		"\x02RL\x03\x02\x02\x02RM\x03\x02\x02\x02RN\x03\x02\x02\x02RO\x03\x02\x02" +
		"\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x11\x03\x02\x02\x02TU\x03\x02" +
		"\x02\x02U\x13\x03\x02\x02\x02VW\x07\n\x02\x02WX\x05\x06\x04\x02XY\x07" +
		"\v\x02\x02Y\x15\x03\x02\x02\x02Z[\x07\f\x02\x02[\\\x05\x06\x04\x02\\]" +
		"\x07\r\x02\x02]\x17\x03\x02\x02\x02^_\x07\b\x02\x02_`\x05\x06\x04\x02" +
		"`a\x07\t\x02\x02a\x19\x03\x02\x02\x02bg\x07\x11\x02\x02cf\n\x02\x02\x02" +
		"df\x07\x14\x02\x02ec\x03\x02\x02\x02ed\x03\x02\x02\x02fi\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ig\x03\x02\x02\x02" +
		"ju\x07\x11\x02\x02kp\x07\x12\x02\x02lo\n\x03\x02\x02mo\x07\x14\x02\x02" +
		"nl\x03\x02\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02su\x07\x12\x02\x02" +
		"tb\x03\x02\x02\x02tk\x03\x02\x02\x02u\x1B\x03\x02\x02\x02vx\x07\x13\x02" +
		"\x02wy\n\x04\x02\x02xw\x03\x02\x02\x02yz\x03\x02\x02\x02zx\x03\x02\x02" +
		"\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x07\x13\x02\x02}\x1D\x03\x02" +
		"\x02\x02\x0F!&3;AGRegnptz";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EBNFParser.__ATN) {
			EBNFParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(EBNFParser._serializedATN));
		}

		return EBNFParser.__ATN;
	}

}

export class SyntaxContext extends ParserRuleContext {
	public syntaxRule(): SyntaxRuleContext[];
	public syntaxRule(i: number): SyntaxRuleContext;
	public syntaxRule(i?: number): SyntaxRuleContext | SyntaxRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxRuleContext);
		} else {
			return this.getRuleContext(i, SyntaxRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_syntax; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterSyntax) {
			listener.enterSyntax(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitSyntax) {
			listener.exitSyntax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitSyntax) {
			return visitor.visitSyntax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxRuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(EBNFParser.IDENTIFIER, 0); }
	public DEFINING_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.DEFINING_SYMBOL, 0); }
	public definitionsList(): DefinitionsListContext {
		return this.getRuleContext(0, DefinitionsListContext);
	}
	public TERMINATOR_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.TERMINATOR_SYMBOL, 0); }
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.COMMENT);
		} else {
			return this.getToken(EBNFParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_syntaxRule; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterSyntaxRule) {
			listener.enterSyntaxRule(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitSyntaxRule) {
			listener.exitSyntaxRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitSyntaxRule) {
			return visitor.visitSyntaxRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionsListContext extends ParserRuleContext {
	public singleDefinition(): SingleDefinitionContext[];
	public singleDefinition(i: number): SingleDefinitionContext;
	public singleDefinition(i?: number): SingleDefinitionContext | SingleDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleDefinitionContext);
		} else {
			return this.getRuleContext(i, SingleDefinitionContext);
		}
	}
	public DEFINITION_SEPARATOR_SYMBOL(): TerminalNode[];
	public DEFINITION_SEPARATOR_SYMBOL(i: number): TerminalNode;
	public DEFINITION_SEPARATOR_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.DEFINITION_SEPARATOR_SYMBOL);
		} else {
			return this.getToken(EBNFParser.DEFINITION_SEPARATOR_SYMBOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_definitionsList; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterDefinitionsList) {
			listener.enterDefinitionsList(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitDefinitionsList) {
			listener.exitDefinitionsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitDefinitionsList) {
			return visitor.visitDefinitionsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleDefinitionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public CONCATENATE_SYMBOL(): TerminalNode[];
	public CONCATENATE_SYMBOL(i: number): TerminalNode;
	public CONCATENATE_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.CONCATENATE_SYMBOL);
		} else {
			return this.getToken(EBNFParser.CONCATENATE_SYMBOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_singleDefinition; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterSingleDefinition) {
			listener.enterSingleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitSingleDefinition) {
			listener.exitSingleDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitSingleDefinition) {
			return visitor.visitSingleDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public EXCEPT_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(EBNFParser.EXCEPT_SYMBOL, 0); }
	public exceptionRule(): ExceptionRuleContext | undefined {
		return this.tryGetRuleContext(0, ExceptionRuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_term; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionRuleContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_exceptionRule; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterExceptionRule) {
			listener.enterExceptionRule(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitExceptionRule) {
			listener.exitExceptionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitExceptionRule) {
			return visitor.visitExceptionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(EBNFParser.INTEGER, 0); }
	public REPETITION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(EBNFParser.REPETITION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_factor; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public optionalSequence(): OptionalSequenceContext | undefined {
		return this.tryGetRuleContext(0, OptionalSequenceContext);
	}
	public repeatedSequence(): RepeatedSequenceContext | undefined {
		return this.tryGetRuleContext(0, RepeatedSequenceContext);
	}
	public groupedSequence(): GroupedSequenceContext | undefined {
		return this.tryGetRuleContext(0, GroupedSequenceContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(EBNFParser.IDENTIFIER, 0); }
	public terminalString(): TerminalStringContext | undefined {
		return this.tryGetRuleContext(0, TerminalStringContext);
	}
	public specialSequence(): SpecialSequenceContext | undefined {
		return this.tryGetRuleContext(0, SpecialSequenceContext);
	}
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_primary; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_empty; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterEmpty) {
			listener.enterEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitEmpty) {
			listener.exitEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitEmpty) {
			return visitor.visitEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalSequenceContext extends ParserRuleContext {
	public START_OPTION_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.START_OPTION_SYMBOL, 0); }
	public definitionsList(): DefinitionsListContext {
		return this.getRuleContext(0, DefinitionsListContext);
	}
	public END_OPTION_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.END_OPTION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_optionalSequence; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterOptionalSequence) {
			listener.enterOptionalSequence(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitOptionalSequence) {
			listener.exitOptionalSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitOptionalSequence) {
			return visitor.visitOptionalSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatedSequenceContext extends ParserRuleContext {
	public START_REPEAT_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.START_REPEAT_SYMBOL, 0); }
	public definitionsList(): DefinitionsListContext {
		return this.getRuleContext(0, DefinitionsListContext);
	}
	public END_REPEAT_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.END_REPEAT_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_repeatedSequence; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterRepeatedSequence) {
			listener.enterRepeatedSequence(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitRepeatedSequence) {
			listener.exitRepeatedSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitRepeatedSequence) {
			return visitor.visitRepeatedSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupedSequenceContext extends ParserRuleContext {
	public START_GROUP_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.START_GROUP_SYMBOL, 0); }
	public definitionsList(): DefinitionsListContext {
		return this.getRuleContext(0, DefinitionsListContext);
	}
	public END_GROUP_SYMBOL(): TerminalNode { return this.getToken(EBNFParser.END_GROUP_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_groupedSequence; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterGroupedSequence) {
			listener.enterGroupedSequence(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitGroupedSequence) {
			listener.exitGroupedSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitGroupedSequence) {
			return visitor.visitGroupedSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TerminalStringContext extends ParserRuleContext {
	public FIRST_QUOTE_SYMBOL(): TerminalNode[];
	public FIRST_QUOTE_SYMBOL(i: number): TerminalNode;
	public FIRST_QUOTE_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.FIRST_QUOTE_SYMBOL);
		} else {
			return this.getToken(EBNFParser.FIRST_QUOTE_SYMBOL, i);
		}
	}
	public ESC_SEQ(): TerminalNode[];
	public ESC_SEQ(i: number): TerminalNode;
	public ESC_SEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.ESC_SEQ);
		} else {
			return this.getToken(EBNFParser.ESC_SEQ, i);
		}
	}
	public SECOND_QUOTE_SYMBOL(): TerminalNode[];
	public SECOND_QUOTE_SYMBOL(i: number): TerminalNode;
	public SECOND_QUOTE_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.SECOND_QUOTE_SYMBOL);
		} else {
			return this.getToken(EBNFParser.SECOND_QUOTE_SYMBOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_terminalString; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterTerminalString) {
			listener.enterTerminalString(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitTerminalString) {
			listener.exitTerminalString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitTerminalString) {
			return visitor.visitTerminalString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialSequenceContext extends ParserRuleContext {
	public SPECIAL_SEQUENCE_SYMBOL(): TerminalNode[];
	public SPECIAL_SEQUENCE_SYMBOL(i: number): TerminalNode;
	public SPECIAL_SEQUENCE_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EBNFParser.SPECIAL_SEQUENCE_SYMBOL);
		} else {
			return this.getToken(EBNFParser.SPECIAL_SEQUENCE_SYMBOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EBNFParser.RULE_specialSequence; }
	// @Override
	public enterRule(listener: EBNFParserListener): void {
		if (listener.enterSpecialSequence) {
			listener.enterSpecialSequence(this);
		}
	}
	// @Override
	public exitRule(listener: EBNFParserListener): void {
		if (listener.exitSpecialSequence) {
			listener.exitSpecialSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EBNFParserVisitor<Result>): Result {
		if (visitor.visitSpecialSequence) {
			return visitor.visitSpecialSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


