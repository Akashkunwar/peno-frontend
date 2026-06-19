import type { Metadata } from "next";
import Link from "next/link";
import { PenImage } from "@/components/ui/pen-image";
import { collections } from "@/data";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Collections | PENO",
  description: "Explore our curated collections.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-36 pb-24 md:pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent/60" />
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Curated</p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em] mb-6">Collections</h1>
          <p className="text-ink-muted max-w-lg leading-relaxed">Every collection is thoughtfully designed for a specific gifting occasion — from corporate milestones to intimate moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {collections.map((c, i) => (
            <FadeIn key={c.id} delay={i * 0.06}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <div className="relative overflow-hidden bg-cream-dark rounded-sm aspect-[4/5]">
                  <PenImage src={c.image} alt={c.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep/80 via-velvet-deep/10 to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-ink" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mb-2">{c.productCount} Products</p>
                    <h3 className="font-serif text-2xl text-white leading-tight">{c.name}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
