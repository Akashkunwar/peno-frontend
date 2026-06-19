"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart, useWishlist, useToast } from "@/components/providers";
import { PenImage } from "@/components/ui/pen-image";
import { Heart, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Product } from "@/types";

export function ProductCard({ product, className, priority }: { product: Product; className?: string; priority?: boolean }) {
  const { addItem } = useCart();
  const { isWishlisted, toggleItem } = useWishlist();
  const { push } = useToast();
  const [imgIdx, setImgIdx] = useState(0);
  const [adding, setAdding] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  const wl = isWishlisted(product.id);

  const handleAdd = () => {
    if (adding) return;
    setAdding(true);
    addItem(product);
    push("cart", `Added to cart`);
    setTimeout(() => setAdding(false), 400);
  };

  const handleWishlist = () => {
    toggleItem(product.id);
    push(wl ? "wishlist-remove" : "wishlist-add", wl ? "Removed from wishlist" : "Saved to wishlist");
  };

  const Wrapper = mounted && !reduce ? motion.div : "div";
  const wrapperProps = mounted && !reduce ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  } : {};

  return (
    <Wrapper className={cn("group", className)} {...(wrapperProps as Record<string, unknown>)}>
      <div
        className="relative bg-cream-dark rounded-sm overflow-hidden aspect-[3/4] mb-4"
        onMouseEnter={() => product.images.length > 1 && setImgIdx(1)}
        onMouseLeave={() => setImgIdx(0)}
      >
        <Link href={`/shop/${product.slug}`}>
          <PenImage
            src={product.images[imgIdx]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority={priority}
            fallbacks={product.images.filter((_, i) => i !== imgIdx)}
          />
        </Link>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && <span className="bg-velvet text-cream text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">New</span>}
          {product.isBestSeller && !product.isNew && <span className="bg-velvet text-cream text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">Bestseller</span>}
        </div>
        {product.compareAtPrice && <span className="absolute top-3 right-3 bg-accent text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">Sale</span>}

        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button
            onClick={handleAdd}
            className="flex-1 bg-white text-ink text-xs font-medium tracking-wide py-2.5 rounded-sm shadow-lg hover:bg-velvet hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> {adding ? "Added" : "Add to Cart"}
          </button>
          <button
            onClick={handleWishlist}
            className={cn("p-2.5 rounded-sm shadow-lg transition-colors", wl ? "bg-white text-red-500" : "bg-white text-ink hover:bg-velvet hover:text-white")}
            aria-label="Toggle wishlist"
          >
            <Heart className="w-3.5 h-3.5" fill={wl ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <div className="space-y-1.5">
        <Link href={`/shop/${product.slug}`} className="block">
          <h3 className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-snug">{product.name}</h3>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-ink font-serif">{formatPrice(product.price)}</span>
          {product.compareAtPrice && <span className="text-xs text-ink-muted line-through">{formatPrice(product.compareAtPrice)}</span>}
        </div>
        {product.colors && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map(c => (
              <span key={c} className="w-3 h-3 rounded-full border border-ink/10" style={{ backgroundColor: c }} title={c} />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
