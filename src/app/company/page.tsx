import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";
import { generateSEOMetadata } from "@/lib/seo";
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Quickmas | Integrated Logistics & Supply Chain Solutions",
  description: "Learn about Quickmas Integrated Logistics, our global logistics network, integrated supply chain capabilities, and commitment to reliable cargo movement.",
  pathname: "/company",
});

export default function CompanyPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Company", item: "/company" },
  ];

  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <OrganizationJsonLd />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Main Client UI */}
      <CompanyClient />
    </>
  );
}
