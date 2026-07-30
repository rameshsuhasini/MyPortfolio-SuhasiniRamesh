'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const glyphs = [
  { symbol: '</>', left: '6%', top: '15%', size: '2.5rem', duration: 9, delay: 0 },
  { symbol: '{ }', left: '88%', top: '20%', size: '2rem', duration: 11, delay: 1.2 },
  { symbol: '01', left: '15%', top: '75%', size: '1.75rem', duration: 8, delay: 2 },
  { symbol: '=>', left: '80%', top: '70%', size: '2.25rem', duration: 10, delay: 0.6 },
  { symbol: '( )', left: '48%', top: '8%', size: '1.5rem', duration: 12, delay: 1.8 },
  { symbol: 'AI', left: '92%', top: '48%', size: '1.75rem', duration: 9.5, delay: 0.4 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl z-0 pointer-events-none"
            style={{ width: 420, height: 420, left: '-10%', top: '5%', background: 'var(--accent-primary)', opacity: 0.16 }}
            animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl z-0 pointer-events-none"
            style={{ width: 360, height: 360, right: '-8%', bottom: '10%', background: 'var(--accent-light)', opacity: 0.14 }}
            animate={{ x: [0, -50, 40, 0], y: [0, 30, -30, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {glyphs.map((g, i) => (
            <motion.span
              key={i}
              className="absolute font-mono select-none z-0 pointer-events-none"
              style={{ left: g.left, top: g.top, fontSize: g.size, color: 'var(--accent-primary)' }}
              animate={{ y: [0, -24, 0], opacity: [0.1, 0.32, 0.1] }}
              transition={{ duration: g.duration, repeat: Infinity, ease: 'easeInOut', delay: g.delay }}
            >
              {g.symbol}
            </motion.span>
          ))}
        </>
      )}

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl mb-20 transition-colors duration-300">
            About Me
          </h2>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
            {/* Left column - Bold Typography (55%) - REDUCED SIZE */}
            <div className="lg:col-span-3">
              <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] transition-colors duration-300">
                <span className="block">Crafting</span>
                <span className="block">seamless</span>
                <span className="block transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>experiences</span>
              </h3>
            </div>

            {/* Right column - Clean Description (45%) */}
            <div className="lg:col-span-2">
              <div className="space-y-6 text-base md:text-lg leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Senior Software Developer with <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>10+ years</span> building scalable web applications. Expert in{' '}
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Angular (v17)</span> and{' '}
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>React</span>, designing high-performance, accessible interfaces while collaborating with designers and product managers in Agile environments.
                </p>
                <p>
                  Comfortable across the stack — <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Node.js</span> and Express APIs, SQL/NoSQL databases, and AWS/Docker deployments — with a working knowledge of Java from earlier roles.
                </p>
                <p>
                  Currently exploring <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Agentic AI</span> to create intelligent, user-centric frontend solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
