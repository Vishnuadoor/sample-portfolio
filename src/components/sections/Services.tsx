'use client';
import { m } from 'framer-motion';
import { 
  Palette, 
  Layers, 
  Video, 
  Camera, 
  Activity, 
  Box 
} from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Graphic Design',
    desc: 'Editorial layouts, typography, and visual systems that command attention.',
    icon: Palette
  },
  {
    title: 'Product Design',
    desc: 'Human-centric UI/UX design for web and mobile applications.',
    icon: Layers
  },
  {
    title: 'Video Editing',
    desc: 'Cinematic storytelling with precision pacing and color grading.',
    icon: Video
  },
  {
    title: 'Photo Editing',
    desc: 'High-end retouching and digital manipulation for premium brands.',
    icon: Camera
  },
  {
    title: 'Motion Design',
    desc: 'Bringing graphics to life with fluid animation and physics.',
    icon: Activity
  },
  {
    title: 'Brand Identity',
    desc: 'Logo systems and brand guidelines that define your legacy.',
    icon: Box
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="services-header"
      >
        <h2 className="services-title">
          What <br /> <span className="text-accent-cyan">I Do</span>
        </h2>
      </m.div>

      <div className="services-grid">
        {services.map((service, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: i * 0.05, 
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="service-card"
          >
            <div className="service-card-content">
              <service.icon className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">
                {service.desc}
              </p>
            </div>
            
            {/* Hover background glow */}
            <div className="service-hover-glow" />
          </m.div>
        ))}
      </div>

      {/* Decorative blurred blob */}
      <div className="services-blob" />
    </section>
  );
}
