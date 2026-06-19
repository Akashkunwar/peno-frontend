"use client";
import { useEffect, useState } from "react";

/**
 * Returns true once the component has mounted on the client.
 * Use to gate UI that depends on browser-only state (e.g. localStorage)
 * to avoid React hydration mismatches.
 */
export function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  return mounted;
}
