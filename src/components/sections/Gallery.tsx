'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import './Gallery.css';

const images = [
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe', span: 'md:col-span-2 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2', span: 'md:col-span-1 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400', span: 'md:col-span-1 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e', span: 'md:col-span-1 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', span: 'md:col-span-2 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2', span: 'md:col-span-1 md:row-span-1' },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe', span: 'md:col-span-1 md:row-span-1' },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="gallery-section">
      <div className="gallery-grid">
        {images.map((img, i) => {
          // Internal parallax: move the image inside the container
          const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

          return (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
              className={`gallery-item ${img.span}`}
            >
              <div className="relative w-full h-[120%] overflow-hidden">
                <m.div 
                  style={{ y }}
                  className="w-full h-full"
                >
                  <Image
                    src={`${img.url}?q=80&w=1200&auto=format&fit=crop`}
                    alt="Gallery Item"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </m.div>
              </div>
              
              <div className="gallery-overlay" />
              
              <div className="gallery-content">
                <span className="gallery-badge">
                  Explore Project
                </span>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
