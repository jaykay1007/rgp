"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Printer, Layers, Palette, Scissors, Leaf, Zap, ShieldCheck, Clock } from "lucide-react"
import { SITE_CONFIG } from "@/lib/seo-config"

const specialties = [
  {
    title: "Multicolour offset",
    description: "Four-colour (CMYK) printing on our sheet-fed offset press, for sharp and even colour.",
    icon: Printer,
    accent: "text-cmyk-cyan",
  },
  {
    title: "Paper to suit the job",
    description: "Art paper, maplitho, card stock, sticker and PVC. We help you pick the right one.",
    icon: Layers,
    accent: "text-cmyk-magenta",
  },
  {
    title: "Colour matched to your sample",
    description: "Bring a printed sample and we match it as closely as offset allows.",
    icon: Palette,
    accent: "text-accent",
  },
  {
    title: "Die-cut to any shape",
    description: "Sticker labels and cards cut cleanly to round, oval or your own custom outline.",
    icon: Scissors,
    accent: "text-amber-500",
  },
  {
    title: "Tamil & English typesetting",
    description: "Layouts set in Tamil, English or both, in fonts that suit the occasion.",
    icon: Leaf,
    accent: "text-emerald-500",
  },
  {
    title: "Any quantity welcome",
    description: "A box of visiting cards is as welcome here as a large order.",
    icon: Zap,
    accent: "text-yellow-500",
  },
  {
    title: "Proof before print",
    description: "You see and approve a proof before anything goes on the press.",
    icon: ShieldCheck,
    accent: "text-blue-500",
  },
  {
    title: "Open six days",
    description: "Monday to Saturday, 9:30 AM to 2 PM and 4 to 8 PM. Walk in, no appointment.",
    icon: Clock,
    accent: "text-rose-500",
  },
] as const

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative py-32 md:py-40 bg-ink-100 overflow-hidden"
      aria-label="Why our offset printing is different"
    >
      {/* Decorative grid background */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-apple-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-eyebrow uppercase text-accent mb-5">On the press floor</p>
          <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,80px)] leading-[1.02] text-balance">
            How we work.
            <br />
            <span className="text-gradient-blue">Sheet by sheet.</span>
          </h2>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5] text-pretty">
            Eight things we hold to on every job that leaves our offset press
            in Bhavani.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {specialties.map((s, index) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white rounded-2xl p-7 md:p-8 hover-lift cursor-default overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-ink-100 flex items-center justify-center group-hover:bg-ink-900 transition-colors duration-500">
                    <s.icon
                      className={`w-5 h-5 ${s.accent} group-hover:text-white transition-colors duration-500`}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-[18px] font-display font-semibold text-ink-900 mb-1.5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[14px] text-ink-500 leading-[1.5]">{s.description}</p>
              </div>

              {/* Decorative dot */}
              <div
                className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${s.accent.replace("text-", "bg-")} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`}
              />
            </motion.article>
          ))}
        </div>

        {/* Big stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-ink-200"
        >
          {[
            { stat: `${SITE_CONFIG.yearsInBusiness}+`, label: "Years on press" },
            { stat: "50,000+", label: "Projects shipped" },
            { stat: "6", label: "Days open a week" },
            { stat: "8", label: "Districts served" },
          ].map((b) => (
            <div key={b.label} className="bg-white p-8 text-center">
              <p className="font-display font-semibold text-ink-900 text-[clamp(32px,4vw,48px)] tracking-tight leading-none">
                {b.stat}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-widest text-ink-500">{b.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
