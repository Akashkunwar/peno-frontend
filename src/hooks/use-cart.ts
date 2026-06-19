"use client";
import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { CartItem, Product } from "@/types";

type CCtx = {
  items: CartItem[];
  addItem: (p: Product, q?: number, vId?: string) => void;
  removeItem: (pId: string, vId?: string) => void;
  updateQuantity: (pId: string, q: number, vId?: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const C = createContext<CCtx | null>(null);
export function useCart() { const c = useContext(C); if (!c) throw new Error(); return c; }

const STORAGE_KEY = "peno-cart";

function readInitial(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const s = window.localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}

export function useCartProvider() {
  const [items, setItems] = useState<CartItem[]>(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = useCallback((p: Product, q = 1, vId?: string) => {
    setItems(prev => {
      const v = vId ? p.variants?.find(x => x.id === vId) : undefined;
      const k = `${p.id}-${vId || "default"}`;
      const ex = prev.find(i => `${i.productId}-${i.variantId || "default"}` === k);
      if (ex) return prev.map(i => `${i.productId}-${i.variantId || "default"}` === k ? { ...i, quantity: i.quantity + q } : i);
      return [...prev, {
        productId: p.id,
        variantId: vId,
        name: p.name,
        image: p.images[0],
        price: v?.price || p.price,
        quantity: q,
        variant: v?.name,
      }];
    });
  }, []);

  const rem = useCallback((pId: string, vId?: string) => {
    setItems(p => p.filter(i => !(i.productId === pId && (i.variantId || undefined) === vId)));
  }, []);

  const upd = useCallback((pId: string, q: number, vId?: string) => {
    if (q <= 0) { rem(pId, vId); return; }
    setItems(p => p.map(i => i.productId === pId && (i.variantId || undefined) === vId ? { ...i, quantity: q } : i));
  }, [rem]);

  const clr = useCallback(() => setItems([]), []);

  return {
    items,
    addItem: add,
    removeItem: rem,
    updateQuantity: upd,
    clearCart: clr,
    itemCount: items.reduce((s, i) => s + i.quantity, 0),
    subtotal: items.reduce((s, i) => s + i.price * i.quantity, 0),
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };
}
