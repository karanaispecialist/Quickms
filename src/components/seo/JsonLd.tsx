import React from "react";
import { SEO_CONFIG } from "@/lib/seo";

// Reusable script tag injector
interface SchemaProps {
  schema: Record<string, any>;
}

export function SchemaJsonLd({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 1. Organization Schema
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.companyUrl}/#organization`,
    "name": SEO_CONFIG.companyName,
    "url": SEO_CONFIG.companyUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${SEO_CONFIG.companyUrl}/#logo`,
      "url": `${SEO_CONFIG.companyUrl}/images/logo.png`,
      "caption": SEO_CONFIG.companyName,
    },
    "image": {
      "@id": `${SEO_CONFIG.companyUrl}/#logo`,
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@quickmaslogistics.com",
      "contactType": "customer service",
      "availableLanguage": ["en"],
    },
  };
  return <SchemaJsonLd schema={schema} />;
}

// 2. Website Schema
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.companyUrl}/#website`,
    "name": SEO_CONFIG.companyName,
    "url": SEO_CONFIG.companyUrl,
    "publisher": {
      "@id": `${SEO_CONFIG.companyUrl}/#organization`,
    },
  };
  return <SchemaJsonLd schema={schema} />;
}

// 3. Service Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": SEO_CONFIG.companyName,
      "url": SEO_CONFIG.companyUrl,
    },
    "url": `${SEO_CONFIG.companyUrl}${url}`,
  };
  return <SchemaJsonLd schema={schema} />;
}

// 4. Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SEO_CONFIG.companyUrl}${item.item}`,
    })),
  };
  return <SchemaJsonLd schema={schema} />;
}

// 5. ContactPage Schema
export function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SEO_CONFIG.companyUrl}/contact/#webpage`,
    "url": `${SEO_CONFIG.companyUrl}/contact`,
    "name": `Contact | ${SEO_CONFIG.companyName}`,
    "description": "Contact Quickmas Integrated Logistics for freight forwarding, customs brokerage, warehousing, transportation, and project cargo enquiries.",
    "publisher": {
      "@id": `${SEO_CONFIG.companyUrl}/#organization`,
    },
  };
  return <SchemaJsonLd schema={schema} />;
}

// 6. LocalBusiness / Logistics Company Schema
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/LogisticsBusiness",
    "@id": `${SEO_CONFIG.companyUrl}/#localbusiness`,
    "name": SEO_CONFIG.companyName,
    "image": `${SEO_CONFIG.companyUrl}/images/og-image.jpg`,
    "url": SEO_CONFIG.companyUrl,
    "email": "info@quickmaslogistics.com",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Varanasi",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "221007",
        "streetAddress": "SA 7/5 D1, Satsang Nagar Co, Benipur, Sarnath",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110058",
        "streetAddress": "Jaina Tower-2, No. 306, Plot No. 6, District Center, Janakpuri",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "562107",
        "streetAddress": "Apartment 13, Diya Complex, Near Attibele Tollgate, Nanjundappa Layout, Anekal",
        "addressCountry": "IN"
      }
    ]
  };
  return <SchemaJsonLd schema={schema} />;
}
