---
name: testing-qa
description: Specialized quality-assurance and testing expert — verifying functionality, states, regressions, and pre-ship cleanliness before work is called done. Use before declaring any page, feature, or project complete, and whenever changes could affect existing behavior.
---

# Testing & QA

Verification rules for confirming a build actually works, rather than
assuming it does because the code looks right. This is the verification
layer — see `ht-web-studio` for overall workflow, `ui-ux-pro` for design
decisions, and `arabic-rtl` for RTL-specific behavior; this skill is about
proving those things function, not deciding what they should look like.

## Before testing

- Identify what actually changed and what it touches — test that
  surface deliberately, don't test at random.
- Prioritize by risk: critical user flows (signup, checkout, primary
  conversion action, core navigation) get real verification every time;
  low-risk cosmetic changes get a lighter pass.

## What to check

- **Critical flows** — walk the actual primary user journeys end to end,
  not just the happy path in isolation.
- **Interactive elements** — every button, link, form, and nav item goes
  somewhere real and does what it claims; no dead ends or no-ops.
- **Cross-device** — verify behavior at mobile, tablet, and desktop
  widths, not just the viewport used during development.
- **States** — check loading, empty, error, success, disabled, hover, and
  focus states wherever the component has them; a state that was never
  exercised is a state that was never verified.
- **Regressions** — after a change, re-check the existing functionality
  around it, not just the new piece — a fix or feature that breaks
  something else isn't done.
- **Console/runtime** — check for console errors, warnings, and obvious
  runtime failures (failed requests, unhandled exceptions).
- **Accessibility basics** — keyboard reachability, visible focus, and
  labeled controls on anything touched, when relevant to the change.
- **Cleanliness** — no leftover placeholder text, TODO markers, or
  commented-out code; no layout overflow, overlapping text, or broken
  wrapping at the widths checked; demo/sample data is clearly labeled as
  such, never presented as if it were live/real.

## How to test

- Prefer actually exercising the feature (running the app, clicking
  through the flow, running the relevant test suite) over reading the
  code and assuming correctness.
- Keep testing focused and practical: scale effort to what the change
  actually risks, not a maximal checklist run on every one-line edit.
- If the environment doesn't allow real verification (no way to run the
  app, no browser, no test runner), say so explicitly — don't substitute
  a code read-through and call it tested.

## Reporting

- State plainly what was actually tested and how (ran it, clicked
  through it, ran the test suite) versus what was not verified and why.
- Never claim something was tested, works, or passes unless it was
  actually verified — "should work" is not "verified."
- Flag anything skipped or out of reach (e.g., "not tested: RTL layout,
  no Arabic content available in this environment") so the user knows the
  actual coverage, not an assumed one.

## Out of scope

This skill covers testing and verification only. General project
workflow lives in `ht-web-studio`, design decisions in `ui-ux-pro`, and
RTL-specific rules in `arabic-rtl`. Detailed SEO, API, and dashboard
testing rules live in their own skills.
