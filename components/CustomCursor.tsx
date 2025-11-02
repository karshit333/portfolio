
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.querySelectorAll('.interactive-element').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.interactive-element').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      x: x - 8,
      y: y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'rgba(6, 182, 212, 0.7)',
      borderColor: '#06b6d4',
      borderWidth: '2px',
      rotate: 0,
    },
    hover: {
      x: x - 24,
      y: y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(217, 70, 239, 0.3)',
      borderColor: '#d946ef',
      borderWidth: '2px',
      rotate: 45,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-sm pointer-events-none"
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
