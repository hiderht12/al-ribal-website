import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/products/types";

function buildSpecRows(product: Product) {
  return [
    { label: "العلامة التجارية", value: product.brand },
    { label: "الموديل", value: product.model },
    { label: "الدقة", value: `${product.specs.megapixels} ميجابكسل` },
  ];
}

/**
 * Lists only confirmed specs (see the note in content/products/products.ts
 * — no HASNET catalog was available to source anything beyond brand,
 * model, and megapixels). The intro copy says so explicitly rather than
 * padding the table with invented rows.
 */
export function TechnicalSpecsSection() {
  const product = getProductBySlug("hasnet-bsd4blt");
  if (!product) return null;

  const rows = buildSpecRows(product);

  return (
    <Section id="specs" tone="light">
      <Container className="flex flex-col gap-8">
        <div className="max-w-2xl text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">
            المواصفات الفنية
          </p>
          <h2 className="mt-3 text-3xl text-ink-950 sm:text-4xl">
            المواصفات المؤكدة لـ {product.brand} {product.model}
          </h2>
          <p className="mt-4 text-ink-500">
            القائمة أدناه تعرض فقط المواصفات المؤكدة حالياً، وسيتم تحديثها عند
            توفر بيانات إضافية من الشركة المصنّعة.
          </p>
        </div>
        <div className="overflow-x-auto rounded-md border border-ink-200">
          <table className="w-full min-w-[420px] border-collapse">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-ink-200 last:border-b-0">
                  <th
                    scope="row"
                    className="w-1/2 bg-ink-50 px-6 py-4 text-start font-body text-sm font-medium text-ink-500"
                  >
                    {row.label}
                  </th>
                  <td className="px-6 py-4 text-start font-mono text-base text-ink-950">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
