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
- [ ] **Hover**: Show information about the symbol/object that's below the mouse cursor.
- [x] **Diagnostic**: Indicate issues with the grammar.
- [ ] **Actions on Errors or Warnings**: Possible corrective actions right next to an error or warning.
- [ ] **Commands (Transpile to tmLanguage)**: A command for compiling EBNF code to tmLanguage.
- [ ] **Railroad diagram generation**: Generate railroad diagrams from your EBNF code for visualization and documentation purposes.


## Change Log

The change log lists the updates for each version that has been released on the official Visual Studio Code extension gallery.

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
