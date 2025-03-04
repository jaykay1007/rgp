import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BrochuresPage() {
  const brochureTypes = [
    { name: "Tri-Fold Brochures", description: "Classic three-panel design for concise information presentation." },
    { name: "Bi-Fold Brochures", description: "Simple yet effective two-panel layout for easy reading." },
    { name: "Z-Fold Brochures", description: "Unique folding style for creative content organization." },
    { name: "Gate-Fold Brochures", description: "Elegant design with panels that open from the center." },
    { name: "Roll-Fold Brochures", description: "Multiple panels that unfold in a rolling manner." },
    { name: "Custom Die-Cut Brochures", description: "Unique shapes and designs to stand out from the crowd." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Brochures</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Brochure Options</h2>
            <p className="text-gray-700 mb-6">
              Showcase your products and services with our high-quality brochures. We offer a variety of styles to suit
              your marketing needs.
            </p>
            <ul className="space-y-4">
              {brochureTypes.map((type, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2h1cmV8ZW58MHx8MHx8fDA%3D"
              alt="Brochure Samples"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Brochures?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality paper stocks</li>
              <li>Vibrant, full-color printing</li>
              <li>Custom sizes and folding options</li>
              <li>Professional design assistance available</li>
              <li>Quick turnaround times</li>
              <li>Eco-friendly paper options</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Order?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your brochure needs or to request a sample pack.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

