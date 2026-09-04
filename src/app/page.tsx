import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
