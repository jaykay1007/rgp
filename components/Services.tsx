"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { featuredServices, getService } from "@/lib/services-data"

// Featured cards + secondary tiles are sourced from the single services data file
// so imagery and copy stay consistent across the site.
const services = featuredServices.map((s) => ({
  title: s.name,
  tag: s.tag,
  description: s.summary,
  image: s.hero.src,
  link: `/services/${s.slug}`,
  accent: s.accent,
  seoLabel: s.hero.alt,
}))

const secondary = ["business-stationery", "stationery-printing", "packaging-printing", "promotional-materials"]
  .map((slug) => getService(slug))
  .filter(Boolean)
  .map((s) => ({ title: s!.name, href: `/services/${s!.slug}`, image: s!.hero.src, alt: s!.hero.alt }))

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [active, setActive] = useState(0)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
      aria-label="Printing services offered by Raja Ganapathi Offset Bhavani"
    >
      <div className="container-apple-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-eyebrow uppercase text-accent mb-5">What we craft</p>
          <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,80px)] leading-[1.02] text-balance">
            Every project, a portfolio piece.
          </h2>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5] text-pretty max-w-2xl">
            From a single business card to a million-piece offset run — we engineer
            print that feels good in the hand and looks great in the camera.
          </p>
        </motion.div>

        {/* Featured large card with interactive image stage */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-7 relative h-[520px] md:h-[640px] rounded-[28px] overflow-hidden bg-ink-100">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.05 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={s.image}
                  alt={`${s.title} — ${s.seoLabel}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${s.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
              </motion.div>
            ))}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block text-[11px] uppercase tracking-wider text-white/80 mb-3">
                  {services[active].tag}
                </span>
                <h3 className="font-display font-semibold text-white text-[clamp(32px,4vw,48px)] tracking-[-0.02em] leading-tight">
                  {services[active].title}
                </h3>
                <p className="mt-3 text-white/80 text-[15px] md:text-[17px] max-w-lg leading-[1.5]">
                  {services[active].description}
                </p>
                <Link
                  href={services[active].link}
                  className="mt-6 inline-flex items-center gap-1.5 text-white text-[14px] font-medium border-b border-white/40 hover:border-white pb-0.5 transition-colors"
                >
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <ul role="list" className="divide-y divide-ink-200">
              {services.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center justify-between py-5 transition-colors ${
                      i === active ? "text-ink-900" : "text-ink-500 hover:text-ink-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-[12px] ${i === active ? "text-accent" : "text-ink-400"}`}>
                        0{i + 1}
                      </span>
                      <span className="font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.01em]">
                        {s.title}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all ${
                        i === active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-grid — additional categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {secondary.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative h-44 rounded-3xl overflow-hidden bg-ink-100"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <p className="text-white font-display text-[18px] font-semibold tracking-tight">{s.title}</p>
                <span className="inline-flex items-center gap-1 text-white/80 text-[12px] mt-1 group-hover:text-white">
                  View <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-accent text-[15px] font-medium hover:underline"
          >
            View all printing services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
