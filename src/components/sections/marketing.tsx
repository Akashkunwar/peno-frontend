"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { marketingServices } from "@/data";
import { Palette, Share2, TrendingUp, Camera, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";

const icons: Record<string, LucideIcon> = { Palette, Share2, TrendingUp, Camera };

export function MarketingSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-cream-dark">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="Marketing Services" title="Brands that resonate" description="Creative marketing that connects — from identity to performance." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {marketingServices.map((s, i) => {
            const I = icons[s.icon];
            return (
              <FadeIn key={s.id} delay={i * 0.08}>
                <div className="bg-cream p-8 md:p-10 rounded-sm border border-ink/5 hover:border-accent/30 transition-all duration-500 group h-full">
                  <div className="w-10 h-10 mb-5 rounded-sm bg-velvet flex items-center justify-center">
                    {I && <I className="w-5 h-5 text-accent" />}
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-5">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map(f => (
                      <span key={f} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-cream-dark text-ink-muted rounded-sm">{f}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <Link href="/marketing-services"><Button variant="outline">View Marketing Services</Button></Link>
        </div>
      </div>
    </section>
  );
}
