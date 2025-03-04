"use client"

import { Printer, Users, Clock, Settings, DollarSign, Heart } from "lucide-react"
import AnimatedText from "./animated-text"

const features = [
  {
    title: "State-of-the-Art Technology",
    description: "We use the latest printing technology to ensure the highest quality output for every project.",
    icon: Printer,
  },
  {
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience and dedication to every print job.",
    icon: Users,
  },
  {
    title: "Quick Turnaround",
    description: "We understand the importance of deadlines and strive to deliver your projects on time, every time.",
    icon: Clock,
  },
  {
    title: "Customized Solutions",
    description: "We work closely with you to provide tailored printing solutions that meet your specific needs.",
    icon: Settings,
  },
  {
    title: "Competitive Pricing",
    description:
      "High-quality printing doesn't have to break the bank. We offer competitive rates without compromising on quality.",
    icon: DollarSign,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We go above and beyond to ensure you're happy with the final product.",
    icon: Heart,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Why Choose Raja Ganapathi Offset Printers"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          />
          <p className="text-gray-700 max-w-2xl mx-auto">
            With decades of experience and a commitment to quality, we are your trusted partner for all printing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                {feature.icon && <feature.icon className="h-6 w-6 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

