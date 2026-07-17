import type { Metadata } from "next";

export const SEO_CONFIG = {
  companyName: "Quickmas Integrated Logistics",
  companyUrl: "https://www.quickmaslogistics.com",
  defaultTitle: "Quickmas | Integrated Logistics & Supply Chain Solutions",
  titleTemplate: "%s | Quickmas",
  description: "Professional freight forwarding, customs brokerage, warehousing, transportation, and project cargo solutions connecting global trade.",
  defaultOgImage: "/images/og-image.jpg",
  twitterImage: "/images/og-image.jpg",
  locale: "en_US",
  language: "en-US",
  keywords: [
    "freight forwarding",
    "customs clearance",
    "warehousing",
    "third party logistics",
    "road transport",
    "project cargo",
    "supply chain management",
    "cargo India",
    "multimodal logistics",
    "international shipping"
  ],
  author: "Quickmas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder-code-12345",
  },
};

interface SEOMetadataProps {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  pathname,
  image,
  keywords,
  noindex = false,
}: SEOMetadataProps): Metadata {
  const canonicalUrl = `${SEO_CONFIG.companyUrl}${pathname}`;
  const ogImageUrl = image || SEO_CONFIG.defaultOgImage;
  const pageKeywords = keywords || SEO_CONFIG.keywords;

  const robotsConfig: Metadata["robots"] = noindex
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : SEO_CONFIG.robots;

  return {
    metadataBase: new URL(SEO_CONFIG.companyUrl),
    title: {
      default: title,
      template: SEO_CONFIG.titleTemplate,
    },
    description,
    keywords: pageKeywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.companyName,
    publisher: SEO_CONFIG.companyName,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${SEO_CONFIG.companyName}`,
      description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.companyName,
      locale: SEO_CONFIG.locale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SEO_CONFIG.companyName}`,
      description,
      images: [ogImageUrl],
      creator: "@quickmas",
    },
    robots: robotsConfig,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.json",
    category: "logistics",
    verification: SEO_CONFIG.verification,
  };
}
