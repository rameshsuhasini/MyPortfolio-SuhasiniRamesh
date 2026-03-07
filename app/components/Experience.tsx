'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    { role: 'Senior Software Engineer', company: 'Farmly Software', location: 'Remote', period: '2024' },
    { role: 'Senior Software Engineer', company: 'Mitel Communications', location: 'Bengaluru', period: '2021 — 2024' },
    { role: 'Senior Technical Staff', company: 'NEC India', location: 'Bengaluru', period: '2018 — 2021' },
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20 transition-colors duration-300">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-3 gap-8 border-b section-divider pb-8 transition-all duration-300"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl mb-2 transition-colors duration-300">{exp.role}</h3>
                  <p className="text-lg" style={{ color: 'var(--accent-primary)' }}>{exp.company}</p>
                </div>
                <div className="flex flex-col justify-between md:text-right">
                  <p className="text-sm uppercase tracking-wider transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                    {exp.location}
                  </p>
                  <p className="mt-2 md:mt-0 transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
                    {exp.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
