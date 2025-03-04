import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function WeddingInvitationsPage() {
  const invitationStyles = [
    { name: "Classic Elegance", description: "Timeless designs with traditional elements and refined typography." },
    {
      name: "Modern Minimalist",
      description: "Clean, contemporary designs with sleek layouts and simple color schemes.",
    },
    { name: "Rustic Charm", description: "Nature-inspired designs with textured papers and earthy color palettes." },
    {
      name: "Vintage Romance",
      description: "Nostalgic designs featuring ornate details and antique-inspired elements.",
    },
    { name: "Bohemian Chic", description: "Free-spirited designs with eclectic patterns and vibrant colors." },
    { name: "Luxury Foil", description: "Opulent designs with metallic foil accents for a touch of glamour." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Wedding Invitations</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Wedding Invitation Styles</h2>
            <p className="text-gray-700 mb-6">
              Make your special day even more memorable with our beautifully crafted wedding invitations. Choose from a
              variety of styles to match your wedding theme.
            </p>
            <ul className="space-y-4">
              {invitationStyles.map((style, index) => (
                <li key={index} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg mb-2">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1469"
              alt="Wedding Invitation Samples"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Wedding Invitations?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Customizable designs to match your wedding theme</li>
              <li>High-quality paper and printing techniques</li>
              <li>Wide range of styles from classic to contemporary</li>
              <li>Coordinating stationery items available (RSVP cards, thank you notes, etc.)</li>
              <li>Professional design assistance</li>
              <li>Timely delivery to meet your wedding timeline</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Create Your Dream Invitations?</h3>
              <p className="text-gray-700 mb-4">
                Contact us today to schedule a consultation and start designing your perfect wedding invitations.
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

