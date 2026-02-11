'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-6">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-4"
              aria-label={`Navigate to ${section.label}`}
            >
              {/* Label - appears on hover */}
              <span className="text-xs uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {section.label}
              </span>
              
              {/* Indicator line */}
              <motion.div
                className="relative flex items-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div 
                  className={`h-px transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'w-12 bg-purple-500' 
                      : 'w-8 bg-gray-600 group-hover:w-10 group-hover:bg-purple-400'
                  }`}
                />
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-0 w-2 h-2 bg-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
