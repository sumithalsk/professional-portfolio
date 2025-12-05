import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'Elevate Labs',
      location: 'Virtual',
      duration: 'Jun 2025 - Jul 2025',
      responsibilities: [
        'Awarded Best Performer in internship for outstanding contributions.',
        'Extracted and analyzed data from multiple sources including Google Sheets, Excel, and CSV files.',
        'Created interactive dashboards and visualizations using Power BI for data-driven insights.',
        'Performed comprehensive data analytics to support business decision-making.',
      ],
    },
    {
      title: 'Data Analytics Intern',
      company: 'Verithra',
      location: 'Hyderabad',
      duration: 'Oct 2024 - Jun 2025',
      responsibilities: [
        'Extracted raw sales and retail store data from client systems for analysis.',
        'Designed and developed meaningful Power BI dashboards to visualize key business metrics.',
        'Identified hidden trends and extracted actionable insights from complex datasets.',
        'Completed 6+ months of hands-on data analysis work across multiple retail clients.',
      ],
    },
    {
      title: 'Independent Support Engineering & Trading Workflow Practice',
      company: 'Self-Directed Learning',
      location: '',
      duration: '2024 – Present',
      responsibilities: [
        'Simulated trading flows and built tools for automated validation and monitoring.',
        'Practiced debugging data and system issues using logs, SQL queries, and Linux tools.',
        'Worked with time-series data sets to better understand how markets behave.',
        'Focused on skills directly relevant to trade-flow support and production reliability.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0 md:text-right">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 + itemIndex * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary-500 mr-3 mt-1 text-lg">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
