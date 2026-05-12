'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import './About.css';

const skills = [
  'Figma', 'After Effects', 'Premiere', 'Photoshop', 
  'Illustrator', 'Blender', 'Cinema 4D', 'Framer', 'Webflow'
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="about-section">
      {/* Left Panel - Sticky */}
      <div className="about-left">
        <div className="about-image-wrapper">
          <m.div
            style={{ y, scale, willChange: "transform" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <div className="about-image-overlay" />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Profile"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="about-profile-image"
            />

            
            <div className="about-status-badge">
              <span className="status-indicator" />
              <span className="status-text">Available for work</span>
            </div>
          </m.div>
          
          {/* Decorative background blob */}
          <div className="about-blob" />
        </div>
      </div>

      {/* Right Panel - Content */}
      <div className="about-right">
        <m.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">
            I don't make things look good. I make things <span className="text-accent-cyan italic">feel inevitable.</span>
          </h2>
          <p className="about-description">
            Based in the intersection of design and technology, I help brands and individuals build digital experiences that defy gravity. With a focus on motion and 3D, I transform static ideas into living, breathing stories.
          </p>
        </m.div>

        <div className="about-skills-wrapper">
          {skills.map((skill, i) => (
            <m.span
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="skill-tag"
            >
              {skill}
            </m.span>
          ))}
        </div>
      </div>

      {/* Background SVG Grid Pattern */}
      <div className="grid-background">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
