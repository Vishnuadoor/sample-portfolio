'use client';

import { m, useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';
import './VideoReel.css';

export default function VideoReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.4, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="reel" ref={containerRef} className="video-reel-section">
      <div className="video-sticky-wrapper">
        <m.div 
          style={{ scale, opacity, willChange: "transform" }}
          className="reel-video-container"
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="reel-video"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-graphic-of-a-liquid-surface-32863-large.mp4" type="video/mp4" />
          </video>
          
          <div className="reel-gradient" />
          
          <div className="reel-title-container">
            <m.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="reel-main-title"
            >
              THE REEL
            </m.h2>

          </div>
          
          <div className="reel-footer">
            <div className="reel-footer-info">
              <span className="reel-label">Creative Showcase 2024</span>
              <h3 className="reel-footer-title">Motion Fidelity</h3>
            </div>
            <button type="button" suppressHydrationWarning className="reel-watch-btn">
              Watch Full Reel
            </button>
          </div>
        </m.div>

      </div>
    </section>
  );
}
