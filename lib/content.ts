export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const pageKeys = [
  "about",
  "services",
  "fleet",
  "booking",
  "partners",
  "contact",
] as const;
export type PageKey = (typeof pageKeys)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function isPageKey(value: string): value is PageKey {
  return pageKeys.some((pageKey) => pageKey === value);
}

type Card = {
  title: string;
  description: string;
  icon: string;
  phoneContacts?: { label: string; number: string }[];
  email?: string;
};
type Section = {
  title: string;
  description?: string;
  cards?: Card[];
  eyebrow?: string;
};
type FAQ = { question: string; answer: string };
type PageContent = {
  title: string;
  description: string;
  keywords?: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  profile?: { eyebrow: string; name: string; description: string; imageAlt: string };
  action?: "booking" | "contact";
  sections: Section[];
  faqs?: FAQ[];
  faqEyebrow?: string;
  faqTitle?: string;
  cta?: { title: string; description: string; label: string };
};

type Copy = {
  ui: {
    brand: string;
    home: string;
    nav: Record<PageKey, string>;
    language: string;
    theme: string;
    themeNames: Record<"light" | "dark" | "system", string>;
    book: string;
    learnMore: string;
    requestQuote: string;
    breadcrumb: string;
    footerText: string;
    menuOpen: string;
    menuClose: string;
    backToTop: string;
    whatsapp: string;
    configureWhatsapp: string;
    form: {
      name: string;
      email: string;
      phone: string;
      pickup: string;
      destination: string;
      date: string;
      passengers: string;
      message: string;
      company: string;
      vehicle: string;
      coaster: string;
      bus: string;
      fromDateTime: string;
      toDateTime: string;
      submit: string;
      sendingUnavailable: string;
      sendingReady: string;
      bookingSaving: string;
      bookingSubmitted: string;
      bookingSaveFailed: string;
      formTitle: string;
      formNote: string;
    };
  };
  home: {
    title: string;
    description: string;
    keywords: string[];
    eyebrow: string;
    heading: string;
    intro: string;
    primaryAction: string;
    secondaryAction: string;
    cityScene: {
      eyebrow: string;
      title: string;
      description: string;
      imageAlt: string;
    };
    servicesTitle: string;
    servicesIntro: string;
    services: Card[];
    reasonsTitle: string;
    reasons: Card[];
    faqTitle: string;
    faqs: FAQ[];
    coverage: {
      eyebrow: string;
      title: string;
      description: string;
      listLabel: string;
      imageAlt: string;
      locations: string[];
    };
    closingTitle: string;
    closingText: string;
  };
  pages: Record<PageKey, PageContent>;
};

