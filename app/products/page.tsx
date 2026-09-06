import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/product/products-catalog";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllProducts } from "@/lib/products";
import { withImageStatus } from "@/lib/products/image";

export const metadata: Metadata = {
  title: "المنتجات — الريال الذهبي",
  description:
    "كاميرات مراقبة IP، أجهزة تسجيل NVR، وسويتشات شبكة PoE من HASNET و Xvision — تصفح المواصفات والأسعار.",
};

export default function ProductsPage() {
  const products = withImageStatus(getAllProducts());

  return (
    <Section id="top" tone="light">
      <Container className="flex flex-col gap-10">
        <div className="max-w-2xl text-start">
          <p className="font-mono text-sm tracking-wide text-gold-700">المنتجات</p>
          <h1 className="mt-3 text-3xl text-ink-950 sm:text-4xl">
            كاميرات المراقبة، أجهزة التسجيل، وسويتشات الشبكة
          </h1>
          <p className="mt-4 text-ink-500">
            جميع المنتجات من علامتي HASNET و Xvision. استخدم البحث للوصول مباشرة لموديل معين، أو
            صنّف حسب نوع الجهاز.
          </p>
        </div>

        <ProductsCatalog products={products} />
      </Container>
    </Section>
  );
}
