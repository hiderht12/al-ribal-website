---
name: arabic-rtl
description: Specialized Arabic and RTL implementation expert — direction handling, bilingual Arabic/English layouts, and RTL-correct components. Use whenever a project has Arabic content, an RTL locale, or a bilingual Arabic/English interface, not just when explicitly asked about "RTL".
---

# Arabic RTL

Implementation rules for building interfaces that are correct in Arabic
and, where required, bilingual with English. This is the direction/i18n
layer — see `ui-ux-pro` for general design decisions and `ht-web-studio`
for overall workflow; apply those with RTL correctness on top, not instead
of.

## Direction handling

- Use semantic, logical direction (`dir="rtl"` on `html`/container, CSS
  logical properties: `margin-inline-start/end`, `padding-inline-*`,
  `inset-inline-*`, `text-align: start/end`) instead of manually mirroring
  layouts with hardcoded left/right values.
- Never hardcode `left`/`right` in CSS or `margin-left`/`margin-right` etc.
  for anything that must flip between LTR and RTL — it silently breaks the
  moment direction changes.
- Let the browser and framework's RTL support do the mirroring; only
  override where content has a fixed direction regardless of locale (see
  below).

## Bilingual Arabic/English support

- When both languages are supported, keep language switching clear,
  predictable, and reachable from every page (not buried).
- Switching language should flip the whole interface's direction and
  layout consistently — no partially-mirrored pages.
- Handle mixed Arabic/English content within the same line or block
  carefully: numbers, brand names, and inline English terms should not
  visually corrupt the surrounding Arabic text flow (use `dir="ltr"` or
  `unicode-bidi: isolate` on the specific inline span, not the whole block).

## Content and translation

- Preserve brand names, product names, model numbers, and other technical
  terms exactly — don't translate or transliterate what shouldn't be
  translated.
- Never invent Arabic copy to fill gaps; if real translated content isn't
  provided, use a clearly marked placeholder and flag what's needed.

## Typography

- Use an Arabic-appropriate typeface (or a font stack with real Arabic
  glyph support) — don't assume the Latin heading/body font renders Arabic
  well.
- Give Arabic text more generous line-height than the Latin equivalent;
  Arabic script needs more vertical breathing room to stay readable.
- Check that font weights used for Arabic actually exist and render
  correctly — many Latin font families have incomplete Arabic weight sets.

## Components to verify in RTL

Check each of these explicitly — don't assume mirroring is automatic:

- **Navigation** — primary nav, mobile menu/drawer (opens from the
  correct side), breadcrumbs (order and separator direction).
- **Forms** — label/input alignment, input text direction (Arabic fields
  RTL, but email/phone/numeric fields usually stay LTR), validation
  message placement.
- **Icons** — directional icons (arrows, chevrons, back/forward, play/
  rewind) must flip with direction; non-directional icons (search,
  settings, trash) must not.
- **Tables** — column order and cell text alignment.
- **Pagination** — next/previous order and arrow direction.
- **Sliders/carousels** — swipe direction and control placement.
- **Spacing/alignment** — anything set with fixed left/right spacing
  instead of logical properties will look correct only in one direction.

## Before calling RTL support done

- View the actual interface in `dir="rtl"` — don't assume from the code
  that it's correct.
- Confirm mobile nav, forms, and any directional icons behave correctly,
  not just the desktop layout.
- Confirm mixed Arabic/English content (a name, a number, a product code)
  reads correctly inline, not just in isolated fields.

## Out of scope

This skill covers Arabic/RTL and bilingual direction correctness only.
General UI/UX design decisions live in `ui-ux-pro`; general project
workflow lives in `ht-web-studio`. Detailed SEO, API, dashboard, and
testing rules live in their own skills.
