'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    quote: "The attention to detail and cinematic feel of the animations completely transformed our brand perception.",
    author: "Elena Rossi",
    role: "Creative Director",
    company: "Luxe Media"
  },
  {
    quote: "I've never seen someone blend 3D and typography so seamlessly. A true master of the digital craft.",
    author: "Marcus Thorne",
    role: "Founder",
    company: "Nexus Labs"
  },
  {
    quote: "The final product was beyond our expectations. It doesn't just look good, it functions with intent.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "Flow State"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonial-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 45, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -45, x: -100, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="testimonial-card"
            >
              <span className="quote-mark">
                "
              </span>
              
              <p className="testimonial-quote">
                {testimonials[index].quote}
              </p>
              
              <div>
                <h4 className="testimonial-author">{testimonials[index].author}</h4>
                <p className="testimonial-meta">
                  {testimonials[index].role} · {testimonials[index].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="testimonial-nav">
            <button type="button" suppressHydrationWarning onClick={prev} className="nav-btn">Prev</button>
            <div className="dots-container">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`dot ${i === index ? 'dot-active' : 'dot-inactive'}`} 
                />
              ))}
            </div>
            <button type="button" suppressHydrationWarning onClick={next} className="nav-btn">Next</button>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="testimonials-glow" />
    </section>
  );
}
