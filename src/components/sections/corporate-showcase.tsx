"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { corporateStats } from "@/data";
import { Building2, Gift, Palette, Truck } from "lucide-react";
import Link from "next/link";

const feats = [
  { icon: Gift, title: "Bulk Orders", desc: "Seamless ordering for teams of 25 to 5,000+. Dedicated account manager." },
  { icon: Palette, title: "Custom Branding", desc: "Debossing, foil stamping, engraving, and custom packaging." },
  { icon: Building2, title: "Employee & Client Gifts", desc: "Welcome kits, milestone gifts, festive hampers, client appreciation." },
  { icon: Truck, title: "Pan-India Logistics", desc: "Warehousing, kitting, and delivery across 50+ cities." },
];

export function CorporateShowcase() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-velvet text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="Corporate Gifting" title="Gifts that reflect your brand" description="From employee welcome kits to client hampers — we make corporate gifting effortless, elegant, and on-brand." light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {feats.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/40 transition-colors">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {corporateStats.map(s => (
              <FadeIn key={s.label} delay={0.1}>
                <div className="text-center">
                  <p className="font-serif text-4xl md:text-5xl text-white">{s.value}</p>
                  <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-white/40">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="text-center mt-14">
          <Link href="/corporate-gifting"><Button className="bg-white text-velvet hover:bg-cream">Explore Corporate Gifting</Button></Link>
        </div>
      </div>
    </section>
  );
}
