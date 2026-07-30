'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiCoffee, FiMoon, FiMonitor, FiStar } from 'react-icons/fi';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const floatingIcons = [
  { Icon: FiCoffee, left: '85%', top: '18%', size: 30, duration: 10, delay: 0 },
  { Icon: FiMoon, left: '10%', top: '68%', size: 24, duration: 12, delay: 1.5 },
  { Icon: FiMonitor, left: '90%', top: '58%', size: 28, duration: 9, delay: 0.8 },
  { Icon: FiStar, left: '55%', top: '12%', size: 16, duration: 8, delay: 2.2 },
  { Icon: FiStar, left: '8%', top: '32%', size: 12, duration: 7, delay: 1 },
];

const terminalPhrases = [
  '$ npm run build',
  '// TODO: sleep eventually',
  'git commit -m "fix at 3am"',
  'brewing coffee... x5',
  'debugging in the dark...',
  "console.log('please work')",
];

function TerminalTypewriter() {
  const shouldReduceMotion = useReducedMotionSafe();
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setText(terminalPhrases[0]);
      return;
    }

    const current = terminalPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % terminalPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, shouldReduceMotion]);

  return (
    <span className="font-mono text-xs md:text-sm" style={{ color: 'var(--text-tertiary)' }}>
      {text}
      {!shouldReduceMotion && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {!shouldReduceMotion &&
        floatingIcons.map(({ Icon, left, top, size, duration, delay }, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ left, top, color: 'var(--accent-primary)' }}
            animate={{ y: [0, -20, 0], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon size={size} />
          </motion.div>
        ))}

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'var(--accent-primary)' }}
            className="text-sm uppercase tracking-[0.3em] mb-8 font-medium"
          >
            Software Developer
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
              { label: 'Experience', value: '10+ Years' },
              { label: 'Projects', value: '20+' },
              { label: 'Location', value: 'Berlin' },
              { label: 'German', value: 'B2' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <p className="font-medium stat-value">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 hidden sm:block"
          >
            <TerminalTypewriter />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
