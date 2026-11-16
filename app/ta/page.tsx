import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone, MapPin } from "lucide-react"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import { SITE_CONFIG } from "@/lib/seo-config"
import { buildHeroDeck } from "@/lib/hero-prints"

const url = `${SITE_CONFIG.domain}/ta`

// Genuinely Tamil content (not a translation-duplicate of the English page),
// so it adds indexable value for Tamil queries without duplicate-content risk.
export const metadata: Metadata = {
  title: "பவானி, ஈரோட்டில் தரமான ஆஃப்செட் அச்சகம் | ராஜா கணபதி ஆஃப்செட்",
  description:
    "ராஜா கணபதி ஆஃப்செட் — 1997 முதல் பவானி, ஈரோட்டில் நம்பகமான மல்டிகலர் ஆஃப்செட் அச்சகம். திருமண அழைப்பிதழ், டிஜிட்டல் & PVC விசிட்டிங் கார்டு, மாத & தினசரி காலண்டர், டை-கட் ஸ்டிக்கர் லேபிள். அழைக்க +91 99944 66277.",
  alternates: {
    canonical: url,
    languages: {
      "en-IN": SITE_CONFIG.domain,
      "ta-IN": url,
      "x-default": SITE_CONFIG.domain,
    },
  },
  openGraph: {
    title: "பவானி, ஈரோட்டில் தரமான ஆஃப்செட் அச்சகம் | ராஜா கணபதி ஆஃப்செட்",
    description:
      "1997 முதல் பவானி, ஈரோட்டில் நம்பகமான மல்டிகலர் ஆஃப்செட் அச்சகம். திருமண அழைப்பிதழ், விசிட்டிங் கார்டு, காலண்டர், ஸ்டிக்கர் லேபிள்.",
    url,
    type: "website",
    locale: "ta_IN",
  },
}

const services = [
  { ta: "திருமண அழைப்பிதழ்கள்", href: "/services/wedding-invitations" },
  { ta: "டிஜிட்டல் & PVC விசிட்டிங் கார்டுகள்", href: "/services/visiting-cards" },
  { ta: "மாத & தினசரி காலண்டர்கள்", href: "/services/calendar-printing" },
  { ta: "டை-கட் ஸ்டிக்கர் லேபிள்கள்", href: "/services/sticker-labels" },
  { ta: "மல்டிகலர் ஆஃப்செட் அச்சு", href: "/services/multicolour-offset-printing" },
  { ta: "சிற்றேடு & கேடலாக்", href: "/services/brochures" },
  { ta: "புத்தக அச்சு", href: "/services/book-printing" },
  { ta: "பில் புத்தகம் & லெட்டர்ஹெட்", href: "/services/stationery-printing" },
  { ta: "போஸ்டர் & நோட்டீஸ்", href: "/services/promotional-materials" },
  { ta: "பள்ளி டைரி & கல்வி அச்சு", href: "/services/educational-materials" },
  { ta: "பை அச்சு (காட்டன் & சணல்)", href: "/services/bag-printing" },
  { ta: "பவானி ஜமக்காளம் சிற்றேடுகள்", href: "/services/bhavani-jamakkalam-brochures" },
]

// Tamil sample designs — shown so Tamil-speaking customers see their own script in print.
const samples = [
  { src: "/images/samples/wedding-invitation-tamil.jpg", t: "திருமண அழைப்பிதழ்", href: "/services/wedding-invitations" },
  { src: "/images/samples/calendar-daily-tamil.jpg", t: "தினசரி காலண்டர்", href: "/services/calendar-printing" },
  { src: "/images/samples/calendar-monthly-tamil.jpg", t: "மாத காலண்டர்", href: "/services/calendar-printing" },
  { src: "/images/samples/visiting-cards-digital-pvc-tamil.jpg", t: "டிஜிட்டல் & PVC விசிட்டிங் கார்டு", href: "/services/visiting-cards" },
  { src: "/images/samples/die-cut-sticker-labels-tamil.jpg", t: "டை-கட் ஸ்டிக்கர்கள்", href: "/services/sticker-labels" },
  { src: "/images/samples/product-labels-tamil.jpg", t: "தயாரிப்பு லேபிள்கள்", href: "/services/sticker-labels" },
]

const reasons = [
  { t: `${SITE_CONFIG.yearsInBusiness}+ ஆண்டுகள் அனுபவம்`, d: "1997 முதல் பவானி – ஈரோடு மாவட்டத்தின் நம்பகமான அச்சகம்." },
  { t: "மல்டிகலர் ஆஃப்செட்", d: "உண்மையான CMYK + பாண்டோன் வண்ணங்கள், கூர்மையான அச்சுத் தரம்." },
  { t: "விரைவான டெலிவரி", d: "பவானி, ஈரோடு மற்றும் அருகிலுள்ள ஊர்களுக்கு சரியான நேரத்தில்." },
  { t: "மொத்த விலையில் சிறந்த தரம்", d: "சிறிய அளவு முதல் லட்சக்கணக்கான தாள்கள் வரை." },
]

