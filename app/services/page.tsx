import type { Metadata } from "next"
import ServicesIndex from "@/components/ServicesIndex"
import { SITE_CONFIG } from "@/lib/seo-config"
import { services } from "@/lib/services-data"

const url = `${SITE_CONFIG.domain}/services`

export const metadata: Metadata = {
  title: "Printing Services in Bhavani & Erode",
  description:
    "All printing services from Raja Ganapathi Offset, Bhavani — wedding invitations, visiting cards, multicolour offset, brochures, books, packaging, bags, labels and jamakkalam collateral. Since 1997.",
  alternates: { canonical: url },
  openGraph: {
    title: `Printing Services | ${SITE_CONFIG.name}`,
    description:
      "Wedding cards, visiting cards, offset printing, brochures, books, packaging and more — printed in Bhavani, Erode.",
    url,
    type: "website",
  },
}

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Printing Services in Bhavani & Erode",
        description:
          "All printing services from Raja Ganapathi Offset, Bhavani — since 1997.",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@type": "LocalBusiness", "@id": `${SITE_CONFIG.domain}/#localbusiness` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Services", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: "Printing services by Raja Ganapathi Offset",
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `${SITE_CONFIG.domain}/services/${s.slug}`,
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesIndex />
    </>
  )
}
