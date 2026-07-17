import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private", "/api"],
    },
    sitemap: `${SEO_CONFIG.companyUrl}/sitemap.xml`,
  };
}
