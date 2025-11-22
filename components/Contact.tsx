"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+919994466277",
    action: "https://wa.me/919994466277",
    color: "bg-green-500",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+919994466277",
    action: "tel:+919994466277",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rgpbvn@gmail.com",
    action: "mailto:rgpbvn@gmail.com",
    color: "bg-red-500",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "24 Palani Andavar Kovil Street, Bhavani. (638301). (CSI School opposite)",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed",
  },
];

export default function Contact() {
  const [activeMethod, setActiveMethod] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveMethod((prev) => (prev + 1) % contactMethods.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010409] via-[#030b16] to-[#040918]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <div className="container relative z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display text-center"
        >
          Concierge support that actually answers.
        </motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
          Whether you need an urgent proof, dieline help, or a factory walk-through, our team is a call, chat, or visit away.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 flex flex-col">
            <h3 className="text-2xl font-semibold">Talk to us</h3>
            <p className="mt-2 text-white/70">Cycle through your preferred channel or tap the dots to lock one in.</p>
            <div className="relative h-64 mt-8">
              <AnimatePresence>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className={`glass-card absolute inset-0 flex flex-col items-center justify-center gap-3 text-center ${
                      index === activeMethod ? "z-10" : "z-0"
                    }`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                      opacity: index === activeMethod ? 1 : 0,
                      scale: index === activeMethod ? 1 : 0.85,
                    }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.5 }}
                  >
                    <method.icon size={48} className="text-secondary" />
                    <h4 className="text-xl font-semibold">{method.label}</h4>
                    <p className="text-white/70">{method.value}</p>
                    <a
                      href={method.action}
                      target={method.label === "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="gold-border w-auto"
                    >
                      <span>{method.label === "WhatsApp" ? "Chat now" : method.label === "Call" ? "Call now" : "Send email"}</span>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="mt-6 flex justify-center space-x-2">
              {contactMethods.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeMethod ? "bg-secondary" : "bg-white/30"}`}
                  onClick={() => setActiveMethod(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold">Visit the atelier</h3>
              <p className="mt-2 text-white/70">Walk-ins welcome, but concierge appointments get priority floors access.</p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <info.icon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">{info.label}</h4>
                    <p className="text-white/70 whitespace-pre-line">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500706464165!2d77.6826523!3d11.4437407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969e298955acf%3A0x4ab7994fb3d4c7e0!2sRajaganapathi%20Offset%20printers!5e0!3m2!1sen!2sin!4v1740914817996!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
