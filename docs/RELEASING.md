# Releasing EBNF Tools

Releases are automated by [`.github/workflows/release.yml`](../.github/workflows/release.yml):
pushing a `vX.Y.Z` tag runs tests, packages the VSIX, publishes to the VS Code
Marketplace, and creates a GitHub Release with the `.vsix` attached.

Authentication uses **Microsoft Entra ID via GitHub OIDC** — there is **no stored
publish token**. (Azure DevOps *global* Personal Access Tokens are retired on
**2026-12-01**; see the [announcement](https://devblogs.microsoft.com/devops/retirement-of-global-personal-access-tokens-in-azure-devops/)
and the official [publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).)

## One-time setup (Entra ID publishing)

1. **App registration** — Azure Portal → *Microsoft Entra ID* → *App registrations*
   → *New registration*. Record the **Application (client) ID** and
   **Directory (tenant) ID**. (A user-assigned managed identity works too.)

2. **Federated credential** — on that app: *Certificates & secrets* →
   *Federated credentials* → *Add* → **GitHub Actions deploying Azure resources**:
   - Organization `igochkov`, Repository `vscode-ebnf`
   - Entity type **Environment**, name **`release`**
   - This creates:
     - issuer `https://token.actions.githubusercontent.com`
     - subject `repo:igochkov/vscode-ebnf:environment:release`
     - audience `api://AzureADTokenExchange`
   - (An Environment-scoped credential is used because release tags vary — exact-tag
     subjects wouldn't match. The workflow job runs in the `release` environment.)

3. **Grant Marketplace access** — at
   <https://marketplace.visualstudio.com/manage/publishers/igochkov>, add the app's
   identity as a member with the **Contributor** role. See the "Microsoft Entra ID"
   section of the [publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
   for the exact steps/role.

4. **GitHub `release` environment** — repo *Settings → Environments → New
   environment* → `release`. (Optionally add required reviewers / a wait timer as a
   release gate.)

5. **Secrets** (repo *Settings → Secrets and variables → Actions*, or scoped to the
   `release` environment):
   - `AZURE_CLIENT_ID` — the app's client ID
   - `AZURE_TENANT_ID` — the tenant ID
   - `AZURE_SUBSCRIPTION_ID` — a subscription the identity can read (needed by
     `azure/login`; if the identity has no subscription, instead set
     `allow-no-subscriptions: true` in the workflow and omit this)
   - `OVSX_PAT` — *(optional)* Open VSX token, only if you enable the Open VSX mirror

None of these are a Marketplace publish credential — the publish right comes from
step 3 (the federated identity being a publisher member).

## Cutting a release

1. Bump `version` in [`package.json`](../package.json) **and** add a
   [`CHANGELOG.md`](../CHANGELOG.md) entry — via a PR (branch protection requires it),
   then merge (squash).
2. Tag the merge commit on `main` and push:
   ```sh
   git switch main && git pull
   git tag v1.5.0
   git push origin v1.5.0
   ```
3. The **Release** workflow publishes and creates the GitHub Release.

Notes:
- The tag **must** equal `package.json` `version` — the workflow fails fast otherwise.
- Tag pushes are **not** blocked by branch protection, so this works with the
  PR-only rule on `main`.
- `vsce` and `ovsx` are pinned (`@vscode/vsce@3.9.2`, `ovsx@1.0.2`); bump those pins
  deliberately in the workflow when you want newer tooling.
