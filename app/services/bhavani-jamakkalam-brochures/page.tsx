import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BhavaniJamakkalamBrochuresPage() {
  const brochureTypes = [
    {
      name: "Traditional Fold Brochures",
      description: "Classic bi-fold or tri-fold designs showcasing Jamakkalam patterns.",
    },
    {
      name: "Catalog-Style Booklets",
      description: "Comprehensive product catalogs featuring the full range of Bhavani Jamakkalam.",
    },
    {
      name: "Interactive Digital Brochures",
      description: "Print brochures with QR codes linking to online galleries and ordering systems.",
    },
    {
      name: "Luxury Presentation Folders",
      description: "High-end folders with inserts, perfect for trade shows and B2B marketing.",
    },
    {
      name: "Eco-Friendly Brochures",
      description: "Made with recycled materials to align with sustainable practices.",
    },
    {
      name: "Mini Pocket Guides",
      description: "Compact, portable brochures ideal for quick reference and distribution.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Bhavani Jamakkalam Brochures</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Bhavani Jamakkalam Brochure Options</h2>
            <p className="text-gray-700 mb-6">
              Promote Bhavani's famous Jamakkalam carpets with our vibrant and informative brochures. Our range of
              options ensures that the rich heritage and quality of Bhavani Jamakkalam are effectively communicated to
              your audience.
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
              src="https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGV0fGVufDB8fDB8fHww"
              alt="Bhavani Jamakkalam Brochures"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Bhavani Jamakkalam Brochures?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Designs that highlight the unique patterns and colors of Jamakkalam</li>
              <li>High-quality paper and printing for accurate color representation</li>
              <li>Customizable layouts to suit different marketing needs</li>
              <li>Options for multilingual content to reach diverse markets</li>
              <li>Integration of traditional and modern design elements</li>
              <li>Durable materials suitable for long-term use and display</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Showcase Bhavani Jamakkalam?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your brochure requirements and how we can help promote this iconic product
                of Bhavani.
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

