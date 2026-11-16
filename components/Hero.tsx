"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MotionConfig, motion, useScroll, useTransform, type MotionStyle, type MotionValue } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/seo-config"
import { HERO_PRINTS } from "@/lib/hero-prints"

const ease = [0.16, 1, 0.3, 1] as const

const headline: { text: string; accent?: boolean }[][] = [
  [{ text: "Print" }, { text: "that" }, { text: "speaks.", accent: true }],
  [{ text: "Quality" }, { text: "that" }, { text: "lasts." }],
]

// Real printed work — starts as a stacked deck, fans out on scroll.
const prints = HERO_PRINTS

const stats = [
  { stat: `${SITE_CONFIG.yearsInBusiness}+`, label: "years on press" },
  { stat: "50K+", label: "projects printed" },
  { stat: "5.0★", label: "Google rating" },
]

const services = [
  "Wedding cards",
  "Visiting cards",
  "Calendars",
  "Sticker labels",
  "Brochures",
  "Books",
  "Bill books",
  "Letterheads",
]

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] })

  // Act 1 — the opening copy lifts away
  const copyOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const copyY = useTransform(scrollYProgress, [0, 0.2], [0, -70])
  const copyScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94])
  const copyPointer = useTransform(scrollYProgress, (v) => (v > 0.12 ? "none" : "auto"))

  // Act 2 — the closing statement and numbers arrive
  const outroOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const outroY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0])
  const statsOpacity = useTransform(scrollYProgress, [0.62, 0.82], [0, 1])
  const statsY = useTransform(scrollYProgress, [0.62, 0.82], [30, 0])

  // On short or very wide viewports the opening copy can reach down into the
  // resting deck. Measure the gap and push the deck down by the shortfall; the
  // push eases back to zero as the deck fans out.
  const stageRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<HTMLDivElement>(null)
  const shiftFactor = useTransform(scrollYProgress, [0.04, 0.54], [1, 0])
  useEffect(() => {
    const stage = stageRef.current
    const copy = copyRef.current
    const deck = deckRef.current
    const card = deck?.firstElementChild as HTMLElement | null
    if (!stage || !copy || !deck || !card) return
    const measure = () => {
      const copyBottom = copy.offsetTop + copy.offsetHeight
      // Centre card rests 37vh below the stage centre at 0.92 scale
      const deckTop = stage.offsetHeight * 0.87 - (card.offsetHeight * 0.92) / 2
      deck.style.setProperty("--shift", `${Math.max(0, copyBottom + 24 - deckTop)}px`)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(stage)
    ro.observe(copy)
    return () => ro.disconnect()
  }, [])

  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.9])
  const glowScale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1.15])

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="relative bg-[#fbfbfd] text-ink-900"
        aria-label="Premium offset printing press in Bhavani, Erode"
      >
        {/* Scroll track: the stage below stays pinned while this scrolls past */}
        <div ref={trackRef} className="relative h-[230vh]">
          <div ref={stageRef} className="sticky top-0 h-[100svh] overflow-hidden">
            {/* CMYK ink glow behind the prints */}
            <motion.div
              aria-hidden="true"
              style={{ opacity: glowOpacity, scale: glowScale }}
              className="pointer-events-none absolute inset-x-0 bottom-[-10%] top-[35%]"
            >
              <span className="absolute left-[12%] top-[20%] h-[46vh] w-[38vw] rounded-full bg-cmyk-cyan/25 blur-[110px]" />
              <span className="absolute right-[10%] top-[10%] h-[46vh] w-[38vw] rounded-full bg-cmyk-magenta/20 blur-[110px]" />
              <span className="absolute left-[34%] top-[40%] h-[40vh] w-[32vw] rounded-full bg-cmyk-yellow/25 blur-[110px]" />
            </motion.div>

            {/* Act 1: opening copy */}
            <motion.div
              ref={copyRef}
              style={{ opacity: copyOpacity, y: copyY, scale: copyScale, pointerEvents: copyPointer }}
              className="container-apple relative z-20 flex flex-col items-center pt-[clamp(84px,13vh,150px)] text-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="mb-4 text-[13px] font-semibold tracking-tight text-accent sm:text-[15px]"
              >
                Since {SITE_CONFIG.foundingYear} · Bhavani, Erode
              </motion.p>

              <h1 className="font-display text-[clamp(32px,min(7.4vw,11.5vh),104px)] font-bold leading-[1.02] tracking-[-0.04em]">
                {headline.map((line, li) => (
                  <span key={li} className="block">
                    {line.map((word, wi) => (
                      <motion.span
                        key={word.text}
                        initial={{ opacity: 0, y: "0.35em", filter: "blur(14px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.15 + (li * 3 + wi) * 0.09, ease }}
                        className={`inline-block ${word.accent ? "text-gradient-ink pb-[0.08em]" : ""}`}
                      >
                        {word.text}
                        {wi < line.length - 1 && " "}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.75, ease }}
                className="mt-4 text-[clamp(15px,1.4vw,19px)] font-medium text-ink-700"
                lang="ta"
              >
                பவானியின் நம்பிக்கையான மல்டிகலர் ஆஃப்செட் அச்சகம்
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.85, ease }}
                className="mt-3 max-w-[620px] text-pretty text-[clamp(15px,1.35vw,19px)] leading-[1.5] text-ink-500"
              >
                South India&apos;s most-loved <strong className="font-semibold text-ink-800">offset printing press</strong>,
                headquartered in Bhavani, Erode.
                <span className="hidden sm:inline">
                  {" "}
                  Wedding cards, visiting cards, calendars, sticker labels, brochures and books — printed in rich
                  multicolour offset, since {SITE_CONFIG.foundingYear}.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease }}
                className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent-hover sm:text-[17px]"
                >
                  Explore services
                </Link>
                <a
                  href={CONTACT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-0.5 text-[15px] font-medium text-accent hover:underline sm:text-[17px]"
                  aria-label="Get directions to our press in Google Maps"
                >
                  Visit our press
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
                </a>
              </motion.div>
            </motion.div>

            {/* Act 2: closing statement */}
            <motion.div
              style={{ opacity: outroOpacity, y: outroY }}
              className="container-apple pointer-events-none absolute inset-x-0 top-[clamp(76px,12vh,130px)] z-20 text-center"
            >
              <p className="text-[13px] font-semibold tracking-tight text-accent sm:text-[15px]">Fresh off the press</p>
              <p className="mt-2 font-display text-[clamp(28px,min(5vw,7.5vh),64px)] font-bold leading-[1.05] tracking-[-0.035em] text-balance">
                Every sheet, <span className="text-ink-500">inspected by hand.</span>
              </p>
            </motion.div>

            {/* The prints */}
            <motion.div
              initial={{ opacity: 0, y: 140 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease }}
              className="absolute inset-0 z-10"
            >
              <motion.div
                ref={deckRef}
                style={{ "--k": shiftFactor } as MotionStyle}
                className="absolute inset-0 translate-y-[calc(var(--shift,0px)*var(--k))]"
              >
                {prints.map((p, i) => (
                  <PrintCard key={p.src} index={i} progress={scrollYProgress} {...p} />
                ))}
              </motion.div>
            </motion.div>

            <motion.dl
              style={{ opacity: statsOpacity, y: statsY }}
              className="absolute inset-x-0 bottom-[clamp(20px,4.5vh,48px)] z-20 mx-auto grid w-full max-w-[560px] grid-cols-3 divide-x divide-ink-300/70 px-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center">
                  <dd className="font-display text-[clamp(24px,3.4vh,40px)] font-semibold leading-none tracking-[-0.03em]">
                    {s.stat}
                  </dd>
                  <dt className="mt-1.5 text-[11px] text-ink-500 sm:text-[13px]">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* Services marquee */}
        <div className="relative z-10 overflow-hidden border-y border-ink-200 bg-white py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className="flex shrink-0 items-center text-[13px] font-medium text-ink-600 sm:text-[14px]"
              >
                {services.map((s) => (
                  <li key={s} className="flex items-center whitespace-nowrap">
                    <span className="px-6">{s}</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-300" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}

function PrintCard({
  src,
  alt,
  position,
  index,
  progress,
}: {
  src: string
  alt: string
  position?: string
  index: number
  progress: MotionValue<number>
}) {
  const offset = index - (prints.length - 1) / 2 // -2 … 2
  const spread = Math.abs(offset)
  const range = [0.04, 0.62]

  // Stacked deck peeking from the bottom → wide fan in the middle of the stage
  const x = useTransform(progress, range, [`${offset * 2.4}vw`, `${offset * 17}vw`])
  const y = useTransform(progress, range, [`${37 + spread * 1.2}vh`, `${5 + spread * spread * 1.4}vh`])
  const rotate = useTransform(progress, range, [offset * 3.5, offset * 5])
  const scale = useTransform(progress, range, [0.92 - spread * 0.03, 1])

  return (
    <motion.div
      style={{ x, y, rotate, scale, zIndex: 10 - spread }}
      className="absolute left-1/2 top-1/2 -ml-[calc(var(--w)/2)] -mt-[calc(var(--w)*2/3)] w-[var(--w)] rounded-[clamp(10px,1.2vw,18px)] bg-white p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 will-change-transform [--w:clamp(150px,min(46vw,28vh),190px)] sm:p-2 sm:[--w:clamp(150px,min(19vw,30vh),280px)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[clamp(6px,0.9vw,12px)] bg-ink-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, 40vw"
          priority={index === 2}
          className="object-cover"
          style={{ objectPosition: position ?? "center" }}
        />
      </div>
    </motion.div>
  )
}
