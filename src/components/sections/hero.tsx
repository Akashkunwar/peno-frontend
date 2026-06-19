"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const titleWords = ["Thoughtful", "Gifts."];

export function HeroSection() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const animate = mounted && !reduce;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-velvet-deep" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(184, 155, 114, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(184, 155, 114, 0.10) 0%, transparent 50%),
            linear-gradient(180deg, #062617 0%, #0C3824 50%, #0C3824 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold lines */}
      <motion.div
        initial={animate ? { scaleX: 0 } : false}
        animate={animate ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[18%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />
      <motion.div
        initial={animate ? { scaleX: 0 } : false}
        animate={animate ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[18%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-accent/60" />
            <span className="font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-accent/80">Premium Gifting · Marketing · Technology</span>
            <span className="w-8 h-px bg-accent/60" />
          </motion.div>

          <h1 className="font-serif text-[44px] md:text-6xl lg:text-7xl xl:text-[88px] text-white leading-[1.05] tracking-[-0.01em]">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={animate ? { opacity: 0, y: 60 } : false}
                animate={animate ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={animate ? { opacity: 0, y: 60 } : false}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-serif italic font-light text-accent/90"
            >
              Meaningful Brands.
            </motion.span>
            <br />
            <motion.span
              initial={animate ? { opacity: 0, y: 60 } : false}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              Modern Technology.
            </motion.span>
          </h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Premium gifting experiences, creative marketing, and technology solutions crafted for modern businesses.
          </motion.p>

          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mt-12 flex-wrap"
          >
            <Link href="/shop">
              <Button size="lg" className="bg-white text-velvet hover:bg-cream group">
                Explore Gifts
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/corporate-gifting">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-velvet hover:border-white">
                Corporate Gifting
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={animate ? { opacity: 0 } : false}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={animate ? { y: [0, 6, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
