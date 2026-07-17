import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo";
import { serviceDetailPages } from "@/components/service-detail/serviceDetailData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.companyUrl;

  // 1. Static pages
  const staticPaths = [
    "",
    "/company",
    "/services",
    "/industries",
    "/contact",
    "/network",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Service detail pages from registry
  const serviceSlugs = Object.keys(serviceDetailPages);
  const dynamicEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...dynamicEntries];
}
