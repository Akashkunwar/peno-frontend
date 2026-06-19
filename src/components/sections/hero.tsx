"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const titleLines = [
  { text: "Thoughtful Gifts.", className: "" },
  { text: "Meaningful Brands.", className: "italic font-light text-accent/90" },
  { text: "Modern Technology.", className: "" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const animate = mounted && !reduce;

  return (
    <section className="relative h-screen min-h-[760px] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-velvet-deep" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(184, 155, 114, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 75%, rgba(184, 155, 114, 0.12) 0%, transparent 55%),
            linear-gradient(180deg, #062617 0%, #0C3824 55%, #0C3824 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(6, 38, 23, 0.4) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold lines */}
      <motion.div
        initial={animate ? { scaleX: 0 } : false}
        animate={animate ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[18%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />
      <motion.div
        initial={animate ? { scaleX: 0 } : false}
        animate={animate ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[18%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <span className="w-10 h-px bg-accent/60" />
            <span className="font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-accent/80">Premium Gifting · Marketing · Technology</span>
            <span className="w-10 h-px bg-accent/60" />
          </motion.div>

          <h1 className="font-serif text-[46px] md:text-6xl lg:text-7xl xl:text-[92px] text-white leading-[1.02] tracking-[-0.02em]">
            {titleLines.map((line, i) => (
              <motion.span
                key={line.text}
                initial={animate ? { opacity: 0, y: 70 } : false}
                animate={animate ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 1.05, delay: 0.45 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${line.className}`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A premium studio for gifting, brand building, and technology — crafting memorable experiences for modern businesses.
          </motion.p>

          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mt-14 flex-wrap"
          >
            <Link href="/shop">
              <Button size="lg" className="bg-white text-velvet hover:bg-cream group shadow-lg shadow-black/20">
                Explore Gifts
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/corporate-gifting">
              <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white hover:text-velvet hover:border-white">
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
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={animate ? { y: [0, 8, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
