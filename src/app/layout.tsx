import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SearchOverlay } from "@/components/sections/shop/search-overlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: { default: "PENO — Premium Gifting, Marketing & Technology", template: "%s | PENO" },
  description: "Thoughtful gifts, meaningful brands, modern technology. Premium gifting experiences, creative marketing, and technology solutions crafted for modern businesses.",
  keywords: ["premium gifts","corporate gifting","luxury hampers","personalized gifts","employee welcome kits","branding","marketing services","IT services"],
  authors: [{ name: "PENO" }], creator: "PENO",
  openGraph: { type: "website", locale: "en_IN", siteName: "PENO", title: "PENO — Premium Gifting, Marketing & Technology", description: "Thoughtful gifts, meaningful brands, modern technology." },
  twitter: { card: "summary_large_image", title: "PENO", description: "Thoughtful gifts, meaningful brands, modern technology." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink antialiased">
        <Providers><Header /><main className="flex-1">{children}</main><Footer /><CartDrawer /><SearchOverlay /></Providers>
      </body>
    </html>
  );
}
