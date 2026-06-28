"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/smooth-scroll"
import { getServicesByCategory, services } from "@/lib/services-data"

const ease = [0.16, 1, 0.3, 1] as const

export default function ServicesIndex() {
  const groups = getServicesByCategory()

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-50 overflow-x-clip">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-ink-900 text-white">
            <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-70" />
            <div aria-hidden className="absolute inset-0 press-grid opacity-20" />
            <div className="container-apple-wide relative z-10 pb-20 pt-36 md:pb-28 md:pt-44">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="max-w-3xl"
              >
                <p className="text-eyebrow uppercase text-cmyk-cyan mb-5">Our services</p>
                <h1 className="font-display font-semibold tracking-[-0.03em] text-[clamp(44px,7vw,92px)] leading-[1.0]">
                  Everything we print,
                  <br />
                  <span className="text-gradient-pearl">under one roof.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-white/60">
                  {services.length} dedicated services — from wedding invitations and visiting cards to
                  multicolour offset, packaging and Bhavani jamakkalam collateral. Printed in Bhavani,
                  trusted across Erode district since 1997.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919994466277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    WhatsApp us
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
