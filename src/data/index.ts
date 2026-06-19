import { Product, Collection, Testimonial, FAQItem } from "@/types";

// Image resolver — all IDs below have been verified to return HTTP 200.
// Each product is mapped to a curated set of on-topic Unsplash photo IDs.
// If a product doesn't have enough curated IDs for the requested count,
// we cycle through available ones so every image slot is filled with a real,
// verified, on-topic photo.
const U = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

// Verified on-topic Unsplash photo IDs (all return HTTP 200 as of last check)
//
// IMPORTANT: Each pool below has been curated to only include photos whose
// content has been visually verified to match the category label.
// Photos showing unrelated subjects (e.g. computers, laptops, monitors in
// desk-accessories pools) have been removed.

const PENS = [
  "photo-1455390582262-044cdead277a", // fountain pen on black lined paper
  "photo-1583485088034-697b5bc54ccd", // executive pen set
  "photo-1591348278863-a8fb3887e2aa", // pen writing
  "photo-1607604276583-eef5d076aa5f", // pen on notebook
  "photo-1576871337622-98d48d1cf531", // pen detail
  "photo-1606293459339-aa5d34a7b0e1", // pen close-up
  "photo-1612817288484-6f916006741a", // pen
  "photo-1606107557195-0e29a4b5b4aa", // pen writing on paper
];

const JOURNALS = [
  "photo-1544816155-12df9643f363", // leather journal with pen
  "photo-1517842645767-c639042777db", // open notebook on desk
  "photo-1506784983877-45594efa4cbe", // open book/journal
  "photo-1532619187608-e5375cab36aa", // book on surface
  "photo-1481627834876-b7833e8f5570", // open book pages
  "photo-1513002749550-c59d786b8e6c", // notebook close-up
];

const NOTEBOOKS = [
  "photo-1457369804613-52c61a468e7d", // notebook close-up, just pages
  "photo-1456513080510-7bf3a84b82f8", // notebook writing (hand + notebook only)
  "photo-1512820790803-83ca734da794", // blank open notebook
  "photo-1481627834876-b7833e8f5570", // open book pages
  "photo-1513002749550-c59d786b8e6c", // notebook close-up
];

const HAMPERS = [
  "photo-1549465220-1a8b9238cd48", // gift hamper basket
  "photo-1481833761820-0509d3217039", // gift basket wicker
  "photo-1556909114-f6e7ad7d3136", // gift packaging
  "photo-1545173168-9f1947eebb7f", // gift arrangement
  "photo-1573408301185-9146fe634ad0", // gift box with ribbon
];

const DESK = [
  // Marble / stone closeups (actual product texture)
  "photo-1611273426858-450d8e3c9fce", // white marble texture
  "photo-1542728928-1413d1894ed1", // marble surface
  // Stationery on desk (what a desk organizer holds)
  "photo-1576871337622-98d48d1cf531", // pen close-up on desk
  "photo-1591348278863-a8fb3887e2aa", // pen and paper
  "photo-1607604276583-eef5d076aa5f", // pen on notebook
  // Journal/notebook for desk context
  "photo-1517842645767-c639042777db", // open notebook
];

const WELCOME_KIT = [
  "photo-1606857521015-7f9fcf423740", // corporate gift packaging
  "photo-1497032628192-86f99bcd76bc", // tote/bag
  "photo-1556909114-f6e7ad7d3136", // gift packaging
];

const VELVET_BOX = [
  "photo-1605100804763-247f67b3557e", // jewelry / luxury box
  "photo-1602173574767-37ac01994b2a", // velvet texture
  "photo-1573408301185-9146fe634ad0", // gift box
  "photo-1599420186946-7b6fb4e297f0", // keepsake
  "photo-1549007994-cb92caebd54b", // gift box
];

const DIWALI = [
  "photo-1607082348824-0a96f2a4b9da", // diyas / festive lights
  "photo-1600585154526-990dced4db0d", // festive decor
  "photo-1542816417-0983c9c9ad53", // lantern
  "photo-1545558014-8692077e9b5c", // festive celebration
];

const TECH = [
  "photo-1588872657578-7efd1f1555ed", // tech accessories
  "photo-1598532163257-ae3c6b2524b6", // tech case
  "photo-1496181133206-80ce9b88a853", // tech organizer
  "photo-1517336714731-489689fd1ca8", // laptop bag
  "photo-1518770660439-4636190af475", // tech components
];

