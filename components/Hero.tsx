"use client"

import Image from "next/image"
import Link from "next/link"
import { Fraunces } from "next/font/google"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/seo-config"

// Warm editorial serif for the headline — gives the hero a "printed" voice.
const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" })

const ease = [0.16, 1, 0.3, 1] as const

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

const stats = [
  { stat: `${SITE_CONFIG.yearsInBusiness}+`, label: "years on press" },
  { stat: "50K+", label: "projects printed" },
  { stat: "4.9★", label: "client rating" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBF5EA] text-[#2A1A14]"
      aria-label="Premium offset printing press in Bhavani, Erode"
    >
      {/* Paper texture: fine halftone dots + a warm glow behind the prints */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#C9B79A_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#F2B544]/25 blur-[120px]"
      />

      {/* Printer's colour-control strip */}
      <div aria-hidden="true" className="absolute left-0 top-0 flex h-full w-1.5 flex-col md:w-2">
        <span className="flex-1 bg-[#00A9D6]" />
        <span className="flex-1 bg-[#E5007E]" />
        <span className="flex-1 bg-[#FFD400]" />
        <span className="flex-1 bg-[#1B1B1B]" />
      </div>

      <div className="container-apple-wide relative z-10 grid items-center gap-12 pb-16 pt-32 md:pt-40 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8E1B1B]"
          >
            <span className="h-px w-8 bg-[#8E1B1B]" />
            Since {SITE_CONFIG.foundingYear} · Bhavani, Erode
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className={`${serif.className} text-balance text-[clamp(44px,5.2vw,78px)] font-semibold leading-[0.98] tracking-[-0.03em]`}
          >
            Print that{" "}
            <span className="relative whitespace-nowrap italic text-[#8E1B1B]">
              speaks.
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-[0.14em] w-full text-[#F2B544]"
              >
                <path d="M2 8 C 50 2, 150 2, 198 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Quality that lasts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-5 text-[clamp(17px,1.5vw,21px)] font-medium text-[#8E1B1B]"
            lang="ta"
          >
            பவானியின் நம்பிக்கையான மல்டிகலர் ஆஃப்செட் அச்சகம்
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-5 max-w-[560px] text-pretty text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-[#5B4A40]"
          >
            South India&apos;s most-loved <strong className="font-semibold text-[#2A1A14]">offset printing press</strong>,
            headquartered in Bhavani, Erode. Wedding cards, visiting cards, calendars, sticker labels,
            brochures and books — printed in rich multicolour offset, since {SITE_CONFIG.foundingYear}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8E1B1B] px-7 py-4 text-[15px] font-semibold text-[#FFF8EC] shadow-[0_10px_24px_-10px_rgba(142,27,27,0.7)] transition-all duration-300 hover:bg-[#751414]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
            </Link>
            <a
              href={CONTACT_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2A1A14] px-7 py-[14px] text-[15px] font-semibold text-[#2A1A14] transition-colors duration-300 hover:bg-[#2A1A14] hover:text-[#FFF8EC]"
              aria-label="Get directions to our press in Google Maps"
            >
              <MapPin className="h-4 w-4" strokeWidth={2.2} />
              Visit our press
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease }}
            className="mt-12 grid max-w-[520px] grid-cols-3 divide-x divide-[#2A1A14]/15 border-y border-[#2A1A14]/15"
          >
            {stats.map((b) => (
              <div key={b.label} className="px-3 py-4 first:pl-0 sm:px-5">
                <dd className={`${serif.className} text-[28px] font-semibold leading-none tracking-tight sm:text-[36px]`}>
                  {b.stat}
                </dd>
                <dt className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#7A6A5F] sm:text-[11px]">
                  {b.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Real printed work, fanned like samples on the counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto h-[380px] w-full max-w-[460px] sm:h-[500px] lg:col-span-5 lg:h-[560px] lg:max-w-[500px]"
        >
          <PrintCard
            src="/images/calendars/monthly-sheet-calendar-6004-hand-watch.jpg"
            alt="Tamil monthly sheet calendar printed by Raja Ganapathi Offset"
            className="left-0 top-[8%] w-[46%] -rotate-[7deg]"
            ratio="aspect-[18/25]"
            sizes="(min-width: 1024px) 260px, 46vw"
          />
          <PrintCard
            src="/images/samples/wedding-invitation-tamil.jpg"
            alt="Tamil multicolour wedding invitation printed by Raja Ganapathi Offset"
            className="bottom-0 left-[12%] w-[58%] rotate-[4deg]"
            ratio="aspect-[3/2]"
            sizes="(min-width: 1024px) 320px, 58vw"
          />
          <PrintCard
            src="/images/calendars/daily-sheet-calendar-board-sri-saai-bramma-engineerings.jpg"
            alt="Custom daily calendar board printed by Raja Ganapathi Offset"
            className="right-0 top-0 w-[50%] rotate-[5deg]"
            ratio="aspect-[2/3]"
            sizes="(min-width: 1024px) 280px, 50vw"
            priority
          />
          <div className="absolute -bottom-2 right-[4%] flex h-[92px] w-[92px] rotate-[-10deg] flex-col items-center justify-center rounded-full bg-[#F2B544] text-center text-[#2A1A14] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.45)] sm:h-[112px] sm:w-[112px]">
            <span className={`${serif.className} text-[26px] font-bold leading-none sm:text-[32px]`}>
              {SITE_CONFIG.yearsInBusiness}
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] sm:text-[10px]">
              years of
              <br />
              printing
            </span>
          </div>
        </motion.div>
      </div>

      {/* Services band */}
      <div className="relative z-10 bg-[#2A1A14] text-[#F6E9D2]">
        <ul className="container-apple-wide flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[12px] font-medium uppercase tracking-[0.16em] sm:text-[13px]">
          {services.map((s, i) => (
            <li key={s} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-[#F2B544] sm:block" />}
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PrintCard({
  src,
  alt,
  className,
  ratio,
  sizes,
  priority,
}: {
  src: string
  alt: string
  className: string
  ratio: string
  sizes: string
  priority?: boolean
}) {
  return (
    <div
      className={`absolute ${className} rounded-[6px] bg-white p-1.5 shadow-[0_24px_48px_-18px_rgba(42,26,20,0.55)] ring-1 ring-[#2A1A14]/10 transition-transform duration-500 hover:z-10 hover:scale-[1.03] sm:p-2`}
    >
      <div className={`relative ${ratio} overflow-hidden rounded-[3px]`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </div>
  )
}
