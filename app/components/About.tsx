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
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20">About</h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Senior Frontend Developer with 9+ years building scalable web applications. 
                Strong focus on <span className="text-purple-400">Angular (v17)</span> and{' '}
                <span className="text-purple-400">React</span>.
              </p>
              <p>
               Creating high-performing solutions that prioritize performance, accessibility, and responsiveness.
                Experienced in collaborating within Agile teams, translating complex requirements into intuitive 
                user experiences, and delivering clean, maintainable code. 
              </p>
              
               <p> Currently exploring AI-enhanced frontend
                 solutions to build smarter, future-ready interfaces.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-purple-400 text-sm uppercase tracking-wider mb-4">Education</h3>
                <div className="space-y-3 text-gray-400">
                  <p>MBA, Business Analytics<br />Alliance University</p>
                  <p>B.E., Electronics & Communications<br />VTU</p>
                </div>
              </div>

              <div>
                <h3 className="text-purple-400 text-sm uppercase tracking-wider mb-4">Languages</h3>
                <div className="space-y-2 text-gray-400">
                  <p>English — Fluent (C1)</p>
                  <p>German — Intermediate (B1)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
