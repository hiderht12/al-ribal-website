"use client";

import * as React from "react";
import { ProductCard } from "@/components/product/product-card";
import { CATEGORIES } from "@/lib/products/types";
import type { CategorySlug } from "@/lib/products/types";
import type { ProductWithImageStatus } from "@/lib/products/image";
import { cn } from "@/lib/utils";

type FilterValue = "all" | CategorySlug;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "الكل" },
  ...CATEGORIES.map((category) => ({ value: category.slug, label: category.label })),
];

export function ProductsCatalog({ products }: { products: ProductWithImageStatus[] }) {
  const [filter, setFilter] = React.useState<FilterValue>("all");
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = filter === "all" || product.category === filter;
      const matchesQuery =
        normalizedQuery === "" || product.model.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [products, filter, query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="تصنيف المنتجات">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === item.value
                  ? "border-gold-500 bg-gold-500 text-ink-950"
                  : "border-ink-200 bg-white text-ink-600 hover:border-gold-500 hover:text-gold-700",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-72">
          <span className="sr-only">ابحث حسب الموديل</span>
          <input
            type="search"
            inputMode="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث حسب الموديل — مثال: HT-BSD5BLT-M"
            className="h-11 w-full rounded-sm border border-ink-200 bg-white px-4 font-mono text-sm text-ink-950 placeholder:font-body placeholder:text-ink-400 focus:border-gold-500 focus:outline-none"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-md border border-ink-200 bg-white px-6 py-16 text-center text-ink-500">
          لا توجد منتجات مطابقة لبحثك.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
