import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';
import { portfolioData } from '../constants';

const socialLinks = [
    { name: 'GitHub', url: portfolioData.contact.socials.github, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: 'LinkedIn', url: portfolioData.contact.socials.linkedin, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: 'Instagram', url: portfolioData.contact.socials.instagram, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
};

const Socials: React.FC = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-4 md:left-8 z-40 hidden md:block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="flex flex-col items-center space-y-4">
        {socialLinks.map((link) => (
          <motion.li key={link.name} variants={itemVariants}>
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-gray-400 hover:text-cyan-400 interactive-element"
              whileHover={{ y: -5, scale: 1.2, filter: 'drop-shadow(0 0 5px #06b6d4)' }}
            >
              {link.icon}
            </motion.a>
          </motion.li>
        ))}
        <motion.div 
            className="h-24 w-px bg-gray-600"
            initial={{ height: 0 }}
            animate={{ height: '6rem' }}
            transition={{ duration: 0.5, delay: 2.8 }}
        />
      </ul>
    </motion.div>
  );
};

export default Socials;