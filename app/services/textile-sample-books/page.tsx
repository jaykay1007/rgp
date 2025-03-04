import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TextileSampleBooksPage() {
  const bookTypes = [
    { name: "Standard Fabric Swatches", description: "Classic presentation of fabric samples in a bound book format." },
    {
      name: "Digital Printed Catalogs",
      description: "High-quality printed catalogs showcasing fabric designs and patterns.",
    },
    {
      name: "Interactive Sample Books",
      description: "Books with QR codes linking to digital resources and additional information.",
    },
    { name: "Eco-Friendly Sample Books", description: "Made with recycled materials and sustainable practices." },
    {
      name: "Custom-Shaped Swatches",
      description: "Unique presentation formats tailored to your brand and fabric types.",
    },
    { name: "Luxury Presentation Boxes", description: "Premium packaging for high-end fabric collections." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Textile Sample Books</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Textile Sample Book Options</h2>
            <p className="text-gray-700 mb-6">
              Showcase your fabric designs with our high-quality textile sample books. Perfect for Erode's thriving
              textile industry, our options cater to various presentation needs and styles.
            </p>
            <ul className="space-y-4">
              {bookTypes.map((type, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Textile Sample Books"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Textile Sample Books?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Tailored for Erode's textile industry needs</li>
              <li>High-quality printing and binding</li>
              <li>Accurate color representation</li>
              <li>Durable construction for frequent handling</li>
              <li>Customizable layouts and designs</li>
              <li>Quick turnaround times for seasonal collections</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Showcase Your Fabrics?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your textile sample book requirements or to request a demo of our options.
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

