import type { ProductImage } from "./types";

/**
 * Builds the ordered ProductImage[] for a mechanically sequential
 * multi-angle/rotation capture, where every frame lives at
 * public/products/<slug>/frames/frame-NN.webp and only the frame number
 * differs between entries. Keeps product entries in content/products from
 * having to hand-list dozens of near-identical image objects.
 */
export function buildFrameSequence(options: {
  slug: string;
  brand: string;
  model: string;
  count: number;
}): ProductImage[] {
  const { slug, brand, model, count } = options;
  return Array.from({ length: count }, (_, i) => {
    const order = i + 1;
    const frameNumber = String(order).padStart(2, "0");
    return {
      order,
      src: `/products/${slug}/frames/frame-${frameNumber}.webp`,
      alt: { ar: `${brand} ${model} — إطار ${order} من ${count}` },
    };
  });
}
