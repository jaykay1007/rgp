"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-40 bg-ink-100 overflow-hidden"
      aria-label="Contact Raja Ganapathi Offset Printers Bhavani"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-accent/10 ink-dot" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cmyk-magenta/10 ink-dot" />
      </div>

      <div className="container-apple-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-eyebrow uppercase text-accent mb-5">Let's print together</p>
          <h2 className="font-display font-semibold text-ink-900 tracking-[-0.025em] text-[clamp(40px,6vw,72px)] leading-[1.02] text-balance">
            Bring your idea.
            <br />
            <span className="text-gradient-blue">We'll bring it to life.</span>
          </h2>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-ink-500 leading-[1.5]">
            Free quote in under an hour. WhatsApp, call, or visit our press floor in Bhavani.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-apple-md">
              <h3 className="font-display font-semibold text-ink-900 text-[24px] tracking-tight mb-2">
                Choose how to reach us
              </h3>
              <p className="text-[14px] text-ink-500 mb-8">
                We reply within minutes during business hours (9:30 AM – 8 PM, Mon–Sat).
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919994466277?text=Hi%20Raja%20Ganapathi%20Offset%2C%20I%27d%20like%20a%20printing%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-ink-50 hover:bg-ink-100 rounded-2xl transition-all border border-ink-200"
                  aria-label="WhatsApp Raja Ganapathi Offset"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-apple-sm">
                    <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-ink-900">WhatsApp</p>
                    <p className="text-[13px] text-ink-500">Send a photo or PDF, get a quote</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800 group-hover:rotate-12 transition-all" />
                </a>

                <a
                  href="tel:+919994466277"
                  className="group flex items-center gap-4 p-5 bg-ink-50 hover:bg-ink-100 rounded-2xl transition-all border border-ink-200"
                  aria-label="Call Raja Ganapathi Offset Press"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-apple-sm">
                    <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-ink-900">+91 99944 66277</p>
                    <p className="text-[13px] text-ink-500">Speak with our team directly</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800 group-hover:rotate-12 transition-all" />
                </a>

                <a
                  href="mailto:rgpbvn@gmail.com?subject=Printing%20quote%20request"
                  className="group flex items-center gap-4 p-5 bg-ink-50 hover:bg-ink-100 rounded-2xl transition-all border border-ink-200"
                  aria-label="Email Raja Ganapathi Offset"
                >
                  <div className="w-12 h-12 rounded-2xl bg-ink-900 flex items-center justify-center shadow-apple-sm">
                    <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-ink-900">rgpbvn@gmail.com</p>
                    <p className="text-[13px] text-ink-500">For detailed briefs and tenders</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-ink-800 group-hover:rotate-12 transition-all" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-ink-200">
                <h4 className="text-[12px] font-semibold text-ink-700 uppercase tracking-wider mb-4">
                  Areas we serve
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bhavani",
                    "Erode",
                    "Komarapalayam",
                    "Anthiyur",
                    "Gobi",
                    "Sathyamangalam",
                    "Perundurai",
                    "Moorodu",
                  ].map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-full bg-ink-100 border border-ink-200 text-[12px] text-ink-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-ink-900 text-white rounded-[28px] p-8 md:p-10 h-full flex flex-col">
              <h3 className="font-display font-semibold text-[24px] tracking-tight mb-8">
                Visit our press
              </h3>

              <div className="space-y-7 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold mb-1">Address</p>
                    <p className="text-[14px] text-white/60 leading-relaxed">
                      24 Palani Andavar Kovil Street,
                      <br />
                      Bhavani — 638301,
                      <br />
                      Erode District, Tamil Nadu
                    </p>
                    <a
                      href="https://maps.app.goo.gl/7bUZMaUAAN2VSYibA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[12px] text-accent hover:underline"
                    >
                      Open in Google Maps <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold mb-1">Business hours</p>
                    <p className="text-[14px] text-white/60 leading-relaxed">
                      Mon – Sat: 9:30 AM – 2 PM &amp; 4 – 8 PM
                      <br />
                      <span className="text-white/40">Sunday: closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden mt-auto border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500706464165!2d77.6826523!3d11.4437407!2m3!1f0!2f0!3f0!3m2!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969e298955acf%3A0x4ab7994fb3d4c7e0!2sRajaganapathi%20Offset%20printers!5e0!3m2!1sen!2sin!4v1740914817996!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.1) opacity(0.85)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raja Ganapathi Offset Press location in Bhavani Erode"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
