import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ServicesHero from "@/components/services-overview/ServicesHero";
import SupplyChainSection from "@/components/services-overview/SupplyChainSection";
import ServiceDirectory from "@/components/services-overview/ServiceDirectory";
import ServiceJourneys from "@/components/services-overview/ServiceJourneys";
import ServiceFinder from "@/components/services-overview/ServiceFinder";
import ServicesCTA from "@/components/services-overview/ServicesCTA";

import { generateSEOMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = generateSEOMetadata({
  title: "Logistics & Supply Chain Services | Quickmas Integrated Logistics",
  description: "Explore Quickmas Integrated Logistics services across air freight, ocean freight, customs brokerage, warehousing and 3PL, primary transportation, and project cargo.",
  pathname: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar light={true} />

      {/* Primary Inner Landing Content */}
      <main className="flex-grow">
        {/* 2. Services Hero Banner */}
        <ServicesHero />

        {/* 3. Horizontal Supply Chain Journey Flow */}
        <SupplyChainSection />

        {/* 4. Large Editorial Capabilities Directory */}
        <ServiceDirectory />

        {/* 5. Connected Service Journey Sequences */}
        <ServiceJourneys />

        {/* 6. Simple Interactive Selector Finder */}
        <ServiceFinder />

        {/* 7. Conversion CTA Zone */}
        <ServicesCTA />
      </main>

      {/* 8. Global Site Footer */}
      <Footer />
    </div>
    </>
  );
}
