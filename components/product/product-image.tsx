import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/lib/products/types";

const CATEGORY_ICON: Record<CategorySlug, React.ReactNode> = {
  camera: (
    <path
      d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.17a1.5 1.5 0 0 0 1.28-.72l.5-.83A1.5 1.5 0 0 1 10.73 4h2.54a1.5 1.5 0 0 1 1.28.72l.5.83a1.5 1.5 0 0 0 1.28.72H17.5A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z"
      strokeWidth="1.5"
    />
  ),
  nvr: (
    <>
      <rect x="4" y="5" width="16" height="5" rx="1" strokeWidth="1.5" />
      <rect x="4" y="13" width="16" height="5" rx="1" strokeWidth="1.5" />
      <circle cx="7" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  switch: (
    <>
      <rect x="3.5" y="8" width="17" height="8" rx="1" strokeWidth="1.5" />
      {[6, 9, 12, 15, 18].map((x) => (
        <line key={x} x1={x} y1="11" x2={x} y2="13" strokeWidth="1.5" />
      ))}
    </>
  ),
};

function ProductImagePlaceholder({
  model,
  category,
  className,
}: {
  model: string;
  category: CategorySlug;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-ink-900 text-ink-500",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(rgba(201,162,39,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-10 w-10 text-gold-500/70"
      >
        {CATEGORY_ICON[category]}
      </svg>
      <span className="font-mono text-sm tracking-wide text-ink-200">{model}</span>
      <span className="text-xs text-ink-500">Product Image</span>
    </div>
  );
}

export interface ProductImageProps {
  src: string;
  alt: string;
  model: string;
  category: CategorySlug;
  /** Whether the file at `src` actually exists under /public — computed server-side via lib/products/image.ts. */
  exists: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders the real product photo if it has been dropped into /public, or a
 * clean branded placeholder otherwise. No stock/internet imagery is ever
 * used — see the note in content/products/products.ts.
 */
export function ProductImage({
  src,
  alt,
  model,
  category,
  exists,
  className,
  sizes,
  priority,
}: ProductImageProps) {
  if (!exists) {
    return <ProductImagePlaceholder model={model} category={category} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
