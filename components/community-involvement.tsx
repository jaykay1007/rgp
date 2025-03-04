"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Book, Heart, Recycle, Droplet } from "lucide-react"

const initiatives = [
  {
    title: "Local School Support",
    description:
      "We provide discounted printing services for educational materials to schools in Erode, supporting quality education in our community.",
    icon: Book,
  },
  {
    title: "Cultural Event Sponsorship",
    description:
      "Erode PrintWorks sponsors local cultural events, providing free banners and promotional materials for traditional Tamil festivals and performances.",
    icon: Calendar,
  },
  {
    title: "Eco-Friendly Printing",
    description:
      "We're committed to using eco-friendly inks and recycled paper options to reduce our environmental impact and preserve Erode's natural beauty.",
    icon: Recycle,
  },
  {
    title: "Skill Development Workshops",
    description:
      "We conduct free workshops for local youth, teaching them about modern printing technologies and design, empowering the next generation of Erode's workforce.",
    icon: Users,
  },
  {
    title: "Cauvery River Clean-up",
    description:
      "Our team regularly participates in clean-up drives along the Cauvery River, helping to maintain the health of this vital water source for Erode.",
    icon: Droplet,
  },
  {
    title: "Support for Local Artisans",
    description:
      "We collaborate with local artisans to print and promote their work, helping to preserve and showcase Erode's rich artistic heritage.",
    icon: Heart,
  },
]

export default function CommunityInvolvement() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
        >
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <initiative.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
          <p className="text-gray-700">{initiative.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

