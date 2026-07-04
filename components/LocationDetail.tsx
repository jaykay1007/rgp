"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Truck,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import type { Location } from "@/lib/locations-data"
import { LOCATION_HERO } from "@/lib/locations-data"
import type { Service } from "@/lib/services-data"
import { SITE_CONFIG } from "@/lib/seo-config"

const ease = [0.16, 1, 0.3, 1] as const

export default function LocationDetail({
  location,
  services,
}: {
  location: Location
  services: Service[]
}) {
  const waText = encodeURIComponent(
    `Hi! I'm from ${location.name} — I'd like a printing quote.`
  )

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-50 overflow-x-clip">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-ink-900 text-white">
            <Image
              src={LOCATION_HERO}
              alt={`Offset printing press serving ${location.name}, Erode district`}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-70" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />

            <div className="container-apple-wide relative z-10 pb-16 pt-32 md:pb-20">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/55">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  <li><Link href="/printing-press" className="hover:text-white transition-colors">Locations</Link></li>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  <li className="text-white/85">{location.name}</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="max-w-3xl"
              >
                <p className="text-eyebrow uppercase text-cmyk-cyan mb-5">
                  Printing Press · {location.tamilName}
                </p>
                <h1 className="font-display font-semibold tracking-[-0.03em] text-[clamp(38px,6vw,80px)] leading-[1.0]">
                  Printing Press in {location.name}
                </h1>
                <p className="mt-6 max-w-2xl text-[clamp(16px,1.5vw,21px)] leading-[1.5] text-white/65">
                  {location.tagline}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/919994466277?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    Get a quote on WhatsApp
                  </a>
                  <a
                    href="tel:+919994466277"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 transition-colors hover:bg-ink-100"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    +91 99944 66277
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Intro + reach */}
          <section className="bg-white py-24 md:py-32">
            <div className="container-apple-wide grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
              <Reveal>
                <p className="text-eyebrow uppercase text-accent mb-5">Serving {location.name}</p>
                <h2 className="font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(28px,3.4vw,46px)] leading-[1.08]">
                  Quality printing, delivered to {location.name}.
                </h2>
                <p className="mt-6 text-[17px] leading-[1.6] text-ink-500">{location.intro}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-ink-200 bg-ink-50 p-7">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-500">Delivery</p>
                      <p className="mt-1 text-[15px] text-ink-800">{location.reach}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-500">Open</p>
                      <p className="mt-1 text-[15px] text-ink-800">Mon–Sat · 9:30am–2pm, 4pm–8pm</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-500">Also serving near {location.name}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {location.nearbyAreas.map((a) => (
                          <span key={a} className="rounded-full border border-ink-200 bg-white px-3 py-1 text-[12.5px] text-ink-600">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Popular services */}
          <section className="bg-ink-50 py-24 md:py-32">
            <div className="container-apple-wide">
              <Reveal>
                <div className="mb-12 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-eyebrow uppercase text-accent mb-5">Most requested in {location.name}</p>
                    <h2 className="font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                      Printing services for {location.name}.
                    </h2>
                  </div>
                  <Link href="/services" className="hidden items-center gap-1.5 text-[15px] font-medium text-accent hover:gap-2.5 transition-all sm:inline-flex">
                    All services <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 0.06}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-ink-200 bg-white transition-shadow hover:shadow-apple-lg"
                    >
                      <div className="relative h-36 overflow-hidden bg-ink-100">
                        <Image
                          src={s.hero.src}
                          alt={`${s.name} for ${location.name}`}
                          fill
                          sizes="(min-width: 1024px) 22vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                        />
                        <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${s.accent}`} />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink-900">{s.name}</h3>
                        <p className="mt-1.5 flex-1 text-[13.5px] leading-[1.5] text-ink-500">{s.summary}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why local */}
          <section className="bg-white py-24 md:py-32">
            <div className="container-apple-wide">
              <Reveal>
                <h2 className="mb-12 max-w-2xl font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                  Why {location.name} chooses Raja Ganapathi Offset.
                </h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { t: `${SITE_CONFIG.yearsInBusiness}+ years on press`, d: "A trusted Bhavani–Erode printer since 1997." },
                  { t: "Heidelberg offset", d: "True CMYK + Pantone at 2400 DPI for crisp, consistent print." },
                  { t: "Fast local delivery", d: location.reach + "." },
                  { t: "Fair, bulk-friendly rates", d: "Sharp pricing from small runs to lakhs of sheets." },
                ].map((b, i) => (
                  <Reveal key={b.t} delay={i * 0.06}>
                    <div className="h-full rounded-[22px] border border-ink-200 bg-ink-50 p-6">
                      <Check className="mb-4 h-5 w-5 text-accent" strokeWidth={2.5} />
                      <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink-900">{b.t}</h3>
                      <p className="mt-2 text-[14px] leading-[1.55] text-ink-500">{b.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          {location.faqs.length > 0 && (
            <section className="bg-ink-50 py-24 md:py-32">
              <div className="container-apple mx-auto">
                <Reveal>
                  <p className="text-eyebrow uppercase text-accent mb-5">Questions from {location.name}</p>
                  <h2 className="mb-10 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(28px,3.2vw,44px)] leading-[1.08]">
                    Good to know.
                  </h2>
                </Reveal>
                <div className="divide-y divide-ink-200 border-y border-ink-200">
                  {location.faqs.map((faq) => (
                    <details key={faq.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <Plus className="h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-45" strokeWidth={2} />
                      </summary>
                      <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-ink-500">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-ink-900 text-white">
            <div className="container-apple-wide py-20 md:py-28">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent/30 via-cmyk-magenta/15 to-cmyk-yellow/10 p-10 md:p-16">
                <div aria-hidden className="absolute inset-0 grain" />
                <div className="relative z-10 max-w-2xl">
                  <h2 className="font-display font-semibold tracking-[-0.025em] text-[clamp(30px,4vw,56px)] leading-[1.04]">
                    Printing in {location.name}?
                    <br />
                    <span className="text-gradient-pearl">Let&apos;s get started.</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-[16px] leading-[1.55] text-white/70">
                    Send your details on WhatsApp or call us — we&apos;ll share samples, paper
                    options and a quote within the hour, and arrange delivery to {location.name}.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/919994466277?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 transition-colors hover:bg-ink-100"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={2} />
                      WhatsApp us
                    </a>
                    <Link
                      href="/printing-press"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                    >
                      <MapPin className="h-4 w-4" strokeWidth={2} />
                      All locations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
