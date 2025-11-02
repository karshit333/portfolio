
import React from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0A0A0A]/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-fuchsia-400 interactive-element"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, textShadow: '0 0 8px #d946ef' }}
        >
          KR
        </motion.div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <motion.li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 interactive-element"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
