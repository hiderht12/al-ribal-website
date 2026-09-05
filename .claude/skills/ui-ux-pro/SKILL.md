---
name: ui-ux-pro
description: Specialized UI/UX design expert — visual hierarchy, usability, layout, typography, and interaction states. Use whenever designing or reviewing an interface, screen, component, or user flow, not just when explicitly asked about "UI" or "UX".
---

# UI/UX Pro

Design decisions for how an interface looks, reads, and behaves. This is
the design layer — see `ht-web-studio` for the overall project workflow
and `design-system` for tokens (color/type/spacing scale); apply those
tokens here with judgment rather than redefining them.

## Visual hierarchy & layout

- Every screen needs one clear focal point — the primary action or piece
  of information should be visually obvious without a caption explaining it.
- Use size, weight, color, and position to rank elements by importance;
  don't give everything the same visual weight.
- Use whitespace intentionally to group related items and separate
  unrelated ones — it's a layout tool, not leftover space.
- Align elements to a consistent grid; avoid ad-hoc centering or
  eyeballed positioning.
- Vary section layouts to fit their content — don't repeat the same
  hero/heading/three-column pattern down the whole page.

## Typography, spacing, contrast

- Use the project's type scale and spacing scale (`design-system` skill)
  deliberately: heading levels reflect real content hierarchy, not
  arbitrary size choices.
- Line length, line height, and paragraph width should support reading,
  not just fill the container.
- Contrast should be strong enough for readability and to distinguish
  interactive from static elements — not purely decorative.

## Navigation & interactive elements

- Navigation should make "where am I" and "where can I go" obvious at a
  glance.
- Buttons, links, and controls must look like what they are: primary
  actions look primary, destructive actions look distinct, disabled
  controls look inactive.
- Keep interaction patterns predictable and consistent for a given
  element type across the whole product (all primary buttons behave and
  look alike, all form fields behave alike).
- Minimize steps and friction in flows (forms, checkout, onboarding,
  navigation) — cut needless fields, clicks, and confirmations.

## States to design for

Design and check, wherever the element/flow applies:

- Empty (no data yet)
- Loading
- Error (with a real, actionable message)
- Success/confirmation
- Hover
- Focus (visible and keyboard-reachable)
- Disabled

Missing one of these on a real component is an incomplete design, not a
later polish pass.

## Brand and distinctiveness

- Strengthen the client's actual brand identity — their colors, type,
  tone, and content — rather than smoothing it into a generic look.
- Favor distinctive, professional design choices over the default
  AI-generated aesthetic.
- Avoid: excessive gradients, glassmorphism, floating decorative blobs,
  repetitive card grids for everything, unnecessary rounded containers,
  and general visual clutter that isn't doing a job.
- If a pattern (a card, a gradient, a shadow) is being reached for out of
  habit rather than because the content needs it, drop it.

## Before calling a design done

Step back and evaluate it as a user encountering it cold:

- Is the primary action or message immediately clear?
- Can someone navigate and complete the main task without confusion?
- Does it hold up at mobile, tablet, and desktop widths?
- Does it look like *this* product/brand, not an interchangeable template?

## Out of scope

This skill covers UI/UX design decisions only. Detailed SEO, Arabic/RTL,
API, dashboard, and testing rules live in their own skills.
