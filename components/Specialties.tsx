"use client"

import { Printer, Layers, Palette, Sparkles, Leaf, Clock } from "lucide-react"
import AnimatedText from "./animated-text"

const specialties = [
  {
    title: "High-Resolution Printing",
    description: "Crystal-clear images and sharp text with our state-of-the-art printing technology.",
    icon: Printer,
  },
  {
    title: "Premium Paper Selection",
    description: "A wide range of high-quality papers to suit every project and budget.",
    icon: Layers,
  },
  {
    title: "Color Matching Expertise",
    description: "Precise color reproduction to ensure your brand colors are always on point.",
    icon: Palette,
  },
  {
    title: "Finishing Techniques",
    description: "Enhance your prints with options like embossing, foil stamping, and spot UV coating.",
    icon: Sparkles,
  },
  {
    title: "Eco-Friendly Options",
    description: "Sustainable printing solutions using recycled papers and vegetable-based inks.",
    icon: Leaf,
  },
  {
    title: "Rapid Turnaround",
    description: "Fast and efficient printing services without compromising on quality.",
    icon: Clock,
  },
]

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText text="Our Printing Expertise" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the quality and precision that sets our printing services apart. We combine cutting-edge technology
            with traditional craftsmanship to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                {specialty.icon && <specialty.icon className="h-6 w-6 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

