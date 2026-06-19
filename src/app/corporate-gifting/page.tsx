import type { Metadata } from "next";
import Link from "next/link";
import { PenImage } from "@/components/ui/pen-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/animations";
import { Gift, Palette, Building2, Truck } from "lucide-react";
import { corporateStats } from "@/data";

export const metadata: Metadata = {
  title: "Corporate Gifting | PENO",
  description: "Premium corporate gifting solutions — from employee welcome kits to client appreciation hampers.",
};

const process = [
  { num: "01", title: "Discovery", desc: "We listen to your goals, audience, and budget to design a gifting program that fits." },
  { num: "02", title: "Curation", desc: "Our team handpicks products and crafts samples for your approval." },
  { num: "03", title: "Customization", desc: "Branding, packaging, and personalization tailored to your company." },
  { num: "04", title: "Delivery", desc: "Single or individual shipments across 50+ cities with full tracking." },
];

const features = [
  { icon: Gift, title: "Curated Collections", desc: "Pre-curated gift collections for every corporate occasion." },
  { icon: Palette, title: "Custom Branding", desc: "Debossing, foil stamping, engraving, and custom packaging." },
  { icon: Building2, title: "Dedicated Management", desc: "A dedicated account manager handles everything end-to-end." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Single-shipment or individual dispatch to 50+ cities." },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pb-32 bg-velvet text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <PenImage src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1800&q=85" alt="Corporate gifts" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-deep/80 via-velvet-deep/60 to-velvet-deep" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent/60" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/60">Corporate Gifting</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white max-w-3xl leading-[1.05] tracking-[-0.01em]">
              Gifts that reflect your brand
            </h1>
            <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
              From employee welcome kits to client appreciation hampers — we make corporate gifting effortless, elegant, and on-brand.
            </p>
            <div className="flex gap-3 mt-10 flex-wrap">
              <Link href="/contact" className="inline-flex items-center bg-white text-velvet px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-cream transition-colors">
                Get a Quote
              </Link>
              <Link href="/shop" className="inline-flex items-center border border-white/20 text-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors">
                Browse Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-b border-ink/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {corporateStats.map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl md:text-4xl text-ink">{s.value}</p>
                <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeading label="How we work" title="A process designed for elegance" description="Four steps from idea to delivery — with care at every stage." align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {process.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.08}>
                <div className="relative">
                  <span className="font-serif text-6xl text-accent/30 leading-none">{p.num}</span>
                  <h3 className="font-serif text-xl text-ink mt-4 mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeading label="What's included" title="Everything you need, end-to-end" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map(f => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cream flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-velvet text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Ready to elevate your corporate gifting?</h2>
          <p className="text-white/55 mb-10 leading-relaxed">Our team will help you curate the perfect gifts for your team and clients.</p>
          <a href="mailto:info@peno.in" className="inline-flex bg-white text-velvet px-10 py-4 text-sm font-medium tracking-wide hover:bg-cream transition-colors">
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
