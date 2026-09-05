# HT Claude Studio

This repository is a reusable starter template for web-development work with
Claude Code. It is not itself a website or application — it holds the
conventions, skills, and folder structure that future projects are built on
top of.

## What this repo is for

- A permanent home for reusable Claude Code configuration (skills,
  conventions, checklists) for web-development projects.
- A template to branch or copy from when starting a new site, dashboard,
  SaaS product, or client app, so every new project starts with the same
  quality bar instead of from a blank slate.

## Working in this repo

- If you are asked to build an actual product here, first check with the
  user whether it should live in a new subfolder (e.g. `projects/<name>/`)
  or in a separate repository created from this template. Do not scatter
  application code into the repo root.
- Keep this repo's own root (`CLAUDE.md`, `README.md`, `.claude/`, `docs/`,
  `templates/`) free of any single project's app code, dependencies, or
  build output. Those belong inside a project subfolder or a repo of their
  own.
- When you add a convention, checklist, or piece of reusable know-how that
  future projects should inherit, put it in `.claude/skills/` (as a skill)
  or `docs/` (as a reference doc) — not in a one-off project folder.

## Skills

Project-relevant skills live in `.claude/skills/`. See
`.claude/skills/README.md` for what's there and when each one applies.

If the account running Claude Code also has broader personal/global skills
available (e.g. an orchestration skill for end-to-end product builds), use
those for full project workflows. The skills in this repo are the
self-contained baseline that travels with the repo itself, so this template
still works on a fresh machine or account with no global skills installed.

## Reference docs

`docs/` holds standing conventions (stack choices, code style, structure)
that apply across projects started from this template. Read the relevant
doc before making a structural or stack decision on a new project.

## Templates

`templates/` holds starter project skeletons (e.g. a Next.js starter, a
static site starter) that a new project can be copied from. It is currently
empty — add a starter here only once it has actually been used and proven
on a real project, not speculatively.

## Ground rules

- Don't build an actual website/app in this repo unless explicitly asked.
- Don't add a skill, doc, or template speculatively — add it when a real
  project surfaces the need, then generalize it back into this repo.
- Keep everything here technology-agnostic where possible; put
  stack-specific detail in `templates/` or a doc, not in `CLAUDE.md` itself.
