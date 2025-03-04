"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "english" | "tamil"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const translations = {
  english: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.specialties": "Specialties",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",

    // Hero Section
    "hero.title1": "Premium",
    "hero.title2": "Printing",
    "hero.title3": "for Your",
    "hero.title4": "Business",
    "hero.description":
      "Bringing your ideas to life with vibrant colors and exceptional quality. Your trusted printing partner for all your needs.",
    "hero.services": "Our Services",
    "hero.getQuote": "Get a Quote",

    // Services Section
    "services.title": "Our Printing Services",
    "services.description":
      "We offer a comprehensive range of printing services to meet all your business and personal needs. From traditional offset printing to cutting-edge digital solutions, we've got you covered.",
    "services.learnMore": "Learn More",

    // Specialties Section
    "specialties.title": "Our Printing Expertise",
    "specialties.description":
      "Discover the quality and precision that sets our printing services apart. We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results.",

    // Process Section
    "process.title": "Our Printing Process",
    "process.description": "We follow a meticulous process to ensure the highest quality for all your printing needs.",

    // Why Choose Us Section
    "whyChooseUs.title": "Why Choose Raja Ganapathi Offset Printers",
    "whyChooseUs.description":
      "With decades of experience and a commitment to quality, we are your trusted partner for all printing needs.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Have a project in mind? Contact us today for a free quote or to discuss your printing needs.",
    "contact.sendMessage": "Send Us a Message",
    "contact.info": "Contact Information",
    "contact.location": "Our Location",
    "contact.phone": "Phone Number",
    "contact.email": "Email Address",
    "contact.hours": "Business Hours",
    "contact.follow": "Follow Us",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  tamil: {
    // Navigation
    "nav.home": "முகப்பு",
    "nav.services": "சேவைகள்",
    "nav.specialties": "சிறப்புகள்",
    "nav.process": "செயல்முறை",
    "nav.contact": "தொடர்பு",
    "nav.getQuote": "விலை பெறுக",

    // Hero Section
    "hero.title1": "உயர்தர",
    "hero.title2": "அச்சுப்பதிப்பு",
    "hero.title3": "உங்கள்",
    "hero.title4": "வணிகத்திற்கு",
    "hero.description":
      "உங்கள் யோசனைகளை வண்ணமயமான நிறங்கள் மற்றும் சிறந்த தரத்துடன் உயிர்ப்பிக்கிறோம். உங்கள் அனைத்து தேவைகளுக்கும் நம்பகமான அச்சுப்பதிப்பு கூட்டாளி.",
    "hero.services": "எங்கள் சேவைகள்",
    "hero.getQuote": "விலை பெறுக",

    // Services Section
    "services.title": "எங்கள் அச்சுப்பதிப்பு சேவைகள்",
    "services.description":
      "உங்கள் வணிக மற்றும் தனிப்பட்ட தேவைகளை பூர்த்தி செய்ய விரிவான அச்சுப்பதிப்பு சேவைகளை வழங்குகிறோம். பாரம்பரிய ஆஃப்செட் அச்சிலிருந்து நவீன டிஜிட்டல் தீர்வுகள் வரை, நாங்கள் உங்களுக்கு உதவுகிறோம்.",
    "services.learnMore": "மேலும் அறிய",

    // Specialties Section
    "specialties.title": "எங்கள் அச்சுப்பதிப்பு நிபுணத்துவம்",
    "specialties.description":
      "எங்கள் அச்சுப்பதிப்பு சேவைகளை தனித்துவமாக்கும் தரம் மற்றும் துல்லியத்தை கண்டறியுங்கள். சிறந்த முடிவுகளை வழங்க நவீன தொழில்நுட்பத்தை பாரம்பரிய கைவினைத்திறனுடன் இணைக்கிறோம்.",

    // Process Section
    "process.title": "எங்கள் அச்சுப்பதிப்பு செயல்முறை",
    "process.description":
      "உங்கள் அனைத்து அச்சுப்பதிப்பு தேவைகளுக்கும் உயர்ந்த தரத்தை உறுதி செய்ய நுணுக்கமான செயல்முறையைப் பின்பற்றுகிறோம்.",

    // Why Choose Us Section
    "whyChooseUs.title": "ராஜா கணபதி ஆஃப்செட் பிரிண்டர்ஸை ஏன் தேர்வு செய்ய வேண்டும்",
    "whyChooseUs.description":
      "பல ஆண்டுகால அனுபவம் மற்றும் தரத்திற்கான அர்ப்பணிப்புடன், அனைத்து அச்சுப்பதிப்பு தேவைகளுக்கும் நாங்கள் உங்கள் நம்பகமான கூட்டாளி.",

    // Contact Section
    "contact.title": "தொடர்பு கொள்ளுங்கள்",
    "contact.description": "ஒரு திட்டம் மனதில் உள்ளதா? உங்கள் அச்சுப்பதிப்பு தேவைகளைப் பற்றி விவாதிக்க இன்றே எங்களைத் தொடர்பு கொள்ளுங்கள்.",
    "contact.sendMessage": "எங்களுக்கு செய்தி அனுப்புங்கள்",
    "contact.info": "தொடர்பு தகவல்",
    "contact.location": "எங்கள் இருப்பிடம்",
    "contact.phone": "தொலைபேசி எண்",
    "contact.email": "மின்னஞ்சல் முகவரி",
    "contact.hours": "வணிக நேரம்",
    "contact.follow": "எங்களை பின்தொடருங்கள்",

    // Footer
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.services": "எங்கள் சேவைகள்",
    "footer.contactUs": "எங்களை தொடர்பு கொள்ள",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.privacy": "தனியுரிமைக் கொள்கை",
    "footer.terms": "சேவை விதிமுறைகள்",
  },
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("english")

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "english" || savedLanguage === "tamil")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

