"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { CONTACT_INFO } from "@/lib/seo-config"

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative py-32 md:py-40 bg-white overflow-hidden"
      aria-label="About Raja Ganapathi Offset, Bhavani"
    >
      <div className="container-apple-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-eyebrow uppercase text-accent mb-5">Since 1997</p>
            <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,72px)] leading-[1.02] text-balance">
              An offset press,
              <span className="text-gradient-blue"> run by the people who print.</span>
            </h2>
            <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5] text-pretty">
              We are an offset press in Bhavani. Families come to us for wedding and
              function cards; shops come for bill books, calendars, notices and labels. You
              deal directly with the people who set the type and run the press.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Quality first", desc: "Multicolour offset, checked sheet by sheet" },
                { label: "A clear delivery date", desc: "We tell you when it will be ready before we start" },
                { label: "Fair, clear pricing", desc: "You know the price before we print" },
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
              <div className="col-span-7 row-span-2 relative h-[420px] rounded-2xl overflow-hidden bg-ink-100">
                <Image
                  src="/images/calendars/daily-sheet-calendar-board-sri-saai-bramma-engineerings.jpg"
                  alt="Daily sheet calendar with a custom multicolour header board printed for an engineering firm"
                  fill
                  sizes="(min-width: 1024px) 35vw, 70vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-display font-semibold text-[18px] tracking-tight">Printed here</p>
                  <p className="text-[12px] text-white/70">Custom daily calendar, Bhavani</p>
                </div>
              </div>
              <div className="col-span-5 h-[200px] rounded-2xl overflow-hidden bg-ink-100 relative">
                <Image
                  src="/images/collections/ear-piercing-ceremony-invitations-tamil.jpg"
                  alt="Tamil ear-piercing ceremony (kathani vizha) invitations in four multicolour designs"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 h-[212px] rounded-2xl overflow-hidden bg-ink-100 relative">
                <Image
                  src="/images/collections/product-label-sticker-tea-stall-classic.jpg"
                  alt="Tamil snack-pack sticker label with shop name, contact numbers and address"
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
                <span className="ml-1.5 text-[13px] font-semibold text-ink-900">5.0</span>
              </div>
              <p className="text-[13px] text-ink-600 leading-snug">
                Rated <strong>5.0 on Google</strong>.{" "}
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Read our reviews
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
