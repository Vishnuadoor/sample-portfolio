'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Deep diving into the brief, target audience, and market landscape. We define the constraints to find the freedom.'
  },
  {
    num: '02',
    title: 'DEFINE',
    desc: 'Strategizing the architecture and flow. Wireframing the skeleton that will support the visual soul.'
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Bringing the vision to life with cinematic fidelity. Iterating until the pixels pulse with purpose.'
  },
  {
    num: '04',
    title: 'DELIVER',
    desc: 'Precision handoff with motion specs and launch support. Ensuring the transition from canvas to code is seamless.'
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.process-item') as HTMLElement[];
      
      items.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0.2, y: 50 },
          { 
            opacity: 1, 
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="process-section">
      <div className="process-items-stack">
        {steps.map((step, i) => (
          <div key={i} className="process-item">
            <div className="step-info">
              <span className="step-number-bg">
                {step.num}
              </span>
              <h3 className="step-title">
                {step.title}
              </h3>
            </div>
            <div className="step-desc-container">
              <p className="step-desc-text">
                {step.desc}
              </p>
              
              <div className="step-divider-container">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="step-divider-fill"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="process-vertical-line" />
    </section>
  );
}
