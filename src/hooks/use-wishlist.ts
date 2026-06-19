"use client";
import { useState, useEffect, useCallback, createContext, useContext } from "react";

type WCtx = {
  items: string[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  itemCount: number;
};

const W = createContext<WCtx | null>(null);
export function useWishlist() { const c = useContext(W); if (!c) throw new Error(); return c; }

const STORAGE_KEY = "peno-wishlist";

function readInitial(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const s = window.localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  } catch {
    return [];
  }
}

export function useWishlistProvider() {
  const [items, setItems] = useState<string[]>(readInitial);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return {
    items,
    addItem: useCallback((id: string) => setItems(p => p.includes(id) ? p : [...p, id]), []),
    removeItem: useCallback((id: string) => setItems(p => p.filter(x => x !== id)), []),
    toggleItem: useCallback((id: string) => setItems(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]), []),
    isWishlisted: useCallback((id: string) => items.includes(id), [items]),
    itemCount: items.length,
  };
}
