"use client"

import { motion } from "framer-motion"
import { FileText, Palette, Printer, Package, Truck, CheckCircle } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: "Immersion call",
      description: "Briefing, sample decoding, and feasibility grid",
    },
    {
      icon: Palette,
      title: "Design lab",
      description: "Proofing, dieline builds, and colour calibrations",
    },
    {
      icon: Printer,
      title: "Press orchestration",
      description: "Offset, digital, and finishing pods sequenced",
    },
    {
      icon: Package,
      title: "Finishing atelier",
      description: "Foil, emboss, UV, binding, and kitting",
    },
    {
      icon: CheckCircle,
      title: "QC vault",
      description: "Pantone guardians + tactile inspection",
    },
    {
      icon: Truck,
      title: "Logistics concierge",
      description: "Doorstep delivery & install coordination",
    },
  ]

  return (
    <section id="process" className="relative isolate overflow-hidden bg-gradient-to-b from-[#01040c] via-[#030a17] to-[#050b16] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Process architecture"
            title={<h2 className="font-display text-4xl md:text-5xl leading-tight">From immersion to install in six calm steps.</h2>}
            description="Every workflow is logged, timestamped, and concierge-supervised so your launches stay predictable even when timelines compress."
          />
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Step {index + 1}</p>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {steps.slice(3).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Step {index + 4}</p>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel p-8"
        >
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <p className="text-3xl font-semibold">24 hrs</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Express pods</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Pantone fidelity</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">5 cities</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Concierge delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
