import type { Product } from "@/lib/products/types";

/**
 * The product catalog. To add a product: copy an entry below, give it a
 * unique `slug` (also create a matching folder under public/products/<slug>/
 * for its images), and fill in only the fields you actually know — leave
 * `images` empty and other optional fields unset rather than inventing
 * values. To remove a product, delete its entry (and its image folder).
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
    specs: { megapixels: 5 },
    images: [],
  },
  {
    slug: "hasnet-cnz",
    brand: "HASNET",
    model: "CNZ",
    specs: { megapixels: 5 },
    images: [],
  },
];
