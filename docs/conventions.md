# Conventions

Standing decisions that apply across projects started from this template.
Keep this file to genuinely cross-project conventions — anything specific
to one project's stack or domain belongs in that project's own docs.

## Code style

- TypeScript over JavaScript for anything beyond a single static page.
- Prefer explicit, readable code over clever one-liners.
- No commented-out code or speculative abstractions left in place "for
  later" — delete it; git history keeps it if it's ever needed again.

## Structure

- Application code for a given project stays inside that project's own
  folder or repo — never mixed into this template repo's root.
- Reusable, cross-project know-how (skills, checklists, stack notes) goes
  back into this repo (`.claude/skills/`, `docs/`) once it's proven on a
  real project, not before.

## Git

- Commit messages describe why a change was made, not just what changed.
- Don't commit build output, `node_modules`, `.env` files, or other
  generated/secret artifacts — see `.gitignore`.
