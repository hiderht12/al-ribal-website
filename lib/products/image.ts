import fs from "node:fs";
import path from "node:path";
import type { Product } from "./types";

/**
 * Server-only: checks /public for each product's image file. Never import
 * this from a component that can end up in the client bundle (anything
 * reachable from a "use client" module) — node:fs can't be bundled for the
 * browser. Call it once in a Server Component/page and pass the resulting
 * `imageExists` flag down as a plain prop instead.
 */
export type ProductWithImageStatus = Product & { imageExists: boolean };

export function withImageStatus(products: Product[]): ProductWithImageStatus[] {
  return products.map((product) => ({
    ...product,
    imageExists: fs.existsSync(path.join(process.cwd(), "public", product.image)),
  }));
}
