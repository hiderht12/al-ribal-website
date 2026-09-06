/**
 * Text that differs between Arabic and English. Arabic is required and
 * authoritative; English is added once a real translation exists — never
 * back-filled with a placeholder.
 *
 * Brand names and model codes are NOT this type: per the arabic-rtl skill,
 * technical designations are preserved exactly and never translated, so
 * `Product.brand` / `Product.model` below are plain strings.
 */
export interface LocalizedText {
  ar: string;
  en?: string;
}

/**
 * A single product photo. `order` controls gallery ordering today and,
 * later, frame ordering for a multi-angle/360 viewer — adding this field
 * now does not commit the project to true 3D or a 360 capture; per the
 * 3d-web-experiences skill, that choice is made once real photos exist and
 * their actual angle coverage is known.
 */
export interface ProductImage {
  order: number;
  /** Path under /public, e.g. "/products/hasnet-cha1200/front.jpg". */
  src: string;
  /** Free-form angle label ("front", "back", "side", "detail", ...). */
  angle?: string;
  alt: LocalizedText;
}

/**
 * Confirmed technical specifications only. Add a field here the moment a
 * spec is confirmed by the manufacturer/client — never add one
 * speculatively or to "fill out" the shape.
 */
export interface ProductSpecs {
  megapixels: number;
}

export interface Product {
  /** URL-safe identifier; also the folder name under public/products/. */
  slug: string;
  brand: string;
  model: string;
  /** Optional until a real category taxonomy is defined. */
  categorySlug?: string;
  specs: ProductSpecs;
  /** Optional descriptive copy — omitted until real content exists. */
  description?: LocalizedText;
  images: ProductImage[];
}
