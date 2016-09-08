The file [ebnf.json](https://github.com/igochkov/vscode-ebnf/blob/master/syntaxes/ebnf.json) is generated from [ebnf.YAML-tmLanguage](https://github.com/igochkov/vscode-ebnf/blob/master/syntaxes/ebnf.YAML-tmLanguage).

To contribute to the langauge colorization:

- Install `Visual Studio Code` extension [TextMate Languages](https://marketplace.visualstudio.com/items?itemName=Togusa09.tmlanguage). This extension will give you syntax highlighting for the SublimeText JSON/YAML tmlanguage and a command to converts YAML/PLIST to JSON.
- Apply changes to the `ebnf.YAML-tmLanguage` file
- Convert the modified `ebnf.YAML-tmLanguage` to JSON by running command `Convert to JSON-tmLanguage file` and save the result as `ebnf.json`

> Note: In case the convert command results in empty file either the YAML syntax is incorrect or the `ebnf.json` already exists and has to be manually deleted first