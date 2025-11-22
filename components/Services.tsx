"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Printer, CreditCard, BookOpen, Package, FileText, Image as ImageIcon, Phone } from "lucide-react"
import SectionHeading from "./SectionHeading"

const services = [
  {
    title: "Offset Printing",
    description: "Premium multicolour offset printing for catalogues, magazines and textile collateral with pin-point Pantone accuracy.",
    icon: Printer,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
    color: "from-blue-500 to-cyan-500",
    link: "/services/multicolour-offset-printing",
  },
  {
    title: "Wedding Invitations",
    description: "Luxury letterpress, foil and emboss suites for contemporary & traditional South Indian weddings.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1508717098854-2ca5c56d1524?auto=format&fit=crop&w=900&q=80",
    color: "from-pink-500 to-rose-500",
    link: "/services/wedding-invitations",
  },
  {
    title: "Visiting Cards",
    description: "Edge-gilded, textured and recycled cards that leave a lasting impression at every meeting.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    color: "from-purple-500 to-indigo-500",
    link: "/services/visiting-cards",
  },
  {
    title: "Brochures & Catalogs",
    description: "Lookbooks and product manuals with soft-touch lamination, UV highlights and smart folds.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?auto=format&fit=crop&w=900&q=80",
    color: "from-green-500 to-emerald-500",
    link: "/services/brochures",
  },
  {
    title: "Product Packaging",
    description: "Rigid, mono-cartons and food-safe sleeves engineered for durability and premium shelf presence.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=900&q=80",
    color: "from-orange-500 to-red-500",
    link: "/services/packaging-printing",
  },
  {
    title: "Posters & Banners",
    description: "Large-format eco-solvent prints, backlit displays and outdoor media that command attention.",
    icon: ImageIcon,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    color: "from-yellow-500 to-orange-500",
    link: "/services/book-printing",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-gradient-to-b from-[#01040c] via-[#030a1a] to-[#050b16] py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] opacity-80" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <SectionHeading
            eyebrow="Bespoke print intelligence"
            title={<h2 className="font-display text-4xl md:text-5xl leading-tight">Signature programs engineered for couture weddings, export brands & luxury packaging labs.</h2>}
            description="Every service pod is ISO-audited, colour-calibrated, and concierge managed so your story unfurls with the kind of restraint and brilliance you expect from world-class ateliers."
          />
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-card group flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-[32px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640}
                  height={420}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold">
                  <span className="glass-pill bg-white/20 text-white">{service.title}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-sm">
                  <div className="inline-flex items-center gap-2 text-white/80">
                    <service.icon className="h-5 w-5 text-secondary" />
                    Crafted pod
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                  >
                    Discover <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-white/70 flex-1 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="glass-pill">Pantone guardians</span>
                  <span className="glass-pill">Eco inks</span>
                  <span className="glass-pill">Nationwide logistics</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-panel px-8 py-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">Concierge onboarding</p>
          <h3 className="mt-4 text-3xl font-semibold">Need to architect a bespoke production pipeline?</h3>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Pair with our pre-press strategists for dieline engineering, museum-grade proofs, and nationwide fulfilment plans
            that keep your launch calendar calm.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="gold-border w-full sm:w-auto">
              <Link href="tel:+919994466277" className="gap-3">
                <Phone className="h-5 w-5 text-secondary" /> Speak now
              </Link>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              Book a discovery call <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

