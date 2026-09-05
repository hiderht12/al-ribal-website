---
name: seo-performance
description: Specialized SEO and web performance expert — semantic markup, meta data, crawlability, asset weight, and Core Web Vitals. Use whenever building or reviewing page markup, meta tags, images/media, or anything affecting load speed, not just when explicitly asked about "SEO" or "performance".
---

# SEO & Performance

Search-visibility and speed decisions for a page or component. This is
the markup/asset layer — see `ht-web-studio` for overall workflow,
`ui-ux-pro` for design decisions, `arabic-rtl` for RTL rules, and
`testing-qa` for verification; apply those and layer SEO/performance
correctness on top, not in place of them.

## Semantic markup & structure

- Use semantic HTML (`header`, `nav`, `main`, `article`, `section`,
  `footer`, etc.) over generic `div`s wherever the element's meaning fits.
- Use one logical heading hierarchy per page (`h1` → `h2` → `h3`, no
  skipped or out-of-order levels) — headings describe real content
  structure, not visual styling choices.
- Keep URLs meaningful and stable; don't break existing internal links or
  introduce meaningless query-string/hash routing where a real path would
  do.
- Keep internal linking intact and purposeful — link related pages where
  it genuinely helps navigation or discovery, not to pad link count.

## Meta data

- Write a real, page-specific title and meta description when the page
  warrants it — reflecting actual page content, not a generic template
  repeated across pages.
- Add descriptive alt text to meaningful images (decorative images get
  empty `alt=""`, not filler text).
- Consider structured data (schema.org) only when the page has real
  content it accurately describes (a real product, article, event) —
  never to represent facts that aren't actually on the page.

## Never fabricate

- Never invent business information, reviews, ratings, locations, prices,
  or product details to improve SEO — that's fraud, not optimization.
- Never keyword-stuff or add fake/hidden SEO content; write for the
  reader, not the crawler.
- If real content needed for good SEO (a description, alt text, a
  location) isn't available, flag what's missing instead of inventing it.

## Crawlability & accessibility

- Ensure primary content is present in markup and reachable without
  requiring JS execution to exist, where the stack allows it.
- Don't block indexing accidentally (robots meta, sitemap, canonical
  tags) — check these are intentional, not defaults left unexamined.

## Performance

- Optimize images and media responsibly: appropriate format, sizing, and
  compression for how they're actually displayed — don't ship a
  full-resolution asset for a thumbnail.
- Avoid unnecessarily large scripts and dependencies; question adding a
  library for something a few lines of code would do.
- Use efficient loading strategies: lazy-load below-the-fold images,
  preload critical fonts/assets, defer non-critical JS.
- Reserve space for images/embeds and avoid late-injected content to
  reduce layout shift.
- Keep JavaScript usage reasonable — don't ship client-side logic for
  content or behavior that could be static or server-rendered.
- Consider Core Web Vitals (LCP, CLS, INP) when relevant to the change,
  especially for the primary landing/entry pages.
- Never trade away real usability or visual quality purely to chase a
  performance number — the two are balanced, not one-sided.

## Reporting

- Clearly separate what was actually measured (a Lighthouse/profiler run,
  a real asset-size check) from what's a recommendation or assumption —
  don't state an unverified performance claim as fact.

## Out of scope

This skill covers SEO and performance only. General workflow lives in
`ht-web-studio`, design decisions in `ui-ux-pro`, RTL rules in
`arabic-rtl`, and verification process in `testing-qa`. Detailed API and
dashboard rules live in their own skills.
