export type CategorySlug = "camera" | "nvr" | "switch";

export interface Category {
  slug: CategorySlug;
  /** Filter chip label — matches the exact labels requested for the site. */
  label: string;
}

export const CATEGORIES: Category[] = [
  { slug: "camera", label: "الكاميرات" },
  { slug: "nvr", label: "NVR" },
  { slug: "switch", label: "POE Switches" },
];

/** A single labeled specification row, shown in the order given. */
export interface SpecRow {
  label: string;
  value: string;
}

/**
 * Confirmed product data only — every field here is sourced directly from
 * the manufacturer catalog text provided for this project. Nothing is
 * invented: a product with no confirmed capabilities/accessories simply
 * omits those fields rather than guessing.
 */
export interface Product {
  /** URL-safe identifier, derived from the model. */
  slug: string;
  /** Exact manufacturer model code — never translated or altered. */
  model: string;
  /** Product name as given in the catalog — a technical designation, not translated. */
  name: string;
  category: CategorySlug;
  /** Path under /public, e.g. "/products/HT-BSD5BLT-M.webp". Shown only if the file exists; otherwise a placeholder renders. */
  image: string;
  /** null = price not set yet -> "السعر عند الاستفسار". */
  priceIQD: number | null;
  features: string[];
  specs: SpecRow[];
  /** Optional AI/detection capability highlights, where the catalog lists them. */
  capabilities?: string[];
  accessories?: string[];
  /** Warranty text as given in the catalog. */
  warranty?: string;
}
