import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import { locations } from "@/lib/locations-data"
import { SITE_CONFIG } from "@/lib/seo-config"

const url = `${SITE_CONFIG.domain}/printing-press`

export const metadata: Metadata = {
  title: "Printing Press Near You — Bhavani, Erode & Across the District",
  description:
    "Raja Ganapathi Offset serves Bhavani, Erode, Komarapalayam, Gobichettipalayam, Anthiyur, Sathyamangalam and Perundurai with offset, wedding card, visiting card, calendar and sticker label printing since 1997.",
  alternates: { canonical: url },
  openGraph: {
    title: `Printing Press Locations | ${SITE_CONFIG.name}`,
    description:
      "Local offset printing across Erode district — Bhavani, Erode, Komarapalayam, Gobi, Anthiyur, Sathyamangalam, Perundurai.",
    url,
    type: "website",
  },
}

const flagship = {
  href: "/printing-press-bhavani-erode",
  name: "Bhavani",
  tamilName: "பவானி",
  summary:
    "Our home press since 1997 — the full offset floor, showroom and pickup point. The heart of everything we print.",
  flag: true,
}

export default function PrintingPressHubPage() {
  const cards = [
    flagship,
    ...locations.map((l) => ({
      href: `/printing-press/${l.slug}`,
      name: l.name,
      tamilName: l.tamilName,
      summary: l.summary,
      flag: false,
    })),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Printing Press Locations — Bhavani & Erode District",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@type": "LocalBusiness", "@id": `${SITE_CONFIG.domain}/#localbusiness` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Locations", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: "Service locations",
        numberOfItems: cards.length,
        itemListElement: cards.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Printing Press in ${c.name}`,
          url: `${SITE_CONFIG.domain}${c.href}`,
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SmoothScroll>
        <div className="min-h-screen bg-ink-50 overflow-x-clip">
          <Header />
          <main>
            <PageHero
              eyebrow="Locations"
              title="A printing press"
              accent="close to you."
              subtitle="From our Bhavani floor we serve Erode, Komarapalayam, Gobichettipalayam, Anthiyur, Sathyamangalam and Perundurai — with pickup and local delivery across the district."
            />

            <section className="bg-white py-24 md:py-32">
              <div className="container-apple-wide grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group flex h-full flex-col rounded-[24px] border border-ink-200 bg-white p-7 transition-shadow hover:shadow-apple-lg"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-white">
                        <MapPin className="h-4 w-4" strokeWidth={2} />
                      </span>
                      {c.flag && (
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                          Main press
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-[22px] font-semibold tracking-[-0.01em] text-ink-900">
                      Printing Press in {c.name}
                      <span className="ml-2 text-[15px] font-normal text-ink-400">{c.tamilName}</span>
                    </h2>
                    <p className="mt-2 flex-1 text-[14.5px] leading-[1.55] text-ink-500">{c.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                      View {c.name} <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  )
}
