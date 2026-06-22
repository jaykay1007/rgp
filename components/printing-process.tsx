"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { MessageSquare, Settings, Printer, Scissors, CheckCircle, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consult",
    description: "Share your vision via WhatsApp, email or in person. We listen, advise and quote — usually within an hour.",
    icon: MessageSquare,
    color: "from-blue-500/20 to-blue-500/0",
  },
  {
    number: "02",
    title: "Design & Proof",
    description: "Our in-house design team prepares pre-press files, colour proofs and printable PDFs for your approval.",
    icon: Settings,
    color: "from-violet-500/20 to-violet-500/0",
  },
  {
    number: "03",
    title: "Plate & Print",
    description: "CTP plates loaded onto our Heidelberg offset press. CMYK + Pantone, sheet-fed precision.",
    icon: Printer,
    color: "from-rose-500/20 to-rose-500/0",
  },
  {
    number: "04",
    title: "Finish",
    description: "Die-cutting, foiling, embossing, lamination, perfect binding — finished with handcrafted care.",
    icon: Scissors,
    color: "from-amber-500/20 to-amber-500/0",
  },
  {
    number: "05",
    title: "Quality lock",
    description: "Three-stage QA: pre-press, mid-run, and final. Every batch sampled and signed off.",
    icon: CheckCircle,
    color: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Carefully packed in moisture-safe wrap. Door delivery across Erode, Bhavani, Komarapalayam & beyond.",
    icon: Truck,
    color: "from-cyan-500/20 to-cyan-500/0",
  },
] as const

export default function PrintingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Horizontal scroll on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"])

  const introRef = useRef<HTMLDivElement>(null)
  const introInView = useInView(introRef, { once: true, margin: "-100px" })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-ink-900 text-white overflow-hidden"
      aria-label="How we print: our six-step quality process"
      style={{ height: "260vh" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-dark opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 press-grid opacity-30" />

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div ref={introRef} className="container-apple-wide pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-eyebrow uppercase text-cmyk-cyan mb-5">Our process</p>
            <h2 className="font-display font-semibold tracking-[-0.025em] text-[clamp(36px,5vw,68px)] leading-[1.05]">
              Six steps.
              <br />
              <span className="text-gradient-pearl">One signature finish.</span>
            </h2>
            <p className="mt-5 text-[clamp(15px,1.2vw,18px)] text-white/60 max-w-xl leading-[1.5]">
              From the first WhatsApp message to the final box at your doorstep — every print
              passes through the same rigorous, six-stage offset workflow.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrolling track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 px-6 md:px-[calc((100vw-1240px)/2+24px)] will-change-transform"
        >
          {steps.map((step, i) => (
            <article
              key={step.number}
              className="relative flex-none w-[78vw] sm:w-[420px] md:w-[460px] h-[420px] rounded-[28px] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md p-8 flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-auto">
                  <span className="font-mono text-[12px] text-white/40 tracking-wider">
                    STEP {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center backdrop-blur-md">
                    <step.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-[32px] tracking-[-0.02em] leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-[15px] leading-[1.5]">{step.description}</p>
                </div>
              </div>
            </article>
          ))}

          {/* Final card — CTA */}
          <article className="relative flex-none w-[78vw] sm:w-[420px] md:w-[460px] h-[420px] rounded-[28px] overflow-hidden bg-gradient-to-br from-accent/30 via-cmyk-magenta/20 to-cmyk-yellow/10 border border-white/15 backdrop-blur-md p-8 flex flex-col justify-end">
            <p className="text-eyebrow uppercase text-white/70 mb-4">Ready?</p>
            <h3 className="font-display font-semibold text-white text-[32px] tracking-[-0.02em] leading-tight">
              Start your print
              <br />
              project today.
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center w-fit bg-white text-ink-900 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-ink-100 transition-colors"
            >
              Get a Free Quote →
            </a>
          </article>
        </motion.div>

        <div className="container-apple-wide pt-10 relative z-10 hidden md:block">
          <div className="flex items-center justify-between text-[11px] text-white/40 uppercase tracking-wider">
            <span>Scroll to advance</span>
            <span>{steps.length} stages · 3-5 day turnaround</span>
          </div>
        </div>
      </div>
    </section>
  )
}