const en: Copy = {
  ui: {
    brand: "Target Transport Company Riyadh KSA",
    home: "Home",
    nav: {
      about: "About",
      services: "Services",
      fleet: "Fleet",
      booking: "Booking & offers",
      partners: "Partners",
      contact: "Contact",
    },
    language: "Language",
    theme: "Appearance",
    themeNames: { light: "Light", dark: "Dark", system: "System" },
    book: "Make an inquiry",
    learnMore: "Learn more",
    requestQuote: "Get a quote",
    breadcrumb: "Breadcrumb",
    footerText: "Transportation information and inquiries.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    backToTop: "Back to top",
    whatsapp: "Chat on WhatsApp",
    configureWhatsapp: "WhatsApp contact will be available when a verified company number is configured.",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      pickup: "Pickup location",
      destination: "Destination",
      date: "Travel date",
      passengers: "Number of passengers",
      message: "How can we help?",
      company: "Company name",
      vehicle: "Select a vehicle",
      coaster: "Toyota Coaster",
      bus: "Bus",
      fromDateTime: "From date & time",
      toDateTime: "To date & time",
      submit: "Send inquiry",
      sendingUnavailable: "Your inquiry was not sent. Please contact the company directly once verified contact details are available.",
      sendingReady: "WhatsApp opened with your inquiry. Review and send the message to complete your request.",
      bookingSaving: "Submitting your booking request...",
      bookingSubmitted: "Your request was submitted. Review and send it in WhatsApp.",
      bookingSaveFailed: "Google Sheets did not confirm your booking. Check the latest deployed script version and try again.",
      formTitle: "Send an inquiry",
      formNote: "Share your trip details to submit a booking request.",
    },
  },
  home: {
    title: "Target Transport Company | Bus & Toyota Coaster Rental Riyadh",
    description: "Rent modern 22-seat Toyota Coasters & 51-seat Higer buses with drivers in Riyadh & across Saudi Arabia. 500+ fleet for corporate, Hajj & projects. Get a quote!",
    keywords: ["Bus rental Riyadh", "Toyota Coaster rental Saudi Arabia", "Higer bus lease KSA", "staff transportation Riyadh", "charter bus Riyadh", "Target Transport Company"],
    eyebrow: "Target Transport Company ⟶ Riyadh",
    heading: "Riyadh’s Trusted Bus & Fleet Partner",
    intro: "500+ Modern Toyota Coasters, Higer Buses, and Luxury Vehicles ready for immediate deployment across Saudi Arabia.",
    primaryAction: "Plan your journey",
    secondaryAction: "Explore services",
    cityScene: {
      eyebrow: "A view of the journey",
      title: "Riyadh journeys, brought to life",
      description: "A glimpse of our modern fleet across the city as you plan your next trip. Share your route and travel details with our team.",
      imageAlt: "Riyadh city corporate staff transportation and bus charter service by Target Transport",
    },
    servicesTitle: "Sectors & Bus Rental Solutions We Serve",
    servicesIntro: "Flexible Toyota Coaster and Higer bus leasing for teams, companies, and mega-projects across KSA. Share your requirements for a custom quote.",
    services: [
      { title: "Construction & Mega-Projects Transport", description: "Daily shuttle service for workers and engineers at major contractors and giga-projects, including NEOM, Qiddiya, and Diriyah.", icon: "hard-hat" },
      { title: "Corporate & Staff Transportation", description: "Reliable monthly bus contracts for safe employee commutes to and from Riyadh offices and business hubs.", icon: "briefcase-business" },
      { title: "Industrial & Factory Logistics (MODON)", description: "Multi-shift staff transport solutions for factories, warehouses, and industrial cities across Saudi Arabia.", icon: "factory" },
      { title: "Schools, Universities & Academic Fleets", description: "Safe, punctual, and insured daily student and faculty bus transportation for educational institutions.", icon: "graduation-cap" },
      { title: "Hospital & Healthcare Staff Shuttles", description: "24/7 shift-based bus transport for doctors, nurses, and medical support teams across healthcare facilities.", icon: "heart-pulse" },
      { title: "Hajj, Umrah & Religious Tourism Transport", description: "Comfortable intercity group buses for pilgrims and travel agencies between Makkah, Madinah, and Riyadh.", icon: "box" },
      { title: "Hotels, Events & Exhibitions Transport", description: "Large charter bus fleets and VIP GMC transfers for international conferences, exhibitions, and hotel guests.", icon: "hotel" },
      { title: "Manpower & Recruitment Agency Fleets", description: "Scalable monthly bus leasing solutions tailored for HR companies and manpower supply providers.", icon: "users-round" },
      { title: "Aviation Crew & Airport Ground Operations", description: "Punctual 24/7 shuttle transport for airline crews and ground staff at King Khalid International Airport (RUH).", icon: "plane" },
      { title: "Oil, Gas & Energy Contractors Transport", description: "Modern safety-compliant fleet (2019–2026 models) built for energy, mining, and industrial contractors.", icon: "fuel" },
    ],
    reasonsTitle: "Clear details make for better journeys",
    reasons: [
      { title: "Arranged around your needs", description: "Share the pickup route, schedule, and passenger count that matter for your trip.", icon: "clipboard" },
      { title: "Details confirmed before travel", description: "Fleet availability, vehicle model details, and final pricing are confirmed directly before booking.", icon: "badge-check" },
      { title: "One clear point of inquiry", description: "Send your request through our booking form and follow up using verified company contact details.", icon: "messages" },
    ],
    faqTitle: "Frequently asked bus & fleet rental questions",
    faqs: [
      { question: "How do I request a bus or Toyota Coaster trip in Riyadh?", answer: "Use our online booking inquiry form to share your pickup location, destination, travel date, and passenger count. Our Riyadh dispatch team confirms fleet availability and pricing immediately." },
      { question: "Which cities in Saudi Arabia do you serve?", answer: "Target Transport Company provides daily and monthly bus rentals across 9 major Saudi cities: Riyadh, Dammam, Jeddah, Makkah, Madinah, Taif, Tabuk, Hafar Al Batin, and Abha." },
      { question: "What vehicles are available in your fleet?", answer: "We operate over 500 modern vehicles (2019–2026 models), including 51-seater Higer buses, 22-seater Toyota Coasters, and VIP GMC vehicles, all provided with professional company drivers and fuel included." },
    ],
    coverage: {
      eyebrow: "Service locations",
      title: "Where we provide bus & fleet transport",
      description: "These operational hubs are shown on our Saudi Arabia service coverage map. Target Transport serves: Riyadh, Dammam, Jeddah, Makkah, Madinah, Taif, Tabuk, Hafar Al Batin, and Abha.",
      listLabel: "Cities",
      imageAlt: "Target Transport Company bus fleet operations across Riyadh, Makkah, Madinah, and Dammam",
      locations: ["Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah", "Taif", "Tabuk", "Hafar Al Batin", "Abha"],
    },
    closingTitle: "Have a group journey or project in mind?",
    closingText: "Share your route details and ask about fleet availability, custom contracts, and current pricing.",
  },
  pages: {
    about: {
      title: "About Target Transport Company | Trusted Fleet Provider in Riyadh",
      description: "Learn about Target Transport Company in Riyadh. Operating 500+ modern 2026 Toyota Coasters & Higer buses with professional drivers across 9 major cities in Saudi Arabia.",
      keywords: ["About Target Transport Company", "bus rental company Riyadh", "2026 Toyota Coaster rental Saudi Arabia", "fleet management KSA"],
      eyebrow: "About us",
      heading: "Transport planned around people and business.",
      intro: "Target Transport Company is a leading Riyadh-based fleet provider operating 500+ modern Toyota Coasters, Higer buses, and VIP vehicles across 9 major cities in Saudi Arabia.",
      profile: {
        eyebrow: "The values behind our service",
        name: "Waleed Zaman",
        description: "Waleed reflects the trust, respect, and commitment to service that guide Target Transport Company across Saudi Arabia.",
        imageAlt: "Waleed Zaman",
      },
      sections: [
        { eyebrow: "Our values", title: "Purpose, mission and vision", cards: [
          { title: "Our purpose", description: "Make it effortless for businesses and groups to plan safe, punctual bus journeys across Saudi Arabia with clear upfront details.", icon: "compass" },
          { title: "Our mission", description: "Understand each client’s transport needs clearly and deliver well-maintained vehicles with professional drivers on schedule.", icon: "target" },
          { title: "Our vision", description: "Be Saudi Arabia’s most trusted partner for corporate staff shuttles, mega-project logistics, and group charter transport.", icon: "eye" },
        ] },
        { eyebrow: "Our approach", title: "How we approach each request", cards: [
          { title: "Clarity", description: "Confirm the pickup route, schedule, vehicle availability, and transparent SAR pricing before booking.", icon: "file-check-2" },
          { title: "Care", description: "Take passenger comfort, luggage capacity, safety standards, and accessibility into account on every trip.", icon: "heart-handshake" },
          { title: "Reliability", description: "Share confirmed driver and fleet details in advance and provide 24/7 dispatch support across KSA.", icon: "clock" },
        ] },
      ],
    },
    services: {
      title: "Corporate Bus Leasing, Airport Transfers & Charter Services | Target Transport KSA",
      description: "Book monthly employee shuttles, NEOM & mega-project fleets, RUH airport transfers, Hajj/Umrah buses & VIP GMC rides across 9 Saudi cities. 500+ Toyota Coasters & Higer buses.",
      keywords: ["corporate bus leasing Riyadh", "employee shuttle service Saudi Arabia", "RUH airport group transfer", "Hajj Umrah bus rental KSA", "MODON factory transport", "VIP GMC rental Riyadh"],
      eyebrow: "Fleet & Charter Solutions",
      heading: "Bus & fleet services tailored to your journey.",
      intro: "Describe your route, passenger count, and schedule in Riyadh or across Saudi Arabia. Fleet availability, vehicle models, and clear SAR pricing are confirmed directly before booking.",
      sections: [
        { eyebrow: "Transportation Options", title: "Flexible daily & monthly transport modes", cards: [
          { title: "Business & corporate transportation", description: "Monthly Higer bus (51-seat) and Toyota Coaster (22-seat) contracts for daily employee commutes, corporate offices, and business visitors in Riyadh.", icon: "building-2" },
          { title: "Private & VIP passenger transport", description: "Chauffeur-driven luxury GMC and executive Coaster rides arranged around your exact pickup timing, privacy, and passenger comfort.", icon: "car-front" },
          { title: "Airport transfers (RUH & KSA Airports)", description: "Punctual 24/7 group bus and VIP transfers for flight crews and travelers at King Khalid International Airport (RUH) and major Saudi airports.", icon: "plane-takeoff" },
          { title: "Group journeys & intercity charters", description: "Spacious 22-seat Coasters and 51-seat Higer buses with large luggage capacity for events, conferences, and intercity travel across 9 cities.", icon: "users" },
        ] },
        { eyebrow: "Sectors We Serve", title: "Specialized fleet solutions across 10 key industries", description: "From Vision 2030 mega-projects to daily industrial shifts, our 500+ modern fleet (2019–2026 models) supports every sector across Saudi Arabia.", cards: [
          { title: "Construction & Mega-Projects", description: "Daily worker and engineer shuttles for major contractors at NEOM, Qiddiya, and Diriyah.", icon: "hard-hat" },
          { title: "Corporate & Office Shuttles", description: "Reliable monthly bus contracts for safe employee commutes to and from Riyadh business hubs.", icon: "briefcase" },
          { title: "Industrial & MODON Factories", description: "Multi-shift staff transport for factories, warehouses, and industrial cities across KSA.", icon: "factory" },
          { title: "Schools & Universities", description: "Safe, punctual, and insured daily bus transportation for students, faculty, and campus staff.", icon: "graduation-cap" },
          { title: "Hospitals & Healthcare", description: "24/7 shift-based shuttle services for doctors, nurses, and medical support teams.", icon: "heart-pulse" },
          { title: "Hajj, Umrah & Religious Tourism", description: "Comfortable intercity group buses for pilgrims and travel agencies between Makkah, Madinah, and Riyadh.", icon: "landmark" },
          { title: "Hotels, Events & Exhibitions", description: "Large charter bus fleets and VIP GMC transfers for international conferences and hotel guests.", icon: "hotel" },
          { title: "Manpower & HR Agencies", description: "Scalable monthly bus leasing solutions tailored for HR companies and manpower providers.", icon: "user-check" },
          { title: "Aviation & Ground Operations", description: "24/7 crew and ground-handling staff transport at King Khalid International Airport (RUH).", icon: "plane" },
          { title: "Oil, Gas & Energy Contractors", description: "Safety-compliant modern fleet (2019–2026 models) engineered for energy and industrial contractors.", icon: "fuel" },
        ] },
        { eyebrow: "Simple Booking Process", title: "What to include in a request", description: "A few details help our Riyadh dispatch team respond with exact fleet availability and next steps.", cards: [
          { title: "Route and timing", description: "Include pickup city, drop-off destination, travel date, and preferred departure time.", icon: "map-pin" },
          { title: "Passenger & fleet needs", description: "Mention passenger count, luggage volume, preferred bus size, and accessibility needs.", icon: "luggage" },
          { title: "Service confirmation", description: "Confirm assigned vehicle, driver details, clear SAR price, and pickup instructions before travel.", icon: "file-check-2" },
        ] },
      ],
      faqEyebrow: "FAQ & Pricing Guide",
      faqTitle: "Answers to common transport questions",
      faqs: [
        { question: "Can I book monthly bus transportation for a business in Riyadh?", answer: "Yes. Target Transport provides flexible monthly Higer bus and Toyota Coaster leasing with professional drivers and fuel included for businesses, factories, and mega-projects across Riyadh and KSA." },
        { question: "Can you arrange 24/7 airport pickup at Riyadh Airport (RUH)?", answer: "Yes. We arrange punctual group bus and VIP GMC transfers for flight crews, corporate guests, and groups at King Khalid International Airport (RUH) and 8 other major Saudi cities." },
        { question: "How is bus and Coaster rental pricing confirmed?", answer: "Submit your route, duration (daily or monthly), and passenger count via our inquiry form. Standard rates start at 700 SAR/day or 15,000 SAR/month for a Toyota Coaster, confirmed upfront before booking." },
      ],
    },
    fleet: {
      title: "Our Fleet | 22-Seat Toyota Coaster, 51-Seat Higer Bus & VIP GMC Riyadh",
      description: "Explore Target Transport’s 500+ modern fleet (2019–2026 models) in Riyadh & KSA. Rent 51-seat Higer buses (17,000 SAR/mo), 22-seat Toyota Coasters (700 SAR/day), and VIP GMCs with driver & fuel.",
      keywords: [
        "Toyota Coaster 22 seater Riyadh",
        "Higer bus 51 seater rental KSA",
        "VIP GMC rental with driver Riyadh",
        "bus fleet Saudi Arabia",
      ],
      eyebrow: "Modern KSA Fleet (2019–2026)",
      heading: "The right bus or Coaster starts with your requirements.",
      intro: "Operate with confidence using our 500+ modern fleet in Riyadh and 8 other Saudi cities. Every vehicle includes a professional company driver, fuel, and full safety compliance.",
      sections: [
        { eyebrow: "Vehicle Categories", title: "Choose the right fleet capacity", cards: [
          { title: "VIP & Executive GMC", description: "Luxury chauffeur-driven GMC SUVs for corporate executives, airport VIP pickups (RUH), and private small-party travel across KSA.", icon: "car-front" },
          { title: "Toyota Coaster (22-Seater)", description: "Ideal for staff shuttles, school routes, and group tours. 22 seats, dual A/C, heater, driver & fuel included — 700 SAR/day or 15,000 SAR/month.", icon: "bus" },
          { title: "Higer Bus (51-Seater)", description: "High-capacity coach for mega-projects (NEOM, Qiddiya), MODON factories, and Hajj/Umrah groups. 51 seats, heavy-duty A/C — 17,000 SAR/month.", icon: "bus-front" },
          { title: "Custom & Safety-Compliant Fleets", description: "Share specific luggage, mobility, or oil & gas safety compliance requirements so our Riyadh dispatch team assigns the exact vehicle.", icon: "shield-check" },
        ] },
        { eyebrow: "Transparent Fleet Terms", title: "Confirmed in writing before travel", description: "Every booking receives written confirmation of the exact vehicle model (2019–2026), seat count, luggage capacity, driver details, and clear SAR pricing (excluding VAT)." },
      ],
      faqEyebrow: "Fleet Specifications FAQ",
      faqTitle: "Answers to common fleet questions",
      faqs: [
        { question: "How many passengers can a Toyota Coaster and Higer Bus carry?", answer: "Our Toyota Coaster comfortably seats up to 22 passengers, while our full-size Higer Bus seats up to 51 passengers. Both include a professional company driver and fuel." },
        { question: "How much luggage space is available in your buses?", answer: "Our 51-seater Higer buses feature large under-floor luggage compartments ideal for airport transfers and intercity travel, while 22-seater Toyota Coasters accommodate standard group luggage." },
      ],
    },
    booking: {
      title: "Booking & Offers | Target Transport Company KSA",
      description: "Send a transportation booking inquiry and ask about current availability and offers.",
      eyebrow: "Booking & offers",
      heading: "Start with your trip details.",
      intro: "Send the route, date and passenger count you have in mind. Your trip is not confirmed until the company responds with availability, price and booking terms.",
      action: "booking",
      sections: [
        { title: "Current offers", description: "No active promotions or discount terms have been verified. Ask the company whether an offer is available for your dates and route.", cards: [
          { title: "Ask about availability", description: "Offers, when available, may depend on route, date and service. Confirm eligibility and terms before booking.", icon: "badge-percent" },
        ] },
        { title: "Before you submit", cards: [
          { title: "Share trip information", description: "Provide pickup, destination, date, time and number of passengers.", icon: "clipboard-list" },
          { title: "Mention special needs", description: "Include luggage, accessibility or child-seat requirements in your message.", icon: "list-plus" },
          { title: "Wait for confirmation", description: "Check the final price, vehicle and booking terms with the company before travel.", icon: "circle-check" },
        ] },
      ],
    },
    partners: {
      title: "B2B Fleet Partnerships & Corporate Transport Contracts | Target Transport KSA",
      description: "Partner with Target Transport Company in Riyadh for corporate employee shuttles, travel & hospitality fleets, and mega-project event logistics across Saudi Arabia.",
      eyebrow: "B2B & Strategic Alliances",
      heading: "Let’s build a reliable transport partnership.",
      intro: "We collaborate with corporations, travel agencies, hotels, and event organizers across Saudi Arabia to supply scalable, safety-compliant Toyota Coaster and Higer bus fleets.",
      sections: [
        { eyebrow: "Collaboration Areas", title: "Partnership conversations", cards: [
          { title: "Corporate & Mega-Project Contracts", description: "Long-term monthly fleet leasing for employee commutes, executive visitors, and Vision 2030 project sites.", icon: "building-2" },
          { title: "Travel, Umrah & Hospitality", description: "Dedicated intercity buses and VIP GMC fleets complementing hotels, airlines, and licensed Umrah/tourism operators.", icon: "hotel" },
          { title: "Event & Exhibition Logistics", description: "High-volume shuttle coordination, route planning, and on-site dispatch for international conferences and exhibitions.", icon: "calendar-check-2" },
        ] },
        { eyebrow: "Partnership Onboarding", title: "What to share with our B2B team", cards: [
          { title: "Your organization", description: "Share your company profile, sector, and primary point of contact in Saudi Arabia.", icon: "briefcase" },
          { title: "Fleet & route scope", description: "Outline target cities (Riyadh, Jeddah, Dammam, etc.), expected passenger volume, and contract duration.", icon: "map-pinned" },
          { title: "Direct commercial proposal", description: "Our Riyadh corporate desk reviews your scope and prepares a tailored SLA and fleet rate proposal.", icon: "handshake" },
        ] },
      ],
      cta: {
        title: "Start a B2B conversation",
        description: "Contact our team to discuss your organization’s transport requirements and next steps.",
        label: "Contact our partnership team",
      },
    },
    contact: {
      title: "Contact Target Transport Company Riyadh | Book Toyota Coaster & Higer Bus",
      description: "Request a bus or Toyota Coaster quote in Riyadh & across KSA. Visit our office at Al-Jaffal Commercial Center in Utaiqah, Riyadh, or submit your route details online.",
      eyebrow: "Contact",
      heading: "Tell us how we can help.",
      intro: "Our Riyadh team can help arrange a Toyota Coaster or Higer bus across KSA.",
      action: "contact",
      sections: [
        { title: "Contact details", description: "Reach Target Transport Company in Riyadh.", cards: [
          {
            title: "Phone & WhatsApp",
            description: "",
            icon: "phone",
            phoneContacts: [
              { label: "CEO / Management", number: "0540328480" },
              { label: "Operations & Support", number: "0564927110" },
              { label: "Bookings, Rates & Client Deals", number: "0504828229" },
            ],
          },
          { title: "Email", description: "", email: "targettransportcompanyksa@gmail.com", icon: "mail" },
          { title: "Office location", description: "Target Transport Company, Office No. 74, Al-Jaffal Commercial Center, King Fahad Branch Rd, Utaiqah, Riyadh, Saudi Arabia", icon: "map-pin" },
        ] },
      ],
      cta: {
        title: "Ready to book your trip?",
        description: "Share your pickup, destination, travel date and passenger count.",
        label: "Go to booking form",
      },
    },
  },
};

