"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Work = {
  title: string
  category: string
  image: string
  href: string
  span: string
  tint: string
}

// Real work photography from /public/images/works
const work: Work[] = [
  {
    title: "Aarav & Priya",
    category: "Wedding Invitations · Gold foil on handmade paper",
    image: "/images/works/wedding-invitation-gold-foil-handmade-paper.jpg",
    href: "/services/wedding-invitations",
    span: "md:col-span-7 md:row-span-2",
    tint: "from-rose-500/50",
  },
  {
    title: "Apex Innovations",
    category: "Visiting Cards · Silver foil on black stock",
    image: "/images/works/visiting-card-silver-foil-black-cardstock.jpg",
    href: "/services/visiting-cards",
    span: "md:col-span-5",
    tint: "from-blue-500/50",
  },
  {
    title: "Core Creative",
    category: "Brand Stationery · Foil-stamped cards",
    image: "/images/works/visiting-card-foil-stamped-press-table.jpg",
    href: "/services/visiting-cards",
    span: "md:col-span-5",
    tint: "from-violet-500/50",
  },
  {
    title: "Eco Tote Bags",
    category: "Bag Printing · Cotton & canvas",
    image: "/images/works/cotton-canvas-tote-bag-printing.jpg",
    href: "/services/bag-printing",
    span: "md:col-span-4",
    tint: "from-teal-500/50",
  },
  {
    title: "Hardbound Editions",
    category: "Book Printing · Hardcase, straight off the press",
    image: "/images/works/book-printing-hardcover-offset-press-floor.jpg",
    href: "/services/book-printing",
    span: "md:col-span-8",
    tint: "from-emerald-500/50",
  },
]

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
      aria-label="Selected printing projects portfolio"
    >
      <div className="container-apple-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-8 mb-14 flex-wrap"
        >
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-accent mb-5">Recent work</p>
            <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(36px,5vw,64px)] leading-[1.05] text-balance">
              From the press floor,
              <br />
              <span className="text-gradient-warm">to your hands.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-accent text-[15px] font-medium hover:gap-2.5 transition-all"
          >
            See more in store <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[200px] gap-4">
          {work.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[28px] overflow-hidden bg-ink-100 ${w.span}`}
            >
              <Link href={w.href} className="block w-full h-full" aria-label={`${w.title} — ${w.category}`}>
                <Image
                  src={w.image}
                  alt={`${w.title} — ${w.category} printed by Raja Ganapathi Offset Bhavani`}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,_1,_0.3,_1)] group-hover:scale-[1.07]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${w.tint} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent" />

                {/* hover arrow chip */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2} />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="inline-block text-[11px] uppercase tracking-wider text-white/75 mb-1.5">
                    {w.category}
                  </span>
                  <h3 className="font-display font-semibold text-white text-[clamp(22px,2.2vw,30px)] tracking-[-0.02em] leading-tight">
                    {w.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Logo / trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-400"
        >
          <span className="text-[12px] uppercase tracking-widest text-ink-400">Trusted by</span>
          {["Textile houses", "Schools & colleges", "Wedding planners", "FMCG brands", "Local government"].map(
            (t) => (
              <span key={t} className="text-[14px] font-medium text-ink-600">
                {t}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
