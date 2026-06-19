import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/animations";
import { Palette, Share2, TrendingUp, Camera, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Services | PENO",
  description: "Brands that resonate. Creative marketing services — identity, social, performance, content.",
};

const svcs = [
  { icon: Palette, title: "Branding & Identity", desc: "We craft brand identities that resonate. Strategy, visual identity, brand guidelines, and voice.", feats: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Voice & Tone"] },
  { icon: Share2, title: "Social Media Management", desc: "Strategic content and community management. Data-driven and aesthetically refined.", feats: ["Content Strategy", "Community Management", "Influencer Relations", "Analytics"] },
  { icon: TrendingUp, title: "Performance Marketing", desc: "ROI-focused advertising across platforms. Every rupee optimized.", feats: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Conversion Optimization"] },
  { icon: Camera, title: "Content & Creative", desc: "Photography, videography, copywriting that captures your brand essence.", feats: ["Photography", "Videography", "Copywriting", "Art Direction"] },
];

const outcomes = [
  "340% average increase in social engagement",
  "4.5x return on ad spend",
  "Brand identity systems that scale",
  "Editorial-grade creative, on-demand",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent/60" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Marketing Services</p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-ink max-w-3xl leading-[1.05] tracking-[-0.01em]">
              Brands that resonate
            </h1>
            <p className="mt-6 text-ink-muted max-w-xl leading-relaxed">
              Creative marketing that connects — from identity to performance, every touchpoint crafted with intention.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {svcs.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-velvet p-8 md:p-10 rounded-sm group hover:bg-velvet-deep transition-colors duration-500 h-full">
                  <div className="w-10 h-10 mb-5 rounded-sm bg-white/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.feats.map(f => (
                      <span key={f} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-white/5 text-white/50 rounded-sm">{f}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeading label="Outcomes" title="Measured by results, refined by craft" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 max-w-3xl mx-auto">
            {outcomes.map(o => (
              <div key={o} className="flex items-center gap-3 bg-cream p-4 rounded-sm">
                <div className="w-7 h-7 rounded-full bg-velvet flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-sm text-ink">{o}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Let&apos;s build your brand</h2>
          <p className="text-white/55 mb-10 leading-relaxed">Every brand has a story. Let us help you tell yours.</p>
          <Link href="/contact" className="inline-flex items-center bg-white text-velvet px-10 py-4 text-sm font-medium tracking-wide hover:bg-cream transition-colors group">
            Start a Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
