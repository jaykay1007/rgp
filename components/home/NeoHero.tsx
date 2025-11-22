"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Star, Users, BadgeCheck } from "lucide-react"

const heroStats = [
  { label: "Happy clients", value: "15k+" },
  { label: "Jobs shipped", value: "50k" },
  { label: "Avg. rating", value: "5.0" },
]

const signaturePills = [
  "Luxury wedding ateliers",
  "Textile catalog labs",
  "Eco-certified packaging",
  "Same-day express pods",
]

export default function NeoHero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(222,230,244,0.85))]" />
      <div className="absolute -left-24 top-10 hidden lg:block w-[420px] h-[420px] rounded-full bg-gradient-to-br from-white to-primary/10 blur-3xl opacity-70" />
      <div className="absolute right-0 bottom-0 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-secondary/20 to-white blur-3xl opacity-70" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 neo-pill px-6 py-3 text-sm font-semibold text-slate-600"
            >
              <BadgeCheck className="h-4 w-4 text-primary" /> Raja Ganapathi Press • Bhavani · Erode · Komarapalayam
            </motion.span>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Museum-grade offset craftsmanship for tactile brand stories.
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                From couture wedding suites to export-ready textile decks, our calibrated production floors combine neo-neumorphic design thinking with ISO-audited workflows, delivering goosebump-worthy prints every single time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="tel:+919994466277"
                className="neo-card flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-slate-900 hover:-translate-y-1 transition-transform"
              >
                <Phone className="h-5 w-5" /> Speak to press director
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold shadow-lg shadow-primary/25 hover:-translate-y-1 transition-transform"
              >
                View live work <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {signaturePills.map((pill) => (
                <span key={pill} className="neo-pill px-4 py-2 text-sm font-medium text-slate-600">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="neo-card-inset p-4 text-center">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="neo-card overflow-hidden rounded-[40px]">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury offset printing"
                width={720}
                height={900}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="neo-card absolute -bottom-10 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between px-6 py-4"
            >
              <div>
                <p className="text-sm text-slate-500">Trusted by</p>
                <p className="text-lg font-semibold text-slate-900">Bhavani’s couture houses & textile mills</p>
              </div>
              <div className="flex items-center gap-3 text-amber-500">
                <Star className="h-5 w-5 fill-amber-500" /> 5.0
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -top-8 right-0 rounded-full bg-gradient-to-r from-secondary to-primary text-white px-5 py-2 font-semibold"
            >
              27+ Years
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
