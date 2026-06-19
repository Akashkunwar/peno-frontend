"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { PenImage } from "@/components/ui/pen-image";
import { instagramPosts } from "@/data";
import Link from "next/link";
import { InstagramIcon } from "@/components/ui/brand-icons";

export function InstagramGallery() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading label="Follow Along" title="@peno.in" description="Behind the scenes, new arrivals, and gifting inspiration." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-16">
          {instagramPosts.map((p, i) => (
            <Link
              key={p.id}
              href="#"
              className="group relative bg-cream-dark rounded-sm overflow-hidden aspect-square"
            >
              <PenImage src={p.image} alt={p.caption} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-velvet-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <InstagramIcon className="w-6 h-6 text-white" />
                <span className="text-white font-serif text-sm">{p.caption}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group">
            Follow on Instagram
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
