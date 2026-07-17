import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import { serviceDetailPages } from "@/components/service-detail/serviceDetailData";
import { generateSEOMetadata } from "@/lib/seo";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const slug = "project-cargo";
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

export default function ProjectCargoPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Project Cargo", item: `/services/${slug}` },
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

      <div className="relative min-h-screen flex flex-col bg-brand-navy-dark text-white selection:bg-brand-orange selection:text-white">
        {/* Global Navigation */}
        <Navbar />

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
