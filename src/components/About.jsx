import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const highlights = [
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Email', value: 'sumith10296@gmail.com' },
    { label: 'Focus', value: 'Trading Systems Support & Data Analytics' },
    { label: 'Goal', value: 'Support global trading flows and production environments' },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            I am a B.Tech CSE (Data Analytics) graduate from VIT University with hands-on skills in Python, SQL, Linux, and data analytics. I'm especially interested in trading systems, production support, and market-data workflows. I enjoy working on problems where reliability, data integrity, and speed matter. My projects simulate real trade flows, build automated validation tools, and analyze market data, giving me practical exposure to workflows used in trading and fintech environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                  {item.label}
                </h3>
                <p className="text-gray-800 font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
