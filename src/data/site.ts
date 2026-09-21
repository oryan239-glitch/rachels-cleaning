/**
 * Single source of truth for Rachel's Cleaning and Home Watch Services.
 * Edit this file to update name, phone, email, address, CTAs, and content.
 */
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const site = {
  name: "Rachel's Cleaning and Home Watch Services",
  legalName: "Rachel's Cleaning and Home Watch Services LLC",
  tagline: "Professional Cleaning and Home Watch Services You Can Trust",
  owner: "Rachel Ryan",
  phone: "(239) 345-0000",
  phoneHref: "tel:+12393450000",
  email: "rachelscleaning123@gmail.com",
  emailHref: "mailto:rachelscleaning123@gmail.com",
  address: {
    line1: "San Carlos Park",
    line2: "Fort Myers, FL 33967",
    full: "San Carlos Park, Fort Myers, FL 33967",
    city: "Fort Myers",
    region: "FL",
    postalCode: "33967",
    country: "US",
  },
  serviceArea: "Fort Myers, San Carlos Park, and Southwest Florida",
  url: "https://rachelscleaning.net",
  cta: {
    primary: "Request A Quote",
    call: "Call Now",
  },
  nav: [
    { label: "Home", href: base },
    { label: "Cleaning Services", href: `${base}#services` },
    { label: "About Us", href: `${base}#about` },
    { label: "Contact Us", href: `${base}#contact` },
  ],
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-81.85%2C26.42%2C-81.75%2C26.52&layer=mapnik&marker=26.47%2C-81.80",
  mapLink:
    "https://www.openstreetmap.org/?mlat=26.47&mlon=-81.80#map=13/26.47/-81.80",
  images: {
    hero: `${base}images/kitchen-dark-cabinets.jpg`,
    og: `${base}images/kitchen-dark-cabinets.jpg`,
    about: `${base}images/kitchen-white-peonies.jpg`,
    portrait: `${base}images/rachel-portrait.jpg`,
    feature: `${base}images/living-dining-open.jpg`,
    featureAlt: `${base}images/living-room-modern.jpg`,
    exterior: `${base}images/home-exterior-dusk.jpg`,
    texture: `${base}images/texture-soft-light.jpg`,
  },
} as const;

export const services = [
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean for a truly spotless home—ideal when you want every surface refreshed.",
    details:
      "Our deep cleaning service goes beyond the surface to eliminate dust, grime, and allergens from every corner of your home. We meticulously clean behind appliances, inside cabinets, and all those hard-to-reach spots that regular cleaning misses.",
    includes: [
      "Complete sanitization of all surfaces",
      "Behind and under appliance cleaning",
      "Detailed baseboard and trim cleaning",
      "Window sill and track cleaning",
      "Light fixture and fan cleaning",
    ],
    image: `${base}images/kitchen-cabinets-open.jpg`,
    accent: "pink" as const,
  },
  {
    id: "rental-move-out",
    title: "Rental Move-Out Cleaning",
    description:
      "Thorough cleaning for rental properties so homes are ready for new tenants and inspections.",
    details:
      "Our rental move-out cleaning is designed to help landlords and tenants pass inspections with confidence. We leave kitchens, baths, floors, and living areas thoroughly cleaned so the property is ready for the next occupant.",
    includes: [
      "Kitchen appliances, counters, and cabinets wiped clean",
      "Bathroom deep clean and sanitation",
      "Floor vacuuming, sweeping, and mopping",
      "Dusting of surfaces, baseboards, and fixtures",
      "Trash removal and final walkthrough presentation",
    ],
    image: `${base}images/floors-polished.jpg`,
    accent: "white" as const,
  },
  {
    id: "new-construction",
    title: "New Construction Cleaning",
    description:
      "Post-construction cleanup that clears dust and debris so new spaces are move-in ready.",
    details:
      "Our new construction cleaning service is designed to remove dust, debris, and residue left behind after construction or renovation. We ensure your space is clean, safe, and move-in ready by carefully handling every surface and detail.",
    includes: [
      "Removal of construction dust from all surfaces",
      "Cleaning of floors, walls, and baseboards",
      "Window, glass, and frame cleaning",
      "Detailed cleaning of kitchens and bathrooms",
      "Light fixture, vent, and ceiling fan dusting",
    ],
    image: `${base}images/before-after-hallway.jpg`,
    accent: "pink" as const,
  },
  {
    id: "eviction-cleanouts",
    title: "Eviction Cleanouts",
    description:
      "Fast, efficient cleanouts for vacated properties so you can turn units around quickly.",
    details:
      "Our eviction cleanout service is designed to quickly restore your property after a tenant move-out. We remove leftover items, clean thoroughly, and prepare the space for new occupants—saving you time and hassle.",
    includes: [
      "Removal of trash, debris, and unwanted items",
      "Deep cleaning of kitchens and bathrooms",
      "Floor cleaning (vacuuming, sweeping, mopping)",
      "Dusting of surfaces, baseboards, and fixtures",
      "Spot cleaning of walls, doors, and high-touch areas",
    ],
    image: `${base}images/detail-ceiling-fan-dust.jpg`,
    accent: "white" as const,
  },
  {
    id: "airbnb-cleaning",
    title: "Airbnb Cleaning",
    description:
      "Reliable turnover cleaning for vacation rentals—guest-ready between every stay.",
    details:
      "Our Airbnb cleaning service is designed for fast, reliable turnovers between guests. We ensure your property is spotless, sanitized, and perfectly prepared to deliver a 5-star experience every time.",
    includes: [
      "Complete cleaning of all rooms and guest areas",
      "Bed making and fresh linen setup",
      "Bathroom sanitization and restocking essentials",
      "Kitchen cleaning and surface disinfection",
      "Trash removal and final presentation check",
    ],
    image: `${base}images/bedroom-beach-turnover.jpg`,
    accent: "pink" as const,
  },
  {
    id: "airbnb-management",
    title: "Airbnb Management Support",
    description:
      "Cleaning-focused support that keeps listings looking sharp with less day-to-day stress.",
    details:
      "Our Airbnb management support is designed to take the stress out of hosting. From maintaining your property to ensuring it’s always guest-ready, we handle the cleaning details so you can enjoy consistent bookings and better reviews.",
    includes: [
      "Regular property cleaning and upkeep",
      "Guest-ready setup and presentation",
      "Coordination of cleaning schedules",
      "Monitoring property condition between stays",
      "Quick turnaround support for new bookings",
    ],
    image: `${base}images/bedroom-made.jpg`,
    accent: "white" as const,
  },
  {
    id: "ozone-cleaning",
    title: "Ozone Cleaning",
    description:
      "Advanced ozone treatment to neutralize odors and help purify indoor spaces.",
    details:
      "Our ozone cleaning service provides advanced odor removal and deep sanitization for your space. Using ozone technology, we eliminate bacteria, viruses, smoke, and stubborn odors at the source—leaving your environment fresh, clean, and purified.",
    includes: [
      "Odor removal from smoke, pets, and mold",
      "Air and surface disinfection",
      "Treatment of rooms, furniture, and fabrics",
      "Elimination of bacteria and airborne contaminants",
      "Safe and effective deep purification process",
    ],
    image: `${base}images/bathroom-modern.jpg`,
    accent: "pink" as const,
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description:
      "Professional commercial cleaning that keeps workspaces fresh, tidy, and welcoming.",
    details:
      "Our office cleaning service is designed to keep your workspace clean, organized, and professional. We ensure a hygienic environment for your team and clients, helping improve productivity and create a positive impression.",
    includes: [
      "Cleaning of desks, workstations, and common areas",
      "Floor care (vacuuming, sweeping, mopping)",
      "Restroom cleaning and sanitization",
      "Trash removal and bin management",
      "Disinfection of high-touch surfaces (doors, handles, switches)",
    ],
    image: `${base}images/living-room-corner.jpg`,
    accent: "white" as const,
  },
] as const;

