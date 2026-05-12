# DESIGNER.STUDIO | Ultra-Rich Creative Portfolio

A state-of-the-art, high-performance creative portfolio built with Next.js 15, featuring cinematic animations, 3D interactive elements, and a premium editorial aesthetic.

![Portfolio Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop)

## 🚀 Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 (Beta) with Vanilla CSS Modules
- **Animation**: 
  - GSAP (ScrollTrigger, Ticker)
  - Framer Motion (LazyMotion, Variants)
- **3D Engine**: React Three Fiber (Three.js)
- **Smooth Scroll**: Lenis
- **Typeface**: 
  - Clash Display (Headings)
  - Instrument Serif (Body)
  - JetBrains Mono (Code/UI Elements)

## ✨ Unique Features

### 1. Cinematic Smooth Scrolling
Integrated **Lenis** with **GSAP Ticker** to achieve "liquid" scrolling. The scroll physics are fine-tuned with custom easing functions to provide a premium, weighted feel that enhances the editorial layout.

### 2. Interactive 3D Particle Systems
The Contact section features a custom **React Three Fiber** particle field. These white "pixel" particles respond organically to mouse movement and scroll progress, creating a depth-focused immersive experience.

### 3. Horizontal "Work" Showcase
A specialized **Selected Works** section that captures vertical scroll and transforms it into horizontal movement using **GSAP ScrollTrigger**. This creates a focused, gallery-like experience for viewing high-resolution project cards.

### 4. Dynamic Cursor System
A smart custom cursor built with **Framer Motion** that detects interaction zones. It transitions smoothly between a neutral dot and an expanded "VIEW" state when hovering over interactive project elements.

### 5. Glassmorphism & Micro-Interactions
Every UI component utilizes advanced CSS backdrop filters, subtle gradients, and spring-based micro-animations to ensure the interface feels alive and responsive.

### 6. Mobile-First Optimization
While the desktop experience is cinematic, the mobile version is highly optimized. Sticky behaviors are adapted for touch, and typography scales fluidly using CSS `clamp()` to maintain legibility and impact across all devices.

## 🛠️ Development & Deployment

### Local Development
```bash
npm install
npm run dev
```

### Static Production Export
The project is configured for static export (`output: 'export'`), making it compatible with platforms like Render, Netlify, or Vercel.
```bash
npm run build
```

## 🛡️ Security & Performance
- **Zero-Secret Architecture**: No sensitive keys exposed in client-side code.
- **Optimized Assets**: Next.js Image component with unoptimized: true for static compatibility.
- **Lazy Loading**: LazyMotion implemented for heavy animation libraries to minimize initial bundle size.

---

Crafted with precision for the digital void.  
© 2024 DESIGNER.STUDIO
