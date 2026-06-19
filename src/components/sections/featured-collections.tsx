"use client";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, StaggerItem } from "@/components/ui/animations";
import { PenImage } from "@/components/ui/pen-image";
import { collections } from "@/data";
import { ArrowUpRight } from "lucide-react";

export function FeaturedCollections() {
  const f = collections.filter(c => c.featured);
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="Our Collections" title="Curated for every moment" description="Explore our thoughtfully designed collections — each crafted to make gifting meaningful and memorable." />
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {f.map((c, i) => (
            <StaggerItem key={c.id}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <div className="relative overflow-hidden bg-cream-dark rounded-sm aspect-[4/5]">
                  <PenImage src={c.image} alt={c.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep/80 via-velvet-deep/10 to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-ink" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mb-2">{c.productCount} Products</p>
                    <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">{c.name}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xs">{c.description}</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
