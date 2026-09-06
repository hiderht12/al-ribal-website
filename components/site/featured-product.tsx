import { FrameViewer } from "@/components/product/frame-viewer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getProductBySlug } from "@/lib/products";

/**
 * Covers both "featured product area" and "BSD4BLT product showcase" as
 * one section: with a single real product in the catalog right now, a
 * separate teaser section immediately above this one would just repeat
 * the same name and image with nothing new to say.
 */
export function FeaturedProduct() {
  const product = getProductBySlug("hasnet-bsd4blt");
  if (!product) return null;

  return (
    <Section id="bsd4blt" tone="dark">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 flex flex-col gap-6 text-start lg:order-1">
          <p className="font-mono text-sm tracking-wide text-gold-400">
            المنتج المميز
          </p>
          <h2 className="text-3xl text-white sm:text-4xl">
            {product.brand} {product.model}
          </h2>
          <p className="max-w-md text-lg text-ink-300">
            كاميرا مراقبة بدقة {product.specs.megapixels} ميجابكسل من HASNET.
          </p>
          <dl className="grid grid-cols-3 gap-4 border-t border-ink-700 pt-6">
            <div>
              <dt className="font-mono text-xs tracking-wide text-ink-400">
                العلامة التجارية
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">{product.brand}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-wide text-ink-400">الموديل</dt>
              <dd className="mt-1 font-mono text-lg text-white">{product.model}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-wide text-ink-400">الدقة</dt>
              <dd className="mt-1 font-mono text-lg text-gold-400">
                {product.specs.megapixels}MP
              </dd>
            </div>
          </dl>
        </div>
        <div className="order-1 lg:order-2">
          <FrameViewer
            frames={product.images}
            productLabel={`${product.brand} ${product.model}`}
          />
        </div>
      </Container>
    </Section>
  );
}
