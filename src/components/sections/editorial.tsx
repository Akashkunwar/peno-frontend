"use client";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animations";
import { PenImage } from "@/components/ui/pen-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-cream-dark">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <PenImage src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=85" alt="The art of thoughtful gifting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-6 left-6 bg-cream/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink-muted">Editorial · Vol. 01</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="max-w-lg lg:max-w-none">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent/60" />
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">The PENO Philosophy</p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-[-0.01em] text-ink">
                Gifting is an<br />art form
              </h2>
              <div className="mt-8 space-y-5 text-ink-muted leading-relaxed text-base">
                <p>Every gift tells a story. At PENO, we believe the objects we give carry meaning far beyond their material — they communicate thoughtfulness, respect, and shared values.</p>
                <p>Whether it&apos;s a journal for the new hire, a hamper for the client, or branded merchandise for your team — every PENO gift is crafted to leave a lasting impression.</p>
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Our Story
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
