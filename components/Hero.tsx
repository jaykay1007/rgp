"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import BubbleAnimation from "./bubble-animation"
import AvailabilityIndicator from "./AvailabilityIndicator"

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20 overflow-hidden">
      <BubbleAnimation />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="text-primary">Premium</span> Printing <br />
                for Your <span className="text-secondary">Business</span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-700 mb-8 max-w-lg"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Bringing your ideas to life with vibrant colors and exceptional quality. Your trusted printing partner
                for all your needs.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  Our Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-white px-6 py-3 font-medium text-primary hover:bg-primary/5 transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070"
                alt="Modern offset printing press"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <AvailabilityIndicator
                  businessHours={{
                    monToSat: [
                      { start: "09:30", end: "14:00" },
                      { start: "16:00", end: "20:00" },
                    ],
                    sunday: "closed",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

