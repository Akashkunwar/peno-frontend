"use client";
import { useState } from "react";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { useCart, useWishlist, useToast } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { PenImage } from "@/components/ui/pen-image";
import { Heart, Minus, Plus, ChevronLeft, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { productFaqs } from "@/data/faqs";
import type { Product } from "@/types";
import { products } from "@/data";
import { ProductCard } from "@/components/sections/shop/product-card";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { isWishlisted, toggleItem } = useWishlist();
  const { push } = useToast();
  const [selImg, setSelImg] = useState(0);
  const [selVar, setSelVar] = useState(product.variants?.[0]?.id);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const wl = isWishlisted(product.id);

  const variant = product.variants?.find(v => v.id === selVar);
  const price = variant?.price || product.price;
  const comparePrice = variant?.compareAtPrice || product.compareAtPrice;
  const discountPct = comparePrice ? Math.round(((comparePrice - price) / comparePrice) * 100) : 0;
  const related = products.filter(p => p.id !== product.id && (p.collection === product.collection || p.category === product.category)).slice(0, 4);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="pt-28 pb-6">
          <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-16">
          <div className="space-y-4">
            <div className="bg-cream-dark rounded-sm overflow-hidden aspect-[4/5] relative">
              <PenImage src={product.images[selImg]} alt={product.name} className="w-full h-full object-cover" />
              {discountPct > 0 && (
                <span className="absolute top-4 left-4 bg-velvet text-cream text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">Save {discountPct}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelImg(i)} className={cn("bg-cream-dark rounded-sm overflow-hidden aspect-square transition-all duration-200", i === selImg ? "ring-1 ring-velvet ring-offset-2 ring-offset-cream" : "opacity-70 hover:opacity-100")}>
                    <PenImage
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                      fallbacks={product.images.filter((_, j) => j !== i)}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            {product.collection && <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">{product.collection}</p>}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">{product.name}</h1>
            {product.rating && (
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("w-3.5 h-3.5", i < Math.round(product.rating!) ? "text-accent" : "text-ink/10")} fill={i < Math.round(product.rating!) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-ink-muted">{product.rating} · {product.reviewCount} reviews</span>
              </div>
            )}
            <div className="flex items-baseline gap-3 mt-6">
              <span className="font-serif text-3xl text-ink">{formatPrice(price)}</span>
              {comparePrice && <span className="text-base text-ink-muted line-through">{formatPrice(comparePrice)}</span>}
            </div>
            <p className="mt-6 text-ink-muted leading-relaxed text-base">{product.shortDescription}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <p className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-3">Variant</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelVar(v.id)}
                      disabled={!v.inStock}
                      className={cn("px-4 py-2.5 text-sm border rounded-sm transition-colors", selVar === v.id ? "border-velvet bg-velvet text-cream" : "border-ink/10 text-ink hover:border-ink/30", !v.inStock && "opacity-30 cursor-not-allowed line-through")}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.customizationOptions && (
              <div className="mt-6">
                <p className="text-xs tracking-[0.15em] uppercase text-ink-muted mb-3">Available Customizations</p>
                <div className="flex flex-wrap gap-2">
                  {product.customizationOptions.map(opt => (
                    <span key={opt} className="text-xs px-3 py-1.5 bg-cream-dark text-ink-muted rounded-sm">{opt}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-ink/10 rounded-sm">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-3 hover:text-accent transition-colors" aria-label="Decrease"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-3 hover:text-accent transition-colors" aria-label="Increase"><Plus className="w-4 h-4" /></button>
              </div>
              <Button onClick={() => { addItem(product, qty, selVar); push("cart", `Added to cart`); }} className="flex-1">
                Add to Cart — {formatPrice(price * qty)}
              </Button>
              <button
                onClick={() => { toggleItem(product.id); push(wl ? "wishlist-remove" : "wishlist-add", wl ? "Removed from wishlist" : "Saved to wishlist"); }}
                className={cn("px-4 border rounded-sm transition-colors", wl ? "text-red-500 border-red-200 bg-red-50" : "text-ink-muted border-ink/10 hover:border-ink/30")}
                aria-label="Toggle wishlist"
              >
                <Heart className="w-5 h-5" fill={wl ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-ink/5 space-y-3">
              <div className="flex items-center gap-3 text-xs text-ink-muted"><Truck className="w-4 h-4 text-accent" /> Complimentary shipping on orders above ₹5,000</div>
              <div className="flex items-center gap-3 text-xs text-ink-muted"><RotateCcw className="w-4 h-4 text-accent" /> 15-day returns on ready-to-ship items</div>
              <div className="flex items-center gap-3 text-xs text-ink-muted"><Shield className="w-4 h-4 text-accent" /> Lifetime quality guarantee</div>
            </div>
          </div>
        </div>

        <div className="border-t border-ink/5 py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-3">Details</p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-6">Product Story</h2>
            <p className="text-ink-muted leading-relaxed">{product.description}</p>
            {product.materials && (
              <div className="mt-6">
                <p className="text-xs tracking-wider uppercase text-ink-muted mb-2">Materials</p>
                <p className="text-sm text-ink-muted">{product.materials.join(", ")}</p>
              </div>
            )}
          </div>

          <div className="max-w-3xl mt-16">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-3">FAQ</p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {productFaqs.map(faq => (
                <div key={faq.id} className="border border-ink/5 rounded-sm overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between p-4 text-left text-sm text-ink hover:bg-cream-dark transition-colors">
                    {faq.question}
                    <Plus className={cn("w-4 h-4 text-ink-muted transition-transform duration-300", openFaq === faq.id && "rotate-45")} />
                  </button>
                  {openFaq === faq.id && <div className="px-4 pb-4 text-sm text-ink-muted leading-relaxed">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="border-t border-ink/5 py-16">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-3">More to discover</p>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
