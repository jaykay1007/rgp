"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Eye } from "lucide-react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  
  const categories = [
    { id: "all", label: "All Works" },
    { id: "wedding", label: "Wedding Cards" },
    { id: "business", label: "Business" },
    { id: "packaging", label: "Packaging" },
    { id: "marketing", label: "Marketing" }
  ]

  const projects = [
    {
      id: 1,
      title: "Elegant Wedding Invitation",
      category: "wedding",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
      description: "Premium wedding card with gold foiling"
    },
    {
      id: 2,
      title: "Corporate Business Cards",
      category: "business",
      image: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg",
      description: "Professional visiting cards for businesses"
    },
    {
      id: 3,
      title: "Product Packaging",
      category: "packaging",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
      description: "Custom packaging design and printing"
    },
    {
      id: 4,
      title: "Marketing Brochures",
      category: "marketing",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
      description: "Eye-catching brochures for promotions"
    },
    {
      id: 5,
      title: "Traditional Wedding Cards",
      category: "wedding",
      image: "https://images.pexels.com/photos/2879819/pexels-photo-2879819.jpeg",
      description: "Classic Indian wedding invitations"
    },
    {
      id: 6,
      title: "Letterheads & Stationery",
      category: "business",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      description: "Professional business stationery"
    },
    {
      id: 7,
      title: "Food Packaging",
      category: "packaging",
      image: "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg",
      description: "Food-safe packaging solutions"
    },
    {
      id: 8,
      title: "Event Posters",
      category: "marketing",
      image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg",
      description: "Vibrant posters for events"
    }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showcasing Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Best Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of printing projects delivered across Bhavani, Erode, and neighboring areas
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:shadow-md"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
