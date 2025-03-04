"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+919994466277",
    action: "https://wa.me/919994466277",
    color: "bg-green-500",
  },
  { icon: Phone, label: "Call", value: "+919994466277", action: "tel:+919994466277", color: "bg-blue-500" },
  {
    icon: Mail,
    label: "Email",
    value: "rgpbvn@gmail.com",
    action: "mailto:rgpbvn@gmail.com",
    color: "bg-red-500",
  },
]

const contactInfo = [
  { icon: MapPin, label: "Address", value: "24 Palani Andavar Kovil Street, Bhavani. (638301). (CSI School opposite)" },
  { icon: Clock, label: "Hours", value: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed" },
]

export default function Contact() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveMethod((prev) => (prev + 1) % contactMethods.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  useEffect(() => {
    const interval = setInterval(() => {
      const testimonials = document.querySelectorAll(".relative.overflow-hidden > div")
      testimonials.forEach((testimonial, index) => {
        const newIndex = (index - 1 + testimonials.length) % testimonials.length
        ;(testimonial as HTMLElement).style.transform = `translateX(${newIndex * 100}%)`
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="relative h-64 mb-8">
              <AnimatePresence>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className={`absolute inset-0 flex flex-col items-center justify-center ${method.color} text-white rounded-xl p-6 ${
                      index === activeMethod ? "z-10" : "z-0"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: index === activeMethod ? 1 : 0, scale: index === activeMethod ? 1 : 0.8 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <method.icon size={48} className="mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{method.label}</h4>
                    <p className="text-center mb-4">{method.value}</p>
                    <a
                      href={method.action}
                      target={method.label === "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      {method.label === "WhatsApp" ? "Chat Now" : method.label === "Call" ? "Call Now" : "Send Email"}
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex-grow"></div>
            <div className="flex justify-center space-x-2">
              {contactMethods.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeMethod ? "bg-primary" : "bg-gray-300"
                  } transition-colors`}
                  onClick={() => setActiveMethod(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <info.icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">{info.label}</h4>
                    <p className="text-gray-300 whitespace-pre-line">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-xl overflow-hidden">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500706464165!2d77.6826523!3d11.4437407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969e298955acf%3A0x4ab7994fb3d4c7e0!2sRajaganapathi%20Offset%20printers!5e0!3m2!1sen!2sin!4v1740914817996!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

