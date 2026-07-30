'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiN8N,
  SiAnthropic,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiNeon,
  SiDocker,
  SiPython,
  SiJasmine,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const orbitIcons = [
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiAngular, label: 'Angular', color: '#DD0031' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { Icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#38BDF8' },
];

const marqueeIcons = [
  ...orbitIcons,
  { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { Icon: SiCss, label: 'CSS3', color: '#1572B6' },
  { Icon: SiGit, label: 'Git', color: '#F05032' },
  { Icon: SiN8N, label: 'n8n', color: '#EA4B71' },
  { Icon: SiAnthropic, label: 'Claude API', color: '#D97757' },
  { Icon: SiExpress, label: 'Express.js', color: 'var(--text-primary)' },
  { Icon: FaJava, label: 'Java', color: '#f89820' },
  { Icon: SiPython, label: 'Python', color: '#3776AB' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { Icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
  { Icon: SiNeon, label: 'NeonDB', color: '#00E599' },
  { Icon: FaAws, label: 'AWS', color: '#FF9900' },
  { Icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { Icon: SiJasmine, label: 'Jasmine', color: '#8A4182' },
];

const ORBIT_RADIUS = 150;
const ORBIT_DURATION = 24;

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="tech-stack" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20 transition-colors duration-300">
            Tech stack
          </h2>

          {/* Orbiting core stack */}
          <div
            className="relative mx-auto mb-24 hidden md:flex items-center justify-center"
            style={{ width: 380, height: 380 }}
          >
            <motion.div
              className="absolute rounded-full flex items-center justify-center z-10"
              style={{
                width: 88,
                height: 88,
                background: 'var(--card-bg)',
                border: '2px solid var(--border-color)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px 0px var(--accent-primary)',
                  '0 0 40px 8px var(--accent-primary)',
                  '0 0 20px 0px var(--accent-primary)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-mono text-sm" style={{ color: 'var(--accent-primary)' }}>
                {'</>'}
              </span>
            </motion.div>

            {orbitIcons.map(({ Icon, label, color }, i) => {
              const angle = (360 / orbitIcons.length) * i;
              return (
                <motion.div
                  key={label}
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: [angle, angle + 360] }}
                  transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{ transform: `translate(-50%, -50%) translateX(${ORBIT_RADIUS}px)` }}
                  >
                    <motion.div
                      animate={{ rotate: [-angle, -angle - 360] }}
                      transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
                      whileHover={{ scale: 1.3 }}
                      className="group relative flex items-center justify-center rounded-full cursor-default pointer-events-auto"
                      style={{
                        width: 56,
                        height: 56,
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <Icon size={26} color={color} />
                      <span
                        className="absolute -bottom-7 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {label}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Infinite marquee of the broader toolkit */}
          <div
            className="relative overflow-hidden py-4"
            style={{
              maskImage:
                'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="marquee-track flex items-center gap-6 w-max">
              {[...marqueeIcons, ...marqueeIcons].map(({ Icon, label, color }, i) => (
                <motion.div
                  key={`${label}-${i}`}
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="premium-card flex items-center gap-3 px-5 py-3 rounded-full shrink-0"
                >
                  <Icon size={22} color={color} />
                  <span
                    className="text-sm font-mono whitespace-nowrap"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
