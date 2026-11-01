import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <section id="skills" className="min-h-60 p-20">
          Skills section coming soon
        </section>

        <section id="projects" className="min-h-60 p-20">
          Projects section coming soon
        </section>

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