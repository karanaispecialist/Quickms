import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import { serviceDetailPages } from "@/components/service-detail/serviceDetailData";
import { generateSEOMetadata } from "@/lib/seo";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const slug = "ocean-freight";
const pageData = serviceDetailPages[slug];

if (!pageData) {
  notFound();
}

export const metadata: Metadata = generateSEOMetadata({
  title: pageData.meta.title,
  description: pageData.meta.description,
  pathname: `/services/${slug}`,
  image: pageData.hero.image,
});

export default function OceanFreightPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Ocean Freight", item: `/services/${slug}` },
  ];

  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <ServiceJsonLd
        name={pageData.hero.label}
        description={pageData.meta.description}
        url={`/services/${slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-neutral-dark selection:bg-brand-orange selection:text-white">
        {/* Global Navigation */}
        <Navbar light={true} />

        {/* Service Detail Content */}
        <main className="flex-grow">
          <ServiceDetailPage data={pageData} />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}
