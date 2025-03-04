import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Phone } from "lucide-react"

const serviceData = {
  "multicolour-offset-printing": {
    title: "Multicolour Offset Printing",
    description:
      "Our multicolour offset printing service delivers superior quality for large volume print runs. Perfect for businesses needing consistent, high-quality printed materials at competitive prices.",
    features: [
      "High-quality color reproduction",
      "Large volume printing capability",
      "Cost-effective for bulk orders",
      "Versatile paper and material options",
      "Precise color matching",
      "Ideal for brochures, magazines, and marketing materials",
    ],
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070",
    benefits: [
      "Exceptional print quality with vibrant colors",
      "Cost-effective for large print runs",
      "Consistent results across all prints",
      "Wide range of paper stocks and finishes available",
      "Expert color management and calibration",
      "Fast turnaround times for bulk orders",
    ],
  },
}

export default function MulticolourOffsetPrintingPage() {
  const service = serviceData["multicolour-offset-printing"]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Printing Project?</h3>
              <p className="text-gray-700 mb-4">
                Contact us now to discuss your multicolour offset printing needs and get a personalized quote.
              </p>
              <a
                href="tel:+919994466277"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
          <div>
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6 object-cover w-full h-64 md:h-auto"
            />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our {service.title}?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

