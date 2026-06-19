"use client";
import Link from "next/link";
import { useCart } from "@/components/providers";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PenImage } from "@/components/ui/pen-image";
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Truck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount, subtotal, clearCart } = useCart();
  const mounted = useIsMounted();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);
  const shipping = subtotal > 5000 ? 0 : 299;
  const discount = applied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount + shipping;
  const remaining = Math.max(0, 5000 - subtotal);
  const progress = Math.min(100, (subtotal / 5000) * 100);

  if (!mounted || items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-6 max-w-md">
          <div className="w-20 h-20 rounded-full bg-cream-dark flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-ink-muted/40" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-ink mb-3">Your cart is empty</h1>
          <p className="text-ink-muted mb-8 leading-relaxed">Discover thoughtful gifts for every occasion.</p>
          <Link href="/shop"><Button>Browse Products</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24">
        <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />Continue Shopping
        </Link>
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] tracking-[-0.01em]">Shopping Cart</h1>
          <p className="text-ink-muted text-sm mt-2">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <AnimatePresence>
              {items.map(item => (
                <motion.div
                  key={`${item.productId}-${item.variantId || "default"}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 bg-cream-dark rounded-sm p-4"
                >
                  <Link href={`/shop/${item.productId}`} className="w-24 h-24 bg-cream rounded-sm overflow-hidden flex-shrink-0">
                    <PenImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link href={`/shop/${item.productId}`} className="block">
                          <h3 className="text-sm font-medium text-ink truncate hover:text-accent transition-colors">{item.name}</h3>
                        </Link>
                        {item.variant && <p className="text-xs text-ink-muted mt-0.5">{item.variant}</p>}
                      </div>
                      <button onClick={() => removeItem(item.productId, item.variantId)} className="p-1 text-ink-muted hover:text-ink transition-colors flex-shrink-0" aria-label="Remove">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-ink/10 rounded-sm">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variantId)} className="p-2 hover:text-accent transition-colors" aria-label="Decrease"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-8 text-center text-sm tabular-nums">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variantId)} className="p-2 hover:text-accent transition-colors" aria-label="Increase"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <span className="font-serif text-sm">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <button onClick={clearCart} className="text-xs text-ink-muted hover:text-ink transition-colors underline underline-offset-4 mt-3">Clear Cart</button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-cream-dark rounded-sm p-6 sticky top-28 space-y-5">
              {remaining > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <Truck className="w-3.5 h-3.5 text-accent" />
                    <span>Add <span className="text-ink font-medium">{formatPrice(remaining)}</span> more for free shipping</span>
                  </div>
                  <div className="mt-2 h-1 bg-ink/5 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.6 }} />
                  </div>
                </div>
              )}

              <h3 className="font-serif text-lg text-ink">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Subtotal</span>
                  <span className="text-ink">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount (10%)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-ink-muted">Shipping</span>
                  <span className="text-ink">{shipping === 0 ? <span className="text-accent">Free</span> : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-ink/5 pt-3 flex justify-between items-baseline">
                  <span className="text-ink font-medium">Total</span>
                  <span className="font-serif text-xl text-ink">{formatPrice(total)}</span>
                </div>
              </div>

              <div>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={coupon}
                      onChange={e => setCoupon(e.target.value)}
                      placeholder="Coupon code"
                      className="w-full bg-cream border border-ink/10 text-ink text-xs pl-8 pr-3 py-2.5 rounded-sm outline-none focus:border-ink/30 placeholder:text-ink-muted/50"
                    />
                  </div>
                  <button
                    onClick={() => { if (coupon.toLowerCase() === "peno10") setApplied(true); }}
                    className="text-xs px-4 py-2.5 border border-ink/10 rounded-sm hover:border-ink/30 transition-colors text-ink-muted hover:text-ink"
                  >
                    Apply
                  </button>
                </div>
                {applied && <p className="text-xs text-accent mt-2">Coupon PENO10 applied — 10% off</p>}
              </div>

              <Button className="w-full">Proceed to Checkout</Button>
              <p className="text-[10px] text-ink-muted text-center">Demo checkout — no payment processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
