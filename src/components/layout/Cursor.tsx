'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '@/lib/store';
import './Cursor.css';

export default function Cursor() {
  const cursorType = useStore((state) => state.cursorType);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#f0f0f0',
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: '#f0f0f0',
      mixBlendMode: 'difference' as const,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: '#f0f0f0',
      mixBlendMode: 'normal' as const,
    },
    link: {
      width: 6,
      height: 6,
      backgroundColor: '#f0f0f0',
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorType}
      variants={variants}
    >
      {cursorType === 'project' && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="cursor-view-text"
        >
          VIEW
        </motion.span>
      )}
    </motion.div>
  );
}
