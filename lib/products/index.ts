import { products } from "@/content/products/products";
import type { CategorySlug, Product } from "./types";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export type { Product, SpecRow, CategorySlug, Category } from "./types";
export { CATEGORIES } from "./types";
