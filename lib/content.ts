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

type Card = { title: string; description: string; icon: string };
type Section = {
  title: string;
  description?: string;
  cards?: Card[];
};
type FAQ = { question: string; answer: string };
type PageContent = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  action?: "booking" | "partner" | "contact";
  sections: Section[];
  faqs?: FAQ[];
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
    requestQuote: "Request a Quote",
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
    title: "Transportation Solutions | Target Transport Company KSA",
    description: "Explore transportation services, fleet information and booking inquiries from Target Transport Company KSA.",
    eyebrow: "Target Transport Company",
    heading: "Riyadh Trusted Fleet Patner",
    intro: "500+ Modern Toyotta Coasters, Buses and Luxury Vehicles ready for immediate deplyment",
    primaryAction: "Plan your journey",
    secondaryAction: "Explore services",
    cityScene: {
      eyebrow: "A view of the journey",
      title: "Riyadh journeys, brought to life",
      description: "A glimpse of the city as you plan your next trip. Share your route and travel details with our team.",
      imageAlt: "Illustration of a passenger minibus traveling along a Riyadh highway at sunset.",
    },
    servicesTitle: "Industries & Services We Serve",
    servicesIntro: "Flexible transport solutions for institutions and projects across Saudi Arabia. Share your requirements and request a tailored quote.",
    services: [
      { title: "Construction & Mega Projects Transport", description: "Daily workforce and engineer shuttles for contractors and major projects, including NEOM, Qiddiya and Diriyah.", icon: "hard-hat" },
      { title: "Corporate & Staff Commute", description: "Reliable monthly employee pick-up and drop-off for corporate offices and business hubs.", icon: "briefcase-business" },
      { title: "Industrial & Factory Logistics (MODON)", description: "Multi-shift transportation for factory workers, warehouse teams and industrial zones.", icon: "factory" },
      { title: "Schools, Universities & Academic Institutions", description: "Safe, punctual and insured daily transport for students, faculty and academic staff.", icon: "graduation-cap" },
      { title: "Hospitals & Healthcare Staff Transport", description: "24/7, shift-based shuttle services for doctors, nurses and hospital support teams.", icon: "heart-pulse" },
      { title: "Hajj, Umrah & Religious Tourism", description: "Comfortable group transfers and intercity travel for pilgrims and tourism agencies across Makkah, Madinah and Riyadh.", icon: "landmark" },
      { title: "Hotels, Events & Exhibitions", description: "Bulk fleet supply and VIP GMC transfers for conferences, corporate events and hotel guests.", icon: "hotel" },
      { title: "Manpower & Recruitment Agencies", description: "Large-scale fleet leasing solutions for HR providers and manpower outsourcing companies.", icon: "users-round" },
      { title: "Aviation & Airport Ground Crew Shuttles", description: "24/7 transport for airline crews and airport ground handling staff at King Khalid International Airport (RUH).", icon: "plane" },
      { title: "Oil, Gas & Energy Sector Contractors", description: "Safety-compliant, modern fleet options (2019–2026 models) tailored for energy and industrial contractors.", icon: "fuel" },
    ],
    reasonsTitle: "Clear details make for better journeys",
    reasons: [
      { title: "Arranged around your needs", description: "Share the route, timing and passenger details that matter for your trip.", icon: "clipboard" },
      { title: "Details confirmed before travel", description: "Availability, vehicle details and pricing are confirmed directly before booking.", icon: "badge-check" },
      { title: "One clear point of inquiry", description: "Send your request through the booking form and follow up using confirmed company contact details.", icon: "messages" },
    ],
    faqTitle: "Common transportation questions",
    faqs: [
      { question: "How do I request a trip?", answer: "Use the booking inquiry form to share your pickup, destination, date and passenger count. The company can confirm availability and details after contact information is configured." },
      { question: "Which areas do you serve?", answer: "The current service locations are Riyadh, Dammam, Jeddah, Makkah, Madinah, Taif, Tabuk, Hafar Al Batin and Abha." },
      { question: "What vehicles are available?", answer: "Vehicle availability and specifications are confirmed for each inquiry; no unverified capacity or fleet claims are published here." },
    ],
    coverage: {
      eyebrow: "Service locations",
      title: "Where we provide transportation",
      description: "These locations are shown on the company’s service coverage map.",
      listLabel: "Locations",
      imageAlt: "Target Transport service locations: Riyadh, Dammam, Jeddah, Makkah, Madinah, Taif, Tabuk, Hafar Al Batin and Abha.",
      locations: ["Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah", "Taif", "Tabuk", "Hafar Al Batin", "Abha"],
    },
    closingTitle: "Have a journey in mind?",
    closingText: "Share the details and ask about availability, arrangements and current pricing.",
  },
  pages: {
    about: {
      title: "About | Target Transport Company KSA",
      description: "Learn about Target Transport Company KSA, its service approach and the information to confirm before travel.",
      eyebrow: "About us",
      heading: "Transport planned around people.",
      intro: "Target Transport Company KSA is presented here as a transportation service provider. Specific company history, operating locations and certifications have not been supplied, so they are not claimed on this website.",
      sections: [
        { title: "Our purpose", description: "Make it easier to discuss a journey and confirm the practical details before it takes place.", cards: [
          { title: "Our mission", description: "Understand each request clearly and confirm the service details before travel.", icon: "target" },
          { title: "Our vision", description: "Create a straightforward way for people and organizations to discuss transportation needs.", icon: "eye" },
        ] },
        { title: "How we approach each request", cards: [
          { title: "Clarity", description: "Confirm the route, schedule, availability and price before booking.", icon: "scan" },
          { title: "Care", description: "Take passenger, luggage and accessibility needs into account when arranging a trip.", icon: "heart-handshake" },
          { title: "Reliability", description: "Share confirmed details in advance and communicate changes directly.", icon: "check-circle" },
        ] },
      ],
    },
    services: {
      title: "Transportation Services | Target Transport Company KSA",
      description: "Explore business, private and airport transportation inquiry options from Target Transport Company KSA.",
      eyebrow: "Services",
      heading: "A service to suit your journey.",
      intro: "Describe where you need to go and what your trip requires. Routes, availability, service terms and pricing are confirmed directly before booking.",
      sections: [
        { title: "Transportation options", cards: [
          { title: "Business transportation", description: "Discuss transport arrangements for employees, meetings or business visitors.", icon: "briefcase" },
          { title: "Private passenger transport", description: "Ask about a trip arranged around your route, timing and passenger needs.", icon: "users" },
          { title: "Airport transfers", description: "Share your airport, flight schedule and pickup or drop-off requirements.", icon: "plane" },
          { title: "Group journeys", description: "Provide passenger and luggage details so suitable arrangements can be discussed.", icon: "users-round" },
        ] },
        { title: "What to include in a request", description: "A few details help the team respond with relevant availability and next steps.", cards: [
          { title: "Route and timing", description: "Include pickup, destination, travel date and preferred time.", icon: "map-pinned" },
          { title: "Passenger needs", description: "Mention passenger count, luggage and any accessibility requirements.", icon: "accessibility" },
          { title: "Service confirmation", description: "Confirm vehicle, price, cancellation terms and pickup instructions before you travel.", icon: "list-checks" },
        ] },
      ],
      faqs: [
        { question: "Can I book transportation for a business?", answer: "Use the inquiry form to describe your organization’s route, schedule and passenger needs. Availability and terms must be confirmed directly." },
        { question: "Can you arrange airport pickup?", answer: "Airport transfer inquiries can include airport name, flight timing and pickup or drop-off needs. Availability is confirmed individually." },
        { question: "How is pricing confirmed?", answer: "Ask for a quote with your route and timing. Confirm the final price and any applicable terms with the company before booking." },
      ],
    },
    fleet: {
      title: "Fleet & Vehicles | Target Transport Company KSA",
      description: "Ask about vehicle availability and specifications for your transportation requirements.",
      eyebrow: "Fleet",
      heading: "The right vehicle starts with your requirements.",
      intro: "Vehicle models, passenger capacity, luggage limits and accessibility details have not been verified for publication. Share your trip requirements so the available options can be confirmed.",
      sections: [
        { title: "Discuss the right category", cards: [
          { title: "Private car", description: "Ask about options for individual or small-party travel. Passenger and luggage limits must be confirmed.", icon: "car-front" },
          { title: "People carrier", description: "For a group request, share the exact passenger and luggage count before confirming suitability.", icon: "van" },
          { title: "Business vehicle", description: "Discuss vehicle options and service arrangements for business travel.", icon: "briefcase-business" },
          { title: "Accessible transport", description: "Describe mobility or accessibility requirements so suitable availability can be checked.", icon: "accessibility" },
        ] },
        { title: "Confirm before booking", description: "Ask the company to confirm the vehicle model, seating, luggage allowance, accessibility features and total price in writing.", cards: [] },
      ],
      faqs: [
        { question: "How many passengers can each vehicle carry?", answer: "Passenger capacities have not been verified. Confirm the number of seats and legal passenger capacity for the specific vehicle before booking." },
        { question: "Can I bring luggage?", answer: "Luggage allowances vary by vehicle. Share the number and approximate size of your bags and confirm the allowance before travel." },
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
      title: "Business Partnerships | Target Transport Company KSA",
      description: "Discuss a potential transportation partnership with Target Transport Company KSA.",
      eyebrow: "Partners",
      heading: "Let’s discuss working together.",
      intro: "We welcome inquiries from organizations exploring transportation collaboration. Share your requirements so both sides can assess service fit, coverage and terms.",
      action: "partner",
      sections: [
        { title: "Partnership conversations", cards: [
          { title: "Corporate travel", description: "Discuss employee, visitor or meeting transportation needs and expected schedules.", icon: "building-2" },
          { title: "Travel and hospitality", description: "Explore whether transport arrangements could complement your guest services.", icon: "hotel" },
          { title: "Event logistics", description: "Share event dates, routes and passenger volume for an initial discussion.", icon: "calendar-days" },
        ] },
        { title: "What to include", description: "A short overview helps start a useful conversation.", cards: [
          { title: "Your organization", description: "Tell us what your organization does and who to contact.", icon: "contact-round" },
          { title: "Your requirements", description: "Include locations, expected trip volume, schedule and service expectations.", icon: "notebook-text" },
          { title: "Next steps", description: "Commercial terms, coverage and capabilities are confirmed directly; no partnership is implied by sending an inquiry.", icon: "messages-square" },
        ] },
      ],
    },
    contact: {
      title: "Contact | Target Transport Company KSA",
      description: "Contact Target Transport Company KSA with a transportation question or service inquiry.",
      eyebrow: "Contact",
      heading: "Tell us how we can help.",
      intro: "Use the form to prepare an inquiry. A verified phone number, email address and office location have not been provided, so they are intentionally not displayed here.",
      action: "contact",
      sections: [
        { title: "Contact details", description: "Company contact information will be added once verified details are provided.", cards: [
          { title: "Phone", description: "Company phone number: to be provided.", icon: "phone" },
          { title: "Email", description: "Company email address: to be provided.", icon: "mail" },
          { title: "Office location", description: "No verified office address or map location is available.", icon: "map-pin" },
        ] },
      ],
    },
  },
};

