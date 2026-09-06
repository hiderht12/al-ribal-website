# Conventions

Standing decisions for this project. Keep this file to genuinely
project-wide conventions — anything specific to one feature or one-off
decision belongs closer to that code, not here.

## Code style

- TypeScript over JavaScript for anything beyond a single static page.
- Prefer explicit, readable code over clever one-liners.
- No commented-out code or speculative abstractions left in place "for
  later" — delete it; git history keeps it if it's ever needed again.

## Structure

- Application code lives in the repository root, alongside `.claude/`,
  `docs/`, and the project's own config.
- Reusable know-how (skills, checklists, stack notes) belongs in
  `.claude/skills/` or `docs/` once it's proven useful, not speculatively.

## Git

- Commit messages describe why a change was made, not just what changed.
- Don't commit build output, `node_modules`, `.env` files, or other
  generated/secret artifacts — see `.gitignore`.
