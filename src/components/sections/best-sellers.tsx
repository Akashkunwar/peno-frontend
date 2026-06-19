"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, StaggerItem } from "@/components/ui/animations";
import { ProductCard } from "@/components/sections/shop/product-card";
import { products } from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BestSellers() {
  const bs = products.filter(p => p.isBestSeller).slice(0, 4);
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading label="Best Sellers" title="Most loved by our clients" description="The pieces that consistently earn praise." align="left" />
          <Link href="/shop" className="hidden md:inline-flex items-center text-sm text-ink-muted hover:text-ink transition-colors group">
            View All <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bs.map(p => (
            <StaggerItem key={p.id}><ProductCard product={p} /></StaggerItem>
          ))}
        </StaggerChildren>
        <div className="text-center mt-14 md:hidden">
          <Link href="/shop"><Button variant="outline">View All Products</Button></Link>
        </div>
      </div>
    </section>
  );
}
