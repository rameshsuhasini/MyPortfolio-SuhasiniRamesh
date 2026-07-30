'use client';

import { useEffect, useState } from 'react';

/**
 * Framer Motion's own `useReducedMotion` can resolve synchronously on the
 * client (via a lazy useState initializer that reads matchMedia during
 * render), which differs from the server's always-false value whenever a
 * visitor already has the OS/browser reduced-motion preference on at load
 * time. That mismatch fails hydration. This hook always renders `false` on
 * the first pass (matching the server) and only flips post-mount, so the
 * conditional JSX it gates never diverges between server and client.
 */
export function useReducedMotionSafe() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
