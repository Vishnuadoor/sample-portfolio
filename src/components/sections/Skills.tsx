'use client';

import { m } from 'framer-motion';

import './Skills.css';

const circularSkills = [
  { name: 'Figma', value: 95 },
  { name: 'After Effects', value: 90 },
  { name: 'Photoshop', value: 98 },
  { name: 'Illustrator', value: 92 },
];

const horizontalSkills = [
  { name: 'Typography', value: 90 },
  { name: 'Color Theory', value: 95 },
  { name: 'Motion Design', value: 88 },
  { name: '3D Modeling', value: 82 },
  { name: 'Photography', value: 85 },
  { name: 'Branding', value: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Circular Progress */}
      <div className="circular-skills-grid">
        {circularSkills.map((skill, i) => (
          <div key={i} className="circular-skill-item">
            <div className="circular-skill-container">
              <svg className="skill-svg">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="skill-circle-bg"
                  strokeWidth="8"
                />
                <m.circle

                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="skill-circle-progress"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 1000" }}
                  whileInView={{ strokeDasharray: `${skill.value * 2.8} 1000` }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="skill-percent-text">{skill.value}%</span>
              </div>
            </div>
            <span className="skill-label">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Horizontal Progress */}
      <div className="horizontal-skills-list">
        {horizontalSkills.map((skill, i) => (
          <div key={i}>
            <div className="horizontal-skill-header">
              <span className="horizontal-skill-label">{skill.name}</span>
              <span className="horizontal-skill-percent">{skill.value}%</span>
            </div>
            <div className="progress-bar-bg">
              <m.div

                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: skill.value / 100 }}
                transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                viewport={{ once: true }}
                className="progress-bar-fill"
              />

              <m.div

                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="progress-bar-shimmer"
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
