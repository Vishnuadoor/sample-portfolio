import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Skills from "@/components/sections/Skills";
import VideoReel from "@/components/sections/VideoReel";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

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
