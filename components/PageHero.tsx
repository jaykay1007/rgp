"use client"

import { useRef, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { MotionConfig, motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ChevronRight, Phone } from "lucide-react"
import { HERO_PRINTS, type HeroPrint } from "@/lib/hero-prints"

/**
 * Shared hero for inner pages — the same visual language as the homepage hero
 * (components/Hero.tsx): centred copy on a light stage, word-by-word headline
 * reveal, CMYK ink glow, and printed work rising from below that reacts to
 * scroll. Pass `image` for a single wide media card, or `deck` for a fan of
 * prints relevant to the page (defaults to the general set).
 */

const ease = [0.16, 1, 0.3, 1] as const


type Crumb = { label: string; href?: string }
type Action = { label: string; href: string; external?: boolean }

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  accent,
  subtitle,
  primary = { label: "Call +91 99944 66277", href: "tel:+919994466277" },
  secondary,
  image,
  deck = HERO_PRINTS,
  tint,
  stats,
  children,
}: {
  breadcrumb?: Crumb[]
  eyebrow?: string
  /** First headline line(s) */
  title: string
  /** Optional closing line, set in the animated CMYK gradient */
  accent?: string
  subtitle?: ReactNode
  primary?: Action
  secondary?: Action
  /** Single wide media card. Omit to show the fan of printed samples. */
  image?: { src: string; alt: string }
  /** Prints for the fan (used when `image` is not set) */
  deck?: HeroPrint[]
  /** Tints one of the ink glows (e.g. a service colour) */
  tint?: string
  stats?: { stat: string; label: string }[]
  /** Extra content under the buttons */
  children?: ReactNode
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  const titleWords = title.split(" ")
  const accentWords = accent ? accent.split(" ") : []
  const afterHeadline = 0.3 + (titleWords.length + accentWords.length) * 0.07

  const glowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2])
  const mediaScale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1])
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, -40])

  const word = (text: string, i: number, last: boolean, gradient?: boolean) => (
    <motion.span
      key={`${text}-${i}`}
      initial={{ opacity: 0, y: "0.35em", filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.15 + i * 0.07, ease }}
      className={`inline-block ${gradient ? "text-gradient-ink pb-[0.1em]" : ""}`}
    >
      {text}
      {!last && " "}
    </motion.span>
  )

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="relative overflow-hidden bg-ink-50 text-ink-900">
        {/* CMYK ink glow */}
        <motion.div
          aria-hidden="true"
          style={{ scale: glowScale }}
          className="pointer-events-none absolute inset-x-0 bottom-[-10%] top-[30%] opacity-70"
        >
          <span
            className="absolute left-[10%] top-[20%] h-[46vh] w-[38vw] rounded-full bg-cmyk-cyan/25 blur-[110px]"
            style={tint ? { backgroundColor: `${tint}40` } : undefined}
          />
          <span className="absolute right-[10%] top-[10%] h-[46vh] w-[38vw] rounded-full bg-cmyk-magenta/20 blur-[110px]" />
          <span className="absolute left-[34%] top-[40%] h-[40vh] w-[32vw] rounded-full bg-cmyk-yellow/25 blur-[110px]" />
        </motion.div>

        <div className="container-apple relative z-10 flex flex-col items-center pt-[clamp(84px,13vh,140px)] text-center">
          {breadcrumb && (
            <motion.nav {...fade(0)} aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-ink-500">
                {breadcrumb.map((c, i) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink-400" aria-hidden />}
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-ink-900">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-ink-800">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}

          {eyebrow && (
            <motion.p {...fade(0.05)} className="mb-4 text-[13px] font-semibold tracking-tight text-accent sm:text-[15px]">
              {eyebrow}
            </motion.p>
          )}

          <h1 className="max-w-[900px] text-balance font-display text-[clamp(34px,6.2vw,84px)] font-bold leading-[1.04] tracking-[-0.04em]">
            <span className="block">{titleWords.map((w, i) => word(w, i, i === titleWords.length - 1))}</span>
            {accent && (
              <span className="block">
                {accentWords.map((w, i) => word(w, titleWords.length + i, i === accentWords.length - 1, true))}
              </span>
            )}
          </h1>

          {subtitle && (
            <motion.p
              {...fade(afterHeadline)}
              className="mt-5 max-w-[640px] text-pretty text-[clamp(16px,1.4vw,20px)] leading-[1.5] text-ink-500"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            {...fade(afterHeadline + 0.1)}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            <a
              href={primary.href}
              {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent-hover sm:text-[17px]"
            >
              {primary.href.startsWith("tel:") && <Phone className="h-4 w-4" strokeWidth={2} />}
              {primary.label}
            </a>
            {secondary && (
              <a
                href={secondary.href}
                {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-0.5 text-[15px] font-medium text-accent hover:underline sm:text-[17px]"
              >
                {secondary.label}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
              </a>
            )}
          </motion.div>

          {children && <motion.div {...fade(afterHeadline + 0.2)} className="mt-5">{children}</motion.div>}

          {stats && (
            <motion.dl
              {...fade(afterHeadline + 0.25)}
              className="mt-10 grid w-full max-w-[640px] grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-ink-300/70"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center">
                  <dd className="font-display text-[clamp(24px,2.6vw,36px)] font-semibold leading-none tracking-[-0.03em]">
                    {s.stat}
                  </dd>
                  <dt className="mt-1.5 text-[12px] text-ink-500 sm:text-[13px]">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        {/* Printed work rising from below */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.45, ease }}
          className="relative z-10 mt-[clamp(40px,7vh,72px)]"
        >
          {image ? (
            <motion.div
              style={{ scale: mediaScale, y: mediaY }}
              className="mx-auto w-[min(1100px,calc(100%-2rem))] origin-top rounded-[clamp(18px,2.4vw,32px)] bg-white p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:p-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[clamp(13px,2vw,25px)] bg-ink-100 sm:aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1100px) 1100px, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ) : (
            <div className="relative mx-auto h-[calc(var(--w)*4/3+12vw)] [--w:clamp(120px,min(30vw,26vh),150px)] sm:h-[calc(var(--w)*4/3+7vw)] sm:[--w:clamp(150px,17vw,250px)]">
              {deck.map((p, i) => (
                <DeckCard key={p.src} index={i} count={deck.length} progress={scrollYProgress} {...p} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Soft floor so the visual settles into the next section */}
        <div aria-hidden="true" className="relative z-10 h-[clamp(40px,7vh,80px)]" />
      </section>
    </MotionConfig>
  )
}

function DeckCard({
  src,
  alt,
  position,
  index,
  count,
  progress,
}: {
  src: string
  alt: string
  position?: string
  index: number
  count: number
  progress: MotionValue<number>
}) {
  const offset = index - (count - 1) / 2 // -2 … 2 for five cards
  const spread = Math.abs(offset)
  const range = [0, 0.55]

  // A loose fan that opens wider as the page scrolls
  const x = useTransform(progress, range, [`${offset * 11}vw`, `${offset * 16.5}vw`])
  const y = useTransform(progress, range, [`${spread * spread * 0.9}vw`, `${spread * spread * 1.3}vw`])
  const rotate = useTransform(progress, range, [offset * 4, offset * 6])

  return (
    <motion.div
      style={{ x, y, rotate, zIndex: 10 - spread }}
      className="absolute left-1/2 top-0 -ml-[calc(var(--w)/2)] w-[var(--w)] rounded-[clamp(10px,1.2vw,18px)] bg-white p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 will-change-transform sm:p-2"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[clamp(6px,0.9vw,12px)] bg-ink-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 250px, 30vw"
          priority={offset === 0}
          className="object-cover"
          style={{ objectPosition: position ?? "center" }}
        />
      </div>
    </motion.div>
  )
}
