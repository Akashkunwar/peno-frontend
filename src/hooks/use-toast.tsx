"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, X } from "lucide-react";

type ToastType = "cart" | "wishlist-add" | "wishlist-remove" | "info";
type Toast = { id: number; type: ToastType; message: string };

type ToastCtx = {
  toasts: Toast[];
  push: (type: ToastType, message: string) => void;
  dismiss: (id: number) => void;
};

const Ctx = createContext<ToastCtx | null>(null);

export function useToast() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useToast must be used within ToastProvider");
  return c;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const push = useCallback((type: ToastType, message: string) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  return (
    <Ctx.Provider value={{ toasts, push, dismiss }}>
      {children}
      <div className="fixed top-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none max-w-sm">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto bg-velvet text-white shadow-2xl rounded-sm px-4 py-3 flex items-center gap-3 min-w-[260px]"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                {t.type === "wishlist-add" ? <Heart className="w-3.5 h-3.5 text-accent" fill="currentColor" /> : <Check className="w-3.5 h-3.5 text-accent" />}
              </div>
              <p className="text-sm flex-1">{t.message}</p>
              <button onClick={() => dismiss(t.id)} className="text-white/50 hover:text-white transition-colors p-1 -mr-1" aria-label="Dismiss">
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  );
}
