"use client";
import { useState } from "react";
import { placeholderSVG } from "@/lib/placeholders";

export function PenImage({
  src,
  alt,
  className,
  priority,
  fallbacks = [],
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbacks?: string[];
}) {
  const [failed, setFailed] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const finalSrc = failed && fallbackIndex < fallbacks.length ? fallbacks[fallbackIndex] : src;

  if (failed && fallbackIndex >= fallbacks.length) {
    return <img src={placeholderSVG(alt)} alt={alt} className={className} />;
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (fallbackIndex < fallbacks.length) {
          setFallbackIndex(i => i + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
