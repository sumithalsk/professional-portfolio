import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Trading Flow Simulation & Monitoring Tool',
      tech: 'Python, SQL, Linux, Bash',
      description:
        'Built a simulated trading pipeline that generates mock equity and derivative trades and stores them in SQL tables. Implemented Python and Bash scripts to automate "pipe cleaning" checks, validate data entries, and scan logs for failed or missing trades.',
      learning: 'Understanding of trade lifecycle, pipeline validation, and log-based debugging.',
    },
    {
      title: 'Market Data Analysis Dashboard',
      tech: 'Python, Pandas, Matplotlib',
      description:
        'Collected and cleaned historical market data to perform time-series analysis, including moving averages, volatility, and trend detection. Built plots and charts to visualize market patterns and price behavior.',
      learning: 'Practical intuition for market microstructure, volatility, and time-series analytics.',
    },
    {
      title: 'Linux System Monitoring & Log Automation Scripts',
      tech: 'Bash, Linux',
      description:
        'Created automation scripts to monitor system processes, scan logs, and report resource usage. Automated routine health checks to improve the speed and consistency of diagnostics.',
      learning: 'Production-style system monitoring, working comfortably in Linux environments.',
    },
    {
      title: 'SQL Data Integrity Validator',
      tech: 'MySQL/PostgreSQL, SQL',
      description:
        'Designed SQL queries and checks to detect missing records, duplicates, and constraint violations in datasets. Used this to validate data integrity during simulated onboarding and migration tasks.',
      learning: 'How to validate and troubleshoot data flows using SQL, similar to trading pipelines.',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-white to-primary-50/50 rounded-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-primary-600 font-semibold mb-4">
                {project.tech}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  What I learned:
                </p>
                <p className="text-sm text-gray-600 italic">{project.learning}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
