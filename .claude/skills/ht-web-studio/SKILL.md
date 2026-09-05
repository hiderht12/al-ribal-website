---
name: ht-web-studio
description: Primary end-to-end workflow for web-development projects — planning, building, and delivering production-ready sites and web apps. Use at the start of any real build task (new project, new feature, or client request) and as the default mindset for web-development work in this template.
---

# HT Web Studio

The default workflow for building real websites and web applications from
this template. It sets the overall approach — plan, understand, build,
verify — and defers detailed rules to the specialized skills below.

## 1. Plan before building

- Do not start writing code from a vague request. Restate the goal, the
  target audience, and the primary user action in your own words first.
- If requirements, scope, or the target platform (desktop/tablet/mobile,
  new project vs. existing one) are unclear, ask before building — a wrong
  guess costs more than one clarifying question.
- Confirm where the work lives: a new `projects/<name>/` subfolder, an
  existing project, or a separate repo (see root `CLAUDE.md`). Never build
  app code into this repo's root.

## 2. Understand before changing

- Inspect the existing codebase before making major changes: read the
  relevant files, note existing patterns, naming, and structure.
- Reuse existing project conventions (components, utilities, styles,
  folder layout) instead of rebuilding things that already work.
- For a new project, use the `frontend-scaffold` skill to choose a stack
  and structure; use the `design-system` skill to establish tokens before
  the first real page.

## 3. Build it real

- Ship clean, production-ready code — not a prototype dressed up to look
  finished.
- Keep components reusable and maintainable: shared UI separated from
  one-off page-specific pieces, no copy-pasted blocks that should be one
  component.
- Make every interface responsive across desktop, tablet, and mobile as a
  baseline requirement, not an afterthought.
- Treat accessibility, performance, and usability as required, not
  optional polish.

## 4. Design with judgment, not defaults

- Avoid generic, AI-looking design: templated hero-plus-three-cards
  layouts, stock-photo feel, interchangeable-with-any-other-site pages.
- Avoid visual clutter for its own sake — excessive gradients,
  glassmorphism, unnecessary cards/borders/shadows, decoration that isn't
  doing a job.
- Preserve the client's real brand identity, voice, and content instead of
  overriding it with a generic aesthetic.
- Detailed UI/UX, accessibility, SEO, and RTL rules live in their own
  skills — apply those when the task calls for them; this skill sets the
  overall posture.

## 5. Never invent facts

- Never fabricate business facts, product specs, pricing, testimonials,
  statistics, or contact information.
- If real content is missing, use clearly-marked placeholders and flag
  what's needed from the client — don't fill gaps with invented specifics.

## 6. Verify before calling it done

- Test important functionality yourself before reporting completion —
  don't rely on "it should work."
- Run the `testing-qa` skill before declaring any page, feature, or
  project finished.

## Scope

This skill governs the overall workflow. It intentionally does not
duplicate detailed UI/UX, SEO, Arabic/RTL, testing, dashboard, or API
rules — those belong to their own specialized skills.
