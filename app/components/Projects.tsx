'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SiAngular, SiTypescript, SiNodedotjs, SiN8N, SiAnthropic, SiReact, SiPython, SiDocker, SiGithub, SiNextdotjs } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const TECH_ICON_MATCHERS: [RegExp, { Icon: React.ComponentType<{ size?: number; color?: string }>; color: string }][] = [
  [/angular/i, { Icon: SiAngular, color: '#DD0031' }],
  [/typescript/i, { Icon: SiTypescript, color: '#3178C6' }],
  [/node\.?js/i, { Icon: SiNodedotjs, color: '#339933' }],
  [/n8n/i, { Icon: SiN8N, color: '#EA4B71' }],
  [/claude/i, { Icon: SiAnthropic, color: '#D97757' }],
  [/react/i, { Icon: SiReact, color: '#61DAFB' }],
  [/python/i, { Icon: SiPython, color: '#3776AB' }],
  [/\bjava\b/i, { Icon: FaJava, color: '#f89820' }],
  [/aws|lambda/i, { Icon: FaAws, color: '#FF9900' }],
  [/docker/i, { Icon: SiDocker, color: '#2496ED' }],
  [/next\.?js/i, { Icon: SiNextdotjs, color: 'var(--text-primary)' }],
];

function getTechIcon(tech: string) {
  const match = TECH_ICON_MATCHERS.find(([pattern]) => pattern.test(tech));
  return match ? match[1] : null;
}

const professionalProjects = [
  {
    name: 'Product Catalog Platform',
    year: '2024',
    company: 'Farmly Software',
    tech: ['React', 'RESTful APIs'],
    description: 'Developed a scalable React-based web application for a searchable product catalog, focusing on performance, usability, and responsive design.',
    achievements: [
      'Collaborated closely with designers and the backend team to build user-friendly interfaces with seamless data flow.',
      'Improved frontend performance and load efficiency through optimized rendering and API integration.',
      'Maintained clean, modular, and reusable code aligned with modern frontend best practices.'
    ]
  },
  {
    name: 'MIVB Business Console',
    year: '2021 – 2024',
    company: 'Mitel Communications',
    tech: ['Java', 'JavaFX'],
    description: 'Developed the MIVB Business Console using Java and JavaFX as the frontend, resolving critical bugs and shipping enhanced features.',
    achievements: [
      'Recognized for identifying and fixing a JavaFX version issue via the package build process.'
    ]
  },
  {
    name: 'COCOA Component Library',
    year: '2021 – 2024',
    company: 'Mitel Communications',
    tech: ['Angular', 'TypeScript', 'AWS Lambda'],
    description: 'Built the COCOA component library for UI reusability across projects, partnering with product managers to ship high-quality, consistent features.',
    achievements: [
      'Implemented unit test coverage with Jasmine and Karma.',
      'Managed AWS Lambda deployments for scalable applications.'
    ]
  },
  {
    name: 'Archive App',
    year: '2018 – 2021',
    company: 'NEC India',
    tech: ['Angular', 'RESTful APIs'],
    description: 'Led development of the Archive app (Angular v5), integrating RESTful APIs and geolocation tagging, boosting speed by 40% while keeping the UI responsive with modern CSS techniques.',
    achievements: [
      'Migrated the application from AngularJS to Angular (v5), improving the overall user experience.',
      'Collaborated with designers and product teams across framework migrations, refining features and maintaining documentation.'
    ]
  },
  {
    name: 'Project Coffee Bean (PCB)',
    year: '2015 – 2018',
    company: 'Tech Mahindra',
    tech: ['AngularJS', 'Java', 'QR Integration', 'Sensor Data'],
    description: 'Developed Project Coffee Bean (AngularJS) to visualize sensor data across the coffee lifecycle — from planting to market — adding QR scanning functionality and optimizing front-end/back-end interactions with Java. Presented to CEOs of Tech Mahindra and Nestlé.',
    achievements: ['CEO presentation', 'QR scanning', 'Full lifecycle tracking']
  },
  {
    name: 'iCOPL — Airbus Production Automation',
    year: '2015 – 2018',
    company: 'Tech Mahindra',
    tech: ['AngularJS', 'Workflow Automation', 'Real-time Data'],
    description: 'Automated the Airbus production workflow with an AngularJS application, reducing human intervention by 70% and improving efficiency. Tested in real-time at AIRBUS Toulouse, ensuring seamless functionality.',
    achievements: ['70% reduction in manual intervention', 'Real-time production data', 'Live-tested at AIRBUS Toulouse']
  }
];

