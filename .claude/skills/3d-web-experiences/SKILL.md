---
name: 3d-web-experiences
description: Specialized 3D and interactive product-visualization expert — choosing between true 3D, 360 image viewers, image galleries, and decorative effects. Use whenever a project involves product visualization, 3D models, 360-degree viewers, or interactive object rotation, not just when explicitly asked about "3D" or "Three.js".
---

# 3D Web Experiences

Decisions for building 3D and interactive-visualization features honestly
and efficiently. See `ht-web-studio` for overall workflow, `ui-ux-pro` for
general interaction/UI, `arabic-rtl` for RTL, `testing-qa` for
verification, `seo-performance` for asset/loading performance, and
`api-integrations`/`dashboard-builder` for their own domains; apply those
alongside this, not instead of it.

## Determine what's actually needed first

Before writing any code, identify what asset actually exists and what
technique it honestly supports:

1. **True 3D model** — a real GLB/GLTF (or equivalent) file with actual
   geometry exists. Interactive 3D is appropriate.
2. **360° image-sequence viewer** — a sufficiently complete, ordered set
   of captured angles exists. A frame-swapping 360 viewer is appropriate.
3. **Multi-angle image gallery** — only a handful of product photos exist
   (front, back, side, detail shots). A gallery/carousel is the honest
   representation — not a fake 360 or 3D experience.
4. **Decorative 3D effect** — a visual flourish (rotating shape, parallax,
   particles) with no product/data meaning. Lightweight CSS/WebGL effects
   are fine here since nothing is being represented as real.

Never blur these categories:

- Never present a small set of product photos as a true 3D model or as a
  complete 360° capture.
- Never fabricate intermediate frames, missing angles, or 3D geometry to
  make a small image set look more complete than it is.
- If the available assets only support a gallery, build a gallery and say
  so — don't stretch them into a fake 360/3D experience.

## Prefer the simplest sufficient technique

- Default to the lightest approach that honestly delivers the required
  experience: CSS/image-based solutions before a 3D engine.
- Reach for Three.js, React Three Fiber, WebGL, or GLB/GLTF pipelines only
  when true 3D is actually required and fits the project's existing stack
  — not as a default for "make it feel premium."
- Don't add a 3D library's weight and complexity when a well-built image
  gallery or 360 viewer achieves the same user goal.

## Interaction design

- Design intuitive mouse (drag/scroll), touch, pinch-zoom, and rotation
  gestures appropriate to the technique in use.
- Give users a clear hint when an object is interactive (a drag cue, a
  rotate icon, subtle motion on load) — don't assume it's obvious.
- Design touch/mobile interaction from the start, not as an afterthought
  to a desktop-only mouse implementation.
- Respect `prefers-reduced-motion`: pause or simplify autoplay/rotation
  animation for users who've opted out.

## Performance & assets

- Optimize models (reasonable polygon count, compressed textures),
  image-sequence frames, and any other assets for web delivery — don't
  ship source-quality files to the browser.
- Avoid unnecessary rendering work: excessive polygon counts, oversized
  textures, uncapped animation loops, or rendering when off-screen.
- Show a loading state while heavy assets load; never let a 3D/360 asset
  block or delay the rest of the page's important content.
- Provide a fallback (static image, simplified view) for devices or
  browsers that can't handle the full experience.

## Accessibility

- Provide a meaningful non-3D alternative (description, key images) when
  the visualization conveys information a screen-reader or non-visual
  user needs — don't let critical product info live only inside a canvas.

## Reuse & verification

- Reuse the project's existing architecture, component patterns, and
  design system rather than building 3D features in an isolated silo.
- Clearly report whether an implementation was actually tested against
  real assets (real GLB file, real photo set) versus only built and
  structurally wired up without real assets to verify against.

## Out of scope

This skill covers 3D/visualization technique and asset decisions only.
General workflow lives in `ht-web-studio`, general UI/UX in `ui-ux-pro`,
RTL in `arabic-rtl`, verification in `testing-qa`, performance in
`seo-performance`, API concerns in `api-integrations`, and dashboards in
`dashboard-builder`.
