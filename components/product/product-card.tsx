import Link from "next/link";
import { ProductImage } from "@/components/product/product-image";
import { buttonVariants } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import { formatPriceIQD } from "@/lib/products/price";
import type { ProductWithImageStatus } from "@/lib/products/image";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: ProductWithImageStatus }) {
  const topFeatures = product.features.slice(0, 4);

  return (
    <Surface tone="light" elevation="raised" className="flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full border-b border-ink-200">
        <ProductImage
          src={product.image}
          alt={`${product.name} — ${product.model}`}
          model={product.model}
          category={product.category}
          exists={product.imageExists}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 text-start">
        <div>
          <h3 dir="ltr" className="text-end font-heading text-lg font-semibold text-ink-950">
            {product.name}
          </h3>
          <p className="mt-1 font-mono text-sm text-gold-700">{product.model}</p>
        </div>

        {topFeatures.length > 0 && (
          <ul className="flex flex-1 flex-col gap-1.5">
            {topFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-600">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                <span dir="ltr" className="line-clamp-1 text-end">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-3 border-t border-ink-100 pt-4">
          <p className="font-mono text-base font-semibold text-ink-950">
            {formatPriceIQD(product.priceIQD)}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "w-full")}
          >
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </Surface>
  );
}
