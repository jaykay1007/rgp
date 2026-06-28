"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Printer, Layers, Palette, Sparkles, Leaf, Zap, ShieldCheck, Clock } from "lucide-react"

const specialties = [
  {
    title: "2400 DPI offset",
    description: "True high-resolution output on Heidelberg presses for poster-perfect detail.",
    icon: Printer,
    accent: "text-cmyk-cyan",
  },
  {
    title: "Premium papers",
    description: "Imported art papers, textured stocks, kraft, suede, & luxury cardstock.",
    icon: Layers,
    accent: "text-cmyk-magenta",
  },
  {
    title: "Pantone colour matching",
    description: "Brand-true spot colours, soft proofing, and dedicated ink kitchen.",
    icon: Palette,
    accent: "text-accent",
  },
  {
    title: "Foil, emboss, spot UV",
    description: "Luxury finishes that turn a print into a keepsake.",
    icon: Sparkles,
    accent: "text-amber-500",
  },
  {
    title: "Soy & vegetable inks",
    description: "Eco-conscious inks, FSC-certified papers, lower-emission washes.",
    icon: Leaf,
    accent: "text-emerald-500",
  },
  {
    title: "24-hour express",
    description: "Same-day visiting cards & next-day wedding samples — no compromise.",
    icon: Zap,
    accent: "text-yellow-500",
  },
  {
    title: "Quality-locked",
    description: "Three-stage QA with proof sign-off & batch quality samples.",
    icon: ShieldCheck,
    accent: "text-blue-500",
  },
  {
    title: "Sat-late delivery",
    description: "Open till 8 PM, six days a week — for last-minute deadlines.",
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
          <p className="text-eyebrow uppercase text-accent mb-5">Built into every print</p>
          <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,80px)] leading-[1.02] text-balance">
            Expertise that shows.
            <br />
            <span className="text-gradient-blue">From the first sheet.</span>
          </h2>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5] text-pretty">
            Eight pillars that make us South India's most trusted offset printing
            press. Every project, audited against this standard.
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
              className="group relative bg-white rounded-3xl p-7 md:p-8 hover-lift cursor-default overflow-hidden"
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-ink-200"
        >
          {[
            { stat: "27+", label: "Years on press" },
            { stat: "50,000+", label: "Projects shipped" },
            { stat: "1M+", label: "Sheets / month" },
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
