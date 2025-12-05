import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const WhyMe = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const reasons = [
    'Technical skills in Python, SQL, Linux, and automation match support and tooling needs.',
    'Data Analytics background gives me strong foundations in databases and data quality.',
    'Basic understanding of equities, derivatives, and trading fundamentals.',
    'Projects simulate real trade flows, pipeline validation, and system monitoring.',
    'Motivated to learn kdb+/q and internal tools used in trading firms.',
  ];

  return (
    <section id="why-me" className="py-24 bg-gray-100" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Why I'm a Good Fit for Trading Support Roles
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-10 shadow-lg"
        >
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start text-gray-700 text-lg"
              >
                <span className="text-primary-500 mr-4 text-2xl font-bold">✓</span>
                <span>{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
