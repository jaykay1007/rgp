"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const specialties = [
  {
    title: "Textile Sample Books",
    description:
      "Showcase your fabric designs with our high-quality textile sample books, perfect for Erode's thriving textile industry.",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Turmeric Packaging",
    description: "Create eye-catching packaging for Erode's famous turmeric with our specialized printing services.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVybWVyaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Handloom Catalogs",
    description: "Showcase the beauty of Erode's handloom products with our expertly designed and printed catalogs.",
    image:
      "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGxvb218ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Festival Posters",
    description:
      "Promote local festivals and events with vibrant, large-format posters that capture the spirit of Tamil culture.",
    image:
      "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWwlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Coconut Oil Labels",
    description:
      "Design and print attractive labels for Erode's coconut oil products, highlighting their quality and origin.",
    image:
      "https://images.unsplash.com/photo-1621371205896-3082fa811d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY29udXQlMjBvaWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "School Yearbooks",
    description:
      "Create memorable yearbooks for local schools and colleges, capturing the essence of student life in Erode.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIweWVhcmJvb2t8ZW58MHx8MHx8fDA%3D",
  },
]

export default function LocalSpecialties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {specialties.map((specialty, index) => (
        <motion.div
          key={specialty.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48">
            <Image
              src={specialty.image || "/placeholder.svg"}
              alt={specialty.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
            <p className="text-gray-700">{specialty.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