const personalProjects = [
  {
    name: 'What to Cook',
    year: '2026',
    wip: true,
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Claude API'],
    description: 'An AI-powered meal planning and nutrition assistant — a weekly meal planner, auto-generated grocery lists, pantry tracking, and AI-driven recipe and health insights, built full-stack (Next.js frontend, Node/Express/Prisma/PostgreSQL backend).',
    achievements: [
      'AI recipe generator, AI weekly meal-plan generator, and AI pantry-based recipe suggestions, all powered by the Claude API.',
      'Dashboard with nutrition summaries, weight-trend charts, and personalized daily health insights.',
      'Drag-and-assign weekly planner that auto-generates a grocery list, with pantry and expiry tracking.'
    ],
    github: 'https://github.com/rameshsuhasini/What-to-cook-app',
    demo: 'https://what-to-cook-app.vercel.app/login'
  },
  {
    name: 'Leben in Deutschland — Exam Prep',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    description: 'A premium exam-prep app for Germany\'s naturalization test (Einbürgerungstest) — all 460 official BAMF questions, timed mock exams matching the real 33-question/60-minute/17-to-pass format, flashcards, and a progress dashboard with exam readiness tracking.',
    achievements: [
      'Full mock-exam simulation with official pass threshold and state-specific question sets for all 16 Bundesländer.',
      'DE/EN language toggle across the entire UI and question bank, with progress persisted via Zustand.',
      'Flashcards, category-filtered practice mode, and a searchable question browser with bookmarking.'
    ],
    github: 'https://github.com/rameshsuhasini/lid-app-LebenInDeutschland-',
    demo: 'https://lid-app-leben-in-deutschland-mgopvybtk-rameshsuhasinis-projects.vercel.app/'
  },
  {
    name: 'AI Research Agent',
    year: '2025',
    tech: ['Claude API', 'Tavily Search API', 'Node.js', 'TypeScript', 'Angular'],
    description: 'An autonomous AI agent that researches any topic by breaking it into multiple search queries, analyzing findings, and producing a structured report — all in real time. Built as a solo learning project exploring AI model integration, agentic design patterns, and streaming with the Claude API.',
    achievements: [
      'Agentic loop with Claude tool-use, live-streamed to the UI over Server-Sent Events.',
      'Real web search via the Tavily API with automatic retry and timeout handling.',
      'Split-panel UI: live agent activity on one side, structured report (summary, findings, sources) on the other.'
    ],
    github: 'https://github.com/rameshsuhasini/AI-RESEARCH-AGENT',
    demo: 'https://ai-research-agent-beige.vercel.app/'
  },
  {
    name: 'AI Walking Assistant',
    year: '2025',
    tech: ['n8n', 'AI Integration', 'Workflow Automation'],
    description: 'Built with n8n automation platform to create an AI-powered navigation system for enhanced accessibility and user experience.',
    achievements: ['AI-powered', 'Real-time processing', 'Workflow automation'],
    github: 'https://github.com/rameshsuhasini/n8n-AI-Agent/tree/main/AI%20Walking%20Assist'
  }
];

interface ProjectCardProps {
  project: {
    name: string;
    year: string;
    company?: string;
    wip?: boolean;
    tech: string[];
    description: string;
    achievements: string[];
    github?: string;
    demo?: string;
  };
  type: 'Professional' | 'Personal';
  delay: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, type, delay, isInView, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="project-item premium-card rounded-2xl p-8 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="text-2xl md:text-3xl transition-colors duration-300 hover:text-[var(--accent-primary)]">
          {project.name}
        </h3>
        <span className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
          {project.year}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full font-mono"
          style={
            type === 'Personal'
              ? { color: 'var(--accent-primary)', border: '1px solid var(--accent-primary)' }
              : { color: 'var(--text-tertiary)', border: '1px solid var(--border-color)' }
          }
        >
          {type === 'Personal' ? 'Personal Project' : 'Professional'}
        </span>
        {project.company && (
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {project.company}
          </span>
        )}
        {project.wip && (
          <span
            className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full font-mono"
            style={{ color: '#F59E0B', border: '1px solid #F59E0B' }}
          >
            Work in Progress
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {project.tech.map((tech, i) => {
          const iconMatch = getTechIcon(tech);
          return (
            <motion.span
              key={i}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="px-3 py-1 rounded-full text-sm font-mono flex items-center gap-2"
              style={{
                background: 'var(--card-bg)',
                border: `1px solid var(--border-color)`,
                color: 'var(--accent-primary)'
              }}
            >
              {iconMatch && <iconMatch.Icon size={14} color={iconMatch.color} />}
              {tech}
            </motion.span>
          );
        })}
      </div>

      <div
        className="project-details overflow-hidden"
        style={{
          maxHeight: isExpanded ? '700px' : '0',
          opacity: isExpanded ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div
          className="pt-4 space-y-4 border-t mt-4 transition-colors duration-300"
          style={{
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)'
          }}
        >
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.achievements.map((achievement, i) => (
              <span
                key={i}
                className="text-sm transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {achievement}{i < project.achievements.length - 1 && ' •'}
              </span>
            ))}
          </div>
          {(project.github || project.demo) && (
            <div className="flex flex-wrap gap-4 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-mono transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <SiGithub size={16} /> View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-mono transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggle = (key: string) => setExpandedKey((prev) => (prev === key ? null : key));

  return (
    <section ref={ref} id="projects" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20 transition-colors duration-300">Selected works</h2>

          <h3 className="text-xl md:text-2xl mb-8 font-mono" style={{ color: 'var(--text-tertiary)' }}>
            Professional Work
          </h3>
          <div className="space-y-8 mb-20">
            {professionalProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                type="Professional"
                delay={index * 0.08}
                isInView={isInView}
                isExpanded={expandedKey === project.name}
                onToggle={() => toggle(project.name)}
              />
            ))}
          </div>

          <h3 className="text-xl md:text-2xl mb-8 font-mono" style={{ color: 'var(--text-tertiary)' }}>
            Personal Projects
          </h3>
          <div className="space-y-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                type="Personal"
                delay={index * 0.08}
                isInView={isInView}
                isExpanded={expandedKey === project.name}
                onToggle={() => toggle(project.name)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
