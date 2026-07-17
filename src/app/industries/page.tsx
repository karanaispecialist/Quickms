import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";
import { generateSEOMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateSEOMetadata({
  title: "Industries | Logistics Solutions by Industry | Quickmas",
  description: "Discover how Quickmas supports different industries with integrated logistics, freight forwarding, customs brokerage, warehousing, transportation, and project cargo solutions.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
  ];

  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Main Client UI */}
      <IndustriesClient />
    </>
  );
}
