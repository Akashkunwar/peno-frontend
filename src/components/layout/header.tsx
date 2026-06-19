"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCart, useWishlist, useSearchContext } from "@/components/providers";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { useIsMounted } from "@/hooks/use-is-mounted";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Other Services", href: "#", children: [{ label: "Marketing", href: "/marketing-services" }, { label: "IT Services", href: "/it-services" }] },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ link, transparent }: { link: typeof navLinks[number]; transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={cn("relative flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200", transparent ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-ink")} onClick={() => setOpen(!open)} aria-expanded={open}>
        {link.label}<ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")} />
        <span className={cn("absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300", transparent ? "bg-accent" : "bg-velvet", open && "scale-x-100")} />
      </button>
      <AnimatePresence>
        {open && link.children && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-1 bg-cream border border-ink/5 shadow-xl rounded-sm py-2 min-w-[200px]"
          >
            {link.children.map(c => (
              <Link
                key={c.label}
                href={c.href}
                className="group flex items-center gap-2 px-5 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-cream-dark transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                {c.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenuTrigger({ transparent }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(false);

  useEffect(() => { if (open) lockScroll(); else unlockScroll(); return () => { if (open) unlockScroll(); }; }, [open]);
  useEscapeKey(() => setOpen(false), open);

  useEffect(() => {
    if (!open) return;
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className={cn("lg:hidden p-2 -ml-2 transition-colors", transparent ? "text-white hover:text-white" : "text-ink hover:text-ink")} aria-label="Open menu">
        <Menu className="w-5 h-5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-velvet-deep/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-md z-50 lg:hidden flex flex-col shadow-2xl"
            style={{ backgroundColor: "#F8F6F2" }}
          >
            <div className="flex items-center justify-between p-6 border-b border-ink/5">
              <Link href="/" className="font-serif text-2xl tracking-tight" onClick={() => setOpen(false)}>PENO</Link>
              <button onClick={() => setOpen(false)} className="p-2 -mr-2 hover:text-accent transition-colors" aria-label="Close menu"><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex-1 overflow-y-auto py-8 px-6">
              <div className="flex flex-col">
                {navLinks.map((link, i) => link.children ? (
                  <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <button onClick={() => setExpandedService(!expandedService)} className="flex items-center justify-between w-full py-3.5 text-lg font-serif text-ink hover:text-accent transition-colors">
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", expandedService && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {expandedService && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {link.children.map(c => (
                              <Link key={c.label} href={c.href} onClick={() => setOpen(false)} className="block py-2.5 text-base text-ink-muted hover:text-ink transition-colors">{c.label}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <Link href={link.href} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-serif text-ink hover:text-accent transition-colors">{link.label}</Link>
                  </motion.div>
                ))}
              </div>
            </nav>
            <div className="p-6 border-t border-ink/5 space-y-3">
              <p className="text-xs text-ink-muted">info@peno.in</p>
              <p className="text-xs text-ink-muted/70">Patna · India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-velvet-deep text-white/70 overflow-hidden border-b border-white/5">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-12 py-2.5 text-[11px] tracking-[0.18em] uppercase whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="flex items-center gap-2"><Sparkles className="w-3 h-3 text-accent" /> Complimentary shipping on orders above ₹5,000</span>
              <span className="text-white/20">·</span>
              <span>Custom branding for orders of 25+ units</span>
              <span className="text-white/20">·</span>
              <span>Now serving 50+ cities across India</span>
              <span className="text-white/20">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { itemCount, openCart } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const { openSearch } = useSearchContext();
  const lastScrollRef = useRef(0);
  const mounted = useIsMounted();

  useEffect(() => {
    const handler = () => {
      const c = window.scrollY;
      const last = lastScrollRef.current;
      if (isHome) setScrolled(c > 60);
      if (c < 100) {
        setHidden(false);
      } else {
        setHidden(c > last);
      }
      lastScrollRef.current = c;
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setHidden(false); }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <div className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", transparent ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0", hidden && !transparent && "-translate-y-full")}>
        <AnnouncementBar />
      </div>
      <header className={cn("fixed left-0 right-0 z-40 transition-all duration-500", transparent ? "top-0 bg-transparent py-6" : "top-[36px] bg-cream/95 backdrop-blur-md border-b border-ink/5 py-3", hidden && !transparent && "-translate-y-[calc(100%+36px)]")}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <MobileMenuTrigger transparent={transparent} />
            <Link href="/" className={cn("font-serif text-2xl md:text-[28px] tracking-[0.02em] transition-colors duration-300", transparent ? "text-white" : "text-ink")}>
              PENO
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => link.children ? (
              <DropdownMenu key={link.label} link={link} transparent={transparent} />
            ) : (
              <Link key={link.label} href={link.href} className="group relative">
                <span className={cn("block px-4 py-2 text-sm transition-colors duration-200", transparent ? "text-white/70 group-hover:text-white" : "text-ink-muted group-hover:text-ink")}>{link.label}</span>
                <span className={cn("absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out", transparent ? "bg-accent" : "bg-velvet")} />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 md:gap-2">
            <button onClick={openSearch} className={cn("p-2 transition-colors", transparent ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-ink")} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className={cn("p-2 transition-colors relative", transparent ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-ink")} aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {mounted && wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-velvet text-cream text-[10px] font-medium rounded-full flex items-center justify-center">{wishlistCount}</span>
              )}
            </button>
            <button onClick={openCart} className={cn("p-2 transition-colors relative", transparent ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-ink")} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-velvet text-cream text-[10px] font-medium rounded-full flex items-center justify-center">{itemCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
