import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Research />
      <Contact />
    </main>
  );
}
