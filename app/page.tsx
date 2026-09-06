import type { Metadata } from "next";
import { CompanyIntro } from "@/components/site/company-intro";
import { ContactCta } from "@/components/site/contact-cta";
import { FeaturedProducts } from "@/components/site/featured-products";
import { Hero } from "@/components/site/hero";
import { SolutionsOverview } from "@/components/site/solutions-overview";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — حلول متكاملة للأمن والمراقبة والشبكات`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <SolutionsOverview />
      <FeaturedProducts />
      <ContactCta />
    </>
  );
}
