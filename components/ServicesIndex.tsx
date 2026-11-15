"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Phone } from "lucide-react"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import { getServicesByCategory, services } from "@/lib/services-data"
import { buildHeroDeck } from "@/lib/hero-prints"

// Hero fan: one image per headline service.
const heroDeck = buildHeroDeck(
  ["wedding-invitations", "calendar-printing", "visiting-cards", "sticker-labels", "brochures"]
    .map((slug) => services.find((s) => s.slug === slug)?.hero)
    .filter((h): h is NonNullable<typeof h> => Boolean(h)),
)

const ease = [0.16, 1, 0.3, 1] as const

export default function ServicesIndex() {
  const groups = getServicesByCategory()

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-50 overflow-x-clip">
        <Header />

        <main>
          {/* Hero */}
          <PageHero
            eyebrow="Our services"
            title="Everything we print,"
            accent="under one roof."
            deck={heroDeck}
            subtitle={
              <>
                {services.length} dedicated services — from wedding invitations and visiting cards to
                calendars, die-cut sticker labels and Bhavani jamakkalam collateral. Printed in Bhavani,
                trusted across Erode district since 1997.
              </>
            }
          />

          {/* Category groups */}
          <div className="bg-white py-24 md:py-32">
            <div className="container-apple-wide space-y-20 md:space-y-28">
              {groups.map((group) => (
                <section key={group.category} aria-label={group.category}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease }}
                    className="mb-10 flex items-baseline justify-between gap-6 border-b border-ink-200 pb-5"
                  >
                    <h2 className="font-display font-semibold tracking-[-0.02em] text-ink-900 text-[clamp(24px,2.6vw,36px)]">
                      {group.category}
                    </h2>
                    <span className="font-mono text-[13px] text-ink-400">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </motion.div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((s, i) => (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
                      >
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-ink-200 bg-white transition-shadow hover:shadow-apple-lg"
                        >
                          <div className="relative h-48 overflow-hidden bg-ink-100">
                            <Image
                              src={s.hero.src}
                              alt={s.hero.alt}
                              fill
                              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                            />
                            <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${s.accent}`} />
                            {s.tag && (
                              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink-800 backdrop-blur">
                                {s.tag}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col p-6">
                            <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink-900">
                              {s.name}
                            </h3>
                            <p className="mt-2 flex-1 text-[14px] leading-[1.55] text-ink-500">
                              {s.summary}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
