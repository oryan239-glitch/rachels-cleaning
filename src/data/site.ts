/**
 * Single source of truth for Rachel's Cleaning Services.
 * Edit this file to update name, phone, email, address, CTAs, and content.
 * Cleaning-only branding — no Home Watch.
 */
export const site = {
  name: "Rachel's Cleaning Services",
  legalName: "Rachel's Cleaning Services LLC",
  tagline: "Professional Cleaning Services You Can Trust",
  owner: "Rachel Ryan",
  phone: "(239) 345-0000",
  phoneHref: "tel:+12393450000",
  email: "RACHELSCLEANING123@gmail.com",
  emailHref: "mailto:RACHELSCLEANING123@gmail.com",
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
    secondary: "Get a Quote!",
    call: "Call Now",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Cleaning Services", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
  ],
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-81.85%2C26.42%2C-81.75%2C26.52&layer=mapnik&marker=26.47%2C-81.80",
  mapLink:
    "https://www.openstreetmap.org/?mlat=26.47&mlon=-81.80#map=13/26.47/-81.80",
  images: {
    hero: "/images/kitchen-dark-cabinets.jpg",
    og: "/images/kitchen-dark-cabinets.jpg",
    about: "/images/kitchen-white-peonies.jpg",
    portrait: "/images/rachel-portrait.jpg",
    feature: "/images/living-dining-open.jpg",
    featureAlt: "/images/living-room-modern.jpg",
    exterior: "/images/home-exterior-dusk.jpg",
    texture: "/images/texture-soft-light.jpg",
  },
} as const;

export const services = [
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean for a truly spotless home—ideal when you want every surface refreshed.",
    image: "/images/kitchen-cabinets-open.jpg",
    accent: "pink" as const,
  },
  {
    id: "rental-move-out",
    title: "Rental Move-Out Cleaning",
    description:
      "Thorough cleaning for rental properties so homes are ready for new tenants and inspections.",
    image: "/images/floors-polished.jpg",
    accent: "white" as const,
  },
  {
    id: "new-construction",
    title: "New Construction Cleaning",
    description:
      "Post-construction cleanup that clears dust and debris so new spaces are move-in ready.",
    image: "/images/before-after-hallway.jpg",
    accent: "pink" as const,
  },
  {
    id: "eviction-cleanouts",
    title: "Eviction Cleanouts",
    description:
      "Fast, efficient cleanouts for vacated properties so you can turn units around quickly.",
    image: "/images/detail-ceiling-fan-dust.jpg",
    accent: "white" as const,
  },
  {
    id: "airbnb-cleaning",
    title: "Airbnb Cleaning",
    description:
      "Reliable turnover cleaning for vacation rentals—guest-ready between every stay.",
    image: "/images/bedroom-beach-turnover.jpg",
    accent: "pink" as const,
  },
  {
    id: "airbnb-management",
    title: "Airbnb Management Support",
    description:
      "Cleaning-focused support that keeps listings looking sharp with less day-to-day stress.",
    image: "/images/bedroom-made.jpg",
    accent: "white" as const,
  },
  {
    id: "ozone-cleaning",
    title: "Ozone Cleaning",
    description:
      "Advanced ozone treatment to neutralize odors and help purify indoor spaces.",
    image: "/images/bathroom-modern.jpg",
    accent: "pink" as const,
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description:
      "Professional commercial cleaning that keeps workspaces fresh, tidy, and welcoming.",
    image: "/images/living-room-corner.jpg",
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
    src: "/images/lanai-patio.jpg",
    alt: "Screened lanai ready for guests",
  },
  {
    src: "/images/dining-water-view.jpg",
    alt: "Dining room with water view",
  },
  {
    src: "/images/bathroom-modern.jpg",
    alt: "Freshly staged modern bathroom",
  },
  {
    src: "/images/home-exterior-front.jpg",
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
