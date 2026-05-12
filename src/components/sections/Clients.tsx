'use client';

import { motion } from 'framer-motion';
import './Clients.css';

const clients = [
  'SPACE X', 'NIKE', 'APPLE', 'ADOBE', 
  'COCA COLA', 'NETFLIX', 'TESLA', 'GUCCI'
];

export default function Clients() {
  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="clients-label"
        >
          Trusted By
        </motion.p>
        
        <div className="clients-grid">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="client-item"
            >
              <span className="client-name">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
