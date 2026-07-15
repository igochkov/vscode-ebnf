# EBNF Tools Changelog and Roadmap

This document outlines the changes made in each released version of the EBNF Tools extension for Visual Studio Code, as well as our roadmap for future features.

## Roadmap

Our development roadmap outlines the planned features for EBNF Tools. Features marked with a check mark have already been implemented.

- [x] **Syntax highlighting (colorization)**: Adds color to your EBNF syntax.
- [x] **Syntax highlighting in Markdown fenced code blocks**: Allows you to include EBNF code in your Markdown files with the same colorization as in your .ebnf files.
- [x] **Commenting blocks of code**: Allows you to quickly comment out blocks of EBNF code.
- [x] **Bracket matching**: Aids in matching brackets in your EBNF code.
- [x] **Rename symbol**: Allows renaming of symbols throughout your EBNF code.
- [x] **Go to Definition / Peek Definition**: Quickly navigate to the definition of a symbol in your EBNF code.
- [x] **Code folding (by markers)**: Hide sections of your EBNF code for easier reading and navigation.
- [x] **Find All References / Peek References**: Find every reference to a specific symbol in your EBNF code.
- [x] **Formatting**: Automatically format your EBNF code to adhere to a specific style or standard.
- [x] **Hover**: Show information about the symbol/object that's below the mouse cursor.
- [x] **Diagnostic**: Indicate issues with the grammar.
- [x] **Actions on Errors or Warnings**: Possible corrective actions right next to an error or warning.
- [ ] **Commands (Transpile to tmLanguage)**: A command for compiling EBNF code to tmLanguage.
- [ ] **Railroad diagram generation**: Generate railroad diagrams from your EBNF code for visualization and documentation purposes.


## Change Log

The change log lists the updates for each version that has been released on the official Visual Studio Code extension gallery.

### Version 1.6
**Released on 2026-07-16**

A large release that turns EBNF Tools from a colorizer/navigator into a real grammar linter and language tool, and substantially improves ISO/IEC 14977 conformance.

**Semantic linting** (see [PR 42](https://github.com/igochkov/vscode-ebnf/pull/42)):
- Diagnostic: _undefined rule_ — a meta-identifier used but never defined.
- Diagnostic: _duplicate definition_ — a rule defined by more than one syntax-rule (allowed by ISO §5.1 note 2). _Go to Definition_ now returns all definition sites.
- Diagnostic: _unused rule_ — a defined rule never referenced (the first-defined rule is treated as the start symbol).

**Navigation & views** (see [PR 42](https://github.com/igochkov/vscode-ebnf/pull/42), [PR 43](https://github.com/igochkov/vscode-ebnf/pull/43)):
- Feature: _Hover_ — shows a rule's definition and its leading comment.
- Feature: _Document Symbols / Outline_ and breadcrumbs.
- Feature: _Document Highlights_ — highlights all occurrences of the identifier under the cursor.
- Feature: _Semantic Tokens_ — a meta-identifier that is used but never defined is colored distinctly.
- Feature: _CodeLens_ — a "N references" lens above each rule.

**Editor experience** (see [PR 43](https://github.com/igochkov/vscode-ebnf/pull/43)):
- Feature: _Structural folding_ — fold by rule (marker-based `(* region *)` folding retained).
- Feature: _Range formatting_ and _on-type formatting_ (triggered on `;` / `.`).
- Feature: _Quick Fixes_ — create a missing rule (undefined) and remove an unused rule.
- Bug fix: the formatter no longer duplicates or misplaces comments in alternation/concatenation lists.

**Conformance (ISO/IEC 14977)** — additive / non-breaking, [issue 36](https://github.com/igochkov/vscode-ebnf/issues/36) Phase 2:
- Feature: _Space-separated meta-identifiers_ — `syntax rule` now parses as a single identifier; the standard's own §8.1 self-defining grammar parses.
- Feature: diagnostics for the invalid sequences `(*)`, `(:)`, `(/)` (§7.8).
- Bug fix: a comment may contain terminal-strings / special-sequences (§6.6), so a quoted `*)` no longer ends a comment early.
- Change: `EBNF.identifierStyle: standard` now flags both `-` and `_` as non-standard; the _EBNF: Convert identifiers…_ command gained a **Space** target and now migrates the whole document (to spaces or `_`).

**Stability & tooling** (see [PR 41](https://github.com/igochkov/vscode-ebnf/pull/41)):
- Bug fix: crash in _Go to Definition_ on an identifier that is used but never defined.
- Feature: _Rename_ validation (`prepareRename`) rejects invalid positions and names.
- Change: TypeScript `strict` mode enabled; `antlr4ng` declared as a direct dependency.
- Change: reproducible parser generation via `npm run generate` (antlr-ng), with a CI drift guard so the committed parser can't drift from the grammar.

### Version 1.5
**Released on 2026-07-11**

- Feature: _Completion Suggestions_ — suggests previously defined symbols (see [PR 34](https://github.com/igochkov/vscode-ebnf/pull/34)).
- Feature: _`EBNF.identifierStyle` setting_ (`modern` | `standard`) controlling how meta-identifier characters are treated (see [issue 36](https://github.com/igochkov/vscode-ebnf/issues/36)).
- Feature: Deprecation warning for hyphens (`-`) in meta-identifiers — `-` is the EBNF except-symbol — with a Quick Fix and an _EBNF: Convert identifiers…_ command to migrate them to underscores (see [issue 36](https://github.com/igochkov/vscode-ebnf/issues/36)).
- Feature: Anonymous, opt-in usage telemetry to guide standards-conformance work. No grammar text, identifier names, file paths, or device IDs are collected; it respects the global `telemetry.telemetryLevel` and the `EBNF.telemetry.enable` setting.
- Change: The formatter now only blocks on errors, not on warnings.

### Version 1.4
**Released on 2025-07-18**

- Feature: _Status Bar Item_
- Feature: _Diagnostic Messages_
- Bug fix: Formatting deletes string contents (see [issue 21](https://github.com/igochkov/vscode-ebnf/issues/21))
- Bug fix: Problem with coloring (see [issue 18](https://github.com/igochkov/vscode-ebnf/issues/18))
- Bug fix: "Toggle Line Comment" command creates C-style comment (see [issue 16](https://github.com/igochkov/vscode-ebnf/issues/16))
- Bug fix: Code formatter breaks with partially invalid syntax (see [issue 15](https://github.com/igochkov/vscode-ebnf/issues/15))
- Bug fix: Parsing comments (see [issue 8](https://github.com/igochkov/vscode-ebnf/issues/8))
- Bug fix: Syntax highlighting non-terminals, terminals and strings (see [issue 17](https://github.com/igochkov/vscode-ebnf/issues/17))

### Version 1.3.1
**Released on 2023-11-26**

### Version 1.3
**Released on 2023-07-04**

- Feature: _Find All References_
- Feature: _Formatting_ and formatting settings

### Version 1.2
**Released on 2023-06-22**

- Feature: _Go to definition_
- Feature: _Code folding (by markers)_
- Feature: _Markdown fenced code blocks_. Big thanks to [Brendan Doney](https://github.com/brdoney) for providing *[codeblock.json](https://github.com/igochkov/vscode-ebnf/blob/main/syntaxes/codeblock.json)*

### Version 1.1
**Released on 2023-06-17**

- Feature: _Rename symbol_
- Bug fix: Fixed broken links to images.

### Version 1.0
**Released on 2016-09-02**

- Initial version of the EBNF Tools extension, featuring _syntax highlighting_, _code commenting_, and _bracket matching_.
