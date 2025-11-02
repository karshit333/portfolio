
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Header from './components/Header';
import Socials from './components/Socials';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingScreen: React.FC = () => (
    <div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-[100]">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
        >
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-cyan-400 text-lg">Loading...</p>
        </motion.div>
    </div>
);


const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading time
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
             <AnimatePresence>
                {isLoading && <LoadingScreen />}
            </AnimatePresence>

            {!isLoading && (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative min-h-screen bg-[#0A0A0A] overflow-x-hidden"
                 >
                    <CustomCursor />
                    <Background />
                    <Header />
                    <Socials />

                    <main className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-24">
                        <Suspense fallback={<div></div>}>
                            <Hero />
                            <About />
                            <Experience />
                            <Skills />
                            <Projects />
                            <Contact />
                        </Suspense>
                    </main>
                </motion.div>
            )}
        </>
    );
};

export default App;