export const aboutHighlights = [
  "Customized Cleaning Plans",
  "Trained & Trusted Professionals",
  "Reliable Local Southwest Florida Team",
  "Eco-Conscious Products Available",
] as const;

export const stats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "8+", label: "Service Types" },
  { value: "5★", label: "Client Reviews" },
  { value: "SWFL", label: "Local & Trusted" },
] as const;

export const gallery = [
  {
    src: `${base}images/lanai-patio.jpg`,
    alt: "Screened lanai ready for guests",
  },
  {
    src: `${base}images/dining-water-view.jpg`,
    alt: "Dining room with water view",
  },
  {
    src: `${base}images/bathroom-modern.jpg`,
    alt: "Freshly staged modern bathroom",
  },
  {
    src: `${base}images/home-exterior-front.jpg`,
    alt: "Southwest Florida home exterior",
  },
] as const;

export const faqs = [
  {
    question: "What's included in your cleaning service?",
    answer:
      "Our standard service covers dusting, vacuuming, mopping, kitchen surfaces, and bathroom sanitation. We tailor each visit to your home and priorities.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No—we bring professional-grade supplies and equipment. Prefer specific products? Just let us know when you book.",
  },
  {
    question: "How long does a typical cleaning take?",
    answer:
      "Most homes take 2–4 hours depending on size, condition, and service type. Deep cleans and move-outs may take longer.",
  },
  {
    question: "Can I schedule recurring cleanings?",
    answer:
      "Absolutely. Weekly, bi-weekly, and monthly schedules are available so your home stays consistently fresh.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve Fort Myers, San Carlos Park, and surrounding Southwest Florida communities. Call us to confirm your address.",
  },
] as const;

export const testimonials = [
  {
    name: "Emma",
    quote:
      "Rachel's team was efficient and left my home spotless. Highly recommend!",
  },
  {
    name: "Olivia",
    quote:
      "The results were fantastic, and the team was so friendly. Will definitely book again!",
  },
  {
    name: "Ava",
    quote: "They made my home feel brand new. Thank you!",
  },
  {
    name: "Sophia",
    quote:
      "Wonderful experience! The cleaning crew was professional and thorough. I'll be using their services again soon!",
  },
  {
    name: "Isabella",
    quote:
      "I've been using their cleaning service for the past six months, and I couldn't be happier! The team is always on time, professional, and thorough.",
  },
  {
    name: "Mia",
    quote:
      "From booking to cleaning, the process was smooth and hassle-free. The results were amazing, and I'm so happy with the service.",
  },
] as const;
