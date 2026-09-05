---
name: ship-checklist
description: Quality gate to run before calling a page, feature, or project done. Use before declaring any web-development work complete, not just when it renders.
---

# Ship Checklist

Rendering is not done. Run through this before saying a page, feature, or
project is finished.

## Functionality

- All primary flows actually work end to end, not just the happy path.
- Every button, link, and nav item goes somewhere real — no dead ends.
- Forms validate input and show real error messages.
- Loading, empty, success, and error states all exist where data is
  involved — not just the state that happened to render in dev.

## Responsive & visual

- Works on mobile and desktop, not just the viewport it was built at.
- No layout overflow, overlapping text, or broken wrapping.
- Typography, spacing, and color match the project's design system
  (see the `design-system` skill) — no one-off values.

## Accessibility

- Interactive elements are keyboard-reachable and show focus state.
- Form controls have labels; images have meaningful alt text.
- Color contrast is readable, not just decorative.

## Cleanliness

- No console errors or warnings.
- No leftover placeholder text, TODO sections, or commented-out code.
- Demo/sample data is clearly distinguishable from real data, not
  presented as if it were live.

## Before saying "done"

If any item above fails, it isn't done — keep working instead of
reporting completion.
