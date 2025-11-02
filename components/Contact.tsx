
import React from 'react';
import Section from './Section';
import { portfolioData } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </p>
        
        <motion.a 
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-lg interactive-element"
          whileHover={{ scale: 1.1, backgroundColor: '#d946ef', color: '#ffffff', transition: { type: 'spring', stiffness: 300 } }}
        >
          {portfolioData.contact.email}
        </motion.a>
        
        <footer className="mt-16 text-gray-500">
            Designed & Built by Karshit Raval
        </footer>
      </div>
    </Section>
  );
};

export default Contact;