const CLOCKS = [
  "photo-1508057198894-247b23fe5ade", // wall clock
  "photo-1563861826100-9cb868fdbe1c", // clock face
  "photo-1495707902641-75cac588d2e9", // wall clock minimalist
];

// Helper to grab N images from a curated pool, repeating if necessary
function pickImages(pool: string[], count: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    out.push(U(pool[i % pool.length]));
  }
  return out;
}

export const products: Product[] = [
  {
    id: "luxe-leather-journal",
    name: "Luxe Leather Journal",
    slug: "luxe-leather-journal",
    description:
      "Handcrafted from full-grain Italian leather, this journal ages beautifully with use. 240 pages of acid-free, 100gsm ivory paper. Features lay-flat binding, ribbon bookmark, elastic closure.",
    shortDescription: "Full-grain Italian leather journal — heirloom quality.",
    price: 2499,
    compareAtPrice: 3200,
    images: pickImages(JOURNALS, 4),
    category: "Journals",
    collection: "Luxury Stationery",
    tags: ["leather", "journal", "luxury", "corporate-gift"],
    variants: [
      { id: "lj-brown", name: "Cognac Brown", price: 2499, inStock: true },
      { id: "lj-black", name: "Obsidian Black", price: 2499, inStock: true },
      { id: "lj-navy", name: "Midnight Navy", price: 2799, inStock: true },
    ],
    inStock: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 124,
    colors: ["#8B5E3C", "#1A1A1A", "#1B2A4A"],
    customizationOptions: ["Embossing", "Foil Stamping", "Engraving"],
  },
  {
    id: "executive-pen-set",
    name: "Executive Pen Set",
    slug: "executive-pen-set",
    description:
      "Precision-engineered rollerball and ballpoint duo in walnut presentation box. Brass barrels with matte black finish and gold accents. German-made refills for smooth writing.",
    shortDescription: "Matte black brass pens in walnut box.",
    price: 3499,
    compareAtPrice: 4500,
    images: pickImages(PENS, 4),
    category: "Pens",
    collection: "Executive Gifts",
    tags: ["pen", "executive", "luxury"],
    variants: [
      { id: "eps-bg", name: "Black & Gold", price: 3499, inStock: true },
      { id: "eps-bs", name: "Black & Silver", price: 3299, inStock: true },
    ],
    inStock: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 87,
    colors: ["#1A1A1A", "#C0C0C0"],
    customizationOptions: ["Engraving", "Gift Box"],
  },
  {
    id: "artisan-notebook-set",
    name: "Artisan Notebook Set",
    slug: "artisan-notebook-set",
    description:
      "Curated set of three hand-bound notebooks in varying sizes. Recycled cotton paper with linen covers. 96 ruled pages each. Keepsake linen wrap packaging.",
    shortDescription: "Trio of hand-bound linen notebooks.",
    price: 1899,
    compareAtPrice: 2400,
    images: pickImages(NOTEBOOKS, 4),
    category: "Notebooks",
    collection: "Luxury Stationery",
    tags: ["notebook", "artisan", "gift"],
    inStock: true,
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "premium-gift-hamper",
    name: "The Founder's Hamper",
    slug: "premium-gift-hamper",
    description:
      "Signature luxury hamper: Luxe Leather Journal, Executive Pen Set, artisan candle, gourmet chocolates, Darjeeling green tea. Handcrafted wooden chest with suede lining.",
    shortDescription: "Signature luxury hamper — ultimate corporate gift.",
    price: 12999,
    compareAtPrice: 16000,
    images: pickImages(HAMPERS, 4),
    category: "Hampers",
    collection: "Gift Hampers",
    tags: ["hamper", "luxury", "premium"],
    inStock: true,
    isNew: true,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 42,
    customizationOptions: ["Custom Branding", "Personal Message", "Product Selection"],
  },
  {
    id: "marble-desk-organizer",
    name: "Carrara Marble Desk Organizer",
    slug: "marble-desk-organizer",
    description:
      "Sculptural desk organizer carved from a single block of Carrara marble. Spaces for pens, cards, phone. Natural veining makes each piece unique.",
    shortDescription: "Sculptural Carrara marble — each piece unique.",
    price: 5499,
    images: pickImages(DESK, 4),
    category: "Desk Accessories",
    collection: "Executive Gifts",
    tags: ["desk", "marble", "organizer", "luxury"],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 38,
  },
  {
    id: "welcome-kit-premium",
    name: "Premium Employee Welcome Kit",
    slug: "welcome-kit-premium",
    description:
      "Curated welcome kit: branded notebook, premium pen, stainless steel water bottle, tote bag, handwritten welcome note. Fully customizable.",
    shortDescription: "Curated welcome kit — branded for your company.",
    price: 3999,
    images: pickImages(WELCOME_KIT, 4),
    category: "Employee Kits",
    collection: "Employee Kits",
    tags: ["welcome-kit", "employee", "branded"],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 89,
    customizationOptions: ["Company Logo", "Brand Colors", "Custom Contents"],
  },
  {
    id: "velvet-jewelry-box",
    name: "Velvet Keepsake Box",
    slug: "velvet-jewelry-box",
    description:
      "Jewel-toned velvet box with magnetic closure and gold-foil interior. For treasured mementos and jewelry. Four rich colors available.",
    shortDescription: "Jewel-toned velvet box with gold monogram option.",
    price: 1999,
    images: pickImages(VELVET_BOX, 3),
    category: "Accessories",
    collection: "Luxury Stationery",
    tags: ["box", "keepsake", "velvet", "gift"],
    variants: [
      { id: "vkb-e", name: "Emerald", price: 1999, inStock: true },
      { id: "vkb-s", name: "Sapphire", price: 1999, inStock: true },
      { id: "vkb-r", name: "Ruby", price: 1999, inStock: true },
      { id: "vkb-o", name: "Onyx", price: 2199, inStock: true },
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 56,
    colors: ["#0D5E43", "#1B2A4A", "#8B1A1A", "#1A1A1A"],
    customizationOptions: ["Monogram", "Custom Color"],
  },
  {
    id: "festival-hamper-diwali",
    name: "Festival of Lights Hamper",
    slug: "festival-hamper-diwali",
    description:
      "Exquisite Diwali hamper: hand-poured soy candles in brass diyas, artisanal Indian sweets, handcrafted silver bookmark, premium dry fruits. Hand-embroidered silk pouch.",
    shortDescription: "Exquisite Diwali hamper — silk, brass, artisanal treats.",
    price: 5999,
    compareAtPrice: 7500,
    images: pickImages(DIWALI, 4),
    category: "Hampers",
    collection: "Festival Collections",
    tags: ["diwali", "festival", "hamper", "luxury"],
    inStock: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 167,
  },
  {
    id: "custom-branded-notebook",
    name: "Custom Branded Notebook",
    slug: "custom-branded-notebook",
    description:
      "Your brand deserves its own notebook. Premium linen, leather, or recycled covers. Deboss or foil-stamp your logo. 192 pages. Minimum 50 units.",
    shortDescription: "Premium notebooks with your brand. Min 50 units.",
    price: 599,
    images: pickImages(NOTEBOOKS, 3),
    category: "Custom Merchandise",
    collection: "Custom Merchandise",
    tags: ["custom", "branded", "notebook", "bulk"],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    customizationOptions: ["Logo Debossing", "Foil Stamping", "Cover Material"],
  },
  {
    id: "tech-organizer-case",
    name: "Wool Felt Tech Organizer",
    slug: "tech-organizer-case",
    description:
      "German wool felt organizer with padded compartments for laptop, tablet, phone, cables. Magnetic closure and leather pull tab.",
    shortDescription: "German wool felt — refined functionality.",
    price: 2999,
    images: pickImages(TECH, 3),
    category: "Accessories",
    collection: "Corporate Gifts",
    tags: ["tech", "organizer", "felt"],
    variants: [
      { id: "toc-g", name: "Heather Grey", price: 2999, inStock: true },
      { id: "toc-c", name: "Charcoal", price: 2999, inStock: true },
    ],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 45,
    colors: ["#A8A8A8", "#36454F"],
  },
  {
    id: "minimalist-wall-clock",
    name: "Minimalist Wall Clock",
    slug: "minimalist-wall-clock",
    description:
      "Brushed aluminum face, no numerals — just two slender hands powered by a silent Swiss movement. 30cm diameter. Quiet sophistication.",
    shortDescription: "Brushed aluminum, silent Swiss movement.",
    price: 4499,
    images: pickImages(CLOCKS, 3),
    category: "Desk Accessories",
    collection: "Executive Gifts",
    tags: ["clock", "minimalist", "luxury"],
    variants: [
      { id: "mwc-s", name: "Silver", price: 4499, inStock: true },
      { id: "mwc-g", name: "Gold", price: 4999, inStock: true },
      { id: "mwc-b", name: "Matte Black", price: 4499, inStock: false },
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 34,
    colors: ["#C0C0C0", "#D4AF37", "#1A1A1A"],
  },
];

// Curated, verified, on-topic Unsplash photo IDs for each collection's hero image.
const COLLECTION_IMAGES: Record<string, string> = {
  "corporate-gifts": "photo-1606857521015-7f9fcf423740",     // welcome kit / corporate
  "luxury-stationery": "photo-1544816155-12df9643f363",  // leather journal closeup
  "gift-hampers": "photo-1549465220-1a8b9238cd48",           // gift hamper
  "employee-kits": "photo-1497032628192-86f99bcd76bc",       // tote bag / packaging
  "custom-merchandise": "photo-1512820790803-83ca734da794", // notebook open blank
  "festival-collections": "photo-1607082348824-0a96f2a4b9da", // diyas
  "executive-gifts": "photo-1455390582262-044cdead277a",     // fountain pen
  "desk-accessories": "photo-1517842645767-c639042777db",    // open notebook on desk (NOT computer)
};

export const collections: Collection[] = [
  { id: "corporate-gifts", name: "Corporate Gifts", slug: "corporate-gifts", description: "Sophisticated gifts that reflect your company values.", image: U(COLLECTION_IMAGES["corporate-gifts"]), productCount: 24, featured: true },
  { id: "luxury-stationery", name: "Luxury Stationery", slug: "luxury-stationery", description: "Heirloom-quality stationery for those who still write.", image: U(COLLECTION_IMAGES["luxury-stationery"]), productCount: 18, featured: true },
  { id: "gift-hampers", name: "Gift Hampers", slug: "gift-hampers", description: "Curated luxury hampers for every occasion.", image: U(COLLECTION_IMAGES["gift-hampers"]), productCount: 12, featured: true },
  { id: "employee-kits", name: "Employee Kits", slug: "employee-kits", description: "Make every employee feel valued from day one.", image: U(COLLECTION_IMAGES["employee-kits"]), productCount: 8, featured: true },
  { id: "custom-merchandise", name: "Custom Merchandise", slug: "custom-merchandise", description: "Branded products people actually want to keep.", image: U(COLLECTION_IMAGES["custom-merchandise"]), productCount: 15, featured: true },
  { id: "festival-collections", name: "Festival Collections", slug: "festival-collections", description: "Curated gifts for every Indian festival.", image: U(COLLECTION_IMAGES["festival-collections"]), productCount: 10, featured: true },
  { id: "executive-gifts", name: "Executive Gifts", slug: "executive-gifts", description: "Premium gifts for leadership occasions.", image: U(COLLECTION_IMAGES["executive-gifts"]), productCount: 14, featured: false },
  { id: "desk-accessories", name: "Desk Accessories", slug: "desk-accessories", description: "Elevate the workspace with sculptural utility.", image: U(COLLECTION_IMAGES["desk-accessories"]), productCount: 16, featured: false },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Priya Sharma", role: "HR Director", company: "TechVista Solutions", content: "PENO transformed our employee gifting program. The welcome kits were so beautifully curated that new hires posted them on LinkedIn — it became a recruitment tool in itself.", rating: 5 },
  { id: "t2", name: "Rajiv Mehta", role: "CEO", company: "Mehta Enterprises", content: "We needed Diwali gifts for 500 clients. PENO handled everything — curation, custom branding, packaging, and delivery. The response was overwhelming.", rating: 5 },
  { id: "t3", name: "Ananya Patel", role: "Marketing Head", company: "Bloom Creative Agency", content: "PENO's marketing team redesigned our entire brand identity. Our social engagement is up 340%. They understand aesthetics at a level that genuinely surprised us.", rating: 5 },
  { id: "t4", name: "Vikram Reddy", role: "CTO", company: "ScaleUp Technologies", content: "The AI automation solution PENO built for us saved 200+ hours per month. Beautiful design and solid engineering — a rare combination.", rating: 5 },
];

export const faqs: FAQItem[] = [
  { id: "f1", question: "What is the minimum order quantity?", answer: "Most products: 25 units minimum for branded corporate orders. Custom merchandise: 50 units. Ready-to-ship: no minimum." },
  { id: "f2", question: "Can I customize products with my logo?", answer: "Yes. Debossing, foil stamping, engraving, screen printing, and embroidery available." },
  { id: "f3", question: "How long does delivery take?", answer: "Ready-to-ship: 3–7 business days. Custom-branded: 10–15 business days from artwork approval." },
  { id: "f4", question: "Do you ship internationally?", answer: "Yes, worldwide. Delivery times vary by destination." },
  { id: "f5", question: "Can I see samples first?", answer: "Yes. Sample kits available at nominal cost, credited against your final order." },
  { id: "f6", question: "What is your return policy?", answer: "Ready-to-ship: returns within 15 days, unused. Custom/bulk orders: non-returnable unless manufacturing defect." },
  { id: "f7", question: "Do you offer gift wrapping?", answer: "Every order comes in signature premium packaging. Personalized gift messages at no extra cost." },
];

export const instagramPosts = [
  { id: "ig1", image: U(PENS[0]), caption: "Rituals.", aspectRatio: "square" as const },
  { id: "ig2", image: U(HAMPERS[0]), caption: "Founder's Hamper.", aspectRatio: "portrait" as const },
  { id: "ig3", image: U(PENS[1]), caption: "Detail.", aspectRatio: "square" as const },
  { id: "ig4", image: U(WELCOME_KIT[0]), caption: "Welcome kits.", aspectRatio: "landscape" as const },
  { id: "ig5", image: U(NOTEBOOKS[0]), caption: "New notebooks.", aspectRatio: "portrait" as const },
  { id: "ig6", image: U(DESK[0]), caption: "Desk.", aspectRatio: "square" as const },
  { id: "ig7", image: U(HAMPERS[1]), caption: "Season.", aspectRatio: "landscape" as const },
  { id: "ig8", image: U(DESK[1]), caption: "Studio.", aspectRatio: "portrait" as const },
];

export const marketingServices = [
  { id: "ms1", title: "Branding & Identity", description: "We craft brand identities that resonate. Strategy, visual identity, brand guidelines, and voice.", icon: "Palette", features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Voice & Tone"] },
  { id: "ms2", title: "Social Media Management", description: "Strategic content and community management. Data-driven and aesthetically refined.", icon: "Share2", features: ["Content Strategy", "Community Management", "Influencer Relations", "Analytics"] },
  { id: "ms3", title: "Performance Marketing", description: "ROI-focused advertising across platforms. Every rupee optimized.", icon: "TrendingUp", features: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Conversion Optimization"] },
  { id: "ms4", title: "Content & Creative", description: "Photography, videography, copywriting that captures your brand essence.", icon: "Camera", features: ["Photography", "Videography", "Copywriting", "Art Direction"] },
];

export const itServices = [
  { id: "it1", title: "AI Development", description: "Custom AI solutions: LLM integration, computer vision, predictive analytics, AI agents.", icon: "Brain", features: ["LLM Integration", "Computer Vision", "Predictive Analytics", "AI Agents"] },
  { id: "it2", title: "SaaS Development", description: "End-to-end SaaS: concept, UX, full-stack engineering, cloud infrastructure.", icon: "Cloud", features: ["Product Strategy", "UX Design", "Full-Stack Dev", "DevOps"] },
  { id: "it3", title: "Web & Mobile Apps", description: "Beautiful, performant web and mobile apps built with modern frameworks.", icon: "Smartphone", features: ["React/Next.js", "React Native", "PWAs", "API Development"] },
  { id: "it4", title: "Enterprise Software", description: "Scalable solutions: ERP, workflow automation, data pipelines, internal tools.", icon: "Building2", features: ["ERP Systems", "Workflow Automation", "Data Pipelines", "Internal Tools"] },
];

export const corporateStats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Gifts Delivered", value: "100,000+" },
  { label: "Cities Served", value: "50+" },
  { label: "Years of Excellence", value: "5+" },
];
