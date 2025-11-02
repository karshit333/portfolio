import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const nameChars = Array.from(portfolioData.name);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center -mt-20">
      <motion.h1
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {nameChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className={`inline-block ${index < 7 ? 'text-yellow-400' : 'text-cyan-400'}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        className="max-w-3xl mt-8 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
      >
        {portfolioData.summary}
      </motion.p>
    </section>
  );
};

export default Hero;