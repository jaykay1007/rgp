"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "Bhavani",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "Raja Ganapathi Offset has been our printing partner for 5 years. Their quality and service are unmatched in Bhavani. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Wedding Planner",
      location: "Erode",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "The wedding invitations they created were absolutely stunning! The attention to detail and quality of printing exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "Textile Exporter",
      location: "Komarapalayam",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      content: "Professional service and excellent quality catalogs for our textile business. They always deliver on time, even for bulk orders.",
      rating: 5
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      role: "Shop Owner",
      location: "Anthiyur",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      content: "Best printing press in the area! They handle all our packaging and marketing material needs with great prices and quality.",
      rating: 5
    },
    {
      id: 5,
      name: "Suresh Babu",
      role: "Event Manager",
      location: "Gobi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      content: "Raja Ganapathi Offset is our go-to for all event printing needs. Their flex banners and posters are top-notch quality.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Bhavani, Erode, and neighboring areas
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <Quote className="w-12 h-12 text-blue-600/20 mb-6" />
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].location}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Selector */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-full transition-all ${
                activeIndex === index 
                  ? "ring-4 ring-blue-600 ring-offset-2" 
                  : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16 object-cover"
              />
              {activeIndex === index && (
                <div className="absolute inset-0 bg-blue-600/20" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.0 ⭐</div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">27+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
