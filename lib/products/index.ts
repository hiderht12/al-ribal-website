import { products } from "@/content/products/products";
import type { Product } from "./types";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export type { Product, ProductImage, ProductSpecs, LocalizedText } from "./types";
