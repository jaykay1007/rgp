"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Let's create together.
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch for a free quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#f5f5f7] rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <a
                href="https://wa.me/919994466277?text=Hi!%20I'm%20interested%20in%20your%20printing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[17px] font-medium text-[#1d1d1f]">WhatsApp</p>
                  <p className="text-[14px] text-[#86868b]">Quick response, anytime</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-[#1d1d1f] transition-colors" />
              </a>

              <a
                href="tel:+919994466277"
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0071e3] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[17px] font-medium text-[#1d1d1f]">+91 99944 66277</p>
                  <p className="text-[14px] text-[#86868b]">Call us directly</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-[#1d1d1f] transition-colors" />
              </a>

              <a
                href="mailto:rgpbvn@gmail.com"
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1d1d1f] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[17px] font-medium text-[#1d1d1f]">rgpbvn@gmail.com</p>
                  <p className="text-[14px] text-[#86868b]">Send us an email</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-[#1d1d1f] transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#1d1d1f] text-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-[24px] font-semibold mb-8 tracking-tight">
              Visit Us
            </h3>

            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[17px] font-medium mb-1">Address</p>
                  <p className="text-[15px] text-white/60 leading-relaxed">
                    24 Palani Andavar Kovil Street,<br />
                    Bhavani - 638301<br />
                    (Opposite CSI School)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[17px] font-medium mb-1">Business Hours</p>
                  <p className="text-[15px] text-white/60 leading-relaxed">
                    Monday – Saturday<br />
                    9:30 AM – 8:00 PM<br />
                    <span className="text-white/40">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500706464165!2d77.6826523!3d11.4437407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969e298955acf%3A0x4ab7994fb3d4c7e0!2sRajaganapathi%20Offset%20printers!5e0!3m2!1sen!2sin!4v1740914817996!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) opacity(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raja Ganapathi Offset location"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-[14px] text-[#86868b]">
            Serving Bhavani, Erode, Komarapalayam, Anthiyur, Gobi and surrounding areas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
