'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiInstagram, SiGithub, SiNotion } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import FooterChartBackground from './FooterChartBackground';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/ramesh_suha',
    Icon: SiInstagram,
    color: 'url(#instagram-gradient)',
    glow: '#E1306C',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/suhasini-ramesh-be-mba',
    Icon: FaLinkedin,
    color: '#0A66C2',
    glow: '#0A66C2',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rameshsuhasini',
    Icon: SiGithub,
    color: 'var(--text-primary)',
    glow: 'var(--accent-primary)',
  },
  {
    label: 'Notion',
    href: 'https://www.notion.so/Suhasini-Ramesh-Senior-Frontend-Developer-30324e1c168c80139674c3290711a100',
    Icon: SiNotion,
    color: 'var(--text-primary)',
    glow: 'var(--accent-primary)',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <section ref={ref} id="contact" className="min-h-screen flex flex-col">
      {/* Hidden gradient defs for the Instagram icon */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#E1306C" />
            <stop offset="75%" stopColor="#833AB4" />
            <stop offset="100%" stopColor="#405DE6" />
          </linearGradient>
        </defs>
      </svg>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative flex-1 flex items-center justify-center py-32 contact-cta overflow-hidden"
      >
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{ width: 340, height: 340, left: '5%', top: '10%', background: '#E1306C', opacity: 0.14 }}
              animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{ width: 300, height: 300, right: '8%', bottom: '15%', background: '#0A66C2', opacity: 0.14 }}
              animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            />
            <motion.div
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{ width: 260, height: 260, right: '35%', top: '0%', background: 'var(--accent-primary)', opacity: 0.12 }}
              animate={{ x: [0, 30, -30, 0], y: [0, 20, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
          </>
        )}

        <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-tight transition-colors duration-300">
            Want to create
            <br />
            something <span className="text-gray-400 dark:text-gray-500">awesome?</span>
          </h2>

          <motion.a
            href="mailto:suhasiniramesh1911@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'var(--accent-primary)',
              color: 'white'
            }}
            className="inline-block px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300"
          >
            Let's Talk →
          </motion.a>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative contact-footer py-16 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <FooterChartBackground />
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
          <div className="text-center md:text-left space-y-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">
              Stay connected w/ me.
            </p>

            <h3 className="text-3xl md:text-4xl font-normal transition-colors duration-300">
              Suhasini Ramesh
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-2 transition-colors duration-300"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <motion.span
                    className="relative flex items-center justify-center w-8 h-8 rounded-full"
                    whileHover={{
                      scale: 1.2,
                      rotate: 8,
                      transition: { type: 'spring', stiffness: 300, damping: 12 },
                    }}
                    animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
                    transition={{
                      y: { duration: 2.4 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 blur-md pointer-events-none"
                      style={{ background: social.glow }}
                    />
                    <social.Icon
                      size={18}
                      style={
                        social.color.startsWith('url(')
                          ? { fill: social.color, position: 'relative' }
                          : { color: social.color, position: 'relative' }
                      }
                    />
                  </motion.span>
                  <span className="group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t transition-colors duration-300" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                © 2025 Suhasini Ramesh • Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
