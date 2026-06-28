import type { Metadata } from "next"
import { notFound } from "next/navigation"
import LocationDetail from "@/components/LocationDetail"
import { getLocation, locationSlugs } from "@/lib/locations-data"
import { getService } from "@/lib/services-data"
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/seo-config"
import type { Service } from "@/lib/services-data"

interface LocationPageProps {
  params: { location: string }
}

export function generateStaticParams() {
  return locationSlugs.map((location) => ({ location }))
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const loc = getLocation(params.location)
  if (!loc) return { title: "Location not found" }

  const title = `Printing Press in ${loc.name}, Erode`
  const description = `${loc.summary} Raja Ganapathi Offset — trusted printing press serving ${loc.name} since ${SITE_CONFIG.foundingYear}. Call +91 99944 66277.`
  const url = `${SITE_CONFIG.domain}/printing-press/${loc.slug}`

  return {
    title,
    description,
    keywords: [...loc.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const loc = getLocation(params.location)
  if (!loc) notFound()

  const services = loc.popular
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s))

  const url = `${SITE_CONFIG.domain}/printing-press/${loc.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}#business`,
        name: `${SITE_CONFIG.legalName} — ${loc.name}`,
        description: loc.summary,
        url,
        telephone: "+919994466277",
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.domain}/opengraph-image`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: CONTACT_INFO.address.city,
          addressRegion: CONTACT_INFO.address.state,
          postalCode: CONTACT_INFO.address.pincode,
          addressCountry: CONTACT_INFO.address.countryCode,
        },
        areaServed: [
          { "@type": "City", name: loc.name },
          ...loc.nearbyAreas.map((a) => ({ "@type": "Place", name: a })),
        ],
        parentOrganization: { "@type": "Organization", "@id": `${SITE_CONFIG.domain}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_CONFIG.domain}/printing-press` },
          { "@type": "ListItem", position: 3, name: loc.name, item: url },
        ],
      },
      ...(loc.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: loc.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDetail location={loc} services={services} />
    </>
  )
}
