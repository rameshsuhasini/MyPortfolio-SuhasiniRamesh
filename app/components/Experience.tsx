'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    { role: 'Senior Software Engineer', company: 'Farmly Software', location: 'Remote', period: '2024' },
    { role: 'Senior Software Engineer', company: 'Mitel Communications', location: 'Bengaluru', period: '2021 — 2024' },
    { role: 'Senior Member Technical Staff', company: 'NEC India', location: 'Bengaluru', period: '2018 — 2021' },
    { role: 'Software Engineer', company: 'Tech Mahindra', location: 'Bengaluru', period: '2015 — 2018' }
  ];

  return (
    <section ref={ref} id="experience" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-3 gap-8 border-b border-purple-900/30 pb-8 hover:border-purple-700/50 transition-colors duration-300"
              >
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl mb-2 text-white">{exp.role}</h3>
                  <p className="text-purple-400 text-lg">{exp.company}</p>
                </div>
                <div className="flex flex-col justify-between md:text-right">
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{exp.location}</p>
                  <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
