import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";

const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const SelectedWorks = dynamic(() => import("@/components/sections/SelectedWorks"), { ssr: true });
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const VideoReel = dynamic(() => import("@/components/sections/VideoReel"), { ssr: true });
const Clients = dynamic(() => import("@/components/sections/Clients"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });


export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background overflow-x-hidden">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <SelectedWorks />
      <Stats />
      <Process />
      <Gallery />
      <Testimonials />
      <Skills />
      <VideoReel />
      <Clients />
      <Contact />
    </div>
  );
}
