"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-rose-50 to-orange-50 rounded-full blur-3xl opacity-40" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-[980px] mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] text-[12px] text-[#1d1d1f] font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            27+ Years of Excellence in Bhavani
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[48px] md:text-[64px] lg:text-[80px] font-semibold text-[#1d1d1f] leading-[1.05] tracking-[-0.03em] mb-6"
        >
          Print that speaks.
          <br />
          <span className="text-gradient-blue">Quality that lasts.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[21px] text-[#86868b] max-w-[600px] mx-auto mb-10 leading-relaxed font-normal"
        >
          Premium offset printing services crafted with precision.
          From business cards to packaging, we bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#services"
            className="group inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white px-8 py-4 rounded-full text-[17px] font-medium hover:bg-[#0077ed] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 text-[#0071e3] px-8 py-4 rounded-full text-[17px] font-medium hover:bg-[#0071e3]/5 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-[2.5rem] blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-apple-xl bg-white">
              <Image
                src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070"
                alt="Premium offset printing press"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass px-6 py-3 rounded-2xl shadow-apple-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">Quality Guaranteed</p>
                  <p className="text-[12px] text-[#86868b]">100% Satisfaction</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass px-6 py-3 rounded-2xl shadow-apple-lg hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">⚡</span>
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">Express Delivery</p>
                  <p className="text-[12px] text-[#86868b]">Quick Turnaround</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[12px] text-[#86868b] font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-[#d2d2d7] flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-[#86868b] rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

