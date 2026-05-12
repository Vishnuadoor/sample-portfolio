'use client';

import { motion } from 'framer-motion';
import './Marquee.css';

const items = [
  'GRAPHIC DESIGN', 'PRODUCT DESIGN', 'VIDEO EDITING', 'PHOTO EDITING',
  'BRANDING', 'UI/UX', 'MOTION GRAPHICS', 'ART DIRECTION', '3D VISUALIZATION'
];

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="marquee-content"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-text">
                {item}
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" className="marquee-star">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
