# HT Claude Studio

A permanent, reusable starter template for web-development work with
[Claude Code](https://claude.ai/code). This repo holds no application code
— it's the shared foundation (conventions, skills, folder structure) that
every new project should start from.

## What's here

```
CLAUDE.md              Root instructions Claude Code reads automatically
.claude/skills/        Reusable, project-agnostic Claude Code skills
docs/                  Standing conventions shared across projects
templates/             Proven starter project skeletons (empty until one exists)
```

- **`CLAUDE.md`** — tells Claude Code what this repo is and how to work in
  it (e.g. don't build an app in the repo root; where new work should go).
- **`.claude/skills/`** — skills for design-system decisions, project
  scaffolding, and a pre-ship quality checklist. See
  `.claude/skills/README.md` for the full list.
- **`docs/`** — cross-project conventions (code style, structure, git
  practices) that apply regardless of which stack a given project uses.
- **`templates/`** — starter skeletons for a new project to copy from,
  added only once a setup has actually been used and proven, not
  speculatively.

## How to use this as a template

1. **Start a new project from it**: use GitHub's "Use this template"
   button (or `git clone` this repo) to create a new repo for the actual
   product. `CLAUDE.md`, `.claude/skills/`, and `docs/` come with it, so
   Claude Code has the same conventions and quality bar from the first
   commit.
2. **Or build inside this repo as a subfolder**: if you'd rather keep
   everything in one place, create the project under `projects/<name>/`
   and keep that project's dependencies, build output, and app code
   scoped to that folder — never in this repo's root.
3. **Feed learnings back**: when a project surfaces a convention, skill,
   or starter setup worth reusing, generalize it and add it back here
   (a new skill in `.claude/skills/`, a doc in `docs/`, or a proven setup
   in `templates/`) so the next project benefits too.

## Philosophy

- This repo stays technology-agnostic and empty of app code by design —
  it's infrastructure for future projects, not a project itself.
- Add to it only when something is genuinely reusable across projects,
  not speculatively. See each skill's own guidance for when it applies.
- The `ship-checklist` skill is the bar every project is expected to
  clear before being called done — rendering isn't done.
