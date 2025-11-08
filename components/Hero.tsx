"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, Star, Users, Clock, Award, Printer } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  
  const services = [
    "Premium Offset Printing",
    "Wedding Invitations", 
    "Business Cards",
    "Brochures & Catalogs",
    "Packaging Solutions",
    "Digital Printing"
  ]

  const stats = [
    { icon: Users, value: "15,000+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, value: "27+", label: "Years Experience", color: "text-purple-600" },
    { icon: Clock, value: "24hr", label: "Express Service", color: "text-green-600" },
    { icon: Star, value: "5★", label: "Google Rating", color: "text-yellow-500" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z' fill='%23000000'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -100, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full text-sm font-semibold text-amber-700">
                ⭐ Premium Quality Printing Since 1997
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                Raja Ganapathi
              </span>
              <br />
              <span className="text-3xl lg:text-5xl text-gray-700">Offset Printers</span>
            </motion.h1>

            {/* Dynamic Service Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 h-16"
            >
              <p className="text-xl text-gray-600">
                Expert in{" "}
                <motion.span
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  {services[currentServiceIndex]}
                </motion.span>
              </p>
              <p className="text-lg text-gray-500 mt-2">Serving Bhavani, Erode & Surrounding Areas</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="tel:+919994466277"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: 99944 66277
                </span>
              </Link>
              
              <Link
                href="#services"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3 text-sm"
            >
              <div className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>24 Palani Andavar Kovil Street, Bhavani (638301)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                <Mail className="w-4 h-4 text-secondary" />
                <span>rgpbvn@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/7661652/pexels-photo-7661652.jpeg"
                  alt="Raja Ganapathi Offset - Premium Printing Press"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Printer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quality Assured</p>
                    <p className="text-sm text-gray-600">ISO Certified Process</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-5 -right-5 bg-gradient-to-r from-secondary to-secondary text-white px-6 py-3 rounded-full shadow-lg font-bold"
              >
                27+ Years
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
