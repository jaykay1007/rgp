"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, Eye, Award, Users } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./SectionHeading"

export default function About() {
  const features = [
    { icon: CheckCircle, title: "ISO 9001:2015", desc: "Audited quality, colour profiling & proofing." },
    { icon: Target, title: "On-Time Pods", desc: "Dedicated schedulers for textile & wedding rush jobs." },
    { icon: Eye, title: "Tactile Detailing", desc: "Foil, emboss, UV & laser finishing under one roof." },
    { icon: Award, title: "27+ Years", desc: "Family-run craftsmanship trusted across Western Tamil Nadu." }
  ]

  return (
    <section id="about" className="relative isolate overflow-hidden bg-gradient-to-b from-[#01040c] via-[#040918]/80 to-[#010409] py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Since 1997 · Raja Ganapathi Press Legacy"
            title={<h2 className="font-display text-4xl md:text-5xl leading-tight">Heritage offset atelier marrying Tamil precision with concierge craft.</h2>}
            description="Generations of textile exporters, jewellery houses, and wedding planners rely on our calibrated production floors for impeccable colour consistency, tactile storytelling, and deadline discipline."
          />
        </motion.div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="glass-panel p-10">
              <h3 className="text-2xl font-semibold">Bhavani’s most complete print ecosystem</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Offset, digital, finishing, and logistics teams operate under one roof to compress proof-to-delivery cycles.
                Our colour lab fine tunes Pantone & metallic shades for textile swatches, while the wedding atelier pilots
                bespoke suites with luxury substrates.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="glass-card p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Annual capacity</p>
                  <p className="mt-2 text-3xl font-semibold">50k+ jobs</p>
                  <p className="text-xs text-white/60 mt-1">Catalogues · Packaging · Stationery</p>
                </div>
                <div className="glass-card p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Regions served</p>
                  <p className="mt-2 text-3xl font-semibold">5 districts</p>
                  <p className="text-xs text-white/60 mt-1">Bhavani · Erode · Gobi · Anthiyur · Komarapalayam</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card p-6 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-white/70">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel overflow-hidden rounded-[48px]">
              <Image
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
                alt="Craftsmen aligning offset machines"
                width={720}
                height={900}
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-10 left-1/2 flex w-[85%] -translate-x-1/2 flex-col gap-4 p-6 text-center sm:text-left sm:flex-row sm:items-center">
              <div className="flex-1">
                <p className="text-sm text-white/60">Relationship-first approach</p>
                <p className="text-xl font-semibold text-white">15,000+ clients retained</p>
                <p className="text-xs text-white/60">Textiles · F&B · Education · Wedding Houses</p>
              </div>
              <div className="glass-pill text-sm font-semibold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" /> Dedicated account managers
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
