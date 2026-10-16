import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Approach } from "@/components/sections/Approach";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { RevealObserver } from "@/components/shared/RevealObserver";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Skills />
      <Experience />
      <Contact />
      <RevealObserver />
    </>
  );
}
