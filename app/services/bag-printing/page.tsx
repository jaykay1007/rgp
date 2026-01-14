"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, Phone, MessageCircle, ArrowUpRight } from "lucide-react"

const bagTypes = [
  {
    name: "Wedding & Engagement Bags",
    description: "Elegant cotton and fabric bags for your special day. Custom designs with names, dates, and traditional motifs.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Festival & Pooja Bags",
    description: "Auspicious bags for Diwali, Pongal, and temple events. Traditional prints with vibrant colors.",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Cotton Shopping Bags",
    description: "Eco-friendly reusable bags for retail stores and supermarkets. Durable and customizable.",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Katta Pai (Jute Bags)",
    description: "Traditional jute bags perfect for groceries, gifts, and everyday use. Sturdy and sustainable.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80",
  },
]

const features = [
  "Custom sizes from small gift bags to large shopping bags",
  "Multiple fabric options: Cotton, Jute, Canvas, Non-woven",
  "Full-color printing with your brand or design",
  "Eco-friendly and reusable materials",
  "Bulk orders with competitive pricing",
  "Fast turnaround for urgent requirements",
]

export default function BagPrintingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const contentRef = useRef<HTMLDivElement>(null)
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <div ref={heroRef} className="relative h-[70vh] min-h-[500px] bg-[#1d1d1f] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1600&auto=format&fit=crop&q=80"
          alt="Bag Printing Services"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-transparent to-transparent" />
        
        <div className="relative h-full max-w-[980px] mx-auto px-6 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[14px] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <h1 className="text-[48px] md:text-[64px] font-semibold text-white leading-tight tracking-[-0.02em] mb-4">
              Bag Printing
            </h1>
            <p className="text-[21px] text-white/70 max-w-[600px] leading-relaxed">
              Carry your brand, celebrate your moments. Custom printed bags for weddings, festivals, and everyday elegance.
            </p>
          </motion.div>
        </div>
      </div>

      <div ref={contentRef} className="max-w-[980px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight mb-6">
            Bags for every occasion.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed max-w-[700px]">
            From traditional wedding return gifts to modern eco-friendly shopping bags, we print on a variety of materials with stunning quality. Perfect for personal celebrations and business branding alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {bagTypes.map((bag, index) => (
            <motion.div
              key={bag.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] rounded-3xl overflow-hidden"
            >
              <Image
                src={bag.image}
                alt={bag.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-[20px] font-semibold text-white mb-2">{bag.name}</h3>
                <p className="text-[14px] text-white/70 leading-relaxed">{bag.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight mb-8">
            What we offer.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0071e3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[15px] text-[#1d1d1f]">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#1d1d1f] rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-[28px] font-semibold text-white tracking-tight mb-4">
            Ready to order?
          </h2>
          <p className="text-[17px] text-white/60 mb-8 max-w-[500px] mx-auto">
            Get custom bags for your wedding, business, or event. Contact us for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919994466277?text=Hi!%20I'm%20interested%20in%20bag%20printing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-[17px] font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919994466277"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#1d1d1f] px-8 py-4 rounded-full text-[17px] font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
