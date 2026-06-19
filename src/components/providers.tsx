"use client";
import { createContext, useContext } from "react";
import { useCartProvider } from "@/hooks/use-cart";
import { useWishlistProvider } from "@/hooks/use-wishlist";
import { useSearch } from "@/hooks/use-search";
import { ToastProvider, useToast } from "@/hooks/use-toast";

type C = ReturnType<typeof useCartProvider>;
type W = ReturnType<typeof useWishlistProvider>;
type S = ReturnType<typeof useSearch>;

const CC = createContext<C | null>(null);
const WC = createContext<W | null>(null);
const SC = createContext<S | null>(null);

export function useCart() { const c = useContext(CC); if (!c) throw new Error(); return c; }
export function useWishlist() { const c = useContext(WC); if (!c) throw new Error(); return c; }
export function useSearchContext() { const c = useContext(SC); if (!c) throw new Error(); return c; }
export { useToast };

export function Providers({ children }: { children: React.ReactNode }) {
  const cart = useCartProvider();
  const wl = useWishlistProvider();
  const sr = useSearch();
  return (
    <ToastProvider>
      <CC.Provider value={cart}>
        <WC.Provider value={wl}>
          <SC.Provider value={sr}>{children}</SC.Provider>
        </WC.Provider>
      </CC.Provider>
    </ToastProvider>
  );
}
