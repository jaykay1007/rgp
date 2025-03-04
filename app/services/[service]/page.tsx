import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Phone } from "lucide-react"

interface ServicePageProps {
  params: {
    service: string
  }
}

const serviceData = {
  "digital-printing": {
    title: "Digital Printing",
    description: "Fast and efficient printing for short runs and variable data projects.",
    features: [
      "Quick turnaround times",
      "Variable data printing capabilities",
      "High-quality results for small quantities",
      "Cost-effective for short runs",
      "Wide range of paper options",
      "Ideal for personalized marketing materials",
    ],
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMHByaW50aW5nfGVufDB8fDB8fHww",
    benefits: [
      "High-quality prints with vibrant colors",
      "Flexibility for last-minute changes",
      "Economical for small print runs",
      "Personalization and variable data printing",
      "Environmentally friendly with less waste",
      "Consistent color reproduction",
    ],
  },
  "large-format-printing": {
    title: "Large Format Printing",
    description: "Eye-catching banners, posters, and signage for maximum visual impact.",
    features: [
      "High-resolution printing for large sizes",
      "Durable materials for indoor and outdoor use",
      "Wide range of substrates available",
      "Vibrant color reproduction",
      "Custom sizes and shapes",
      "Suitable for exhibitions, retail, and outdoor advertising",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBmb3JtYXQlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    benefits: [
      "High-impact visual communication",
      "Weather-resistant options for outdoor use",
      "Excellent for trade shows and events",
      "Quick turnaround for time-sensitive projects",
      "Customizable to fit any space or requirement",
      "Professional finish for a polished look",
    ],
  },
  "book-printing": {
    title: "Book Printing",
    description: "Professional book printing and binding services for authors and publishers.",
    features: [
      "Various binding options (hardcover, paperback, etc.)",
      "High-quality paper stocks",
      "Full-color or black and white printing",
      "Custom sizes and formats available",
      "Cover design and finishing options",
      "Print-on-demand capabilities",
    ],
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHByaW50aW5nfGVufDB8fDB8fHww",
    benefits: [
      "Professional-quality books for all genres",
      "Flexible print runs from small to large quantities",
      "Durable binding for long-lasting books",
      "Expert advice on paper and binding choices",
      "Consistent print quality throughout the book",
      "Affordable options for self-publishers",
    ],
  },
  "packaging-printing": {
    title: "Packaging Printing",
    description: "Custom packaging solutions to protect and promote your products.",
    features: [
      "Custom box sizes and shapes",
      "High-quality graphics and finishes",
      "Durable materials for product protection",
      "Eco-friendly packaging options",
      "Prototyping and sample creation",
      "Suitable for retail and e-commerce packaging",
    ],
    image:
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2FnaW5nfGVufDB8fDB8fHww",
    benefits: [
      "Stand out on the shelf with eye-catching designs",
      "Protect products during shipping and handling",
      "Reinforce brand identity with custom packaging",
      "Eco-friendly options to appeal to conscious consumers",
      "Scalable solutions for businesses of all sizes",
      "Enhance unboxing experience for customers",
    ],
  },
  "stationery-printing": {
    title: "Stationery Printing",
    description: "Professional stationery to elevate your brand identity and make a lasting impression.",
    features: [
      "Business cards, letterheads, and envelopes",
      "High-quality paper stocks",
      "Custom designs and layouts",
      "Foil stamping and embossing options",
      "Consistent branding across all items",
      "Eco-friendly paper options available",
    ],
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    benefits: [
      "Create a professional and cohesive brand image",
      "Make a strong first impression with clients",
      "High-quality materials reflect your brand values",
      "Customizable to suit your unique brand identity",
      "Enhance credibility and brand recognition",
      "Versatile use for various business communications",
    ],
  },
  "multicolour-offset-printing": {
    title: "Multicolour Offset Printing",
    description: "High-quality offset printing for all your commercial needs.",
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
  // Add missing services
  "visiting-cards": {
    title: "Visiting Cards",
    description: "Make a lasting first impression with our high-quality visiting cards.",
    features: [
      "Premium paper options",
      "Full color or monochrome printing",
      "Various finishes available",
      "Quick turnaround time",
      "Customizable designs",
      "Bulk order discounts",
    ],
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D",
    benefits: [
      "Professional appearance for your business",
      "Memorable designs that stand out",
      "High-quality materials for a lasting impression",
      "Versatile options for different industries",
      "Affordable pricing for startups and small businesses",
      "Expert design assistance available",
    ],
  },
  brochures: {
    title: "Brochures",
    description: "Showcase your products or services with our professionally designed brochures.",
    features: [
      "Multiple fold options",
      "High-quality paper stocks",
      "Full color printing",
      "Custom sizes available",
      "Professional design assistance",
      "Eco-friendly paper options",
    ],
    image:
      "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2h1cmV8ZW58MHx8MHx8fDA%3D",
    benefits: [
      "Effective marketing tool for businesses",
      "Versatile design options to suit your brand",
      "High-quality printing for a professional look",
      "Informative medium for product/service details",
      "Cost-effective promotional material",
      "Tangible marketing asset for potential clients",
    ],
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    return <div>Service not found</div>
  }

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
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-700 mb-4">
                Contact us now to discuss your {service.title.toLowerCase()} needs and get a personalized quote.
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

