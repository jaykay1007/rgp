"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { FAQ_DATA } from "@/lib/seo-config"

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-32 md:py-40 bg-ink-50 overflow-hidden"
      aria-label="Frequently asked questions about offset printing in Bhavani Erode"
    >
      <div className="container-apple-wide max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-eyebrow uppercase text-accent mb-5">FAQ</p>
          <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(36px,5vw,64px)] leading-[1.05] text-balance">
            Questions, answered.
          </h2>
          <p className="mt-5 text-[17px] text-ink-500 max-w-2xl mx-auto">
            Everything you need to know before printing with us. Still curious?{" "}
            <a href="#contact" className="text-accent hover:underline">
              Reach out
            </a>
            .
          </p>
        </motion.div>

        <div className="divide-y divide-ink-200 border-y border-ink-200">
          {FAQ_DATA.map((q, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[17px] md:text-[20px] font-display font-semibold text-ink-900 tracking-[-0.01em] group-hover:text-accent transition-colors">
                    {q.question}
                  </h3>
                  <span
                    className={`mt-1 w-7 h-7 rounded-full bg-ink-100 border border-ink-200 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-45 bg-ink-900 border-ink-900" : ""
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-ink-700"}`}
                      strokeWidth={2}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[15px] md:text-[16px] text-ink-600 leading-[1.6]">
                        {q.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
