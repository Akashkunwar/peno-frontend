"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, StaggerItem } from "@/components/ui/animations";
import { testimonials } from "@/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-cream-dark relative overflow-hidden">
      <Quote className="absolute top-12 right-12 w-32 h-32 text-accent/10 hidden md:block" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="Client Words" title="Trusted by forward-thinking companies" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {testimonials.map(t => (
            <StaggerItem key={t.id}>
              <div className="bg-cream p-8 md:p-10 rounded-sm border border-ink/5 h-full relative">
                {t.rating && (
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" />
                    ))}
                  </div>
                )}
                <Quote className="w-6 h-6 text-accent/40 mb-4" />
                <blockquote className="text-base md:text-lg text-ink leading-relaxed font-serif">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="mt-8 pt-5 border-t border-ink/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-velvet text-accent flex items-center justify-center font-serif text-sm">
                    {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
