"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Leaf, Sparkles, Package } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  { icon: Award, title: "Crafted with care", desc: "Every piece is handpicked, tested, and curated by our team for lasting impression." },
  { icon: Leaf, title: "Conscious choices", desc: "Sustainable materials, ethical sourcing, and responsible packaging throughout." },
  { icon: Sparkles, title: "Personal touch", desc: "Customization options that turn a gift into a memory, and a memory into a story." },
  { icon: Package, title: "Effortless delivery", desc: "Pan-India logistics with white-glove handling for orders of any size." },
];

export function ValuesSection() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-cream border-y border-ink/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent/60" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Why PENO</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
              Built on intention, delivered with care.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {values.map((v, i) => {
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-full bg-velvet flex items-center justify-center mb-6">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
                </>
              );
              if (!mounted || reduce) {
                return <div key={v.title} className="flex flex-col items-start">{inner}</div>;
              }
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start"
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
