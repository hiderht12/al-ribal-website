---
name: frontend-scaffold
description: Choose a stack and lay out folder structure when starting a new web project. Use at the very start of a new build, before any UI code is written.
---

# Frontend Scaffold

Make the stack and structure decisions once, deliberately, at the start of
a project — rather than defaulting to whatever was used last time.

## Choose a stack

See `references/stacks.md` for the default options and when each fits.
Pick based on the project's actual needs (does it need server rendering,
a backend, auth, a CMS?) — not habit.

## Lay out the project

Whatever the stack, keep a clear separation:

- `app/` or `src/` — application code.
- Feature- or route-based organization over one giant `components/`
  dumping ground once the project has more than a handful of components.
- Shared/reusable UI pieces separated from one-off page-specific pieces.
- Config, env, and build tooling at the project root, not buried in `src/`.

This repo is the real project — apply the structure above directly in the
repository root. There is no separate subfolder or repo to route the work
into.

## Before writing the first component

- Confirm the primary user flow and the single most important action on
  the first real page (see `design-system` skill for visual decisions).
- Set up linting/formatting and a way to run the project locally before
  writing feature code, not after.
- Decide how state, data fetching, and routing will work project-wide so
  the first few pages don't each invent their own pattern.
