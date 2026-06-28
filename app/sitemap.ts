import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/seo-config"
import { serviceSlugs } from "@/lib/services-data"
import { locationSlugs } from "@/lib/locations-data"

// Single canonical domain (SITE_CONFIG.domain) so the sitemap can never
// disagree with the canonical/OG/structured-data signals.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "ta-IN": `${baseUrl}/ta` } },
    },
    { url: `${baseUrl}/ta`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${baseUrl}/printing-press-bhavani-erode`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${baseUrl}/printing-press`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/printing-press/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}
