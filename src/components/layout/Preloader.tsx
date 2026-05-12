'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import './Preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const { isLoaded, setLoaded } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoaded(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10);


    return () => clearInterval(timer);
  }, [setLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="preloader-overlay"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }

          }}
        >
          <div className="preloader-content">
            <svg
              viewBox="0 0 100 100"
              className="preloader-svg"
            >
              <motion.path
                d="M20,50 L50,20 L80,50 L50,80 Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                strokeWidth="0.5"
              />
            </svg>
            <div className="preloader-percentage">
              {progress}%
            </div>
          </div>
          
          <motion.div 
            className="preloader-bar"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