const ar: Copy = {
  ui: {
    brand: "شركة تارجت للنقل - المملكة العربية السعودية",
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
    title: "حلول النقل | شركة تارجت للنقل",
    description: "استكشف خدمات النقل ومعلومات الأسطول وأرسل استفسار حجز إلى شركة تارجت للنقل.",
    eyebrow: "شركة تارجت للنقل - المملكة العربية السعودية",
    heading: "رحلتك، بترتيب يراعي احتياجاتك.",
    intro: "استكشف خيارات النقل للرحلات الشخصية ورحلات الأعمال والمطار. أرسل متطلباتك ليتم تأكيد التوفر والتفاصيل.",
    primaryAction: "خطط لرحلتك",
    secondaryAction: "استكشف الخدمات",
    cityScene: {
      eyebrow: "مشهد من الرحلة",
      title: "رحلات الرياض تنبض بالحياة",
      description: "لمحة عن المدينة أثناء التخطيط لرحلتك القادمة. شارك مسارك وتفاصيل السفر مع فريقنا.",
      imageAlt: "رسم توضيحي لحافلة ركاب صغيرة تسير على طريق سريع في الرياض وقت الغروب.",
    },
    servicesTitle: "القطاعات والخدمات التي نخدمها",
    servicesIntro: "حلول نقل مرنة للفرق والمؤسسات والمشاريع في أنحاء المملكة. شارك متطلباتك واطلب عرض سعر يناسب احتياجك.",
    services: [
      { title: "النقل لمشاريع الإنشاءات والمشاريع الكبرى", description: "نقل يومي للعاملين والمهندسين لدى المقاولين والمشاريع الكبرى، بما فيها نيوم والقدية والدرعية.", icon: "hard-hat" },
      { title: "تنقلات الشركات والموظفين", description: "حلول شهرية موثوقة لنقل الموظفين من وإلى المكاتب ومراكز الأعمال.", icon: "briefcase-business" },
      { title: "الخدمات اللوجستية الصناعية والمصانع (مدن)", description: "نقل متعدد الورديات للعاملين في المصانع والمستودعات والمدن الصناعية.", icon: "factory" },
      { title: "المدارس والجامعات والمؤسسات الأكاديمية", description: "نقل يومي آمن ومنتظم ومؤمّن للطلاب وأعضاء هيئة التدريس والعاملين.", icon: "graduation-cap" },
      { title: "نقل العاملين في المستشفيات والرعاية الصحية", description: "خدمات نقل على مدار الساعة وفق الورديات للأطباء والممرضين وفرق الدعم.", icon: "heart-pulse" },
      { title: "الحج والعمرة والسياحة الدينية", description: "تنقلات مريحة للمجموعات ورحلات بين المدن للحجاج ووكالات السياحة بين مكة والمدينة والرياض.", icon: "landmark" },
      { title: "الفنادق والفعاليات والمعارض", description: "توفير أساطيل كبيرة وتنقلات لكبار الشخصيات بسيارات GMC للمؤتمرات والفعاليات ونزلاء الفنادق.", icon: "hotel" },
      { title: "وكالات التوظيف والقوى العاملة", description: "حلول تأجير أساطيل كبيرة لشركات الموارد البشرية ومقدمي خدمات القوى العاملة.", icon: "users-round" },
      { title: "نقل أطقم الطيران والعمليات الأرضية بالمطار", description: "نقل موثوق على مدار الساعة لأطقم الطيران والعاملين بالمناولة الأرضية في مطار الملك خالد الدولي (RUH).", icon: "plane" },
      { title: "مقاولو النفط والغاز والطاقة", description: "خيارات أسطول حديث (موديلات 2019–2026) ومتوافق مع متطلبات السلامة لمقاولي الطاقة والصناعة.", icon: "fuel" },
    ],
    reasonsTitle: "التفاصيل الواضحة تساعد على رحلة أفضل",
    reasons: [
      { title: "ترتيبات تناسب احتياجك", description: "شارك المسار والوقت وتفاصيل الركاب المهمة لرحلتك.", icon: "clipboard" },
      { title: "تأكيد التفاصيل قبل السفر", description: "يتم تأكيد التوفر وتفاصيل المركبة والسعر مباشرة قبل الحجز.", icon: "badge-check" },
      { title: "طريقة واضحة للاستفسار", description: "أرسل طلبك عبر نموذج الحجز وتابع باستخدام بيانات الاتصال المعتمدة.", icon: "messages" },
    ],
    faqTitle: "أسئلة شائعة حول النقل",
    faqs: [
      { question: "كيف أطلب رحلة؟", answer: "استخدم نموذج استفسار الحجز لإضافة موقع الانطلاق والوجهة والتاريخ وعدد الركاب. يمكن للشركة تأكيد التوفر والتفاصيل بعد إضافة بيانات الاتصال." },
      { question: "ما المناطق التي تغطيها الخدمة؟", answer: "مواقع الخدمة الحالية هي الرياض والدمام وجدة ومكة المكرمة والمدينة المنورة والطائف وتبوك وحفر الباطن وأبها." },
      { question: "ما المركبات المتاحة؟", answer: "يتم تأكيد توفر المركبات ومواصفاتها لكل استفسار. لا ننشر هنا سعة أو مواصفات غير مؤكدة." },
    ],
    coverage: {
      eyebrow: "مواقع الخدمة",
      title: "المناطق التي نقدم فيها خدمات النقل",
      description: "تظهر هذه المواقع على خريطة نطاق الخدمة الخاصة بالشركة.",
      listLabel: "المواقع",
      imageAlt: "مواقع خدمات النقل: الرياض، الدمام، جدة، مكة المكرمة، المدينة المنورة، الطائف، تبوك، حفر الباطن وأبها.",
      locations: ["الرياض", "الدمام", "جدة", "مكة المكرمة", "المدينة المنورة", "الطائف", "تبوك", "حفر الباطن", "أبها"],
    },
    closingTitle: "هل تخطط لرحلة؟",
    closingText: "شارك التفاصيل واستفسر عن التوفر والترتيبات والأسعار الحالية.",
  },
  pages: {
    about: {
      title: "من نحن | شركة تارجت للنقل",
      description: "تعرف على نهج شركة تارجت للنقل والمعلومات التي ينبغي تأكيدها قبل الرحلة.",
      eyebrow: "من نحن",
      heading: "نقل يضع احتياجات الناس في الاعتبار.",
      intro: "تُعرض شركة تارجت للنقل هنا بصفتها مزوداً لخدمات النقل. لم يتم تزويدنا بتاريخ الشركة أو مواقع التشغيل أو الشهادات، لذلك لا نذكر ادعاءات غير مؤكدة.",
      sections: [
        { title: "هدفنا", description: "تسهيل مناقشة الرحلة وتأكيد تفاصيلها العملية قبل تنفيذها.", cards: [
          { title: "رسالتنا", description: "فهم كل طلب بوضوح وتأكيد تفاصيل الخدمة قبل السفر.", icon: "target" },
          { title: "رؤيتنا", description: "توفير طريقة مباشرة للأفراد والمؤسسات لبحث احتياجات النقل.", icon: "eye" },
        ] },
        { title: "نهجنا في التعامل مع الطلبات", cards: [
          { title: "الوضوح", description: "تأكيد المسار والجدول والتوفر والسعر قبل الحجز.", icon: "scan" },
          { title: "الاهتمام", description: "مراعاة احتياجات الركاب والأمتعة وإمكانية الوصول عند ترتيب الرحلة.", icon: "heart-handshake" },
          { title: "الموثوقية", description: "مشاركة التفاصيل المؤكدة مسبقاً والتواصل مباشرة عند حدوث أي تغيير.", icon: "check-circle" },
        ] },
      ],
    },
    services: {
      title: "خدمات النقل | شركة تارجت للنقل",
      description: "استكشف خيارات الاستفسار عن النقل للأعمال والرحلات الخاصة والمطار.",
      eyebrow: "الخدمات",
      heading: "خدمة تناسب طبيعة رحلتك.",
      intro: "اشرح وجهتك ومتطلبات الرحلة. يتم تأكيد المسارات والتوفر وشروط الخدمة والأسعار مباشرة قبل الحجز.",
      sections: [
        { title: "خيارات النقل", cards: [
          { title: "النقل للأعمال", description: "استفسر عن ترتيبات نقل الموظفين أو الاجتماعات أو زوار الأعمال.", icon: "briefcase" },
          { title: "نقل الركاب الخاص", description: "استفسر عن رحلة تناسب مسارك ووقتك واحتياجات الركاب.", icon: "users" },
          { title: "التوصيل من وإلى المطار", description: "أضف اسم المطار وموعد الرحلة ومتطلبات الاستقبال أو التوصيل.", icon: "plane" },
          { title: "رحلات المجموعات", description: "أضف عدد الركاب والأمتعة لمناقشة الترتيبات المناسبة.", icon: "users-round" },
        ] },
        { title: "ما المعلومات التي تضاف للطلب؟", description: "تساعد بعض التفاصيل على الرد بتوفر وخطوات تالية مناسبة.", cards: [
          { title: "المسار والوقت", description: "أضف موقع الانطلاق والوجهة والتاريخ والوقت المفضل.", icon: "map-pinned" },
          { title: "احتياجات الركاب", description: "اذكر عدد الركاب والأمتعة وأي احتياجات لإمكانية الوصول.", icon: "accessibility" },
          { title: "تأكيد الخدمة", description: "أكد المركبة والسعر وشروط الإلغاء وتعليمات الاستقبال قبل السفر.", icon: "list-checks" },
        ] },
      ],
      faqs: [
        { question: "هل يمكنني حجز النقل لشركة؟", answer: "استخدم نموذج الاستفسار لوصف المسار والجدول واحتياجات الركاب. يجب تأكيد التوفر والشروط مباشرة." },
        { question: "هل يمكن ترتيب الاستقبال من المطار؟", answer: "يمكن إضافة اسم المطار وموعد الرحلة واحتياجات الاستقبال أو التوصيل. يتم تأكيد التوفر لكل طلب." },
        { question: "كيف يتم تأكيد السعر؟", answer: "اطلب عرض سعر مع إضافة المسار والوقت. أكد السعر النهائي والشروط مع الشركة قبل الحجز." },
      ],
    },
    fleet: {
      title: "الأسطول والمركبات | شركة تارجت للنقل",
      description: "استفسر عن توفر المركبات ومواصفاتها بما يناسب احتياجات النقل.",
      eyebrow: "الأسطول",
      heading: "اختيار المركبة يبدأ من متطلباتك.",
      intro: "لم يتم التحقق من طرازات المركبات أو سعة الركاب أو الأمتعة أو تفاصيل إمكانية الوصول للنشر. شارك متطلبات رحلتك لتأكيد الخيارات المتاحة.",
      sections: [
        { title: "ناقش فئة المركبة المناسبة", cards: [
          { title: "سيارة خاصة", description: "استفسر عن خيارات الأفراد أو المجموعات الصغيرة. يجب تأكيد عدد الركاب والأمتعة.", icon: "car-front" },
          { title: "مركبة متعددة الركاب", description: "لرحلات المجموعات، أضف العدد الدقيق للركاب والأمتعة قبل التأكد من الملاءمة.", icon: "van" },
          { title: "مركبة للأعمال", description: "ناقش خيارات المركبات وترتيبات النقل لرحلات الأعمال.", icon: "briefcase-business" },
          { title: "نقل مهيأ لذوي الإعاقة", description: "اشرح متطلبات الحركة أو إمكانية الوصول للتحقق من الخيارات المناسبة.", icon: "accessibility" },
        ] },
        { title: "تأكد قبل الحجز", description: "اطلب تأكيد طراز المركبة والمقاعد وسعة الأمتعة وخصائص الوصول والسعر الإجمالي كتابةً.", cards: [] },
      ],
      faqs: [
        { question: "كم راكباً تتسع له كل مركبة؟", answer: "لم يتم التحقق من سعة الركاب. أكد عدد المقاعد والحمولة النظامية للمركبة المحددة قبل الحجز." },
        { question: "هل يمكنني اصطحاب الأمتعة؟", answer: "تختلف سعة الأمتعة حسب المركبة. اذكر عدد الحقائب وحجمها التقريبي وأكد السعة قبل السفر." },
      ],
    },
    booking: {
      title: "الحجز والعروض | شركة تارجت للنقل",
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
      title: "شراكات الأعمال | شركة تارجت للنقل",
      description: "ناقش إمكانية التعاون في مجال النقل مع شركة تارجت للنقل.",
      eyebrow: "الشركاء",
      heading: "لنتحدث عن فرص التعاون.",
      intro: "نرحب باستفسارات المؤسسات التي تبحث عن تعاون في النقل. شارك متطلباتك لتقييم ملاءمة الخدمة والتغطية والشروط.",
      action: "partner",
      sections: [
        { title: "مناقشات الشراكة", cards: [
          { title: "رحلات الشركات", description: "ناقش احتياجات نقل الموظفين أو الزوار أو الاجتماعات والجداول المتوقعة.", icon: "building-2" },
          { title: "السفر والضيافة", description: "استكشف إمكانية تكامل ترتيبات النقل مع خدمات الضيوف.", icon: "hotel" },
          { title: "تنظيم الفعاليات", description: "أضف مواعيد الفعاليات والمسارات وعدد الركاب للنقاش الأولي.", icon: "calendar-days" },
        ] },
        { title: "ما المعلومات التي نحتاجها؟", description: "تساعد نبذة قصيرة على بدء نقاش مثمر.", cards: [
          { title: "مؤسستك", description: "أخبرنا بنشاط المؤسسة وبيانات الشخص المسؤول.", icon: "contact-round" },
          { title: "متطلباتك", description: "أضف المواقع وحجم الرحلات المتوقع والجدول ومتطلبات الخدمة.", icon: "notebook-text" },
          { title: "الخطوات التالية", description: "يتم تأكيد الشروط التجارية والتغطية والقدرات مباشرة؛ إرسال الاستفسار لا يعني وجود شراكة.", icon: "messages-square" },
        ] },
      ],
    },
    contact: {
      title: "اتصل بنا | شركة تارجت للنقل",
      description: "تواصل مع شركة تارجت للنقل للاستفسار عن خدمة أو رحلة.",
      eyebrow: "اتصل بنا",
      heading: "أخبرنا كيف يمكننا مساعدتك.",
      intro: "استخدم النموذج لإعداد استفسارك. لم يتم تزويدنا برقم هاتف أو بريد إلكتروني أو موقع مكتب معتمد، لذلك لا نعرض معلومات غير مؤكدة.",
      action: "contact",
      sections: [
        { title: "بيانات التواصل", description: "ستضاف بيانات التواصل بعد تزويدنا بمعلومات معتمدة.", cards: [
          { title: "الهاتف", description: "رقم هاتف الشركة: يرجى تزويده.", icon: "phone" },
          { title: "البريد الإلكتروني", description: "بريد الشركة: يرجى تزويده.", icon: "mail" },
          { title: "موقع المكتب", description: "لا يتوفر عنوان مكتب أو موقع خريطة معتمد.", icon: "map-pin" },
        ] },
      ],
    },
  },
};

export function getCopy(locale: Locale): Copy {
  return locale === "ar" ? ar : en;
}
