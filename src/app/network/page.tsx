import type { Metadata } from "next";
import NetworkClient from "./NetworkClient";
import { generateSEOMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateSEOMetadata({
  title: "Global Logistics Network | Quickmas",
  description: "Discover the international logistics network behind Quickmas, connecting 181+ countries through 12,000+ overseas partners and 29+ network locations.",
  pathname: "/network",
});

export default function NetworkPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Network", item: "/network" },
  ];

  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Main Client UI */}
      <NetworkClient />
    </>
  );
}
