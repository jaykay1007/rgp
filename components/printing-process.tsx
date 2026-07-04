"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { MessageSquare, PenTool, Layers, Scissors, ShieldCheck, Truck, ArrowRight, MapPin } from "lucide-react"
import dynamic from "next/dynamic"

// Three.js scene is heavy — split it out of the initial bundle like HeroScene
const ProcessScene = dynamic(() => import("@/components/three/ProcessScene"), {
  ssr: false,
  loading: () => null,
})

const steps = [
  {
    number: "01",
    title: "Talk it through",
    description:
      "Drop by the shop or message us on WhatsApp. We listen to your idea, show you paper samples and past work, and recommend the right approach.",
    icon: MessageSquare,
    tint: "#00B5E2",
  },
  {
    number: "02",
    title: "Design & proof",
    description:
      "Our in-house team prepares pre-press files and colour proofs. You see exactly how it will look before a single sheet is printed.",
    icon: PenTool,
    tint: "#0071e3",
  },
  {
    number: "03",
    title: "Plate & print",
    description:
      "CTP plates load onto our Heidelberg offset press. True CMYK plus Pantone spot colours, sheet-fed at 2400 DPI.",
    icon: Layers,
    tint: "#EC008C",
  },
  {
    number: "04",
    title: "Finish by hand",
    description:
      "Die-cutting, foiling, embossing, lamination and perfect binding — the craftsmanship that turns a print into a keepsake.",
    icon: Scissors,
    tint: "#FF8A00",
  },
  {
    number: "05",
    title: "Quality lock",
    description:
      "Three-stage QA: pre-press, mid-run and final inspection. Every batch is sampled and signed off before it leaves the floor.",
    icon: ShieldCheck,
    tint: "#34C759",
  },
  {
    number: "06",
    title: "Hand it over",
    description:
      "Packed in moisture-safe wrap and delivered across Bhavani, Erode, Komarapalayam and beyond — or ready for pickup at the shop.",
    icon: Truck,
    tint: "#5E5CE6",
  },
] as const

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const vw = () => (typeof window !== "undefined" ? window.innerWidth || 1440 : 1440)
const finite = (v: number, fallback: number) => (Number.isFinite(v) ? v : fallback)

/**
 * Distance-from-centre choreography for a single horizontal panel.
 * Each panel measures its own centre offset inside the track, then derives
 * scale / opacity / depth-tilt / lift from the live track translate (`x`).
 */
function usePanelMotion<T extends HTMLElement = HTMLElement>(x: MotionValue<number>, intensity = 1) {
  const ref = useRef<T>(null)
  const [center, setCenter] = useState(0)

  useEffect(() => {
    const measure = () => {
      const el = ref.current
      if (el) setCenter(el.offsetLeft + el.offsetWidth / 2)
    }
    measure()
    const t = setTimeout(measure, 500)
    window.addEventListener("resize", measure)
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure).catch(() => {})
    }
    return () => {
      clearTimeout(t)
      window.removeEventListener("resize", measure)
    }
  }, [])

  // Signed distance (px) of this panel's centre from the viewport centre.
  // Stays 0 (neutral) until the panel has measured its layout offset.
  // Every step is finite-guarded so a transient NaN from the spring/track
  // can never reach the DOM (which would desync hydration).
  const dist = useTransform(x, (xv) => {
    if (!center) return 0
    const d = center + xv - vw() / 2
    return Number.isFinite(d) ? d : 0
  })
  const scale = useTransform(dist, (d) => finite(clamp(1 - (Math.abs(d) / vw()) * 0.34 * intensity, 0.84, 1), 1))
  const opacity = useTransform(dist, (d) => finite(clamp(1 - (Math.abs(d) / vw()) * 1.05, 0.18, 1), 1))
  const rotateY = useTransform(dist, (d) => finite(clamp((-d / vw()) * 20 * intensity, -18, 18), 0))
  const y = useTransform(dist, (d) => finite((Math.abs(d) / vw()) * 34 * intensity, 0))

  return { ref, dist, style: { scale, opacity, rotateY, y, transformPerspective: 1400 } }
}

