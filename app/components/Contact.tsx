'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const links = [
     { label: 'Phone', value: '+49 15566146448', href: 'tel:+4915566146448' },
    { label: 'Email', value: 'suhasiniramesh1911@gmail.com', href: 'mailto:suhasiniramesh1911@gmail.com' },
    { label: 'GitHub', value: 'github.com/rameshsuhasini', href: 'https://github.com/rameshsuhasini' },
    { label: 'LinkedIn', value: 'linkedin.com/in/suhasini-ramesh-be-mba', href: 'https://linkedin.com/in/suhasini-ramesh-be-mba' },
    { label: 'Notion', value: 'View Portfolio', href: 'https://www.notion.so/Suhasini-Ramesh-Senior-Frontend-Developer-30324e1c168c80139674c3290711a100' }
  ];

  return (
    <section ref={ref} id="contact" className="min-h-screen flex flex-col justify-between py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <div className="space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                Available for freelance and full-time opportunities. Based in Berlin, Germany.
              </p>
            </div>

            <div className="space-y-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">{link.label}</p>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-purple-400 hover:text-purple-300 transition-colors text-lg hover-underline inline-block"
                  >
                    {link.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pt-16 border-t border-purple-900/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-600">
          <p>© 2025 Suhasini Ramesh</p>
          <p>Berlin, Germany</p>
        </div>
      </motion.footer>
    </section>
  );
}
