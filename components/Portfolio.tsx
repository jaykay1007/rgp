"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  
  const categories = [
    { id: "all", label: "All Works" },
    { id: "wedding", label: "Wedding Couture" },
    { id: "business", label: "Corporate" },
    { id: "packaging", label: "Packaging" },
    { id: "marketing", label: "Marketing" }
  ]

  const projects = [
    {
      id: 1,
      title: "Gold Foil Wedding Suite",
      category: "wedding",
      image: "https://images.pexels.com/photos/772865/pexels-photo-772865.jpeg",
      description: "Hand-deckled wedding invite with metallic foil & embossing",
      location: "Erode"
    },
    {
      id: 2,
      title: "Luxury Business Collateral",
      category: "business",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      description: "Multi-piece stationery for textile export house",
      location: "Bhavani"
    },
    {
      id: 3,
      title: "Artisanal Packaging",
      category: "packaging",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
      description: "Rigid boxes with velvet inlay & spot UV",
      location: "Komarapalayam"
    },
    {
      id: 4,
      title: "Immersive Brochure",
      category: "marketing",
      image: "https://images.pexels.com/photos/6483584/pexels-photo-6483584.jpeg",
      description: "Textile collection book with fold-out spreads",
      location: "Gobi"
    },
    {
      id: 5,
      title: "Heritage Wedding Cards",
      category: "wedding",
      image: "https://images.pexels.com/photos/2879823/pexels-photo-2879823.jpeg",
      description: "Temple-inspired invite with laser cut sleeves",
      location: "Bhavani"
    },
    {
      id: 6,
      title: "Premium Visiting Cards",
      category: "business",
      image: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg",
      description: "Edge-gilded duplex cards for boutique hotel",
      location: "Anthiyur"
    },
    {
      id: 7,
      title: "Gourmet Packaging",
      category: "packaging",
      image: "https://images.pexels.com/photos/1857562/pexels-photo-1857562.jpeg",
      description: "Food-safe mono cartons with custom dielines",
      location: "Erode"
    },
    {
      id: 8,
      title: "Experiential Posters",
      category: "marketing",
      image: "https://images.pexels.com/photos/569618/pexels-photo-569618.jpeg",
      description: "Backlit flex campaign for retail launch",
      location: "Komarapalayam"
    }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative isolate overflow-hidden bg-gradient-to-b from-[#01040c] via-[#020815] to-[#050b16] py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#7fe6ff]/10 blur-[140px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Living portfolio"
            title={<h2 className="font-display text-4xl md:text-5xl leading-tight">A curated archive of museum-grade print stories.</h2>}
            description="Every deployment is calibration-logged with makeready notes, ensuring repeatable brilliance for Bhavani, Erode, Komarapalayam, and exports beyond."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`glass-pill px-6 py-2 text-[0.65rem] font-semibold tracking-[0.3em] uppercase transition-all ${
                activeFilter === cat.id ? "bg-white/25 text-white shadow-glow" : "text-white/70 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/80" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-5">
                    <span className="glass-pill text-[0.6rem] uppercase tracking-[0.35em] text-white">{project.category}</span>
                    <ArrowRight className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{project.location}</p>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/75">{project.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-panel px-8 py-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">Storyboarding sessions</p>
          <h3 className="mt-4 text-3xl font-semibold">Need to choreograph a tactile launch film?</h3>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Walk through our archives with a concierge lead; we map substrates, finishes, and logistics to your release calendar,
            then deliver cinematic proofs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white mt-6"
          >
            Start your storyboard
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
