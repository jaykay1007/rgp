"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const work = [
  {
    title: "Vairam Weddings",
    category: "Wedding Cards",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=1200&q=80",
    color: "from-rose-500/40 to-pink-500/20",
  },
  {
    title: "Bhavani Jamakkalam Co.",
    category: "Brochure / Catalog",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=1200&q=80",
    color: "from-amber-500/40 to-orange-500/20",
  },
  {
    title: "Periyar Turmeric",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1200&q=80",
    color: "from-yellow-500/40 to-amber-500/20",
  },
  {
    title: "Raga Textiles",
    category: "Sample Books",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    color: "from-violet-500/40 to-fuchsia-500/20",
  },
  {
    title: "St. Mary's School",
    category: "Diary / Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&q=80",
    color: "from-emerald-500/40 to-teal-500/20",
  },
] as const

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
            className="inline-flex items-center gap-1.5 text-accent text-[15px] font-medium hover:underline"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-8 px-6 md:px-[calc((100vw-1240px)/2+24px)] snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {work.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none w-[80vw] sm:w-[420px] md:w-[480px] aspect-[4/5] rounded-[28px] overflow-hidden relative bg-ink-100 snap-start group"
            >
              <Image
                src={w.image}
                alt={`${w.title} — ${w.category} printed by Raja Ganapathi Offset`}
                fill
                sizes="(min-width: 768px) 480px, 80vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${w.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="inline-block text-[11px] uppercase tracking-wider text-white/70 mb-2">
                  {w.category}
                </span>
                <h3 className="font-display font-semibold text-white text-[26px] md:text-[30px] tracking-[-0.02em] leading-tight">
                  {w.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
