'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Sync ScrollTrigger with Lenis
    gsap.registerPlugin(ScrollTrigger);
    
    // Performance optimization for GSAP
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    });

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        syncTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing
      }}
    >
      {children}
    </ReactLenis>
  );
}
