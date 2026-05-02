[![JetBrains team project](https://jb.gg/badges/team-flat-square.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub) 

Monorepo containing packages that facilitate React component preview and palette features of [React Buddy](https://plugins.jetbrains.com/plugin/17467-react-buddy) plugin:


* [@react-buddy/ide-toolbox
  ](https://www.npmjs.com/package/@react-buddy/ide-toolbox) — provides `<DevSupport>` utility component that enables component preview functionality
* [@react-buddy/ide-toolbox-next
  ](https://www.npmjs.com/package/@react-buddy/ide-toolbox-next) — experimental version of `<DevSupport>` for Next.js based projects
* [@react-buddy/palette-antd
  ](https://www.npmjs.com/package/@react-buddy/palette-antd) — palette of Ant Design components
* [@react-buddy/palette-chakra-ui
  ](https://www.npmjs.com/package/@react-buddy/palette-chakra-ui) — palette of ChakraUI components
* [@react-buddy/palette-mantine-core
  ](https://www.npmjs.com/package/@react-buddy/palette-mantine-core), [@react-buddy/palette-mantine-dates
  ](https://www.npmjs.com/package/@react-buddy/palette-mantine-dates), [@react-buddy/palette-mantine-dates
  ](https://www.npmjs.com/package/@react-buddy/palette-mantine-form) — palettes of Mantine components
* [@react-buddy/palette-mui
    ](https://www.npmjs.com/package/@react-buddy/palette-mui) — palette of MUI components
* [@react-buddy/palette-react-intl
    ](https://www.npmjs.com/package/@react-buddy/palette-react-intl) — palette of MUI components

> The `palette-*` packages are deprecated. Their sources are kept in the repo
> for reference, but they are excluded from the workspace and are no longer
> installed, built, or published from this monorepo.

## Working with the monorepo

The repo is an npm workspaces monorepo orchestrated by Lerna 9. Two packages
are actively maintained:

- `@react-buddy/ide-toolbox`
- `@react-buddy/ide-toolbox-next`

### Prerequisites

- Node.js >= 24
- npm >= 11

### Install

```sh
npm install
```

### Build

```sh
npm run compile
```

Runs each active package's `compile` script (rollup) via `lerna run`.

### Lint & format

```sh
npm run lint           # check
npm run lint:write     # auto-fix
npm run format         # prettier + eslint --fix
```

### Committing

Messages must follow [Conventional Commits](https://www.conventionalcommits.org/).
`commitlint` enforces this via a husky `commit-msg` hook (installed by `npm install`).

Format:

```
<type>(<scope>): <summary>

[optional body]
[optional footer]
```

- **type**: `feat` | `fix` | `perf` | `refactor` | `docs` | `style` | `test` | `chore` | `revert` | `WIP`
- **scope** (optional): package or area, e.g. `ide-toolbox`, `deps`
- **summary**: imperative, lower-case, no period, header ≤ 100 chars
- **footer**: `BREAKING CHANGE: …` triggers a major bump; `Closes #N` for issues

Examples:

```
feat(ide-toolbox): add usePreviewState hook
fix(ide-toolbox-next): guard SSR access to window
chore(deps): bump rollup to 4.40
feat(ide-toolbox)!: drop React 17

BREAKING CHANGE: peerDependencies now require react >= 18.
```

Release impact (`lerna version --conventional-commits`):
`fix` → patch, `feat` → minor, `!` or `BREAKING CHANGE` → major, others → no bump.

### Releasing

Versions are bumped from conventional-commit history. Each active package has
independent versioning and its own `CHANGELOG.md`.

Stable release:

```sh
npm run publish:prepare      # build all active packages
npm run publish:versions     # lerna version + changelog (no push)
git push --follow-tags
npm run publish:release      # npm publish from-package
```

Dev prerelease:

```sh
npm run publish:prepare
npm run publish:prerelease-versions   # bumps to X.Y.Z-dev.N (no changelog)
git push --follow-tags
npm run publish:dev                   # npm publish --tag dev
```