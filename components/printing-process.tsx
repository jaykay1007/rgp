"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Settings, Printer, Scissors, CheckCircle, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consult",
    description: "Share your vision. We listen, advise, and plan.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description: "Perfect layouts, colors, and pre-press prep.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Print",
    description: "Precision offset printing with vibrant colors.",
    icon: Printer,
  },
  {
    number: "04",
    title: "Finish",
    description: "Cut, fold, bind, laminate to perfection.",
    icon: Scissors,
  },
  {
    number: "05",
    title: "Inspect",
    description: "Rigorous quality checks. Every piece matters.",
    icon: CheckCircle,
  },
  {
    number: "06",
    title: "Deliver",
    description: "Careful packaging. On-time delivery.",
    icon: Truck,
  },
]

export default function PrintingProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-32 bg-white"
    >
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[48px] md:text-[56px] font-semibold text-[#1d1d1f] leading-tight tracking-[-0.02em] mb-6">
            How we work.
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
            A seamless process from concept to delivery. Six steps to perfection.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#d2d2d7] -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative text-center"
              >
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f5f5f7] flex items-center justify-center group-hover:bg-[#0071e3]/10 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-[#1d1d1f]" strokeWidth={1.5} />
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#0071e3] tracking-wider mb-2 block">
                  {step.number}
                </span>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#86868b] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#f5f5f7]">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[14px] text-[#1d1d1f] font-medium">
              Average turnaround: 3-5 business days
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

