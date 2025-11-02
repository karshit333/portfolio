
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? '#06b6d4' : '#d946ef',
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full opacity-30 z-0 pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: p.y,
            left: p.x,
          }}
          animate={{
            x: [p.x, `${Math.random() * 100}vw`, p.x],
            y: [p.y, `${Math.random() * 100}vh`, p.y],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
