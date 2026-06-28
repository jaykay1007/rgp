import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import { SITE_CONFIG } from "@/lib/seo-config"

const url = `${SITE_CONFIG.domain}/ta`

// Genuinely Tamil content (not a translation-duplicate of the English page),
// so it adds indexable value for Tamil queries without duplicate-content risk.
export const metadata: Metadata = {
  title: "பவானி, ஈரோட்டில் தரமான ஆஃப்செட் அச்சகம் | ராஜா கணபதி ஆஃப்செட்",
  description:
    "ராஜா கணபதி ஆஃப்செட் — 1997 முதல் பவானி, ஈரோட்டில் நம்பகமான ஆஃப்செட் அச்சகம். திருமண அழைப்பிதழ், விசிட்டிங் கார்டு, சிற்றேடு, பேக்கேஜிங் மற்றும் மல்டிகலர் அச்சு. அழைக்க +91 99944 66277.",
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
      "1997 முதல் பவானி, ஈரோட்டில் நம்பகமான ஆஃப்செட் அச்சகம். திருமண அழைப்பிதழ், விசிட்டிங் கார்டு, சிற்றேடு, பேக்கேஜிங்.",
    url,
    type: "website",
    locale: "ta_IN",
  },
}

const services = [
  { ta: "திருமண அழைப்பிதழ்கள்", href: "/services/wedding-invitations" },
  { ta: "விசிட்டிங் கார்டுகள்", href: "/services/visiting-cards" },
  { ta: "மல்டிகலர் ஆஃப்செட் அச்சு", href: "/services/multicolour-offset-printing" },
  { ta: "சிற்றேடு & கேடலாக்", href: "/services/brochures" },
  { ta: "புத்தக அச்சு", href: "/services/book-printing" },
  { ta: "பை அச்சு (காட்டன் & சணல்)", href: "/services/bag-printing" },
  { ta: "பில் புத்தகம் & லெட்டர்ஹெட்", href: "/services/business-stationery" },
  { ta: "பேக்கேஜிங் & பெட்டிகள்", href: "/services/packaging-printing" },
]

const reasons = [
  { t: "27+ ஆண்டுகள் அனுபவம்", d: "1997 முதல் பவானி – ஈரோடு மாவட்டத்தின் நம்பகமான அச்சகம்." },
  { t: "ஹைடெல்பெர்க் ஆஃப்செட்", d: "உண்மையான CMYK + பாண்டோன் வண்ணங்கள், 2400 DPI கூர்மை." },
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
            <section className="relative overflow-hidden bg-ink-50">
              <div aria-hidden className="absolute inset-0 bg-mesh-light" />
              <div className="container-apple-wide relative z-10 pb-20 pt-36 text-center md:pb-28 md:pt-44">
                <p className="text-eyebrow uppercase text-accent mb-5">ராஜா கணபதி ஆஃப்செட் · பவானி</p>
                <h1 className="mx-auto max-w-4xl font-display font-bold tracking-[-0.03em] text-ink-900 text-[clamp(34px,6vw,76px)] leading-[1.05]">
                  பவானி, ஈரோட்டில்
                  <br />
                  <span className="text-gradient-ink">தரமான ஆஃப்செட் அச்சகம்.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-[clamp(16px,1.5vw,20px)] leading-[1.6] text-ink-600">
                  திருமண அழைப்பிதழ்கள், விசிட்டிங் கார்டுகள், சிற்றேடுகள், புத்தகங்கள் மற்றும்
                  பேக்கேஜிங் — ஜெர்மன் ஹைடெல்பெர்க் அச்சு இயந்திரத்தில், 1997 முதல்.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919994466277?text=%E0%AE%B5%E0%AE%A3%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D%2C%20%E0%AE%85%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AF%81%20%E0%AE%B5%E0%AE%BF%E0%AE%B2%E0%AF%88%20%E0%AE%B5%E0%AF%87%E0%AE%A3%E0%AF%8D%E0%AE%9F%E0%AF%81%E0%AE%AE%E0%AF%8D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்
                  </a>
                  <a
                    href="tel:+919994466277"
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-ink-800"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    +91 99944 66277
                  </a>
                </div>
                <p className="mt-6 text-[13px] text-ink-500">
                  <Link href="/" className="underline underline-offset-4 hover:text-ink-800">
                    View this site in English
                  </Link>
                </p>
              </div>
            </section>

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

            {/* Why choose */}
            <section className="bg-ink-50 py-24 md:py-32">
              <div className="container-apple-wide">
                <h2 className="mb-12 max-w-2xl font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                  ஏன் எங்களை தேர்வு செய்ய வேண்டும்?
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {reasons.map((r) => (
                    <div key={r.t} className="h-full rounded-[22px] border border-ink-200 bg-white p-6">
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
