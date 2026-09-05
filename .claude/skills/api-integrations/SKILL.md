---
name: api-integrations
description: Specialized API and external-service integration expert — contracts, auth, secrets handling, error states, and reliability. Use whenever connecting to a REST/GraphQL API, SDK, or third-party service, not just when explicitly asked about "API" or "integration".
---

# API Integrations

Rules for connecting a project to external APIs and services correctly
and safely. This is the integration layer — see `ht-web-studio` for
overall workflow, `ui-ux-pro` for UI states' design, `arabic-rtl` for RTL,
`testing-qa` for verification, and `seo-performance` for performance;
apply those alongside this, not instead of it.

## Understand before implementing

- Read the actual API contract first: documentation, OpenAPI/GraphQL
  schema, type definitions, or a real sample response — before writing
  integration code.
- Inspect existing integration code in the project first; reuse its
  client setup, auth handling, and conventions instead of introducing a
  second pattern.
- Never assume an endpoint, parameter, response field, or capability
  exists without evidence from docs, schema, or an actual response. If
  it's unclear, check rather than guess.
- Use real API response shapes and documented fields to model data —
  don't invent a data structure that seems plausible.

## Structure

- Keep clear separation between UI, application/business logic, and the
  external-service client code — a component shouldn't call a third-party
  API directly.
- Keep integration code isolated and replaceable behind a small interface
  so the underlying service can change without rippling through the app.

## Secrets & configuration

- Never expose secrets, API keys, tokens, or private credentials in
  client-side code, bundled JS, or version control.
- Use environment variables and the project's existing configuration
  conventions; don't invent a new config mechanism.
- Server-side calls requiring secrets stay server-side (API route,
  backend service) — never proxied through client code that could leak
  the key.

## Auth & reliability

- Handle authentication/authorization flows carefully: token storage,
  refresh, expiry, and scope — matching what the service actually
  requires, not a simplified guess.
- Consider timeouts, retries (with backoff, and only for safe/idempotent
  calls), and rate limits where the service or use case warrants it.
- Avoid unnecessary or duplicated API calls — cache, debounce, or
  dedupe requests instead of re-fetching the same data repeatedly.

## Data handling & states

- Validate and sanitize external data before using or rendering it,
  especially anything user-supplied that flows through the API.
- Handle loading, success, empty, and error states explicitly for every
  call that feeds the UI — a missing error/empty state is an incomplete
  integration.
- Surface useful error information for debugging without exposing
  sensitive details (stack traces, internal URLs, raw provider errors) to
  end users.

## Verification & reporting

- Test integrations against real responses where possible, not just
  assumed success paths.
- If credentials, access, or a live service weren't available to verify
  against, say so explicitly — don't claim an integration works when it
  was only written against assumed behavior.

## Out of scope

This skill covers API/external-service integration only. General
workflow lives in `ht-web-studio`, UI/UX in `ui-ux-pro`, RTL in
`arabic-rtl`, verification process in `testing-qa`, and SEO/performance
in `seo-performance`. Detailed dashboard-specific rules live in their own
skill.
