import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { generateSEOMetadata } from "@/lib/seo";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateSEOMetadata({
  title: "Quickmas | Integrated Logistics & Supply Chain Solutions",
  description: "Quickmas Integrated Logistics coordinates freight forwarding, customs brokerage, warehousing, transportation, and specialized project cargo across global trade lanes.",
  pathname: "",
});

export default function Home() {
  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <LocalBusinessJsonLd />

      {/* Main Client UI */}
      <HomeClient />
    </>
  );
}
