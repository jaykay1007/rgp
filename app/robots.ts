import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/seo-config"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.domain
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only block genuinely private/non-content paths. Never block /_next/
        // or assets — Google needs JS/CSS to render and rank the page.
        disallow: ["/private/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
