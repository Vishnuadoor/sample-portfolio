'use client';

import { m, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Code, 
  MessageCircle, 
  Camera, 
  Link
} from 'lucide-react';

import { useStore } from '@/lib/store';
import './Contact.css';

export default function Contact() {
  const setCursorType = useStore((state) => state.setCursorType);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Graphic Design',
    budget: '',
    deadline: '',
    message: ''
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="contact-section">
      
      <div className="contact-main-container">

        {/* Design Header */}
        <div className="contact-design-header">
          <m.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="design-title"
          >
            Let's Create Something <span className="text-accent-cyan">Amazing</span>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="design-subtitle"
          >
            Available for freelance projects, branding, UI/UX, social media design, <br />
            video editing, and creative collaborations.
          </m.p>
          <m.button
            type="button"
            suppressHydrationWarning
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="btn-purple-main"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            Start a Project
          </m.button>
        </div>

        {/* Content Grid */}
        <m.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="design-grid"
        >
          {/* Left: Contact Info */}
          <m.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="design-info-card"
          >
            <h3 className="card-title">Contact <br />Information</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <p className="item-label">EMAIL ME</p>
                  <p className="item-value">hello@designer.studio</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MessageSquare size={24} /></div>
                <div>
                  <p className="item-label">WHATSAPP</p>
                  <p className="item-value">+1 (555) 000-STUDIO</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <p className="item-label">LOCATION</p>
                  <p className="item-value">Remote / San Francisco, CA</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><Clock size={24} /></div>
                <div>
                  <p className="item-label">WORKING HOURS</p>
                  <p className="item-value">Mon — Fri, 10:00 — 18:00 EST</p>
                </div>
              </div>
            </div>

            <div className="social-footer">
              <p className="social-label">FIND ME ON SOCIAL</p>
              <div className="social-icons">
                <MessageCircle size={24} />
                <Code size={24} />
                <Camera size={24} />
                <Link size={24} />
              </div>
            </div>
          </m.div>

          {/* Right: Form */}
          <m.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="design-form-card"
          >
            <form className="design-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="email" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="text" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>COMPANY / BRAND</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="text" placeholder="Your Brand Name" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>SERVICE NEEDED</label>
                <div className="input-wrapper">
                  <select suppressHydrationWarning className="design-select">
                    <option>Graphic Design</option>
                    <option>UI/UX Design</option>
                    <option>Branding</option>
                    <option>Video Editing</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>PROJECT BUDGET</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="text" placeholder="$5,000 - $10,000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>PROJECT DEADLINE</label>
                  <div className="input-wrapper">
                    <input suppressHydrationWarning type="text" placeholder="MM/DD/YYYY" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea suppressHydrationWarning placeholder="Tell me about your project vision..." rows={4} />
              </div>

              <div className="upload-area">
                <p className="upload-label">PROJECT BRIEF</p>
                <div className="upload-box">
                  <p>Drop files or <span className="text-purple-400">browse</span></p>
                </div>
              </div>

              <m.button 
                type="submit"
                suppressHydrationWarning
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-purple-submit"
              >
                Send Message
              </m.button>

              <p className="form-footer-text">
                By clicking send, you agree to our <span className="underline">Terms of Service</span>.
              </p>
            </form>
          </m.div>
        </m.div>

        {/* Brands Section */}
        <div className="brands-section">
          <p className="brands-label">TRUSTED BY VISIONARY BRANDS</p>
          <div className="brands-list">
            <span>LUMINA</span>
            <span>AETHER</span>
            <span>VERTEX</span>
            <span>NEXUS</span>
            <span>ONYX</span>
          </div>
        </div>
      </div>

      <footer className="design-footer">
        <div className="footer-top">
          <h4 className="footer-logo">DESIGNER.STUDIO</h4>
          <div className="footer-links">
            <span>Instagram</span>
            <span>Behance</span>
            <span>Dribbble</span>
            <span>LinkedIn</span>
          </div>
          <p className="copyright">© 2024 DESIGNER.STUDIO. Crafted for the digital void.</p>
        </div>
      </footer>
    </section>
  );
}
