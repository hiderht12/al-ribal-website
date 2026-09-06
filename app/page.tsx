import { CompanyIntro } from "@/components/site/company-intro";
import { ContactCta } from "@/components/site/contact-cta";
import { FeaturedProduct } from "@/components/site/featured-product";
import { Hero } from "@/components/site/hero";
import { SolutionsOverview } from "@/components/site/solutions-overview";
import { TechnicalSpecsSection } from "@/components/site/technical-specs";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <SolutionsOverview />
      <FeaturedProduct />
      <TechnicalSpecsSection />
      <ContactCta />
    </>
  );
}
