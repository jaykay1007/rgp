"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
      aria-label="Why businesses across Tamil Nadu choose Raja Ganapathi Offset Press"
    >
      <div className="container-apple-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-eyebrow uppercase text-accent mb-5">Trusted since 1997</p>
            <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,72px)] leading-[1.02] text-balance">
              The reason businesses across
              <span className="text-gradient-blue"> Tamil Nadu </span>
              keep coming back.
            </h2>
            <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5] text-pretty">
              We've printed wedding cards for three generations of the same family.
              Catalogues for textile houses since the day they opened. School diaries that
              parents still keep. That's the kind of trust you only build one print at a time.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Quality first", desc: "Heidelberg presses + Pantone-matched colour" },
                { label: "On time, every time", desc: "On-time delivery rate: 99.4%" },
                { label: "Fair, transparent pricing", desc: "No hidden costs, no surprise invoices" },
                { label: "Bilingual design support", desc: "Tamil & English typography that respects the script" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold text-ink-900">{item.label}</p>
                    <p className="text-[14px] text-ink-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-10 group inline-flex items-center gap-2 bg-ink-900 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-ink-800 transition-all duration-300"
            >
              Start your project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7 row-span-2 relative h-[420px] rounded-[28px] overflow-hidden bg-ink-100">
                <Image
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80"
                  alt="Offset printing press floor at Raja Ganapathi Offset Bhavani"
                  fill
                  sizes="(min-width: 1024px) 35vw, 70vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-display font-semibold text-[18px] tracking-tight">Press floor</p>
                  <p className="text-[12px] text-white/70">Bhavani, Erode district</p>
                </div>
              </div>
              <div className="col-span-5 h-[200px] rounded-[28px] overflow-hidden bg-ink-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?w=600&q=80"
                  alt="Design studio preparing print-ready artwork and proofs"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 h-[212px] rounded-[28px] overflow-hidden bg-ink-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80"
                  alt="Stationery, letterheads and bill books we print"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-6 -left-4 sm:left-6 glass rounded-2xl shadow-apple-xl p-5 border border-white/40 max-w-[260px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-[13px] font-semibold text-ink-900">4.9</span>
              </div>
              <p className="text-[13px] text-ink-600 leading-snug">
                Based on <strong>200+ verified</strong> Google reviews across Bhavani &amp; Erode.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
