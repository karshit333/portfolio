import React from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
// FIX: Import Variants type from framer-motion to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';

const Experience: React.FC = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <Section id="experience" title="Experience">
      <div className="max-w-2xl mx-auto">
        {portfolioData.experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="relative p-6 border-l-2 border-fuchsia-400"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="absolute -left-[11px] top-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#0A0A0A]"></div>
            <p className="text-sm text-gray-400 mb-1">{exp.date}</p>
            <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
            <p className="text-lg font-semibold mb-3">{exp.company}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;