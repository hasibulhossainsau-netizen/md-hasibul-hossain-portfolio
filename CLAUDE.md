# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Md Hasibul Hossain (veterinary scientist / computational biologist). Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui (`base-nova` style, built on `@base-ui/react`). Originally generated with v0.app; deployed with Vercel Analytics (only rendered in production).

## Commands

```bash
pnpm dev      # dev server
pnpm build    # production build
pnpm start    # serve the production build
npx tsc --noEmit   # type-check (the build does NOT do this, see below)
```

There is no lint script and no test suite.

Both `pnpm-lock.yaml` and `package-lock.json` are committed; pnpm is the primary manager (`pnpm-workspace.yaml` configures `minimumReleaseAgeExclude` for `next`).

## Architecture

- `app/page.tsx` composes the whole site as a vertical stack of section components from `components/`. There are no other routes.
- **Content lives in the components.** Each section keeps its data as a typed constant at the top of its file (`PROJECTS`, `PUBLICATIONS`, `TIMELINE`, `FOCUS_AREAS`, `GROUPS`, `STATS`, `CONTACTS`). To update portfolio details, edit those arrays rather than the JSX.
- **Navigation is anchor-based.** `NAV_ITEMS` in `components/site-header.tsx` links to section `id`s, and the mapping is not one-to-one with component names: `#about` → `experience-section.tsx`, `#cv` → `skills-section.tsx`, `#contact` → the footer in `site-footer.tsx`. Keep ids and nav entries in sync when adding/renaming sections.
- `site-header.tsx` is the only client component (`'use client'` for the mobile menu); keep other sections as server components.
- Brand icons (GitHub, LinkedIn, etc.) are hand-written SVG components in `components/brand-icons.tsx` because `lucide-react` is used for generic icons only.

## Styling

- Tailwind v4 with no `tailwind.config`; theme tokens are CSS variables in `app/globals.css` (`@theme inline` maps them to Tailwind colors). The site is dark-only: `:root` holds the slate-based dark palette, and `layout.tsx` forces the `dark` class and dark `colorScheme`.
- Fonts: Inter (`font-sans`) and JetBrains Mono (`font-mono`) via `next/font`, wired through `--font-inter` / `--font-jetbrains`.
- Use `cn()` from `@/lib/utils` to merge classes. Add shadcn components with `npx shadcn add <name>` (config in `components.json`; they land in `components/ui/`).
- Path alias `@/*` maps to the repo root.

## Gotchas

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `next build` will succeed with type errors. Run `npx tsc --noEmit` to verify changes.
- `images.unoptimized: true`; images in `public/` are served as-is.
