import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rajaganapathibhavani.com"
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
  ]

  const routes = ["", "services", "about", "contact"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...serviceRoutes]
}

