'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      name: 'AI Walking Assistant',
      year: '2024',
      tech: ['n8n', 'AI Integration', 'Workflow Automation'],
      description: 'Built with n8n automation platform to create an AI-powered navigation system for enhanced accessibility and user experience.',
      achievements: ['AI-powered', 'Real-time processing', 'Workflow automation']
    },
    {
      name: 'Connect Account Console',
      year: '2022',
      tech: ['Angular v17', 'TypeScript', 'RESTful APIs'],
      description: 'Scalable application with responsive UIs and RESTful API integration. Promoted Agile practices ensuring high-quality delivery.',
      achievements: ['Responsive UI', 'API Integration', 'Agile workflow']
    },
    {
      name: 'Project Coffee Bean (PCB)',
      year: '2017',
      tech: ['AngularJS', 'QR Integration', 'Sensor Data'],
      description: 'Implemented KPIs for management using QR scanning to visualize the entire coffee lifecycle from planting to market. Presented to CEOs of Tech Mahindra and Nestle.',
      achievements: ['CEO presentation', 'QR scanning', 'Full lifecycle tracking']
    },
    {
      name: 'iCOPL',
      year: '2019',
      tech: ['AngularJS', 'Workflow Automation', 'Real-time Data'],
      description: 'Integrated Coherent Production Line application to automate workflows, reducing human intervention by 50% and ensuring real-time data flow across workstations.',
      achievements: ['50% efficiency gain', 'Real-time data', 'Automated workflows']
    }
  ];

  return (
    <section ref={ref} id="projects" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20 transition-colors duration-300">Selected works</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="project-item premium-card rounded-2xl p-8 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl md:text-3xl transition-colors duration-300 hover:text-[var(--accent-primary)]">
                    {project.name}
                  </h3>
                  <span className="text-sm transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm font-mono"
                      style={{ 
                        background: 'var(--card-bg)',
                        border: `1px solid var(--border-color)`,
                        color: 'var(--accent-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="project-details overflow-hidden"
                  style={{
                    maxHeight: expandedIndex === index ? '500px' : '0',
                    opacity: expandedIndex === index ? 1 : 0,
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
