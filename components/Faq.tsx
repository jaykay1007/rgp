"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle } from "lucide-react"
import SectionHeading from "./SectionHeading"

const faqs = [
  {
    question: "What printing specialities do you offer?",
    answer:
      "We run multicolour offset, short-run digital, foil, emboss, deboss, UV, screen, numbering and logistics in-house—no third-party delays.",
  },
  {
    question: "How fast can I get my order delivered?",
    answer:
      "Express pods deliver within 24 hours for Bhavani & Erode. Standard dispatch is 3-5 business days including finishing.",
  },
  {
    question: "Can you handle wedding invitation customisations?",
    answer:
      "Absolutely. Choose from handmade paper, velvet boxes, acrylic inserts, tassels, wax seals, multicolour foils and laser sleeves.",
  },
  {
    question: "Do you support eco-friendly materials?",
    answer:
      "Yes—FSC-certified paper, soy inks, water-based coatings and recyclable packaging can be requested for any production volume.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section id="faq" className="relative isolate overflow-hidden bg-gradient-to-b from-[#050b16] via-[#010409] to-[#020716] py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-secondary/10 blur-[140px]" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow={"Quick answers"}
          eyebrowIcon={<HelpCircle className="w-4 h-4" />}
          title={<h2 className="font-display text-4xl md:text-5xl leading-tight">FAQ & production details.</h2>}
          description="Everything you need to know before onboarding Raja Ganapathi Press as your offset partner."
        />

        <div className="mt-16 space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card p-6 cursor-pointer ${isOpen ? "ring-2 ring-secondary" : ""}`}
                onClick={() => toggleIndex(index)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold">{faq.question}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-white/70 mt-3 text-base leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-2xl text-secondary font-light"
                  >
                    +
                  </motion.span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
