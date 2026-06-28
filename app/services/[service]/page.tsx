import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetail from "@/components/ServiceDetail"
import { getService, getRelatedServices, serviceSlugs } from "@/lib/services-data"
import { SITE_CONFIG, getFullAddress } from "@/lib/seo-config"

interface ServicePageProps {
  params: { service: string }
}

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.service)
  if (!service) {
    return { title: "Service not found" }
  }

  const title = `${service.name} in Bhavani & Erode`
  const description = `${service.summary} ${service.name} by Raja Ganapathi Offset, a trusted printing press in Bhavani, Erode since ${SITE_CONFIG.foundingYear}. Call +91 99944 66277.`
  const url = `${SITE_CONFIG.domain}/services/${service.slug}`

  return {
    title,
    description,
    keywords: [...service.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} | ${SITE_CONFIG.name}`,
      description,
      url,
      type: "website",
      images: [{ url: service.hero.src, width: 1200, height: 630, alt: service.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${SITE_CONFIG.name}`,
      description,
      images: [service.hero.src],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.service)
  if (!service) notFound()

  const related = getRelatedServices(service.slug)

  // Per-service structured data (Service + FAQ) for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.summary,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.legalName,
          telephone: "+919994466277",
          address: getFullAddress(),
        },
        areaServed: ["Bhavani", "Erode", "Komarapalayam", "Anthiyur", "Gobi", "Sathyamangalam"],
        url: `${SITE_CONFIG.domain}/services/${service.slug}`,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.domain}/services/${service.slug}#webpage`,
        url: `${SITE_CONFIG.domain}/services/${service.slug}`,
        name: `${service.name} in Bhavani & Erode`,
        description: service.summary,
        primaryImageOfPage: service.hero.src,
        isPartOf: { "@type": "WebSite", "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@type": "LocalBusiness", "@id": `${SITE_CONFIG.domain}/#localbusiness` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_CONFIG.domain}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${SITE_CONFIG.domain}/services/${service.slug}`,
          },
        ],
      },
      ...(service.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((f) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} related={related} />
    </>
  )
}