export default function TamilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "ராஜா கணபதி ஆஃப்செட் — பவானி, ஈரோடு",
        inLanguage: "ta-IN",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@type": "LocalBusiness", "@id": `${SITE_CONFIG.domain}/#localbusiness` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "தமிழ்", item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SmoothScroll>
        <div className="min-h-screen bg-ink-50 overflow-x-clip" lang="ta">
          <Header />
          <main>
            {/* Hero */}
            <PageHero
              eyebrow="ராஜா கணபதி ஆஃப்செட் · பவானி"
              title="பவானி, ஈரோட்டில்"
              accent="தரமான ஆஃப்செட் அச்சகம்."
                deck={buildHeroDeck(samples.map((s) => ({ src: s.src, alt: s.t })))}
              subtitle="திருமண அழைப்பிதழ்கள், விசிட்டிங் கார்டுகள், மாத & தினசரி காலண்டர்கள், டை-கட் ஸ்டிக்கர் லேபிள்கள், சிற்றேடுகள் மற்றும் புத்தகங்கள் — மல்டிகலர் ஆஃப்செட் அச்சில், 1997 முதல்."
              primary={{ label: "+91 99944 66277", href: "tel:+919994466277" }}
            >
              <p className="text-[13px] text-ink-500">
                <Link href="/" className="underline underline-offset-4 hover:text-ink-800">
                  View this site in English
                </Link>
              </p>
            </PageHero>

            {/* Services */}
            <section className="bg-white py-24 md:py-32">
              <div className="container-apple-wide">
                <p className="text-eyebrow uppercase text-accent mb-5">எங்கள் சேவைகள்</p>
                <h2 className="mb-12 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(28px,3.4vw,46px)] leading-[1.1]">
                  நாங்கள் அச்சிடும் அனைத்தும்.
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-ink-200 bg-ink-50 px-5 py-5 transition-colors hover:bg-white hover:shadow-apple-md"
                    >
                      <span className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink-900">
                        {s.ta}
                      </span>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-accent" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:underline"
                >
                  அனைத்து சேவைகளையும் பார்க்க <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* Tamil samples */}
            <section className="bg-ink-50 py-24 md:py-32">
              <div className="container-apple-wide">
                <p className="text-eyebrow uppercase text-accent mb-5">தமிழில் மாதிரிகள்</p>
                <h2 className="mb-4 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(28px,3.4vw,46px)] leading-[1.1]">
                  உங்கள் மொழியில், உங்கள் அச்சு.
                </h2>
                <p className="mb-12 max-w-2xl text-[16px] leading-[1.6] text-ink-500">
                  தமிழ், ஆங்கிலம் அல்லது இரு மொழிகளிலும் வடிவமைத்து அச்சிடுகிறோம். உங்கள் கடை, நிறுவனம்
                  அல்லது குடும்ப நிகழ்வுக்கான மாதிரி வடிவமைப்புகள் கீழே.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {samples.map((s) => (
                    <Link
                      key={s.src}
                      href={s.href}
                      className="group overflow-hidden rounded-2xl border border-ink-200 bg-white transition-shadow hover:shadow-apple-md"
                    >
                      <div className="relative aspect-[3/2] overflow-hidden bg-ink-100">
                        <Image
                          src={s.src}
                          alt={`${s.t} — தமிழ் மாதிரி வடிவமைப்பு, ராஜா கணபதி ஆஃப்செட், பவானி`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-3 px-5 py-4">
                        <span className="font-display text-[16px] font-semibold text-ink-900">{s.t}</span>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-accent" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Why choose */}
            <section className="bg-white py-24 md:py-32">
              <div className="container-apple-wide">
                <h2 className="mb-12 max-w-2xl font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                  ஏன் எங்களை தேர்வு செய்ய வேண்டும்?
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {reasons.map((r) => (
                    <div key={r.t} className="h-full rounded-2xl border border-ink-200 bg-white p-6">
                      <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink-900">{r.t}</h3>
                      <p className="mt-2 text-[14px] leading-[1.6] text-ink-500">{r.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-ink-900 text-white">
              <div className="container-apple-wide py-20 text-center md:py-28">
                <h2 className="mx-auto max-w-2xl font-display font-semibold tracking-[-0.025em] text-[clamp(28px,4vw,52px)] leading-[1.05]">
                  இன்றே உங்கள் அச்சு வேலையை தொடங்குங்கள்.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.6] text-white/70">
                  24, பழனி ஆண்டவர் கோவில் தெரு, பவானி – 638301, ஈரோடு மாவட்டம். திங்கள்–சனி,
                  காலை 9:30 – இரவு 8:00.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="tel:+919994466277"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 transition-colors hover:bg-ink-100"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    +91 99944 66277
                  </a>
                  <a
                    href="https://maps.app.goo.gl/7bUZMaUAAN2VSYibA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                    கூகுள் மேப்ஸில் பார்க்க
                  </a>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  )
}
