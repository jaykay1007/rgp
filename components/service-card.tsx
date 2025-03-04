"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
  iconColor: string
  link: string
}

export default function ServiceCard({ title, description, icon, color, iconColor, link }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${color}`}
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${iconColor}`}>{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} className={`inline-flex items-center ${iconColor} hover:underline`}>
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  )
}

