"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * SSR-safe motion wrappers.
 *
 * Server-rendered HTML always contains the visible content (opacity:1).
 * The client mounts, then enables animations only after hydration
 * via a `mounted` flag, so initial styles match the server's first paint.
 */

function useClientMounted() {
  const [m, setM] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setM(true), []);
  return m;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function FadeIn({
  children, className, direction = "up", delay = 0, duration = 0.7,
}: {
  children: React.ReactNode; className?: string; direction?: "up" | "down" | "left" | "right"; delay?: number; duration?: number;
}) {
  const reduce = useReducedMotion();
  const mounted = useClientMounted();
  const dirMap: Record<string, { x?: number; y?: number }> = { up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 } };

  if (reduce || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children, className, staggerDelay = 0.1,
}: {
  children: React.ReactNode; className?: string; staggerDelay?: number;
}) {
  const reduce = useReducedMotion();
  const mounted = useClientMounted();

  if (reduce || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children, className,
}: {
  children: React.ReactNode; className?: string;
}) {
  const reduce = useReducedMotion();
  const mounted = useClientMounted();

  if (reduce || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
