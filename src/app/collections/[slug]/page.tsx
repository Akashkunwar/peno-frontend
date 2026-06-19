import { collections, products } from "@/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/sections/shop/product-card";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = collections.find(x => x.slug === slug);
  if (!c) return { title: "Not Found" };
  return { title: `${c.name} | PENO`, description: c.description };
}

export async function generateStaticParams() {
  return collections.map(c => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = collections.find(x => x.slug === slug);
  if (!c) notFound();
  const cp = products.filter(p => p.collection === c.name);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24">
        <Link href="/collections" className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors mb-8">
          <ChevronLeft className="w-3.5 h-3.5" />All Collections
        </Link>
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mb-3">{cp.length} Products</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em] mb-4">{c.name}</h1>
          <p className="text-ink-muted leading-relaxed">{c.description}</p>
        </div>

        {cp.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-14">
            {cp.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-ink-muted">No products in this collection yet.</p>
            <Link href="/shop" className="mt-4 inline-block text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-4">Browse all products</Link>
          </div>
        )}
      </div>
    </div>
  );
}
