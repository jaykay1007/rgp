"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Award, Star, ArrowRight, Sparkles } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "Premium Wedding Collection",
    category: "Wedding Invitations",
    description: "Elegant wedding cards with gold foiling and embossing for a grand celebration",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070",
    client: "Various Clients",
    location: "Bhavani, Erode",
    testimonial: "Best quality wedding cards in Bhavani!",
    rating: 5
  },
  {
    id: 2,
    title: "Corporate Branding Package",
    category: "Business Cards & Stationery",
    description: "Complete branding solution including visiting cards, letterheads, and envelopes",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500",
    client: "Local Businesses",
    location: "Komarapalayam",
    testimonial: "Professional quality that impressed our clients",
    rating: 5
  },
  {
    id: 3,
    title: "Product Catalog Design",
    category: "Catalogs & Brochures",
    description: "High-quality product catalogs with perfect binding and vibrant colors",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500",
    client: "Textile Industries",
    location: "Erode District",
    testimonial: "Excellent print quality and timely delivery",
    rating: 5
  },
  {
    id: 4,
    title: "Food Packaging Solutions",
    category: "Packaging",
    description: "Eco-friendly food packaging with custom designs and food-safe materials",
    image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500",
    client: "Food Businesses",
    location: "Anthiyur, Gobi",
    testimonial: "Great packaging that enhanced our brand",
    rating: 5
  },
  {
    id: 5,
    title: "Event Marketing Materials",
    category: "Posters & Banners",
    description: "Eye-catching flex banners and posters for events and promotions",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
    client: "Event Organizers",
    location: "Bhavani",
    testimonial: "Vibrant colors that grabbed attention!",
    rating: 5
  },
  {
    id: 6,
    title: "School & College Materials",
    category: "Educational Printing",
    description: "ID cards, certificates, and educational materials for institutions",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500",
    client: "Educational Institutions",
    location: "Bhavani & Erode",
    testimonial: "Reliable partner for all our printing needs",
    rating: 5
  }
]

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full mb-4"
          >
            <Award className="w-5 h-5" />
            <span className="font-semibold">Award-Winning Quality</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured</span> Work
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Showcasing our expertise in offset printing across various industries. 
            From wedding invitations to corporate branding, see why businesses in Bhavani, Erode, and nearby areas trust us.
          </p>
        </motion.div>

        {/* Projects Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={featuredProjects[selectedProject].image}
                  alt={featuredProjects[selectedProject].title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-semibold">
                        {featuredProjects[selectedProject].category}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(featuredProjects[selectedProject].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {featuredProjects[selectedProject].title}
                    </h3>
                    <p className="text-white/90 mb-3">
                      {featuredProjects[selectedProject].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/80">
                        <p className="font-semibold">{featuredProjects[selectedProject].client}</p>
                        <p>{featuredProjects[selectedProject].location}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs"
            >
              <p className="text-sm italic text-gray-700">
                "{featuredProjects[selectedProject].testimonial}"
              </p>
              <p className="text-xs text-gray-500 mt-2">- {featuredProjects[selectedProject].client}</p>
            </motion.div>
          </motion.div>

          {/* Project Selector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Browse Our Portfolio
            </h3>
            
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ x: 10 }}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  selectedProject === index 
                    ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary' 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{project.title}</h4>
                    <p className="text-sm text-gray-600">{project.category}</p>
                    <p className="text-xs text-gray-500 mt-1">{project.location}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedProject === index ? 0 : -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${
                      selectedProject === index ? 'text-primary' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="mb-6 text-gray-300">
            Join thousands of satisfied customers across Bhavani, Erode, and nearby areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919994466277"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg font-bold shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold"
            >
              View All Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
