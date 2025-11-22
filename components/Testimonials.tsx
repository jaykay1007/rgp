"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "Bhavani",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "Raja Ganapathi Offset has been our printing partner for 5 years. Their quality and service are unmatched in Bhavani. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Wedding Planner",
      location: "Erode",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "The wedding invitations they created were absolutely stunning! The attention to detail and quality of printing exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "Textile Exporter",
      location: "Komarapalayam",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      content: "Professional service and excellent quality catalogs for our textile business. They always deliver on time, even for bulk orders.",
      rating: 5
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      role: "Shop Owner",
      location: "Anthiyur",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      content: "Best printing press in the area! They handle all our packaging and marketing material needs with great prices and quality.",
      rating: 5
    },
    {
      id: 5,
      name: "Suresh Babu",
      role: "Event Manager",
      location: "Gobi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      content: "Raja Ganapathi Offset is our go-to for all event printing needs. Their flex banners and posters are top-notch quality.",
      rating: 5
    }
  ]

  return (
    <section className="relative overflow-hidden py-28 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010409] via-[#050b16] to-[#0f1729]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_60%)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="glass-pill inline-flex items-center gap-2 text-xs font-semibold tracking-[0.4em] text-white/70">
            <span className="w-2 h-2 rounded-full bg-secondary" /> Patron stories
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
            Whispered praise from couture houses & textile labs.
          </h2>
          <p className="mt-4 text-white/70">
            Wedding directors, export CEOs, and event architects trust our atelier for concierge communication, obsessive QA, and
            deliveries that land calm.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12"
          >
            <Quote className="w-12 h-12 text-secondary/40 mb-6" />
            <p className="text-xl md:text-2xl text-white/85 mb-8 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-white/60">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary" fill="#D9B351" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-full border border-white/15 transition-all ${
                activeIndex === index ? "ring-2 ring-secondary" : "hover:border-white/40"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16 object-cover"
              />
              {activeIndex === index && <div className="absolute inset-0 bg-secondary/20" />}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8"
        >
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-semibold">15k+</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Clients</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">50k+</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Jobs shipped</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">5.0</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Google rated</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">27 yrs</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Legacy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
