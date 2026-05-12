'use client';

import { useEffect, useState, useRef } from 'react';
import { m, useInView } from 'framer-motion';

import './Stats.css';

const stats = [
  { value: 120, label: 'Projects Delivered', suffix: '+' },
  { value: 8, label: 'Years Experience', suffix: '+' },
  { value: 40, label: 'Happy Clients', suffix: '+' },
  { value: 15, label: 'Design Awards', suffix: '+' },
];

function CountUp({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalTicks = 60 * duration;
      const increment = end / totalTicks;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        {stats.map((stat, i) => (
          <m.div

            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="stat-item"
          >
            <div className="stat-value">
              <CountUp value={stat.value} />
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <span className="stat-label">
              {stat.label}
            </span>
          </m.div>
        ))}

      </div>

      {/* Background elements */}
      <div className="stats-overlay">
        <div className="stats-grid-pattern" />
      </div>
    </section>
  );
}
