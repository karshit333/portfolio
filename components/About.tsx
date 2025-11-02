
import React from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
import { motion } from 'framer-motion';

const GlitchImage: React.FC = () => (
    <motion.div 
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto"
        whileHover="hover"
    >
        <motion.img 
            src="https://picsum.photos/seed/karshit/300/300" 
            alt="Karshit Raval"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-400 neon-glow-blue"
        />
        <motion.div 
            className="absolute inset-0 bg-cover bg-center rounded-full" 
            style={{ backgroundImage: `url(https://picsum.photos/seed/karshit/300/300)` }}
            variants={{
                hover: { 
                    clipPath: 'inset(0% 0% 0% 0%)',
                    transition: { duration: 0.05, repeat: 5, repeatType: "mirror" }
                }
            }}
            initial={{ clipPath: 'inset(50% 0% 50% 0%)' }}
        ></motion.div>
    </motion.div>
);

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <GlitchImage />
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Education</h3>
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <p className="font-bold">{edu.degree}</p>
                <p className="text-gray-400">{edu.institution} | {edu.date}</p>
                <p className="text-sm text-cyan-400">{edu.details}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Achievements & Involvement</h3>
            <ul className="list-disc list-inside space-y-2">
              {portfolioData.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
