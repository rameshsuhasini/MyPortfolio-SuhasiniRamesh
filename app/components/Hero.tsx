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
            className="text-purple-400 text-sm uppercase tracking-[0.3em] mb-8 font-medium"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl mb-12 leading-[0.95]"
          >
            Suhasini
            <br />
            <span className="gradient-text">Ramesh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            <p>
              9+ years building high-performance web applications with Angular and React.
            </p>
            <p>
              Based in Berlin, focused on scalable, accessible interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex gap-8 text-sm uppercase tracking-wider"
          >
            {[
              { label: 'Experience', value: '9+ Years' },
              { label: 'Projects', value: '15+' },
              { label: 'Location', value: 'Berlin' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-gray-600">{item.label}</p>
                <p className="text-purple-400 font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
