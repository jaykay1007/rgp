import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const services = [
  {
    title: "Visiting Cards",
    description: "Make a lasting first impression with our high-quality visiting cards.",
    icon: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "bg-primary/10",
    iconColor: "text-primary",
    link: "/services/visiting-cards",
  },
  {
    title: "Brochures",
    description: "Showcase your products or services with our professionally designed brochures.",
    icon: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2h1cmV8ZW58MHx8MHx8fDA%3D",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
    link: "/services/brochures",
  },
  {
    title: "Multicolour Offset Printing",
    description: "High-quality offset printing for all your commercial needs.",
    icon: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=2070",
    color: "bg-primary/10",
    iconColor: "text-primary",
    link: "/services/multicolour-offset-printing",
  },
  {
    title: "Digital Printing",
    description: "Fast and efficient printing for short runs and variable data.",
    icon: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMHByaW50aW5nfGVufDB8fDB8fHww",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
    link: "/services/digital-printing",
  },
  {
    title: "Large Format Printing",
    description: "Eye-catching banners, posters, and signage for maximum impact.",
    icon: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBmb3JtYXQlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    color: "bg-accent/10",
    iconColor: "text-accent",
    link: "/services/large-format-printing",
  },
  {
    title: "Book Printing",
    description: "Professional book printing and binding services.",
    icon: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHByaW50aW5nfGVufDB8fDB8fHww",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    link: "/services/book-printing",
  },
  {
    title: "Packaging Printing",
    description: "Custom packaging solutions for products of all sizes.",
    icon: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2FnaW5nfGVufDB8fDB8fHww",
    color: "bg-red-100",
    iconColor: "text-red-600",
    link: "/services/packaging-printing",
  },
  {
    title: "Stationery Printing",
    description: "Professional stationery to elevate your brand identity.",
    icon: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    color: "bg-green-100",
    iconColor: "text-green-600",
    link: "/services/stationery-printing",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of printing services to meet all your business and personal needs. From
            traditional offset printing to cutting-edge digital solutions, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={service.icon || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-primary hover:underline">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

