import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SearchOverlay } from "@/components/sections/shop/search-overlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://peno.in";
const SITE_NAME = "PENO";
const DEFAULT_TITLE = "PENO — Premium Corporate Gifting, Marketing & IT Services in India";
const DEFAULT_DESCRIPTION =
  "PENO is India's premium gifting studio for corporate gifts, luxury hampers, employee welcome kits, custom merchandise, branding, and technology solutions. Pan-India delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | PENO" },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "premium corporate gifts India",
    "luxury gift hampers India",
    "employee welcome kits",
    "custom branded merchandise India",
    "personalized corporate gifts",
    "Diwali corporate gifts",
    "festival gift hampers",
    "executive gifts India",
    "luxury stationery India",
    "corporate gifting company Patna",
    "branding agency India",
    "marketing services India",
    "IT services India",
    "AI development India",
    "SaaS development India",
    "custom software development",
  ],
  authors: [{ name: "PENO" }],
  creator: "PENO",
  publisher: "PENO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og?title=PENO&subtitle=Premium%20Corporate%20Gifting%2C%20Marketing%20%26%20Technology",
        width: 1200,
        height: 630,
        alt: "PENO — Premium Corporate Gifting, Marketing & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@peno_in",
    creator: "@peno_in",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og?title=PENO&subtitle=Premium%20Corporate%20Gifting%2C%20Marketing%20%26%20Technology"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  category: "shopping",
  classification: "Business & Industrial, Corporate Gifting, Marketing Services, IT Services",
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Patna",
    "geo.position": "25.5941;85.1376",
    ICBM: "25.5941, 85.1376",
    "theme-color": "#0C3824",
    "msapplication-TileColor": "#0C3824",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0C3824" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
        width: 100,
        height: 100,
        caption: "PENO",
      },
      image: `${SITE_URL}/og?title=PENO&subtitle=Premium%20Corporate%20Gifting%2C%20Marketing%20%26%20Technology`,
      description: DEFAULT_DESCRIPTION,
      email: "info@peno.in",
      telephone: "+91-000-000-0000",
      sameAs: [
        "https://www.instagram.com/peno.in",
        "https://www.linkedin.com/company/peno-in",
        "https://twitter.com/peno_in",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-000-000-0000",
        contactType: "sales",
        email: "info@peno.in",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      image: `${SITE_URL}/og?title=PENO&subtitle=Premium%20Corporate%20Gifting%2C%20Marketing%20%26%20Technology`,
      url: SITE_URL,
      telephone: "+91-000-000-0000",
      email: "info@peno.in",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8th Floor, Asiana Plaza, Budha Marg, Near GPO Golambar",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.5941,
        longitude: 85.1376,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Gifting & Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Corporate Gifts" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Luxury Gift Hampers" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Employee Welcome Kits" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Branded Merchandise" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Services" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/shop?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og?title=PENO&subtitle=Premium%20Corporate%20Gifting%2C%20Marketing%20%26%20Technology`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" dir="ltr" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
        </Providers>
      </body>
    </html>
  );
}
