# Parser generation

### Windows

1. Install [Java JRE 11](https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=406&field_operating_system_target_id=436&field_architecture_target_id=391&field_java_package_target_id=401)

2. Ensure that `JAVA_HOME` environment variable is set

3. Install the [ANTLR4 grammar syntax support](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4) VS Code extension

4. Open `grammar/EBNFLexer.g4` and trigger save file. On save triggers the generation process. Do the same for the `grammar/EBNFParser.g4` file.

> N.B. The ANLR4 generation settings are defined in the `.vscode/settings.json`. 