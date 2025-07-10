# AGENT.md

## Table of Contents
- [Project structure & organisation](#project-structure--organisation)
- [Build, test & dev commands](#build-test--dev-commands)
- [Code style & conventions](#code-style--conventions)
- [Architecture & design patterns](#architecture--design-patterns)
- [Testing guidelines](#testing-guidelines)
- [Security considerations](#security-considerations)
- [Purpose table](#purpose-table)
- [Migration](#migration)
- [Future Work](#future-work)

## Project structure & organisation

This repository hosts a Node.js API server and a React client.
The tree below shows directories at a glance (generated via `npx tree-cli -L 3`).

```
$(cat repo-tree.txt)
```

See @README.md for a newcomer overview.

## Build, test & dev commands

Common commands are exposed via `package.json` scripts.

```bash
npm run lint        # placeholder lint
npm run build       # placeholder build
npm test            # run Jest with coverage
npm run docs        # generate typedoc documentation
npm run start:dev   # start API server with nodemon
npm start           # start API server

# Client workspace commands
npm --workspace client start
npm --workspace client build
npm --workspace client test
```

CI executes these in `.github/workflows/ci.yml`.

## Code style & conventions

JavaScript (Node & React) is written in CommonJS style. No ESLint rules are configured yet (`npm run lint` prints *No lint configured*). Adopt standard conventions:

- 2‑space indentation
- trailing commas where possible
- single quotes

Typedoc config lives in `typedoc.json` and outputs to `docs/`.

## Architecture & design patterns

- **Express + Mongoose** backend (`server.js`, `controllers/`, `models/`, `routes/`).
- **Socket.io** for real‑time features (`socket-listeners/`).
- **React client** in `client/` bootstrapped with Create React App.
- **MVC** style controllers & models, REST routes under `/api`.

See `tsconfig.json` for compilation options and @README.md for a high-level architecture summary.

## Testing guidelines

Backend tests use Jest and `mongodb-memory-server` (see `tests/`). Run with:

```bash
npm test
```

Client tests (React Testing Library) can be run via:

```bash
npm --workspace client test
```

Use test doubles/mocks where possible. Coverage artifacts are uploaded via CI.

## Security considerations

Environment variables are loaded from `.env`. Example variables:

```env
DB_HOST="<redacted>"
SECRET="<redacted>"
```

Do **not** commit real credentials. Review dependencies regularly and keep Node.js versions in sync with `.github/workflows/ci.yml`.

## Purpose table

| Agent | Purpose | Location |
|-------|---------|---------|
| GitHub Actions | CI for lint, build, test | `.github/workflows/ci.yml` |
| npm scripts | Local dev & testing | `package.json`, `client/package.json` |
| Typedoc | API documentation | `typedoc.json` |

## Migration

Symlink legacy agent configs to this file:

```bash
# Cursor
ln -sf AGENT.md .cursorrules
# Claude
ln -sf AGENT.md CLAUDE.md
# GitHub Copilot
ln -sf AGENT.md .github/copilot-instructions.md
```

## Future Work

- ⚠️ Integrate ESLint and Prettier for consistent style.
- ⚠️ Add release automation.
- ✅ CI pipeline in place.

