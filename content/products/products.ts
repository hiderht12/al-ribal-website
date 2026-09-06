import type { Product } from "@/lib/products/types";
import { buildFrameSequence } from "@/lib/products/frames";

/**
 * The product catalog. To add a product: copy an entry below, give it a
 * unique `slug` (also create a matching folder under public/products/<slug>/
 * for its images), and fill in only the fields you actually know — leave
 * `images` empty and other optional fields unset rather than inventing
 * values. To remove a product, delete its entry (and its image folder).
 *
 * For a product with an ordered multi-angle/rotation photo set (frames
 * dropped into public/products/<slug>/frames/frame-01.webp, frame-02.webp,
 * ...), use `buildFrameSequence` instead of listing each image by hand.
 */
export const products: Product[] = [
  {
    slug: "hasnet-cha1200",
    brand: "HASNET",
    model: "CHA1200",
    specs: { megapixels: 12 },
    images: [],
  },
  {
    slug: "hasnet-bsd4blt",
    brand: "HASNET",
    model: "BSD4BLT",
    // Only brand, model, and megapixels are confirmed. No HASNET catalog
    // document was available in this project to source additional specs
    // (PoE, IP rating, lens, night vision, etc.) from — nothing further is
    // added here rather than guessing. See ProductSpecs in
    // lib/products/types.ts for where confirmed specs get added later.
    specs: { megapixels: 5 },
    images: buildFrameSequence({
      slug: "hasnet-bsd4blt",
      brand: "HASNET",
      model: "BSD4BLT",
      count: 24,
    }),
  },
  {
    slug: "hasnet-cnz",
    brand: "HASNET",
    model: "CNZ",
    specs: { megapixels: 5 },
    images: [],
  },
];
