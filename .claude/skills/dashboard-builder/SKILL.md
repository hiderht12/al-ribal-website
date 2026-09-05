---
name: dashboard-builder
description: Specialized dashboard and admin-interface expert — information hierarchy, data representation, roles/permissions, and task efficiency. Use whenever building or reviewing a dashboard, admin panel, analytics view, or internal tool, not just when explicitly asked about "dashboard".
---

# Dashboard Builder

Decisions specific to dashboards and admin interfaces: what to show, how
to represent it, and how to keep dense screens usable. See
`ht-web-studio` for overall workflow, `ui-ux-pro` for general UI/UX,
`arabic-rtl` for RTL, `testing-qa` for verification, `seo-performance`
for performance, and `api-integrations` for how the data actually gets
fetched; apply those alongside this, not instead of it.

## Understand before designing

- Identify who uses this dashboard, what decision or task it serves, what
  data actually feeds it, and what the single most important action or
  insight is — before laying out screens.
- Different roles often need different views; don't default to one
  generic layout for every user type if the project has distinct roles.

## Information hierarchy over decoration

- Lead with what the user needs to know or do first; everything else is
  secondary.
- Use tables, lists, cards, charts, and summary stats only when they're
  the right representation for that specific data — not by default or
  for visual variety.
- Choose each chart based on the question it needs to answer (comparison,
  trend, composition, distribution), not to fill space — see the
  `dataviz` skill for chart-type and color mechanics once a chart is the
  right call.
- Avoid padding the dashboard with decorative KPI cards or charts that
  don't drive a decision or action.
- Keep dense information readable: clear grouping, alignment, and
  whitespace rather than cramming more in per screen.

## Never invent data

- Never invent metrics, analytics, sales figures, user counts, orders,
  percentages, trends, or any other business data.
- If real data isn't available yet, use clearly labeled placeholder/demo
  data (e.g. a visible "Sample data" indicator) — never present invented
  numbers as if real.
- Wire displayed values to actual data sources; flag where a metric is
  currently mocked and what real data it needs.

## Interaction & scale

- Design search, filtering, sorting, pagination, and bulk actions when
  the data volume or workflow actually needs them — not as default
  scaffolding on every list.
- Make destructive actions (delete, revoke, bulk-remove) visually
  distinct and require confirmation proportional to their impact — hard
  to trigger by accident.
- Keep navigation clear and scalable as sections/pages are added; group
  related views instead of flattening everything into one nav level.

## States & access

- Handle loading, empty, error, success, and permission-denied states for
  every data-driven view — a table with no empty/error state is
  incomplete.
- Respect user roles and permissions when the project has them: hide or
  disable actions the current user can't perform, don't just rely on the
  backend to reject them.

## Responsiveness & accessibility

- Design dashboards for desktop, tablet, and mobile when the project
  requires mobile/tablet access — dense tables and multi-panel layouts
  need real breakpoint decisions, not just shrinking.
- Keep important controls keyboard-usable and accessible, especially
  actions with real consequences (delete, approve, publish).

## Reuse & consistency

- Use the project's existing design system and component conventions
  (see `design-system` skill) rather than introducing new one-off table,
  card, or chart styles.
- Keep dashboard components (tables, filters, charts, stat blocks)
  reusable across views instead of rebuilding per page.

## Out of scope

This skill covers dashboard/admin-interface decisions only. General
workflow lives in `ht-web-studio`, general UI/UX in `ui-ux-pro`, RTL in
`arabic-rtl`, verification in `testing-qa`, performance in
`seo-performance`, and data fetching in `api-integrations`.
