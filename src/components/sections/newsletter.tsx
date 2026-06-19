"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-velvet text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-accent/60" />
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/50">Stay Inspired</p>
          <span className="w-6 h-px bg-accent/60" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">The PENO Edit</h2>
        <p className="mt-5 text-white/55 text-base md:text-lg leading-relaxed">Curated gifting inspiration, new collection launches, and exclusive offers — delivered with restraint to your inbox.</p>

        {done ? (
          <div className="mt-10 inline-flex items-center gap-2 text-sm text-accent">
            <Check className="w-4 h-4" /> Thank you for subscribing
          </div>
        ) : (
          <form
            onSubmit={e => { e.preventDefault(); if (email) setDone(true); }}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-5 py-3.5 text-sm rounded-sm outline-none focus:border-accent/40 transition-colors"
              required
            />
            <Button type="submit" className="bg-white text-velvet hover:bg-cream flex-shrink-0 group">
              Subscribe <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/30">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
