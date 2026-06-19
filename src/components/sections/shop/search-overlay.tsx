"use client";
import { useSearchContext } from "@/components/providers";
import { PenImage } from "@/components/ui/pen-image";
import { Search, X, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const POPULAR = ["Leather Journal", "Executive Pen", "Welcome Kit", "Diwali Hamper", "Desk Organizer"];

export function SearchOverlay() {
  const { query, setQuery, results, isOpen, closeSearch } = useSearchContext();
  const ir = useRef<HTMLInputElement>(null);

  useEffect(() => { if (isOpen && ir.current) { ir.current.focus(); lockScroll(); } if (!isOpen) unlockScroll(); return () => { if (isOpen) unlockScroll(); }; }, [isOpen]);
  useEscapeKey(closeSearch, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        closeSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeSearch]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-velvet-deep/40 backdrop-blur-md z-[60]"
            onClick={closeSearch}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="search-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-[60] border-b border-ink/5 shadow-2xl"
            style={{ backgroundColor: "#F8F6F2" }}
          >
            <div className="max-w-2xl mx-auto px-6 py-5">
              <div className="flex items-center gap-4">
                <Search className="w-5 h-5 text-ink-muted flex-shrink-0" />
                <input
                  ref={ir}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search gifts, hampers, collections..."
                  className="flex-1 bg-transparent text-ink text-lg font-serif outline-none placeholder:text-ink-muted/50 placeholder:font-sans"
                />
                <kbd className="hidden sm:inline-flex items-center text-[10px] tracking-wider uppercase text-ink-muted bg-cream-dark px-2 py-1 rounded-sm">ESC</kbd>
                <button onClick={closeSearch} className="p-1 hover:text-accent transition-colors" aria-label="Close search"><X className="w-5 h-5" /></button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="border-t border-ink/5 mt-5 pt-4 pb-2 space-y-1">
                    {results.map(p => (
                      <Link key={p.id} href={`/shop/${p.slug}`} onClick={closeSearch} className="flex items-center gap-4 p-3 rounded-sm hover:bg-cream-dark transition-colors group">
                        <div className="w-14 h-14 bg-cream-dark rounded-sm overflow-hidden flex-shrink-0">
                          <PenImage src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">{p.name}</p>
                          <p className="text-xs text-ink-muted mt-0.5">{p.category} · {p.collection}</p>
                        </div>
                        <span className="text-sm font-serif text-ink">{formatPrice(p.price)}</span>
                      </Link>
                    ))}
                  </div>
                ) : query.length >= 2 ? (
                  <div className="border-t border-ink/5 mt-5 pt-8 pb-6 text-center">
                    <p className="text-sm text-ink-muted">No results for &ldquo;{query}&rdquo;</p>
                    <p className="text-xs text-ink-muted/70 mt-1">Try a different keyword</p>
                  </div>
                ) : (
                  <div className="border-t border-ink/5 mt-5 pt-5 pb-3">
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-muted mb-3">
                      <TrendingUp className="w-3 h-3" /> Popular searches
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR.map(term => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="text-xs px-3 py-1.5 bg-cream-dark text-ink-muted rounded-sm hover:bg-velvet hover:text-cream transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
