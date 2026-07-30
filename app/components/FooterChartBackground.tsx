'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const WIDTH = 1200;
const HEIGHT = 140;

function buildPath(ys: number[]) {
  const step = WIDTH / (ys.length - 1);
  return ys.map((y, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${y}`).join(' ');
}

// Fixed, deterministic keyframe waveforms (no Math.random -> stable across SSR/CSR)
const LINE_A_KEYFRAMES = [
  [90, 60, 100, 40, 80, 30, 95, 55, 35, 85, 45, 100, 65, 90],
  [70, 95, 50, 85, 30, 90, 60, 40, 100, 55, 80, 35, 95, 70],
  [100, 50, 80, 35, 95, 60, 40, 90, 55, 30, 100, 65, 85, 50],
  [90, 60, 100, 40, 80, 30, 95, 55, 35, 85, 45, 100, 65, 90],
];

const LINE_B_KEYFRAMES = [
  [50, 80, 30, 95, 60, 40, 100, 55, 85, 35, 90, 65, 45, 75],
  [95, 40, 85, 55, 30, 100, 50, 90, 35, 80, 60, 45, 95, 60],
  [40, 90, 55, 30, 95, 65, 45, 85, 60, 100, 35, 80, 50, 90],
  [50, 80, 30, 95, 60, 40, 100, 55, 85, 35, 90, 65, 45, 75],
];

const BAR_COUNT = 20;
// Fixed repeating categorical order: teal (site accent), Instagram pink, LinkedIn blue
const BAR_COLORS = ['#14B8A6', '#E1306C', '#0A66C2'];
const BAR_BASE_HEIGHTS = [0.4, 0.7, 0.5, 0.9, 0.3, 0.6, 0.8, 0.45, 0.65, 0.35];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/**
 * Framer Motion's keyframe-array interpolation for the raw SVG `d` attribute
 * is unreliable (it briefly resolves to the literal string "undefined"
 * between cycles, throwing console errors). Driving it manually with rAF and
 * a numeric lerp sidesteps that entirely.
 */
function useMorphingPath(pathRef: React.RefObject<SVGPathElement>, keyframes: number[][], durationMs: number) {
  useEffect(() => {
    const segmentDuration = durationMs / keyframes.length;
    let rafId = 0;
    let start: number | null = null;

    function tick(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = (timestamp - start) % durationMs;
      const segIndex = Math.floor(elapsed / segmentDuration);
      const segT = easeInOut((elapsed % segmentDuration) / segmentDuration);
      const from = keyframes[segIndex];
      const to = keyframes[(segIndex + 1) % keyframes.length];
      const ys = from.map((y, i) => y + (to[i] - y) * segT);
      pathRef.current?.setAttribute('d', buildPath(ys));
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [pathRef, keyframes, durationMs]);
}

export default function FooterChartBackground() {
  const shouldReduceMotion = useReducedMotionSafe();
  const pathARef = useRef<SVGPathElement>(null);
  const pathBRef = useRef<SVGPathElement>(null);

  useMorphingPath(pathARef, LINE_A_KEYFRAMES, 8000);
  useMorphingPath(pathBRef, LINE_B_KEYFRAMES, 10000);

  if (shouldReduceMotion) return null;

  const barWidth = WIDTH / BAR_COUNT;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: BAR_COUNT }).map((_, i) => {
        const baseHeight = BAR_BASE_HEIGHTS[i % BAR_BASE_HEIGHTS.length] * HEIGHT;
        const color = BAR_COLORS[i % BAR_COLORS.length];
        const heights = [baseHeight, baseHeight * 0.4, baseHeight * 1.1, baseHeight * 0.6, baseHeight];
        return (
          <motion.rect
            key={i}
            x={i * barWidth + barWidth * 0.2}
            width={barWidth * 0.6}
            rx={2}
            fill={color}
            opacity={0.3}
            initial={{ height: baseHeight, y: HEIGHT - baseHeight }}
            animate={{
              height: heights,
              y: heights.map((h) => HEIGHT - h),
            }}
            transition={{
              duration: 2.6 + (i % 5) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 7) * 0.15,
            }}
          />
        );
      })}

      <path
        ref={pathARef}
        d={buildPath(LINE_A_KEYFRAMES[0])}
        stroke="#14B8A6"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.5}
      />
      <path
        ref={pathBRef}
        d={buildPath(LINE_B_KEYFRAMES[0])}
        stroke="#0A66C2"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.35}
      />
    </svg>
  );
}
