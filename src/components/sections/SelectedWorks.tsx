'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import './SelectedWorks.css';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: 'Aura Bloom',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    year: '2026',
    desc: 'Digital identity for a boutique floral studio.'
  },
  {
    title: 'Nebula App',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2',
    year: '2023',
    desc: 'Task management for high-velocity teams.'
  },
  {
    title: 'Ethereal Motion',
    category: 'Motion Design',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400',
    year: '2026',
    desc: 'Cinematic brand reveal for a tech startup.'
  },
  {
    title: 'Lumina Studio',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    year: '2023',
    desc: 'Editorial design for an architectural magazine.'
  },
  {
    title: 'Cyber System',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    year: '2026',
    desc: 'Design system for a decentralized finance platform.'
  }
];

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = sectionRef.current;
      const stickyWrapper = triggerRef.current;
      if (!scrollContainer || !stickyWrapper) return;

      const getScrollAmount = () => {
        return -(scrollContainer.scrollWidth - window.innerWidth);
      };

      const scrollAmount = getScrollAmount();

      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      
      gsap.to(scrollContainer, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5, // Faster tracking
          invalidateOnRefresh: true,
          anticipatePin: 1,
          refreshPriority: 1,
          fastScrollEnd: true,
          onUpdate: (self) => {
            gsap.set("#works-progress", { scaleX: self.progress, force3D: true });
          }
        }
      });

      // Throttled refresh instead of raw ResizeObserver
      let timeout: NodeJS.Timeout;
      const observer = new ResizeObserver(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => ScrollTrigger.refresh(), 200);
      });
      observer.observe(scrollContainer);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };

    }, triggerRef);

    const refreshGSAP = () => ScrollTrigger.refresh();
    window.addEventListener('load', refreshGSAP);

    return () => {
      ctx.revert();
      window.removeEventListener('load', refreshGSAP);
    };
  }, []);

  return (
    <section ref={triggerRef} id="featured-work" className="selected-works-outer">
      <div className="selected-works-sticky">
          <div className="selected-works-header">
            <h2 className="selected-works-title">
              Selected <span className="text-accent-cyan">Works</span>
            </h2>
            <p className="selected-works-subtitle">
              A curated collection of projects where strategy meets aesthetic excellence.
            </p>
          </div>
          
          <div ref={sectionRef} className="selected-works-container">
            {works.map((work, i) => (
              <div key={i} className="work-card">
                <div className="work-card-inner">
                  <div className="work-image-wrapper">
                    <Image
                      src={`${work.image}?q=75&w=1000&auto=format&fit=crop`}
                      alt={work.title}
                      fill
                      className="work-image"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i < 2} // Preload first two cards
                    />

                    <div className="work-overlay">
                      <span className="work-year">{work.year}</span>
                    </div>
                  </div>
                  <div className="work-info">
                    <div className="work-content-left">
                      <span className="work-category">{work.category}</span>
                      <h3 className="work-title">{work.title}</h3>
                      <p className="work-desc">{work.desc}</p>
                    </div>
                    <button 
                      type="button"
                      suppressHydrationWarning
                      className="work-btn"
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="works-progress-container">
            <div className="works-progress-bar" id="works-progress" />
          </div>
      </div>
    </section>
  );
}
