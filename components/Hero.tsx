"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/seo-config"

// Three.js scene is heavy — load only on client
const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => null,
})

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink-50"
      aria-label="Premium offset printing press in Bhavani, Erode"
    >
      {/* Decorative gradient ink blobs */}
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-light" />
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-40 w-[640px] h-[640px] bg-cmyk-cyan/15 ink-dot" />
        <div className="absolute top-1/2 -right-40 w-[560px] h-[560px] bg-cmyk-magenta/15 ink-dot" />
        <div className="absolute bottom-0 left-1/3 w-[520px] h-[520px] bg-accent/15 ink-dot" />
      </div>

      {/* Three.js 3D scene */}
      <motion.div
        style={{ opacity: sceneOpacity, scale: sceneScale }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <HeroScene />
      </motion.div>

      {/* Top fade for nav contrast */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ink-50 to-transparent z-10 pointer-events-none"
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-20 container-apple-wide text-center pt-24 pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-[11px] text-ink-700 font-medium border border-ink-300/40 shadow-apple-sm">
            <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 text-emerald-500" />
            {SITE_CONFIG.yearsInBusiness}+ years of offset craftsmanship in Bhavani, Erode
          </span>
        </motion.div>

        <h1 className="font-display font-bold tracking-[-0.045em] text-ink-900 leading-[0.95] text-[clamp(48px,10vw,140px)] text-balance">
          <Word delay={0.05}>Print</Word>{" "}
          <Word delay={0.15}>that</Word>{" "}
          <Word delay={0.25}>
            <span className="text-gradient-ink">speaks.</span>
          </Word>
          <br />
          <Word delay={0.35}>Quality</Word>{" "}
          <Word delay={0.45}>that</Word>{" "}
          <Word delay={0.55}>lasts.</Word>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 mx-auto max-w-[640px] text-[clamp(17px,1.6vw,22px)] text-ink-600 leading-[1.45] text-pretty"
        >
          South India's most-loved <strong className="font-semibold text-ink-800">offset printing press</strong>,
          headquartered in Bhavani, Erode. Wedding cards, visiting cards, brochures,
          packaging and book printing — crafted on heritage German Heidelberg
          presses, since 1997.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#services"
            className="group inline-flex items-center justify-center gap-2 bg-ink-900 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-ink-800 transition-all duration-300 hover:scale-[1.03] shadow-apple-md"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-ink-800 px-7 py-3.5 rounded-full text-[15px] font-medium border border-ink-300/60 hover:bg-white transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-cmyk-magenta" strokeWidth={2} />
            Visit our press
          </Link>
        </motion.div>

        {/* Floating credibility badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 max-w-[640px] mx-auto gap-3 sm:gap-6"
        >
          {[
            { stat: `${SITE_CONFIG.yearsInBusiness}+`, label: "years on press" },
            { stat: "50K+", label: "projects shipped" },
            { stat: "4.9★", label: "client rating" },
          ].map((b) => (
            <div
              key={b.label}
              className="px-4 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-apple-sm"
            >
              <p className="text-[28px] sm:text-[34px] font-display font-semibold tracking-tight text-ink-900 leading-none">
                {b.stat}
              </p>
              <p className="mt-1 text-[11px] sm:text-[12px] uppercase tracking-wider text-ink-500">
                {b.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] text-ink-500 font-medium tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-ink-400 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-ink-500 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Word({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}
