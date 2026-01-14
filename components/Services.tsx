"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const services = [
  {
    title: "Business Cards",
    description: "First impressions that last. Premium finishes and precise details.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=80",
    link: "/services/visiting-cards",
    gradient: "from-slate-900 to-slate-700",
  },
  {
    title: "Brochures & Catalogs",
    description: "Tell your story beautifully. Showcase products with elegance.",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&auto=format&fit=crop&q=80",
    link: "/services/brochures",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    title: "Offset Printing",
    description: "High-volume excellence. Consistent quality, every single print.",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=800&auto=format&fit=crop&q=80",
    link: "/services/multicolour-offset-printing",
    gradient: "from-violet-900 to-violet-700",
  },
  {
    title: "Educational Materials",
    description: "Empower learning. School diaries, workbooks, and study guides.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80",
    link: "/services/educational-materials",
    gradient: "from-amber-900 to-amber-700",
  },
  {
    title: "Books & Binding",
    description: "Stories deserve substance. Professional binding, lasting quality.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80",
    link: "/services/book-printing",
    gradient: "from-emerald-900 to-emerald-700",
  },
  {
    title: "Bag Printing",
    description: "Carry your brand. Cotton bags, wedding bags, and festival specials.",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=80",
    link: "/services/bag-printing",
    gradient: "from-rose-900 to-rose-700",
  },
]

export default function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="services"
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
            {t("services.title") || "What we create."}
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
            From concept to completion, we deliver print solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={service.link}
                className="group block relative h-[400px] rounded-3xl overflow-hidden bg-[#f5f5f7] hover-lift"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="text-[24px] font-semibold text-white mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-white/80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[14px] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[#0071e3] text-[17px] font-medium hover:underline"
          >
            View all services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

