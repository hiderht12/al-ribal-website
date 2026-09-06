# Al-Ribal Website

This is the real project repository for the Al-Ribal website. It was
created from the HT Claude Studio template, and now holds the actual
application code alongside the reusable Claude Code conventions and skills
the project was bootstrapped with.

## What's here

```
CLAUDE.md               Root instructions Claude Code reads automatically
.claude/skills/         Reusable Claude Code skills for this project
docs/                   Standing conventions for this project
templates/              Inherited starter skeletons (currently empty)
```

- **`CLAUDE.md`** — tells Claude Code what this repo is and how to work in
  it: this is the project, and application code lives in the repository
  root.
- **`.claude/skills/`** — skills for workflow, design-system decisions,
  project scaffolding, UI/UX, Arabic/RTL, SEO/performance, API
  integrations, dashboards, 3D/visualization, and testing/QA. See
  `.claude/skills/README.md` for the full list.
- **`docs/`** — standing conventions (code style, structure, git practices)
  for this project.
- **`templates/`** — inherited from the starter template; not actively
  used for this project.

## Working in this repo

- Application code, dependencies, and build output belong in the
  repository root alongside `CLAUDE.md`, `.claude/`, `docs/`, and
  `templates/` — there is no separate project subfolder or repo to route
  work into.
- When a convention, checklist, or piece of reusable know-how should apply
  consistently across the site, add it to `.claude/skills/` (as a skill)
  or `docs/` (as a reference doc) rather than burying it in application
  code or one-off notes.

## Philosophy

- Don't add a skill or doc speculatively — add it when a real need in this
  project surfaces.
- Keep `CLAUDE.md` itself high-level; put stack-specific or structural
  detail in `docs/`.
