"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/brand-icons";

const links = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Corporate Gifting", href: "/corporate-gifting" },
    { label: "Custom Merchandise", href: "/shop?category=Custom+Merchandise" },
    { label: "Gift Hampers", href: "/shop?collection=Gift+Hampers" },
  ],
  Services: [
    { label: "Marketing", href: "/marketing-services" },
    { label: "IT Services", href: "/it-services" },
    { label: "Branding", href: "/marketing-services" },
    { label: "AI Development", href: "/it-services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div>
      <h3 className="font-serif text-xl text-white mb-2">The PENO Edit</h3>
      <p className="text-sm text-white/50 leading-relaxed mb-5">Curated gifting inspiration, new collection launches, and exclusive offers.</p>
      {done ? (
        <div className="flex items-center gap-2 text-sm text-accent">
          <Check className="w-4 h-4" /> You&apos;re subscribed
        </div>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); if (email) { setDone(true); } }}
          className="flex items-center border-b border-white/20 focus-within:border-accent transition-colors pb-2 gap-3"
        >
          <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
            required
          />
          <button type="submit" className="text-accent hover:text-white transition-colors" aria-label="Subscribe">
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-velvet-deep text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Link href="/" className="font-serif text-3xl tracking-[0.02em]">PENO</Link>
              <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm">
                Thoughtful gifts, meaningful brands, modern technology — crafted for businesses that value quality.
              </p>
              <div className="mt-8 space-y-2">
                <p className="text-sm">
                  <a href="mailto:info@peno.in" className="text-white/70 hover:text-accent transition-colors">info@peno.in</a>
                </p>
                <address className="text-sm text-white/40 not-italic leading-relaxed">
                  8th Floor, Asiana Plaza,<br />
                  Budha Marg, Near GPO Golambar,<br />
                  Patna, Bihar 800001, India
                </address>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-8">
              {Object.entries(links).map(([t, l]) => (
                <div key={t}>
                  <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">{t}</h4>
                  <ul className="space-y-3">
                    {l.map(i => (
                      <li key={i.label}>
                        <Link href={i.href} className="text-sm text-white/60 hover:text-white transition-colors">{i.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Newsletter />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} PENO. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-accent/50 transition-all flex items-center justify-center" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-accent/50 transition-all flex items-center justify-center" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-accent/50 transition-all flex items-center justify-center" aria-label="X (Twitter)">
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
