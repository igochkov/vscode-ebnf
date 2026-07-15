# Parser generation

The TypeScript parser under [`../src/parser`](../src/parser) is generated from the two
ANTLR grammars in this folder — [`EBNFLexer.g4`](EBNFLexer.g4) and
[`EBNFParser.g4`](EBNFParser.g4) — using [`antlr-ng`](https://www.npmjs.com/package/antlr-ng)
(a dev dependency). No Java or external tooling is required.

## Regenerate

```bash
npm run generate
```

This runs `antlr-ng` for the TypeScript target and writes `EBNFLexer.ts`,
`EBNFParser.ts`, `EBNFParserListener.ts`, `EBNFParserVisitor.ts` and the `*.tokens`
files into `src/parser`. Commit the result whenever you change a `.g4` file.

The generation is **deterministic and path-independent** (no absolute-path or version
header is emitted), so regenerating on any machine produces byte-identical output.

## CI drift guard

CI runs `npm run generate` and fails if `src/parser` differs from the committed output
(see [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)). This guarantees the
committed parser can never silently drift from the grammar. If CI fails on this step,
run `npm run generate` locally and commit the changes.

> The `*.interp` files antlr-ng also emits are ANTLR interpreter data, not needed at
> runtime; they are git-ignored.
