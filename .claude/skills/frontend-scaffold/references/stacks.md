# Default stack options

Pick one deliberately per project; don't mix without a reason.

## Next.js (React)

Use when the project needs server rendering/SEO, a mix of static and
dynamic pages, API routes, or is likely to grow into a full product with
auth and a database.

## Vite + React (SPA)

Use for an internal tool, dashboard, or authenticated app where SEO
doesn't matter and a single-page app is simpler to reason about.

## Static HTML/CSS/JS (or a static site generator)

Use for a small marketing site, landing page, or brochure site with no
real interactivity or backend — avoid pulling in a full framework for a
handful of static pages.

## Notes

- Default to TypeScript over plain JavaScript for anything beyond a
  single static page.
- Only add a backend/database/auth provider once the project actually
  needs one — don't scaffold infrastructure the project doesn't use yet.
