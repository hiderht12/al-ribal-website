import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllProducts } from "@/lib/products";
import { withImageStatus } from "@/lib/products/image";

/** One representative product from each category, linking through to the full catalog. */
export function FeaturedProducts() {
  const products = withImageStatus(getAllProducts());
  const featured = [
    products.find((p) => p.category === "camera"),
    products.find((p) => p.category === "nvr"),
    products.find((p) => p.category === "switch"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (featured.length === 0) return null;

  return (
    <Section id="products" tone="light">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl text-start">
            <p className="font-mono text-sm tracking-wide text-gold-700">منتجات مختارة</p>
            <h2 className="mt-3 text-3xl text-ink-950 sm:text-4xl">من كل تصنيف</h2>
          </div>
          <Link href="/products" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            عرض جميع المنتجات ←
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