const ar: Copy = {
  ui: {
    brand: "شركة تارغت ترانسبورت - المملكة العربية السعودية",
    home: "الرئيسية",
    nav: {
      about: "من نحن",
      services: "الخدمات",
      fleet: "الأسطول",
      booking: "الحجز والعروض",
      partners: "الشركاء",
      contact: "اتصل بنا",
    },
    language: "اللغة",
    theme: "المظهر",
    themeNames: { light: "فاتح", dark: "داكن", system: "النظام" },
    book: "أرسل استفساراً",
    learnMore: "اكتشف المزيد",
    requestQuote: "اطلب عرض سعر",
    breadcrumb: "مسار التنقل",
    footerText: "معلومات واستفسارات حول خدمات النقل.",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    backToTop: "العودة إلى الأعلى",
    whatsapp: "تواصل عبر واتساب",
    configureWhatsapp: "ستتوفر خدمة واتساب بعد إضافة رقم الشركة المعتمد.",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      pickup: "موقع الانطلاق",
      destination: "الوجهة",
      date: "تاريخ الرحلة",
      passengers: "عدد الركاب",
      message: "كيف يمكننا مساعدتك؟",
      company: "اسم الشركة",
      vehicle: "اختر المركبة",
      coaster: "تويوتا كوستر",
      bus: "حافلة",
      fromDateTime: "من التاريخ والوقت",
      toDateTime: "إلى التاريخ والوقت",
      submit: "إرسال الاستفسار",
      sendingUnavailable: "لم يتم إرسال استفسارك. يرجى التواصل مع الشركة مباشرة بعد توفير بيانات الاتصال المعتمدة.",
      sendingReady: "تم فتح واتساب مع تفاصيل استفسارك. راجع الرسالة وأرسلها لإكمال الطلب.",
      bookingSaving: "جارٍ إرسال طلب الحجز...",
      bookingSubmitted: "تم إرسال طلبك. راجع التفاصيل وأرسلها عبر واتساب.",
      bookingSaveFailed: "لم تؤكد جداول بيانات Google حفظ طلبك. تحقق من أحدث إصدار منشور من البرنامج النصي وحاول مجدداً.",
      formTitle: "أرسل استفسارك",
      formNote: "أضف تفاصيل رحلتك لإرسال طلب الحجز.",
    },
  },
  home: {
    title: "شركة تارغت ترانسبورت | تأجير باصات وتويوتا كوستر في الرياض والسعودية",
    description: "استأجر حافلات هايجر 51 راكب وتويوتا كوستر 22 راكب مع سائق في الرياض وجميع مناطق المملكة. أسطول +500 مركبة حديثة للشركات والمشاريع والحج. اطلب عرض سعر!",
    keywords: ["تأجير باصات الرياض", "ايجار تويوتا كوستر", "تأجير حافلات هايجر", "نقل موظفين الرياض", "شركة نقل بري السعودية", "شركة تارغت ترانسبورت"],
    eyebrow: "شركة تارغت ترانسبورت - المملكة العربية السعودية",
    heading: "شريكك الموثوق لتأجير الباصات والأساطيل بالرياض",
    intro: "أكثر من 500 حافلة هايجر وتويوتا كوستر ومركبات فاخرة جاهزة للتشغيل الفوري في جميع أنحاء المملكة.",
    primaryAction: "خطط لرحلتك",
    secondaryAction: "استكشف الخدمات",
    cityScene: {
      eyebrow: "مشهد من الرحلة",
      title: "رحلات الرياض تنبض بالحياة",
      description: "لمحة عن أسطولنا الحديث في المدينة أثناء التخطيط لرحلتك القادمة. شارك مسارك وتفاصيل السفر مع فريقنا.",
      imageAlt: "خدمات نقل الموظفين وتأجير الحافلات في مدينة الرياض من شركة تارغت ترانسبورت",
    },
    servicesTitle: "القطاعات وحلول تأجير الحافلات التي نخدمها",
    servicesIntro: "حلول تأجير مرنة لحافلات هايجر وتويوتا كوستر للفرق والشركات والمشاريع الكبرى في المملكة. شارك متطلباتك واطلب عرض سعر.",
    services: [
      { title: "النقل لمشاريع الإنشاءات والمشاريع الكبرى", description: "نقل يومي للعاملين والمهندسين لدى المقاولين والمشاريع الكبرى، بما فيها نيوم والقدية والدرعية.", icon: "hard-hat" },
      { title: "تنقلات الشركات والموظفين بالرياض", description: "عقود شهرية موثوقة لنقل الموظفين بأمان من وإلى المكاتب ومراكز الأعمال.", icon: "briefcase-business" },
      { title: "الخدمات اللوجستية الصناعية والمصانع (مدن)", description: "نقل متعدد الورديات للعاملين في المصانع والمستودعات والمدن الصناعية.", icon: "factory" },
      { title: "المدارس والجامعات والمؤسسات الأكاديمية", description: "نقل يومي آمن ومنتظم ومؤمّن للطلاب وأعضاء هيئة التدريس والعاملين.", icon: "graduation-cap" },
      { title: "نقل العاملين في المستشفيات والرعاية الصحية", description: "خدمات نقل على مدار الساعة وفق الورديات للأطباء والممرضين وفرق الدعم.", icon: "heart-pulse" },
      { title: "الحج والعمرة والسياحة الدينية", description: "حافلات مريحة للمجموعات ورحلات بين المدن للمعتمرين ووكالات السياحة بين مكة والمدينة والرياض.", icon: "box" },
      { title: "الفنادق والفعاليات والمعارض", description: "توفير أساطيل كبيرة وتنقلات لكبار الشخصيات بسيارات GMC للمؤتمرات والفعاليات ونزلاء الفنادق.", icon: "hotel" },
      { title: "وكالات التوظيف والقوى العاملة", description: "حلول تأجير أساطيل كبيرة لشركات الموارد البشرية ومقدمي خدمات القوى العاملة.", icon: "users-round" },
      { title: "نقل أطقم الطيران والعمليات الأرضية بالمطار", description: "نقل موثوق على مدار الساعة لأطقم الطيران والعاملين بالمناولة الأرضية في مطار الملك خالد الدولي (RUH).", icon: "plane" },
      { title: "مقاولو النفط والغاز والطاقة", description: "خيارات أسطول حديث (موديلات 2019–2026) ومتوافق مع متطلبات السلامة لمقاولي الطاقة والصناعة.", icon: "fuel" },
    ],
    reasonsTitle: "التفاصيل الواضحة تساعد على رحلة أفضل",
    reasons: [
      { title: "ترتيبات تناسب احتياجاتك", description: "شارك مسار الانطلاق والوقت وعدد الركاب المهمة لرحلتك.", icon: "clipboard" },
      { title: "تأكيد التفاصيل قبل السفر", description: "يتم تأكيد توفر الأسطول وتفاصيل المركبة والسعر النهائي مباشرة قبل الحجز.", icon: "badge-check" },
      { title: "طريقة واضحة للاستفسار", description: "أرسل طلبك عبر نموذج الحجز وتابع باستخدام بيانات الاتصال المعتمدة.", icon: "messages" },
    ],
    faqTitle: "أسئلة شائعة حول تأجير الحافلات والأساطيل",
    faqs: [
      { question: "كيف أطلب حجز باص أو تويوتا كوستر في الرياض؟", answer: "استخدم نموذج استفسار الحجز لإضافة موقع الانطلاق والوجهة والتاريخ وعدد الركاب، وسيقوم فريقنا في الرياض بتأكيد توفر المركبات والأسعار فوراً." },
      { question: "ما المناطق والمدن التي تغطيها خدمات النقل؟", answer: "تغطي شركة تارغت ترانسبورت 9 مدن رئيسية في السعودية: الرياض، الدمام، جدة، مكة المكرمة، المدينة المنورة، الطائف، تبوك، حفر الباطن وأبها." },
      { question: "ما أنواع المركبات المتاحة في أسطولكم؟", answer: "نمتلك أسطولاً يضم أكثر من 500 مركبة حديثة (موديلات 2019–2026) تشمل حافلات هايجر 51 راكب، تويوتا كوستر 22 راكب، وسيارات GMC لكبار الشخصيات، جميعها شاملة السائق والوقود." },
    ],
    coverage: {
      eyebrow: "مواقع الخدمة",
      title: "المناطق التي نقدم فيها خدمات النقل",
      description: "تظهر هذه المواقع على خريطة نطاق الخدمة الخاصة بالشركة. تغطي تارجت للنقل: الرياض، الدمام، جدة، مكة المكرمة، المدينة المنورة، الطائف، تبوك، حفر الباطن وأبها.",
      listLabel: "المدن",
      imageAlt: "عمليات أسطول حافلات شركة تارغت ترانسبورت في الرياض ومكة والمدينة والدمام",
      locations: ["الرياض", "الدمام", "جدة", "مكة المكرمة", "المدينة المنورة", "الطائف", "تبوك", "حفر الباطن", "أبها"],
    },
    closingTitle: "هل تخطط لرحلة جماعية أو مشروع نقل؟",
    closingText: "شارك تفاصيل مسارك واستفسر عن توفر الأسطول والعقود المرنة والأسعار الحالية.",
  },
  pages: {
    about: {
      title: "من نحن | شركة تارغت ترانسبورت - رواد تأجير الحافلات والأساطيل بالرياض",
      description: "تعرف على شركة تارغت ترانسبورت في الرياض. نمتلك أسطولاً يضم أكثر من 500 حافلة هايجر وتويوتا كوستر 2026 حديثة مع سائقين محترفين في 9 مدن سعودية.",
      keywords: ["عن شركة تارغت ترانسبورت", "شركة تأجير باصات في الرياض", "ايجار تويوتا كوستر 2026", "إدارة أساطيل النقل السعودية"],
      eyebrow: "من نحن",
      heading: "حلول نقل مصممة لخدمة الأفراد والأعمال.",
      intro: "شركة تارغت ترانسبورت هي مزود رائد لخدمات الأساطيل في الرياض، نمتلك أكثر من 500 حافلة هايجر وتويوتا كوستر ومركبات فاخرة تخدم 9 مدن رئيسية في المملكة.",
      profile: {
        eyebrow: "القيم التي توجه خدماتنا",
        name: "وليد زمان",
        description: "يجسد وليد زمان قيم الثقة والاحترام والالتزام بالخدمة التي توجه أعمال شركة تارجت ترانسبورت في أنحاء المملكة.",
        imageAlt: "وليد زمان",
      },
      sections: [
        { eyebrow: "قيمنا", title: "هدفنا ورسالتنا ورؤيتنا", cards: [
          { title: "هدفنا", description: "تسهيل تخطيط رحلات الحافلات الآمنة والمنتظمة للشركات والمجموعات في أنحاء المملكة بتفاصيل واضحة ومؤكدة مسبقاً.", icon: "compass" },
          { title: "رسالتنا", description: "فهم متطلبات كل عميل بدقة وتوفير مركبات حديثة ومجهزة مع سائقين محترفين في المواعيد المحددة تماماً.", icon: "target" },
          { title: "رؤيتنا", description: "أن نكون الشريك الأكثر موثوقية في السعودية لنقل الموظفين، وخدمات المشاريع الكبرى، وتأجير الحافلات للمجموعات.", icon: "eye" },
        ] },
        { eyebrow: "نهجنا", title: "نهجنا في التعامل مع الطلبات", cards: [
          { title: "الوضوح", description: "تأكيد مسار الانطلاق والجدول الزمني وتوفر المركبات والأسعار الواضحة بالريال السعودي قبل الحجز.", icon: "file-check-2" },
          { title: "الاهتمام", description: "مراعاة راحة الركاب وسعة الأمتعة ومعايير السلامة وإمكانية الوصول في كل رحلة نرتبها.", icon: "heart-handshake" },
          { title: "الموثوقية", description: "مشاركة تفاصيل السائق والمركبة المؤكدة مسبقاً وتوفير دعم تشغيلي على مدار الساعة في جميع المدن.", icon: "clock" },
        ] },
      ],
    },
    services: {
      title: "عقود نقل الموظفين، توصيل المطارات وتأجير الحافلات | شركة تارغت ترانسبورت",
      description: "احجز عقود نقل الموظفين الشهرية، أساطيل المشاريع الكبرى ونيوم، توصيل مطار الملك خالد (RUH)، حافلات الحج والعمرة وسيارات GMC لكبار الشخصيات في 9 مدن سعودية.",
      keywords: ["عقود نقل موظفين الرياض", "تأجير حافلات للشركات السعودية", "توصيل مطار الملك خالد للمجموعات", "نقل المعتمرين والحجاج", "نقل مصانع مدن", "ايجار GMC مع سائق"],
      eyebrow: "حلول الأساطيل والتأجير",
      heading: "خدمات حافلات وأساطيل مصممة لطبيعة رحلتك.",
      intro: "حدد وجهتك وعدد الركاب والجدول الزمني في الرياض أو أنحاء المملكة. يتم تأكيد توفر المركبات والموديلات والأسعار الواضحة بالريال مباشرة قبل الحجز.",
      sections: [
        { eyebrow: "خيارات النقل المتكاملة", title: "حلول تأجير يومية وشهرية تناسب احتياجك", cards: [
          { title: "النقل للأعمال والشركات", description: "عقود شهرية لحافلات هايجر (51 راكب) وتويوتا كوستر (22 راكب) لنقل الموظفين يومياً والاجتماعات وزوار الأعمال في الرياض.", icon: "building-2" },
          { title: "نقل الركاب الخاص وكبار الشخصيات", description: "رحلات بسيارات GMC فاخرة وحافلات كوستر حديثة مع سائق محترف تناسب مسارك ووقتك واحتياجات الركاب.", icon: "car-front" },
          { title: "التوصيل من وإلى المطار (RUH)", description: "خدمات استقبال وتوصيل دقيقة على مدار الساعة لأطقم الطيران والمسافرين في مطار الملك خالد الدولي ومطارات المملكة.", icon: "plane-takeoff" },
          { title: "رحلات المجموعات والسفر بين المدن", description: "حافلات تويوتا كوستر وهايجر مريحة مع مساحة أمتعة واسعة للفعاليات والمؤتمرات والسفر بين 9 مدن سعودية.", icon: "users" },
        ] },
        { eyebrow: "القطاعات التي نخدمها", title: "حلول أساطيل متخصصة تغطي 10 قطاعات حيوية", description: "من مشاريع رؤية 2030 الكبرى إلى الورديات الصناعية اليومية، يخدم أسطولنا الحديث (+500 مركبة موديلات 2019–2026) كافة القطاعات.", cards: [
          { title: "مشاريع الإنشاءات والمشاريع الكبرى", description: "نقل يومي للعاملين والمهندسين لدى المقاولين في نيوم والقدية والدرعية.", icon: "hard-hat" },
          { title: "تنقلات الشركات والمكاتب", description: "عقود شهرية موثوقة لنقل الموظفين بأمان من وإلى مراكز الأعمال في الرياض.", icon: "briefcase" },
          { title: "الخدمات اللوجستية والمصانع (مدن)", description: "نقل متعدد الورديات للعاملين في المصانع والمستودعات والمدن الصناعية.", icon: "factory" },
          { title: "المدارس والجامعات", description: "نقل يومي آمن ومنتظم ومؤمّن للطلاب وأعضاء هيئة التدريس والعاملين.", icon: "graduation-cap" },
          { title: "المستشفيات والرعاية الصحية", description: "خدمات نقل على مدار الساعة وفق الورديات للأطباء والممرضين وفرق الدعم.", icon: "heart-pulse" },
          { title: "الحج والعمرة والسياحة الدينية", description: "حافلات مريحة للمجموعات ورحلات بين المدن للمعتمرين ووكالات السياحة بين مكة والمدينة والرياض.", icon: "landmark" },
          { title: "الفنادق والفعاليات والمعارض", description: "توفير أساطيل حافلات كبيرة وتنقلات لكبار الشخصيات بسيارات GMC للمؤتمرات والفنادق.", icon: "hotel" },
          { title: "وكالات التوظيف والقوى العاملة", description: "حلول تأجير أساطيل كبيرة لشركات الموارد البشرية ومقدمي خدمات القوى العاملة.", icon: "user-check" },
          { title: "أطقم الطيران والعمليات الأرضية", description: "نقل موثوق على مدار الساعة لأطقم الطيران والمناولة الأرضية في مطار الملك خالد الدولي (RUH).", icon: "plane" },
          { title: "مقاولو النفط والغاز والطاقة", description: "أسطول حديث (موديلات 2019–2026) ومتوافق مع معايير السلامة لمقاولي الطاقة والصناعة.", icon: "fuel" },
        ] },
        { eyebrow: "خطوات الحجز السريعة", title: "ما المعلومات التي تضاف للطلب؟", description: "مشاركة بعض التفاصيل تساعد فريق التشغيل بالرياض على الرد بتوفر المركبات والخطوات التالية بسرعة.", cards: [
          { title: "المسار والوقت", description: "أضف مدينة الانطلاق والوجهة والتاريخ والوقت المفضل للرحلة.", icon: "map-pin" },
          { title: "احتياجات الركاب والمركبة", description: "اذكر عدد الركاب وحجم الأمتعة ونوع الحافلة المطلوبة وأي احتياجات خاصة.", icon: "luggage" },
          { title: "تأكيد الخدمة", description: "أكد المركبة وبيانات السائق والسعر النهائي بالريال وتعليمات الاستقبال قبل السفر.", icon: "file-check-2" },
        ] },
      ],
      faqEyebrow: "الأسئلة الشائعة والأسعار",
      faqTitle: "إجابات عن أسئلتك حول خدمات النقل",
      faqs: [
        { question: "هل يمكنني حجز عقود نقل شهرية للشركات في الرياض؟", answer: "نعم، توفر شركة تارغت ترانسبورت عقود تأجير شهرية مرنة لحافلات هايجر وتويوتا كوستر شاملة السائق والوقود للشركات والمصانع والمشاريع في الرياض والمملكة." },
        { question: "هل توفرون خدمة الاستقبال من مطار الملك خالد بالرياض (RUH)?", answer: "نعم، نرتب خدمات توصيل دقيقة على مدار الساعة للمجموعات وأطقم الطيران وكبار الشخصيات في مطار الملك خالد الدولي بالرياض و8 مدن سعودية أخرى." },
        { question: "كيف يتم تأكيد أسعار تأجير الحافلات والكوستر؟", answer: "أرسل مسارك ومدة الإيجار (يومي أو شهري) وعدد الركاب عبر نموذج الاستفسار. تبدأ أسعار تويوتا كوستر من 700 ريال يومياً أو 15,000 ريال شهرياً وتُؤكد بوضوح قبل الحجز." },
      ],
    },
    fleet: {
      title: "أسطولنا | تويوتا كوستر 22 راكب، حافلات هايجر 51 راكب وGMC الرياض",
      description: "استكشف أسطول شركة تارجت الحديث (+500 مركبة موديلات 2019–2026) في الرياض والسعودية. استأجر حافلات هايجر 51 راكب (17,000 ريال/شهرياً) وتويوتا كوستر 22 راكب (700 ريال/يومياً) مع سائق ووقود.",
      keywords: [
        "تويوتا كوستر 22 راكب الرياض",
        "تأجير حافلة هايجر 51 راكب",
        "ايجار GMC مع سائق الرياض",
        "أسطول حافلات السعودية",
      ],
      eyebrow: "أسطول حديث (موديلات 2019–2026)",
      heading: "اختيار الحافلة أو الكوستر يبدأ من متطلبات رحلتك.",
      intro: "اعتمد على أسطولنا الذي يضم أكثر من 500 مركبة حديثة في الرياض و8 مدن سعودية. جميع المركبات تشمل سائقاً محترفاً من الشركة والوقود ومعايير السلامة الكاملة.",
      sections: [
        { eyebrow: "فئات المركبات", title: "اختر سعة الأسطول المناسبة", cards: [
          { title: "سيارات GMC الفاخرة وكبار الشخصيات", description: "سيارات GMC حديثة مع سائق محترف لكبار التنفيذيين واستقبال مطار الملك خالد (RUH) والتنقلات الخاصة في المملكة.", icon: "car-front" },
          { title: "تويوتا كوستر (22 راكب)", description: "مثالية لنقل الموظفين والمدارس والرحلات الجماعية. 22 مقعداً، تكييف مزدوج، شاملة السائق والوقود — 700 ريال يومياً أو 15,000 ريال شهرياً.", icon: "bus" },
          { title: "حافلة هايجر (51 راكب)", description: "حافلة كبيرة للمشاريع الكبرى (نيوم، القدية) ومصانع مدن ورحلات العمرة. 51 مقعداً وتكييف مركزي — 17,000 ريال شهرياً.", icon: "bus-front" },
          { title: "أساطيل مخصصة ومتوافقة مع السلامة", description: "شارك متطلبات الأمتعة أو إمكانية الوصول أو معايير سلامة النفط والغاز ليقوم فريقنا في الرياض بتخصيص المركبة المناسبة.", icon: "shield-check" },
        ] },
        { eyebrow: "شروط تأجير واضحة", title: "تأكيد كتابي كامل قبل السفر", description: "يحصل كل حجز على تأكيد كتابي بموديل المركبة (2019–2026)، وعدد المقاعد، وسعة الأمتعة، وبيانات السائق، والسعر الواضح بالريال (غير شامل الضريبة)." },
      ],
      faqEyebrow: "الأسئلة الشائعة حول مواصفات الأسطول",
      faqTitle: "إجابات عن أسئلة الأسطول الشائعة",
      faqs: [
        { question: "كم راكباً تتسع له حافلة تويوتا كوستر وحافلة هايجر؟", answer: "تتسع حافلة تويوتا كوستر لـ 22 راكباً براحة تامة، بينما تتسع حافلة هايجر الكبيرة لـ 51 راكباً، وكلاهما يشمل سائقاً محترفاً من الشركة والوقود." },
        { question: "ما سعة الأمتعة المتاحة في حافلاتكم؟", answer: "تتميز حافلات هايجر (51 راكب) بمستودعات أمتعة سفلية واسعة مثالية لتوصيل المطارات والسفر بين المدن، بينما تناسب تويوتا كوستر أمتعة المجموعات اليومية." },
      ],
    },
    booking: {
      title: "الحجز والعروض | شركة تارغت ترانسبورت",
      description: "أرسل استفسار حجز للنقل واستفسر عن التوفر والعروض الحالية.",
      eyebrow: "الحجز والعروض",
      heading: "ابدأ بتفاصيل رحلتك.",
      intro: "أرسل المسار والتاريخ وعدد الركاب. لا يتم تأكيد الرحلة إلا بعد رد الشركة بالتوفر والسعر وشروط الحجز.",
      action: "booking",
      sections: [
        { title: "العروض الحالية", description: "لم يتم التحقق من العروض أو شروط الخصم للنشر. اسأل الشركة عن العروض المتاحة لتواريخك ومسارك.", cards: [
          { title: "استفسر عن التوفر", description: "قد تعتمد العروض عند توفرها على المسار والتاريخ ونوع الخدمة. أكد الأهلية والشروط قبل الحجز.", icon: "badge-percent" },
        ] },
        { title: "قبل إرسال الطلب", cards: [
          { title: "أضف تفاصيل الرحلة", description: "أضف موقع الانطلاق والوجهة والتاريخ والوقت وعدد الركاب.", icon: "clipboard-list" },
          { title: "اذكر الاحتياجات الخاصة", description: "أضف الأمتعة أو متطلبات سهولة الوصول أو مقاعد الأطفال.", icon: "list-plus" },
          { title: "انتظر التأكيد", description: "تحقق من السعر النهائي والمركبة وشروط الحجز قبل السفر.", icon: "circle-check" },
        ] },
      ],
    },
    partners: {
      title: "شراكات الأساطيل وعقود النقل للشركات | شركة تارغت ترانسبورت السعودية",
      description: "تعاون مع شركة تارغت ترانسبورت في الرياض لتوفير عقود نقل الموظفين، أساطيل السفر والضيافة، والخدمات اللوجستية للمؤتمرات والفعاليات في أنحاء المملكة.",
      eyebrow: "الشراكات الاستراتيجية والأعمال",
      heading: "لنبني شراكة نقل موثوقة تدعم أعمالكم.",
      intro: "نتعاون مع الشركات ووكالات السفر والفنادق ومنظمي الفعاليات في السعودية لتوفير أساطيل حديثة من حافلات هايجر وتويوتا كوستر بمعايير سلامة عالية.",
      sections: [
        { eyebrow: "مجالات التعاون", title: "مناقشات الشراكة", cards: [
          { title: "عقود الشركات والمشاريع الكبرى", description: "تأجير أساطيل شهرية طويلة الأمد لنقل الموظفين والزوار التنفيذيين ومواقع مشاريع رؤية 2030.", icon: "building-2" },
          { title: "السفر والعمرة والضيافة", description: "حافلات مخصصة بين المدن وسيارات GMC فاخرة لدعم الفنادق وشركات الطيران ووكالات العمرة والسياحة.", icon: "hotel" },
          { title: "الخدمات اللوجستية للفعاليات والمعارض", description: "تنسيق نقل المجموعات الكبيرة وتخطيط المسارات والإشراف الميداني للمؤتمرات والمعارض الدولية.", icon: "calendar-check-2" },
        ] },
        { eyebrow: "خطوات بدء الشراكة", title: "كيف نبدأ شراكتنا؟", cards: [
          { title: "مؤسستك", description: "شارك نبذة عن شركتك وقطاعها وبيانات جهة التواصل الرئيسية في السعودية.", icon: "briefcase" },
          { title: "نطاق الأسطول والمسارات", description: "حدد المدن المطلوبة (الرياض وجدة والدمام وغيرها) وعدد الركاب المتوقع ومدة العقد.", icon: "map-pinned" },
          { title: "عرض تجاري مباشر", description: "يراجع فريق الشركات في الرياض متطلباتكم ويعد عرضاً مخصصاً لاتفاقية مستوى الخدمة وأسعار الأسطول.", icon: "handshake" },
        ] },
      ],
      cta: {
        title: "ابدأوا حواراً حول الشراكة",
        description: "تواصلوا مع فريقنا لمناقشة متطلبات النقل والخطوات التالية.",
        label: "تواصلوا مع فريق الشراكات",
      },
    },
    contact: {
      title: "تواصل مع شركة تارغت ترانسبورت بالرياض | احجز تويوتا كوستر وحافلات هايجر",
      description: "اطلب عرض سعر لتأجير الحافلات وتويوتا كوستر في الرياض وجميع مناطق المملكة. تفضل بزيارة مكتبنا في مركز الجفال التجاري بحي عتيقة بالرياض أو أرسل تفاصيل رحلتك.",
      eyebrow: "اتصل بنا",
      heading: "أخبرنا كيف يمكننا مساعدتك.",
      intro: "يساعدك فريقنا في الرياض على ترتيب تويوتا كوستر أو حافلة هايجر في جميع مناطق المملكة.",
      action: "contact",
      sections: [
        { title: "بيانات التواصل", description: "تواصل مع شركة تارجت للنقل في الرياض.", cards: [
          {
            title: "الهاتف وواتساب",
            description: "",
            icon: "phone",
            phoneContacts: [
              { label: "الرئيس التنفيذي / الإدارة", number: "0540328480" },
              { label: "العمليات والدعم", number: "0564927110" },
              { label: "الحجوزات والأسعار واتفاقيات العملاء", number: "0504828229" },
            ],
          },
          { title: "البريد الإلكتروني", description: "", email: "targettransportcompanyksa@gmail.com", icon: "mail" },
          { title: "موقع المكتب", description: "شركة تارغت ترانسبورت، مكتب رقم ٧٤، مركز الجفال التجاري، طريق الملك فهد الفرعي، حي عتيقة، الرياض، المملكة العربية السعودية", icon: "map-pin" },
        ] },
      ],
      cta: {
        title: "جاهزون لحجز رحلتكم؟",
        description: "شاركوا موقع الانطلاق والوجهة وتاريخ الرحلة وعدد الركاب.",
        label: "انتقلوا إلى نموذج الحجز",
      },
    },
  },
};

export function getCopy(locale: Locale): Copy {
  return locale === "ar" ? ar : en;
}
