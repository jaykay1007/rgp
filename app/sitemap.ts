import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rajaganapathibhavani.com"
  
  // Main service pages with location optimization
  const mainServices = [
    "offset-printing-bhavani",
    "wedding-invitations-erode",
    "visiting-cards-bhavani",
    "digital-printing-komarapalayam",
    "packaging-printing-anthiyur",
    "brochures-catalogs-gobi",
  ]
  
  // Additional service pages
  const services = [
    "visiting-cards",
    "textile-sample-books",
    "wedding-invitations",
    "turmeric-packaging",
    "bhavani-jamakkalam-brochures",
    "educational-materials",
    "brochures",
    "packaging-materials",
    "promotional-materials",
    "business-stationery",
    "multicolour-offset-printing",
    "digital-printing",
    "large-format-printing",
    "book-printing",
    "packaging-printing",
    "stationery-printing",
    "letterheads-billbooks",
    "posters-banners",
    "labels-stickers",
  ]

  // High priority pages
  const highPriorityRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Location-based service routes (high priority for local SEO)
  const locationServiceRoutes = mainServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Regular service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...highPriorityRoutes, ...locationServiceRoutes, ...serviceRoutes]
}

