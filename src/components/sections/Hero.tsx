'use client';

import { m, Variants } from 'framer-motion';

import { useStore } from '@/lib/store';
import './Hero.css';

export default function Hero() {
  const setCursorType = useStore((state) => state.setCursorType);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
      },
    },

  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow" />
      
      <div className="hero-container">

        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-title-group"
        >
          <div className="overflow-hidden">
            <m.h1 className="hero-title-text">
              {"ALEX".split("").map((char, i) => (
                <m.span
                  key={i}
                  style={{ willChange: "transform" }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {char}
                </m.span>
              ))}
            </m.h1>

          </div>
          
          <div className="overflow-hidden">
            <m.h1 className="hero-title-text text-accent-cyan">
              {"RIVERA".split("").map((char, i) => (
                <m.span
                  key={i}
                  style={{ willChange: "transform" }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {char}
                </m.span>
              ))}
            </m.h1>

          </div>

          <m.h1 
            variants={itemVariants}
            className="hero-subtitle-text"
          >
            CREATIVE DIRECTOR.
          </m.h1>
          
          <m.div variants={itemVariants} className="hero-meta-group">
            <m.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-meta-text"
            >

              Visual Designer · Motion Artist · Pixel Perfectionist
            </m.p>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <m.button
                type="button"
                suppressHydrationWarning
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn-primary"
              >
                View Work
              </m.button>
              <m.button
                type="button"
                suppressHydrationWarning
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn-secondary"
              >
                Let's Talk
              </m.button>
            </div>
          </m.div>
        </m.div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">
          SCROLL
        </span>
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll-bar"
        >
          <div className="hero-scroll-fill h-1/2" />
        </m.div>
      </div>
      
      <div className="hero-vignette" />
    </section>

  );
}
