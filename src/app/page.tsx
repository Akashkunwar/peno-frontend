import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { ValuesSection } from "@/components/sections/values";
import { EditorialSection } from "@/components/sections/editorial";
import { BestSellers } from "@/components/sections/best-sellers";
import { CorporateShowcase } from "@/components/sections/corporate-showcase";
import { MarketingSection } from "@/components/sections/marketing";
import { ITServicesSection } from "@/components/sections/it-services";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramGallery } from "@/components/sections/instagram";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "PENO — Premium Gifting, Marketing & Technology",
  description: "Thoughtful gifts, meaningful brands, modern technology. Premium gifting experiences, creative marketing, and technology solutions crafted for modern businesses.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <ValuesSection />
      <EditorialSection />
      <BestSellers />
      <CorporateShowcase />
      <MarketingSection />
      <ITServicesSection />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
