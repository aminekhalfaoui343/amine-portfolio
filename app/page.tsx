import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        <section id="experience" className="min-h-60 p-20">
          Experience section coming soon
        </section>

        <section id="contact" className="min-h-60 p-20">
          Contact section coming soon
        </section>
      </main>
    </>
  );
}