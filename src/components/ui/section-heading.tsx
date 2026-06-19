"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SHP {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, className, light, align = "center" }: SHP) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const content = (
    <>
      {label && (
        <div className={cn("inline-flex items-center gap-3 mb-5", align === "center" && "justify-center")}>
          <span className={cn("w-6 h-px", light ? "bg-white/30" : "bg-accent/60")} />
          <p className={cn("font-sans text-[11px] tracking-[0.25em] uppercase", light ? "text-white/60" : "text-ink-muted")}>{label}</p>
          <span className={cn("w-6 h-px", light ? "bg-white/30" : "bg-accent/60")} />
        </div>
      )}
      <h2 className={cn("font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em]", light ? "text-white" : "text-ink")}>{title}</h2>
      {description && (
        <p className={cn("mt-5 text-base md:text-lg leading-relaxed max-w-2xl", align === "center" && "mx-auto", light ? "text-white/60" : "text-ink-muted")}>{description}</p>
      )}
    </>
  );

  if (!mounted) {
    return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {content}
    </motion.div>
  );
}
