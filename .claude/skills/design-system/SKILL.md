---
name: design-system
description: Establish or apply a project's design system — color, type, spacing, and component conventions. Use before building UI on a new project, or when a project's visual language is inconsistent and needs to be pinned down.
---

# Design System

Pin down the visual language before writing UI, so components stay
consistent instead of drifting page by page.

## When starting a new project

Decide and record these before the first real page is built:

- **Color** — a small palette: 1 primary, 1–2 accent, a neutral gray scale,
  and semantic colors (success/warning/error/info). Avoid picking colors
  page-by-page.
- **Type** — one heading font (or the neutral system stack), one body
  font, a type scale (e.g. 12/14/16/20/24/32/48), and consistent line
  height per size.
- **Spacing** — a single spacing scale (e.g. 4px base: 4/8/12/16/24/32/48/64)
  used everywhere instead of arbitrary pixel values.
- **Radius & elevation** — 1–2 border-radius values and 1–2 shadow levels,
  used consistently rather than varying per component.
- **Icon family** — one icon set for the whole project; never mix families.

Where the stack has a natural home for this (Tailwind config, CSS custom
properties, a theme object), put these decisions there as the single
source of truth — don't hardcode raw values in components.

## When applying it to a component

- Reuse existing tokens/variables; don't introduce a new one-off color,
  spacing value, or font size unless the system genuinely has no fit.
- If a new value seems necessary, ask whether the system itself is
  missing something — and if so, add it to the system, not just this one
  component.
- Keep interactive states (hover/focus/active/disabled) consistent across
  all components of the same kind (all buttons behave alike, all inputs
  behave alike).

## Avoid

- A different shade of the "same" color on every page.
- Mixing multiple icon styles or font pairings.
- Arbitrary one-off spacing (`13px`, `22px`) next to a defined scale.
- Designing components in isolation without checking how they sit next to
  existing ones.
