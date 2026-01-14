"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Printer, Layers, Palette, Sparkles, Leaf, Zap } from "lucide-react"

const specialties = [
  {
    title: "High-Resolution",
    description: "Crystal-clear output at 2400 DPI",
    icon: Printer,
  },
  {
    title: "Premium Papers",
    description: "Art papers to luxury cardstock",
    icon: Layers,
  },
  {
    title: "Color Precision",
    description: "Pantone-matched perfection",
    icon: Palette,
  },
  {
    title: "Premium Finishes",
    description: "Embossing, foiling, spot UV",
    icon: Sparkles,
  },
  {
    title: "Eco-Conscious",
    description: "Sustainable materials & inks",
    icon: Leaf,
  },
  {
    title: "Express Delivery",
    description: "24-48 hour turnaround",
    icon: Zap,
  },
]

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="py-32 bg-[#f5f5f7]"
    >
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[48px] md:text-[56px] font-semibold text-[#1d1d1f] leading-tight tracking-[-0.02em] mb-6">
            Expertise that shows.
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
            Every detail matters. Our capabilities ensure your prints stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 hover-lift cursor-default"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center group-hover:bg-[#0071e3]/10 transition-colors duration-300">
                  <specialty.icon className="w-6 h-6 text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-1 tracking-tight">
                {specialty.title}
              </h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-white shadow-apple-md">
            <div className="text-center">
              <p className="text-[32px] font-semibold text-[#1d1d1f] tracking-tight">27+</p>
              <p className="text-[12px] text-[#86868b] uppercase tracking-wider">Years</p>
            </div>
            <div className="w-px h-12 bg-[#d2d2d7]" />
            <div className="text-center">
              <p className="text-[32px] font-semibold text-[#1d1d1f] tracking-tight">50K+</p>
              <p className="text-[12px] text-[#86868b] uppercase tracking-wider">Projects</p>
            </div>
            <div className="w-px h-12 bg-[#d2d2d7]" />
            <div className="text-center">
              <p className="text-[32px] font-semibold text-[#1d1d1f] tracking-tight">100%</p>
              <p className="text-[12px] text-[#86868b] uppercase tracking-wider">Quality</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

