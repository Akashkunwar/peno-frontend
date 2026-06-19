import type { Metadata } from "next";
import { corporateStats } from "@/data";
import { FadeIn } from "@/components/ui/animations";
import { Award, Sparkles, Heart, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About | PENO",
  description: "We believe gifting is an art form. Learn about PENO's journey, philosophy, and the team behind it.",
};

const values = [
  { icon: Award, title: "Craft over convention", desc: "We never settle for the standard. Every product is evaluated, refined, and curated with intention." },
  { icon: Sparkles, title: "Detail in every layer", desc: "From material selection to packaging, the smallest detail is part of the experience." },
  { icon: Heart, title: "People first", desc: "Gifts are about people. We design every experience around the moment of giving and receiving." },
  { icon: Compass, title: "Always evolving", desc: "We move with the times, embracing new materials, technologies, and ideas to stay ahead." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <FadeIn direction="up">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-accent/60" />
                  <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Our Story</p>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.01em] text-ink">
                  We believe gifting<br />is an <em className="text-accent not-italic">art</em> form
                </h1>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-5 text-ink-muted leading-relaxed max-w-md">
                <p>PENO was born from a simple observation: most corporate gifts are forgettable. We saw an opportunity to change that.</p>
                <p>Today, PENO is a premium gifting company that helps modern businesses create memorable experiences through thoughtfully curated gifts, creative marketing, and technology solutions.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-velvet text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {corporateStats.map(s => (
              <FadeIn key={s.label} delay={0.1}>
                <div>
                  <p className="font-serif text-4xl md:text-5xl text-white">{s.value}</p>
                  <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-white/40">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent/60" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">What we stand for</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em] text-ink">
              Principles that guide every gift we curate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div>
                  <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-velvet" />
                  </div>
                  <h3 className="font-serif text-lg text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-6">Let&apos;s create something memorable</h2>
          <p className="text-ink-muted mb-10 leading-relaxed">Whether you need 50 welcome kits or a complete gifting program, our team is ready to help.</p>
          <a href="mailto:info@peno.in" className="inline-flex items-center px-10 py-4 bg-velvet text-white text-sm font-medium tracking-wide hover:bg-velvet-deep transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
