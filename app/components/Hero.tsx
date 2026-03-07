'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'var(--accent-primary)' }}
            className="text-sm uppercase tracking-[0.3em] mb-8 font-medium"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl mb-12 leading-[0.95] transition-colors duration-300"
          >
            Suhasini
            <br />
            <span className="gradient-text">Ramesh</span>
          </motion.h1>

          {/* Stats Section - 4 columns now */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm uppercase tracking-wider"
          >
            {[
              { label: 'Experience', value: '9+ Years' },
              { label: 'Projects', value: '15+' },
              { label: 'Location', value: 'Berlin' },
              { label: 'German', value: 'B2' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <p className="font-medium stat-value">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
