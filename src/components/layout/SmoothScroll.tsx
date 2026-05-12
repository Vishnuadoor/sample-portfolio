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
      nullTargetWarn: false,
      units: { left: "%", top: "%", rotation: "deg" }
    });

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    // Standard lag smoothing is better for preventing jumps
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12, // More responsive
        duration: 0.8, // Shorter duration
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        infinite: false,
        syncTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      }}

    >
      {children}
    </ReactLenis>
  );
}

