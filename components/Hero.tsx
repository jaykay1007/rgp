"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, ArrowRight, Star, Users, Clock, Award, ShieldCheck, Sparkles } from "lucide-react"

const heroPills = ["Museum-grade finishing", "Eco-certified inks", "Same-day dispatch", "Luxury packaging pods"]

const statHighlights = [
  { icon: Users, value: "15k+", label: "Luxury clients" },
  { icon: Award, value: "27 yrs", label: "Offset mastery" },
  { icon: Clock, value: "24 hr", label: "Express cells" },
  { icon: Star, value: "5.0", label: "Google rated" },
]

const productShots = [
  {
    title: "Couture wedding atelier",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
    spec: "Foil + emboss + velvet stock",
  },
  {
    title: "Textile export folios",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&w=1000&q=80",
    spec: "Pantone-calibrated spreads",
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-28 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -right-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-white/20 to-primary/50 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-secondary/30 to-transparent blur-[120px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10">
        <div className="hero-grid grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="glass-pill inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Raja Ganapathi Press · Bhavani · Erode
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.05]">
                <span className="text-white/90">Royal offset atelier crafting </span>
                <span className="gold-text">museum-grade print experiences</span>
                <span className="text-white/90"> for visionary brands.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                Apple-inspired detailing with Tamil Nadu heritage. We orchestrate couture wedding suites, textile decks, and
                premium packaging with glassmorphic presentation, ISO-audited workflows, and concierge-level project care.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <ShieldCheck className="h-4 w-4 text-secondary" /> Certified production pods
                </div>
                <h2 className="mt-4 text-2xl font-semibold">Neo-offset + luxury finishing</h2>
                <p className="mt-2 text-sm text-white/60">Foil · letterpress · UV · duplex stocks · bespoke dielines</p>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Sparkles className="h-4 w-4 text-secondary" /> Concierge support
                </div>
                <h2 className="mt-4 text-2xl font-semibold">Calibrated luxury at scale</h2>
                <p className="mt-2 text-sm text-white/60">Same-day proofs, Pantone guardians, national logistics</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="gold-border w-full sm:w-auto">
                <Link href="tel:+91999466277" className="gap-2">
                  <Phone className="h-5 w-5 text-secondary" /> Speak to the press director
                </Link>
              </div>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                View living portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroPills.map((pill) => (
                <span key={pill} className="glass-pill text-xs font-semibold text-white/75">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-panel p-6 sm:p-8 space-y-6">
              <div className="relative overflow-hidden rounded-[42px]">
                <Image
                  src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium offset press"
                  width={760}
                  height={520}
                  className="h-[360px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Bhavani flagship floor</p>
                  <span className="glass-pill text-xs font-semibold">ISO 9001:2015</span>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {productShots.map((shot) => (
                  <div key={shot.title} className="glass-card overflow-hidden">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      width={360}
                      height={240}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-white/60">{shot.spec}</p>
                      <p className="text-lg font-semibold text-white mt-2">{shot.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-card absolute -bottom-12 left-1/2 w-[75%] -translate-x-1/2 p-5 text-center"
            >
              <p className="text-sm text-white/60">Trusted across Bhavani · Erode · Komarapalayam</p>
              <p className="text-lg font-semibold text-white">House of couture, textile mills & premium packaging labs</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {statHighlights.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className="mx-auto mb-3 h-6 w-6 text-secondary" />
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
