import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { generateSEOMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Quickmas | Logistics Enquiries & Support",
  description: "Get in touch with Quickmas Integrated Logistics for freight forwarding, customs brokerage, warehousing, transportation, and project cargo enquiries.",
  pathname: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ];

  return (
    <>
      {/* Server-Side SEO JSON-LD injection */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ContactPageJsonLd />

      {/* Main Client UI */}
      <ContactClient />
    </>
  );
}
