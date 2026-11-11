# ratra-maps-web

> Marketing landing page for RATRA Maps by HGS: a single static page that introduces the products and links to their dashboards.

**Owner:** `<team-or-owner>` <!-- TODO: confirm with owner --> · **Status:** active · **Production:** <!-- TODO: confirm production URL with owner -->

## Overview

One-page site with sections Nav, Hero, Products, Mission, Evidence, Showcase and Footer. The Hero includes a Leaflet map (`HeroMap`) of an example area of interest in Riau. Product cards link out to the live dashboards:

- Fire Map: https://ratrafire.herdento.com
- Plantation Intelligence: https://ratraagri.herdento.com
- AI Disaster Mitigation: https://safeus.jp

The repo was renamed from `ratra-map` / `ratra_map`; the package name is `ratra-maps-web`. It has no backend and no environment variables.

## Tech stack

| Component         | Technology                                                                      |
| ----------------- | ------------------------------------------------------------------------------- |
| UI                | React 19, TypeScript (strict)                                                   |
| Build             | Vite 7                                                                          |
| Styling           | Tailwind CSS 4 (`@tailwindcss/vite`), `clsx` + `tailwind-merge` (`cn()` helper) |
| Animation / icons | framer-motion, lucide-react                                                     |
| Map               | Leaflet + react-leaflet (ArcGIS public gray basemap tiles)                      |
| Runtime           | Node 24 (pinned in `.nvmrc`), npm with committed `package-lock.json`            |

Third-party at runtime: Google Fonts (Manrope, Inter, IBM Plex Mono) and ArcGIS tiles.

## Getting started

```bash
git clone https://github.com/DeveloperHerdento/ratra-maps-web.git
cd ratra-maps-web
nvm use                 # Node 24 from .nvmrc
npm ci
npm run dev             # Vite dev server (URL printed in the terminal)
```

No `.env` is needed.

## Common tasks

There is no test suite yet (a Vitest smoke test is planned). Checks: lint, format:check, typecheck, build.

| Task                                                      | Command                                   |
| --------------------------------------------------------- | ----------------------------------------- |
| Dev server                                                | `npm run dev`                             |
| Lint (ESLint)                                             | `npm run lint`                            |
| Format check / fix (Prettier)                             | `npm run format:check` / `npm run format` |
| Type check                                                | `npm run typecheck`                       |
| Production build (`tsc --noEmit && vite build` → `dist/`) | `npm run build`                           |
| Preview the build                                         | `npm run preview`                         |

## Project structure

```
index.html             # meta tags + inline pre-paint theme script (localStorage key `ratra-theme`)
vite.config.ts         # alias `@` -> `src`; no `base` (must be served at domain root)
eslint.config.js  .prettierrc  tsconfig.json
public/                # logo, hero image, textures (+ screenshots/ for product images)
src/
  main.tsx  App.tsx    # entry and page composition
  index.css            # Tailwind theme tokens (fire/crop/flood colors), dark mode via `.dark`, custom animations
  components/          # one file per section, plus Reveal, StatCounter, ThemeToggle, HeroMap
  lib/products.ts      # product card content: name, copy, links, image/shot paths
  lib/useDarkMode.ts   # dark-mode hook
  lib/utils.ts         # cn() helper
```

## Editing content

Product cards live in `src/lib/products.ts`. To add screenshots, put the files in `public/screenshots/` and set:

- `image` — about 960×384 (5:2), thumbnail in the Products list.
- `shot` — about 1200×960 (5:4), card in the Showcase section.

While these are `null`, placeholder art is shown.

## Deployment

Vercel builds from git. Production branch is `main`; every pull request gets a Vercel preview deployment. There is no separate staging: previews serve as staging (owner decision 2026-11-10, a recorded deviation from HGS Rule 1.2). The site must be served at the domain root. Details: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) (to be added).

## Contributing

Conventional Commits; open a PR and squash-merge into `main`. Run lint, format:check, typecheck and build before opening the PR.
