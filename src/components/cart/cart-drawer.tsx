"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "@/components/providers";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { PenImage } from "@/components/ui/pen-image";
import { X, Minus, Plus, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const FREE_SHIPPING_THRESHOLD = 5000;

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart();
  const mounted = useIsMounted();
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  useEffect(() => { if (isOpen) lockScroll(); else unlockScroll(); return () => { if (isOpen) unlockScroll(); }; }, [isOpen]);
  useEscapeKey(closeCart, isOpen);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-velvet-deep/50 backdrop-blur-sm z-50"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-50 flex flex-col shadow-2xl"
            style={{ backgroundColor: "#F8F6F2" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/5">
              <h3 className="font-serif text-lg flex items-center gap-2">
                Cart
                {itemCount > 0 && <span className="text-xs text-ink-muted font-sans">({itemCount})</span>}
              </h3>
              <button onClick={closeCart} className="p-1 hover:text-accent transition-colors" aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            {itemCount > 0 && (
              <div className="px-6 pt-4 pb-3 border-t border-ink/5">
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <Truck className="w-3.5 h-3.5 text-accent" />
                  {remaining > 0 ? (
                    <span>Add <span className="text-ink font-medium">{formatPrice(remaining)}</span> more for free shipping</span>
                  ) : (
                    <span className="text-accent">You&apos;ve unlocked free shipping</span>
                  )}
                </div>
                <div className="mt-2.5 h-1 bg-ink/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            )}

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center mb-5">
                  <ShoppingBag className="w-7 h-7 text-ink-muted/40" />
                </div>
                <p className="font-serif text-lg text-ink mb-1">Your cart is empty</p>
                <p className="text-ink-muted text-sm mb-6">Curated gifts, waiting to be discovered.</p>
                <button onClick={closeCart} className="text-sm text-velvet hover:text-velvet-deep transition-colors underline underline-offset-4">Continue Shopping</button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
                  {items.map(item => (
                    <div key={`${item.productId}-${item.variantId || "default"}`} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-cream-dark rounded-sm overflow-hidden flex-shrink-0">
                        <PenImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-ink truncate">{item.name}</h4>
                        {item.variant && <p className="text-xs text-ink-muted mt-0.5">{item.variant}</p>}
                        <p className="text-sm text-ink mt-1.5 font-serif">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3 mt-2.5">
                          <div className="flex items-center border border-ink/10 rounded-sm">
                            <button onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variantId)} className="p-1.5 hover:text-accent transition-colors" aria-label="Decrease quantity"><Minus className="w-3 h-3" /></button>
                            <span className="w-8 text-center text-xs tabular-nums">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variantId)} className="p-1.5 hover:text-accent transition-colors" aria-label="Increase quantity"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button onClick={() => removeItem(item.productId, item.variantId)} className="text-xs text-ink-muted hover:text-ink transition-colors underline underline-offset-4">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-ink/5 px-6 py-5 space-y-4 bg-cream">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ink-muted">Subtotal</span>
                    <span className="text-lg font-serif text-ink">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-ink-muted">Shipping & taxes calculated at checkout</p>
                  <Link href="/cart" onClick={closeCart} className="flex items-center justify-center w-full bg-velvet text-white py-3.5 text-sm font-medium hover:bg-velvet-deep transition-colors rounded-sm">
                    View Cart <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button onClick={closeCart} className="w-full text-center text-xs text-ink-muted hover:text-ink transition-colors py-1">Continue Shopping</button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
