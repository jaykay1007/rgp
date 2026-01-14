"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
  {
    quote: "Exceptional quality and attention to detail. Our wedding cards were absolutely stunning.",
    author: "Priya & Kumar",
    role: "Wedding Clients",
  },
  {
    quote: "Fast turnaround without compromising quality. Our go-to printer for all business needs.",
    author: "Raga Textiles",
    role: "Erode",
  },
  {
    quote: "Professional service from start to finish. Highly recommend for all printing needs.",
    author: "Prima",
    role: "Bhavani",
  },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-32 bg-[#1d1d1f] text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block text-[#0071e3] text-[14px] font-medium tracking-wide uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-[40px] md:text-[48px] font-semibold leading-tight tracking-[-0.02em] mb-6">
              Trusted by businesses across Tamil Nadu.
            </h2>
            <p className="text-[18px] text-white/60 leading-relaxed mb-8">
              For over 27 years, we've been the preferred printing partner for businesses in Bhavani, Erode, Komarapalayam, and beyond. Our commitment to quality and service speaks through every project.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { label: "Quality First", desc: "Every print meets our exacting standards" },
                { label: "On-Time Delivery", desc: "We respect your deadlines, always" },
                { label: "Fair Pricing", desc: "Premium quality at competitive rates" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-medium text-white">{item.label}</p>
                    <p className="text-[14px] text-white/50">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-[#1d1d1f] px-8 py-4 rounded-full text-[17px] font-medium hover:bg-white/90 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative overflow-hidden rounded-3xl bg-[#2d2d2f]">
                <Image
                  src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070"
                  alt="Our printing facility"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover opacity-80"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-[#2d2d2f] rounded-2xl p-6"
                >
                  <Quote className="w-5 h-5 text-[#0071e3] mb-3" />
                  <p className="text-[15px] text-white/80 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-[14px] font-medium text-white">{testimonial.author}</p>
                    <p className="text-[12px] text-white/40">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

