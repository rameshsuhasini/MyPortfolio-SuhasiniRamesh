'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl mb-20 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
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
                  Senior Frontend Developer with <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>9+ years</span> building scalable web applications. Expert in{' '}
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Angular (v17)</span> and{' '}
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>React</span>, designing high-performance, accessible interfaces while collaborating with designers and product managers in Agile environments.
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
