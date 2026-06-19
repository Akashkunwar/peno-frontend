"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { itServices } from "@/data";
import { Brain, Cloud, Smartphone, Building2, type LucideIcon } from "lucide-react";
import Link from "next/link";

const icons: Record<string, LucideIcon> = { Brain, Cloud, Smartphone, Building2 };

export function ITServicesSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="IT Services" title="Technology that transforms" description="Custom software, AI solutions, and enterprise systems built with engineering excellence." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {itServices.map((s, i) => {
            const I = icons[s.icon];
            return (
              <FadeIn key={s.id} delay={i * 0.08}>
                <div className="bg-velvet p-8 md:p-10 rounded-sm group hover:bg-velvet-deep transition-colors duration-500 h-full">
                  <div className="w-10 h-10 mb-5 rounded-sm bg-white/10 flex items-center justify-center">
                    {I && <I className="w-5 h-5 text-accent" />}
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-white">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map(f => (
                      <span key={f} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-white/5 text-white/50 rounded-sm">{f}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <Link href="/it-services"><Button>View IT Services</Button></Link>
        </div>
      </div>
    </section>
  );
}