export default function PrintingProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [dims, setDims] = useState({ range: 0, height: 0 })
  const [active, setActive] = useState(0)

  // Raw scroll progress (0..1) driven by live measurement, then spring-smoothed
  const progress = useMotionValue(0)
  const smooth = useSpring(progress, { stiffness: 90, damping: 26, mass: 0.4 })
  const x = useTransform(smooth, [0, 1], [0, -dims.range])
  const barWidth = useTransform(smooth, [0, 1], ["0%", "100%"])

  // Viewport + reduced-motion detection
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onRM = () => setReduced(mq.matches)
    const onResize = () => setIsDesktop(window.innerWidth >= 768)
    onRM()
    onResize()
    window.addEventListener("resize", onResize)
    mq.addEventListener?.("change", onRM)
    return () => {
      window.removeEventListener("resize", onResize)
      mq.removeEventListener?.("change", onRM)
    }
  }, [])

  // Robust scroll engine — measures live, never relies on cached scroll offsets
  useEffect(() => {
    if (!isDesktop || reduced) {
      setDims({ range: 0, height: 0 })
      return
    }
    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    const measure = () => {
      const range = Math.max(track.scrollWidth - window.innerWidth, 0)
      setDims({ range, height: range + window.innerHeight })
    }

    let ticking = false
    const update = () => {
      ticking = false
      const rect = section.getBoundingClientRect()
      const dist = rect.height - window.innerHeight
      const p = dist > 0 ? clamp(-rect.top / dist, 0, 1) : 0
      progress.set(p)

      // Active step = the step card closest to the viewport centre
      const cards = track.querySelectorAll<HTMLElement>("[data-step-card]")
      let best = 0
      let bestDist = Infinity
      cards.forEach((el, i) => {
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.left + r.width / 2 - window.innerWidth / 2)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setActive((prev) => (prev === best ? prev : best))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    measure()
    update()

    // Re-measure when the track's real width settles (fonts, icons, reflow)
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure).catch(() => {})
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", measure)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      window.removeEventListener("resize", update)
    }
  }, [isDesktop, reduced, progress])

  // Mobile and reduced-motion users get the clean vertical stepper (no scroll-jack)
  if (!isDesktop || reduced) {
    return <ProcessMobile />
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-ink-900 text-white"
      style={{ height: dims.height ? `${dims.height}px` : "320vh" }}
      aria-label="How we print: our six-step quality process"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-dark opacity-70" />
        <div aria-hidden="true" className="absolute inset-0 press-grid opacity-20" />

        {/* Scroll-reactive WebGL ink field */}
        <ProcessScene progress={smooth} />

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-20">
          <motion.div
            style={{ width: barWidth }}
            className="h-full bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow"
          />
        </div>

        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative z-10 flex items-center gap-7 pl-[max(2rem,calc((100vw-1240px)/2+1.5rem))] pr-[8vw] will-change-transform"
        >
          <IntroPanel x={x} />

          {steps.map((step) => (
            <StepCard key={step.number} step={step} x={x} />
          ))}

          <CtaPanel x={x} />
        </motion.div>

        {/* Bottom HUD: live step indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 px-5 py-2.5 rounded-full glass-ink">
          <span className="font-mono text-[12px] text-white/55 tabular-nums">
            {String(active + 1).padStart(2, "0")}
            <span className="text-white/25"> / 06</span>
          </span>
          <div className="flex items-center gap-1.5">
            {steps.map((s, i) => (
              <motion.span
                key={s.number}
                aria-hidden="true"
                className="h-1.5 rounded-full"
                animate={{
                  width: i === active ? 26 : 8,
                  backgroundColor: i === active ? s.tint : "rgba(255,255,255,0.22)",
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
          <motion.span
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[13px] text-white/80 font-medium w-32 hidden lg:block"
          >
            {steps[active].title}
          </motion.span>
        </div>
      </div>
    </section>
  )
}

function IntroPanel({ x }: { x: MotionValue<number> }) {
  const { ref, style } = usePanelMotion<HTMLDivElement>(x, 0.5)
  return (
    <motion.div
      ref={ref}
      style={style}
      className="flex-none w-[clamp(360px,38vw,520px)] pr-6"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-eyebrow uppercase text-cmyk-cyan mb-5"
      >
        Our process
      </motion.p>
      <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(40px,5vw,72px)] leading-[1.0]">
        Six steps.
        <br />
        <span className="text-gradient-pearl">One signature finish.</span>
      </h2>
      <p className="mt-6 text-[clamp(15px,1.2vw,18px)] text-white/55 max-w-md leading-[1.55]">
        From the first hello to the final box at your doorstep — every print passes through the same
        craft-obsessed, six-stage offset workflow.
      </p>
      <div className="mt-8 inline-flex items-center gap-3 text-white/40 text-[12px] uppercase tracking-wider">
        <motion.span
          className="w-8 h-px bg-white/30"
          animate={{ scaleX: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        Scroll to follow the press
      </div>
    </motion.div>
  )
}

function StepCard({ step, x }: { step: (typeof steps)[number]; x: MotionValue<number> }) {
  const { ref, dist, style } = usePanelMotion(x, 1)
  // Watermark number drifts opposite to the card for parallax depth
  const numberX = useTransform(dist, (d) => clamp((d / vw()) * 40, -32, 32))
  const glow = useTransform(dist, (d) => clamp(1 - Math.abs(d) / vw(), 0.25, 1))
  const accentWidth = useTransform(glow, [0.25, 1], ["12%", "100%"])

  return (
    <motion.article
      ref={ref}
      data-step-card
      style={style}
      className="group relative flex-none w-[clamp(300px,30vw,400px)] h-[clamp(380px,56vh,460px)] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 flex flex-col"
    >
      {/* tint glow that brightens as the card reaches centre */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl"
        style={{ backgroundColor: step.tint, opacity: glow }}
      />
      {/* giant watermark number with parallax */}
      <motion.span
        aria-hidden="true"
        style={{ x: numberX }}
        className="absolute -bottom-8 -right-2 font-display font-bold text-[200px] leading-none text-white/[0.05] select-none"
      >
        {step.number}
      </motion.span>

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${step.tint}1f` }}
        >
          <step.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: step.tint }} />
        </div>
        <span className="font-mono text-[12px] text-white/40 tracking-wider">STEP {step.number}</span>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="font-display font-semibold text-white text-[clamp(26px,2.4vw,32px)] tracking-[-0.02em] leading-tight mb-3">
          {step.title}
        </h3>
        <p className="text-white/60 text-[14.5px] leading-[1.55]">{step.description}</p>
      </div>

      {/* bottom accent line that fills as the card centres */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px]"
        style={{ backgroundColor: step.tint, width: accentWidth }}
      />
    </motion.article>
  )
}

function CtaPanel({ x }: { x: MotionValue<number> }) {
  const { ref, style } = usePanelMotion(x, 0.8)
  return (
    <motion.article
      ref={ref}
      style={style}
      className="relative flex-none w-[clamp(320px,32vw,440px)] h-[clamp(380px,56vh,460px)] rounded-[32px] overflow-hidden border border-white/15 p-8 flex flex-col justify-end bg-gradient-to-br from-accent/40 via-cmyk-magenta/25 to-cmyk-yellow/15"
    >
      <div aria-hidden="true" className="absolute inset-0 grain" />
      <p className="relative z-10 text-eyebrow uppercase text-white/80 mb-4">Come see for yourself</p>
      <h3 className="relative z-10 font-display font-semibold text-white text-[clamp(28px,3vw,38px)] tracking-[-0.02em] leading-[1.05]">
        Visit our press
        <br />
        floor in Bhavani.
      </h3>
      <p className="relative z-10 mt-4 text-white/75 text-[14.5px] leading-[1.5] max-w-xs">
        Walk the floor, feel the paper stocks, and plan your project with our team — no appointment needed.
      </p>
      <a
        href="#contact"
        className="relative z-10 mt-6 inline-flex items-center justify-center w-fit gap-2 bg-white text-ink-900 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-ink-100 transition-colors"
      >
        <MapPin className="w-4 h-4" strokeWidth={2} />
        Plan a visit
      </a>
    </motion.article>
  )
}

/* Mobile: clean vertical stepper — no pin, no horizontal scroll */
function ProcessMobile() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="process"
      className="relative bg-ink-900 text-white py-24 overflow-hidden"
      aria-label="How we print: our six-step quality process"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-dark opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 press-grid opacity-20" />

      <div ref={ref} className="container-apple relative z-10">
        <p className="text-eyebrow uppercase text-cmyk-cyan mb-4">Our process</p>
        <h2 className="font-display font-semibold tracking-[-0.03em] text-[clamp(34px,9vw,52px)] leading-[1.02] mb-4">
          Six steps.
          <br />
          <span className="text-gradient-pearl">One signature finish.</span>
        </h2>
        <p className="text-white/55 text-[15px] leading-[1.55] mb-12">
          Every print passes through the same craft-obsessed, six-stage offset workflow.
        </p>

        <div className="relative pl-8">
          {/* timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/15" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className="absolute -left-8 top-1 w-6 h-6 rounded-full border-2 border-ink-900 flex items-center justify-center"
                  style={{ backgroundColor: step.tint }}
                >
                  <step.icon className="w-3 h-3 text-white" strokeWidth={2} />
                </span>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="font-mono text-[11px] text-white/40">STEP {step.number}</span>
                  <h3 className="font-display font-semibold text-white text-[20px] tracking-tight mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-[14px] leading-[1.55]">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 bg-white text-ink-900 px-6 py-3.5 rounded-full text-[15px] font-medium"
        >
          <MapPin className="w-4 h-4" strokeWidth={2} />
          Plan a visit to our press
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  )
}
