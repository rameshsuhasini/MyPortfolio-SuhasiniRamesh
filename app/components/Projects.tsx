"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      name: "Farmly Catalogue",
      year: "2024",
      tech: ["React", "Redux", "Node.js"],
      description: "Searchable product catalogue with optimized performance.",
      achievements: ["Performance", "Clean code", "API integration"],
    },
    {
      name: "Connect Account Console",
      year: "2022",
      tech: ["Angular v17", "TypeScript", "RESTful APIs"],
      description: [
        "Created a custom component library (COCOA), style guides.",
        " Managed the team, contributed to the development and design reviews, and provided feedback to promote quality results and a positive work environment using Agile methodology.",
        "Executed unit tests with Karma and Jasmine, achieving 100% code coverage for a few modules.",
      ],
      achievements: ["Custom Library", "API Integration", "Agile workflow"],
    },
    {
      name: "Mitel Integrated Chatbot (Miya)",
      year: "2023",
      tech: ["AWS Lamda", "Amazon LEX", "Node.js"],
      description: [
        "Designed a chatbot for internal organisation usage using AWS Lamda and Amazon LEX.",
        "  Improved chatbot response efficiency by 35% by integrating Node.js for API call management.",
        "Conducted end-to-end testing to ensure seamless integration with existing organisation Application.",
      ],
      achievements: ["Custom Chatbot", "API Integration", "Working Solution"],
    },
    {
      name: "MIVB Business Console",
      year: "2023-2024",
      tech: ["Java", "JavaFX", "Spring Boot"],
      description: [
        "Took ownership of a production-critical JavaFX crash by diagnosing a version-level incompatibility rather than applying a risky full upgrade",
        "Designed and implemented a minimal, compliant fix by selectively integrating required changes into the existing JavaFX version.",
        "Documented the complete build and packaging workflow, creating a single source of truth for future upgrades and onboarding.",
        "Ensured stability through regression validation and cross-team alignment with legal and compliance stakeholders.",
      ],
      achievements: [
        "Critical Issue Owned",
        "Backward Compatibility Preserved",
        "Version Risk Mitigated",
      ],
    },
    {
      name: "Insights",
      year: "2019",
      tech: ["AngularJS", "Workflow Automation", "Java"],
      description: [
        "Successfully migrated the application independently, preserving the existing frameworks functionalities while improving performance and ease of maintenance.",
        "Added new features like geolocation tagging, JSON server, etc.",
        "Maintained comprehensive documentation and provided insightful advice to the team and stakeholders.",
      ],
      achievements: [
        "50% efficiency gain",
        "Real-time data",
        "Performance optimization",
      ],
    },
    {
      name: "Archive App",
      year: "2019",
      tech: ["Angular V5", "Java", "PostgreSQL"],
      description: [
        "Solely designed and built the application (AngularJS), integrating with RESTful APIs for data management for an existing database.",
        "Currently used by the US government to maintain criminal records.",
        "Collaborated closely with the stakeholders to refine the features and ensure a user-friendly interface."
      ],
      achievements: ["40% faster", "Geolocation", "Modern CSS"],
    },
    {
      name: "iCOPL Production Line",
      year: "2019",
      tech: ["AngularJS", "Workflow Automation"],
      description: ["Developed an AngularJS application to automate production line workflows, reducing human intervention by 50% and improving efficiency.",
        "Conducted lab sessions to ensure real-time data flow across multiple workstations.",
        "Enhanced application performance, reducing data transfer times, and improving operational efficiency.",
        "Tested the application in real-time at AIRBUS facilities in Toulouse, France, ensuring seamless functionality."
      ],
      achievements: [
        "Production Workflow Automated",
        "Manual Intervention Reduced",
        "Data Latency Reduced",
      ],
    },
    {
      name: "Project Coffee Bean",
      year: "2017",
      tech: ["AngularJS", "QR Integration"],
      description:[ "Developed an application (AngularJS) to integrate real-time data from sensors on the coffee lifecycle..",
        "Implemented key performance indicators (KPIs) for plantation management.",
        "Added QR scanning functionality to track and visualize the entire coffee lifecycle, from planting to market."
      ],
      achievements: ["CEO presentation", "QR scanning", "Sensor integration"],
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex items-center py-32"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-20">Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="project-item border-b border-purple-900/30 pb-8 cursor-pointer hover:border-purple-700/50 transition-all duration-300"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl md:text-3xl text-white hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-purple-400 text-sm font-mono">
                      {tech}
                      {i < project.tech.length - 1 && (
                        <span className="text-gray-600 ml-3">/</span>
                      )}
                    </span>
                  ))}
                </div>

                <div
                  className="project-details overflow-hidden"
                  style={{
                    maxHeight: expandedIndex === index ? "500px" : "0",
                    opacity: expandedIndex === index ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="pt-4 space-y-4 text-gray-400">
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, i) => (
                        <span key={i} className="text-sm text-gray-500">
                          {achievement}
                          {i < project.achievements.length - 1 && " •"}
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
