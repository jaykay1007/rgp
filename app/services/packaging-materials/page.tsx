import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PackagingMaterialsPage() {
  const packagingTypes = [
    {
      name: "Custom Boxes",
      description: "Tailored boxes for products of all sizes, with custom printing and designs.",
    },
    { name: "Branded Bags", description: "Paper and plastic bags with your logo and branding for retail use." },
    { name: "Product Labels", description: "High-quality adhesive labels for bottles, jars, and other containers." },
    { name: "Tissue Paper", description: "Custom printed tissue paper for gift wrapping and product packaging." },
    { name: "Shipping Mailers", description: "Durable envelopes and mailers for safe product shipping." },
    { name: "Food Packaging", description: "FDA-compliant packaging solutions for food and beverage products." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Packaging Materials</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Packaging Solutions</h2>
            <p className="text-gray-700 mb-6">
              Elevate your brand with our custom packaging materials. We offer a wide range of options to protect,
              present, and promote your products.
            </p>
            <ul className="space-y-4">
              {packagingTypes.map((type, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2FnaW5nfGVufDB8fDB8fHww"
              alt="Packaging Materials Samples"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Packaging Materials?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Custom designs to enhance your brand identity</li>
              <li>High-quality materials for product protection</li>
              <li>Eco-friendly options available</li>
              <li>Scalable solutions for businesses of all sizes</li>
              <li>Expert advice on packaging optimization</li>
              <li>Competitive pricing for bulk orders</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Upgrade Your Packaging?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to discuss your packaging needs and how we can help elevate your product presentation.
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

