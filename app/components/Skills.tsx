'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      category: 'Frontend',
      techs: [
        { name: 'Angular', icon: '/logos/angular.png' },
        { name: 'React', icon: '/logos/react.png' },
        { name: 'TypeScript', icon: '/logos/typescript.png' },
        { name: 'JavaScript', icon: '/logos/javascript.png' },
        { name: 'HTML5', icon: '/logos/html5.png' },
        { name: 'CSS3', icon: '/logos/css3.png' },
        { name: 'Tailwind', icon: '/logos/tailwind.png' },
      ]
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: '/logos/nodejs.png' },
        { name: 'Express', icon: '/logos/express.png' },
      ]
    },
    {
      category: 'Database',
      techs: [
        { name: 'MySQL', icon: '/logos/mysql.png' },
        { name: 'PostgreSQL', icon: '/logos/postgresql.png' },
        { name: 'MongoDB', icon: '/logos/mongodb.png' },
      ]
    },
    {
      category: 'Tools',
      techs: [
        { name: 'Git', icon: '/logos/git.png' },
        { name: 'Docker', icon: '/logos/docker.png' },
        { name: 'AWS', icon: '/logos/aws.png' },
      ]
    },
  ];

  return (
    <section ref={ref} id="stack" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20">My Stack</h2>

          <div className="space-y-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between border-b border-purple-900/30 pb-8"
              >
                <h3 className="text-2xl md:text-3xl text-purple-400 font-normal min-w-[200px]">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-6 md:gap-8 justify-end items-center">
                  {skill.techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative group cursor-default"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 opacity-60 hover:opacity-100 transition-opacity">
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} className='w-full h-full object-contain'/>
                      </div>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-900/90 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
