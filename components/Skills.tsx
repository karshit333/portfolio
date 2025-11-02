
import React from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
import { motion } from 'framer-motion';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-fuchsia-400 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-gray-800/50 border border-cyan-400/50 text-cyan-300 px-4 py-2 rounded-lg interactive-element"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.8}
          whileHover={{ scale: 1.1, y: -5, boxShadow: "0 0 15px #06b6d4" }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <SkillCategory title="Programming" skills={portfolioData.skills.programming} />
        <SkillCategory title="AI/ML" skills={portfolioData.skills.ai_ml} />
        <SkillCategory title="Backend" skills={portfolioData.skills.backend} />
        <SkillCategory title="Languages" skills={portfolioData.skills.languages} />
      </div>
    </Section>
  );
};

export default Skills;
