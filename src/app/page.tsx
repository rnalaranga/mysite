import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Websites from "@/components/sections/Websites";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Websites />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}
