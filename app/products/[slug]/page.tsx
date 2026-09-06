import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/product/product-image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { withImageStatus } from "@/lib/products/image";
import { CATEGORIES } from "@/lib/products/types";
import { formatPriceIQD } from "@/lib/products/price";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

type ProductPageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.model} — ${product.name} | الريال الذهبي`,
    description: `${product.name} من الريال الذهبي — الموديل ${product.model}. المواصفات، الملحقات، والضمان.`,
  };
}

export default async function ProductDetailPage({ params }: { params: ProductPageParams }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const [productWithImage] = withImageStatus([product]);

  const categoryLabel = CATEGORIES.find((c) => c.slug === product.category)?.label;
  const inquiryText = encodeURIComponent(`استفسار عن المنتج: ${product.model} — ${product.name}`);

  return (
    <Section id="top" tone="light">
      <Container className="flex flex-col gap-12">
        <nav aria-label="مسار التصفح" className="text-sm text-ink-500">
          <Link href="/products" className="hover:text-gold-700">
            المنتجات
          </Link>
          {categoryLabel && <span className="mx-2">/</span>}
          {categoryLabel && <span>{categoryLabel}</span>}
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-ink-200">
            <ProductImage
              src={product.image}
              alt={`${product.name} — ${product.model}`}
              model={product.model}
              category={product.category}
              exists={productWithImage.imageExists}
              priority
            />
          </div>

          <div className="flex flex-col gap-6 text-start">
            {categoryLabel && (
              <p className="font-mono text-sm tracking-wide text-gold-700">{categoryLabel}</p>
            )}
            <div>
              <h1 dir="ltr" className="text-end text-3xl text-ink-950 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 font-mono text-lg text-ink-500">{product.model}</p>
            </div>
            <p className="font-mono text-2xl font-semibold text-ink-950">
              {formatPriceIQD(product.priceIQD)}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${siteConfig.telegramUrl}?text=${inquiryText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                استفسر عن المنتج
              </a>
              <a
                href={siteConfig.phoneHref}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {product.features.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-ink-950">Features</h2>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-ink-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span dir="ltr" className="text-end">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-ink-950">Specifications</h2>
          <div className="overflow-x-auto rounded-md border border-ink-200">
            <table className="w-full min-w-[420px] border-collapse">
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.label} className="border-b border-ink-200 last:border-b-0">
                    <th
                      scope="row"
                      className="w-1/3 bg-ink-50 px-6 py-4 text-start align-top font-body text-sm font-medium text-ink-500"
                    >
                      {row.label}
                    </th>
                    <td dir="ltr" className="px-6 py-4 text-end font-mono text-sm text-ink-950">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {product.capabilities && product.capabilities.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-ink-950">Capabilities</h2>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {product.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2 text-ink-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span dir="ltr" className="text-end font-mono text-sm">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.accessories && product.accessories.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-ink-950">Accessories</h2>
            <ul className="flex flex-col gap-2">
              {product.accessories.map((accessory) => (
                <li key={accessory} className="flex items-start gap-2 text-ink-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span dir="ltr" className="text-end">
                    {accessory}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.warranty && (
          <div className="flex flex-col gap-2 border-t border-ink-200 pt-8">
            <h2 className="text-2xl text-ink-950">Warranty</h2>
            <p dir="ltr" className="text-end text-ink-700">
              {product.warranty}
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
