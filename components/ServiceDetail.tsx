"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  Plus,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import type { Service } from "@/lib/services-data"

const ease = [0.16, 1, 0.3, 1] as const

export default function ServiceDetail({
  service,
  related,
}: {
  service: Service
  related: Service[]
}) {
  const waText = encodeURIComponent(`Hi! I'm interested in ${service.name} — can you share a quote?`)

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-50 overflow-x-clip">
        <Header />

        <main>
          {/* ---------------------------------------------------------------- Hero */}
          <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink-900 text-white">
            <Image
              src={service.hero.src}
              alt={service.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-60" />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/30"
            />
            <div
              aria-hidden
              className="absolute -right-24 top-1/4 h-96 w-96 rounded-full blur-[120px] opacity-40"
              style={{ backgroundColor: service.tint }}
            />

            <div className="container-apple-wide relative z-10 pb-16 pt-32 md:pb-20">
              {/* breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/55">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  <li className="text-white/85">{service.name}</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="max-w-3xl"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-eyebrow uppercase text-cmyk-cyan">{service.category}</span>
                  {service.tag && (
                    <span
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/80"
                      style={{ backgroundColor: `${service.tint}2a` }}
                    >
                      {service.tag}
                    </span>
                  )}
                </div>
                <h1 className="font-display font-semibold tracking-[-0.03em] text-[clamp(40px,6.5vw,84px)] leading-[1.0]">
                  {service.name}
                </h1>
                <p className="mt-6 max-w-2xl text-[clamp(16px,1.5vw,21px)] leading-[1.5] text-white/65">
                  {service.tagline}
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

          {/* ------------------------------------------------------------ Overview */}
          <section className="bg-white py-24 md:py-32">
            <div className="container-apple-wide grid gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-eyebrow uppercase text-accent mb-5">Overview</p>
                <h2 className="font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(30px,3.6vw,48px)] leading-[1.08]">
                  {service.summary}
                </h2>
                <p className="mt-6 text-[17px] leading-[1.6] text-ink-500">{service.overview}</p>

                <ul className="mt-10 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: service.tint }}
                      >
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] leading-snug text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-ink-100 md:h-full md:min-h-[480px]">
                  <Image
                    src={service.gallery[0]?.src ?? service.hero.src}
                    alt={service.gallery[0]?.alt ?? service.hero.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-tr ${service.accent}`}
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* --------------------------------------------------------- What we print */}
          <section className="bg-ink-50 py-20 md:py-24">
            <div className="container-apple-wide">
              <Reveal>
                <p className="text-eyebrow uppercase text-accent mb-5">What we print</p>
                <h2 className="mb-10 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                  {service.name}, in every form you need.
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="flex flex-wrap gap-3">
                  {service.craft.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-[14px] font-medium text-ink-700"
                    >
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: service.tint }}
                      />
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ------------------------------------------------------------- Gallery */}
          <section className="bg-white py-24 md:py-32">
            <div className="container-apple-wide">
              <Reveal>
                <p className="text-eyebrow uppercase text-accent mb-5">From our press floor</p>
                <h2 className="mb-12 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                  A closer look at the craft.
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[260px]">
                {service.gallery.map((img, i) => (
                  <Reveal
                    key={img.src + i}
                    delay={i * 0.08}
                    className={
                      i === 0
                        ? "md:col-span-7 md:row-span-2"
                        : "md:col-span-5"
                    }
                  >
                    <div className="group relative h-[260px] w-full overflow-hidden rounded-[24px] bg-ink-100 md:h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,_1,_0.3,_1)] group-hover:scale-[1.06]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- FAQ */}
          {service.faqs.length > 0 && (
            <section className="bg-ink-50 py-24 md:py-32">
              <div className="container-apple mx-auto">
                <Reveal>
                  <p className="text-eyebrow uppercase text-accent mb-5">Questions, answered</p>
                  <h2 className="mb-10 font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(28px,3.2vw,44px)] leading-[1.08]">
                    Good to know.
                  </h2>
                </Reveal>
                <div className="divide-y divide-ink-200 border-y border-ink-200">
                  {service.faqs.map((faq) => (
                    <details key={faq.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <Plus
                          className="h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-45"
                          strokeWidth={2}
                        />
                      </summary>
                      <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-ink-500">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ------------------------------------------------------- Related services */}
          {related.length > 0 && (
            <section className="bg-white py-24 md:py-32">
              <div className="container-apple-wide">
                <Reveal>
                  <div className="mb-12 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-eyebrow uppercase text-accent mb-5">Keep exploring</p>
                      <h2 className="font-display font-semibold tracking-[-0.025em] text-ink-900 text-[clamp(26px,3vw,40px)] leading-[1.1]">
                        Related services.
                      </h2>
                    </div>
                    <Link
                      href="/services"
                      className="hidden items-center gap-1.5 text-[15px] font-medium text-accent hover:gap-2.5 transition-all sm:inline-flex"
                    >
                      All services <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r, i) => (
                    <Reveal key={r.slug} delay={i * 0.08}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group block h-full overflow-hidden rounded-[24px] border border-ink-200 bg-white transition-shadow hover:shadow-apple-lg"
                      >
                        <div className="relative h-44 overflow-hidden bg-ink-100">
                          <Image
                            src={r.hero.src}
                            alt={r.hero.alt}
                            fill
                            sizes="(min-width: 1024px) 30vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                          />
                          <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${r.accent}`} />
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink-900">
                            {r.name}
                          </h3>
                          <p className="mt-2 text-[14px] leading-[1.55] text-ink-500">{r.summary}</p>
                          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                            Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* --------------------------------------------------------------- CTA band */}
          <section className="bg-ink-900 text-white">
            <div className="container-apple-wide py-20 md:py-28">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent/30 via-cmyk-magenta/15 to-cmyk-yellow/10 p-10 md:p-16">
                <div aria-hidden className="absolute inset-0 grain" />
                <div className="relative z-10 max-w-2xl">
                  <h2 className="font-display font-semibold tracking-[-0.025em] text-[clamp(30px,4vw,56px)] leading-[1.04]">
                    Let&apos;s print your
                    <br />
                    <span className="text-gradient-pearl">{service.name.toLowerCase()}.</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-[16px] leading-[1.55] text-white/70">
                    Visit our press floor in Bhavani, or send your details — we&apos;ll share samples,
                    paper options and a quote within the hour.
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
                      href="/services"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                    >
                      <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                      Back to all services
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
