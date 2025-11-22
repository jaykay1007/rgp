"use client"

import { Printer, Users, Clock, Settings, DollarSign, Heart } from "lucide-react"
import AnimatedText from "./animated-text"

const features = [
  {
    title: "Calibration obsessive",
    description: "ISO-audited colour labs keep Pantone + metallic shades honest through every rerun.",
    icon: Printer,
  },
  {
    title: "Dedicated pods",
    description: "Wedding, textile, and packaging squads operate like mini studios with concierge PMs.",
    icon: Users,
  },
  {
    title: "Rapid orchestration",
    description: "24-hour express queue, same-day proofs, and realtime job boards for total visibility.",
    icon: Clock,
  },
  {
    title: "Tailored engineering",
    description: "Dielines, substrates, finishing stacks, and logistics are prototyped around your launch.",
    icon: Settings,
  },
  {
    title: "Value intelligence",
    description: "Volume tiers, hybrid press planning, and waste reduction protect your budgets.",
    icon: DollarSign,
  },
  {
    title: "Client love",
    description: "House accounts, WhatsApp war rooms, and post-launch audits keep you calm.",
    icon: Heart,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010409] via-[#050b16] to-[#0b1124]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <div className="container relative z-10 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText
            text="Why partners stay with Raja Ganapathi Press"
            className="font-display text-3xl sm:text-4xl md:text-5xl"
          />
          <p className="mt-4 text-white/70">
            Boutique service layers, obsessive calibration, and Tamil Nadu-rooted hospitality engineered for luxury brands,
            couture weddings, and export powerhouses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  {feature.icon && <feature.icon className="h-6 w-6 text-secondary" />}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

