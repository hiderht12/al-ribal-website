# Al-Ribal Website

This repository is the real project repository for the Al-Ribal website. It
was created from the HT Claude Studio template, and now holds the actual
application code alongside the reusable Claude Code conventions and skills
that came with the template.

## What this repo is for

- Building and maintaining the Al-Ribal website itself.
- Carrying forward the reusable Claude Code configuration (skills,
  conventions, checklists) the project was bootstrapped with, so the same
  quality bar applies as the site is built out.

## Working in this repo

- This is the project. Application code, dependencies, and build output
  belong in the repository root alongside `CLAUDE.md`, `.claude/`, `docs/`,
  and `templates/` — there is no separate project subfolder or repo to route
  work into.
- `.claude/skills/` is the reusable skill library for this project. See
  `.claude/skills/README.md` for what's there and when each applies.
- When you discover a convention, checklist, or piece of reusable know-how
  that should apply consistently across the site, put it in
  `.claude/skills/` (as a skill) or `docs/` (as a reference doc) rather than
  burying it in application code or one-off notes.

## Skills

Project-relevant skills live in `.claude/skills/`. See
`.claude/skills/README.md` for what's there and when each one applies.

If the account running Claude Code also has broader personal/global skills
available (e.g. an orchestration skill for end-to-end product builds), use
those for full project workflows. The skills in this repo are the
self-contained baseline that travels with the repo itself, so things still
work on a fresh machine or account with no global skills installed.

## Reference docs

`docs/` holds standing conventions (stack choices, code style, structure)
for this project. Read the relevant doc before making a structural or stack
decision.

## Ground rules

- Don't add a skill or doc speculatively — add it when a real need in this
  project surfaces, then generalize it into `.claude/skills/` or `docs/`.
- Keep `CLAUDE.md` itself high-level; put stack-specific or structural
  detail in `docs/`, not here.
