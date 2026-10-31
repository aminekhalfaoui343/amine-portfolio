import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-screen items-center justify-center bg-background text-foreground"
        >
          <h1 className="text-3xl font-bold">
            Welcome to Amine's Portfolio
          </h1>
        </section>

        <section id="about" className="min-h-screen p-20">
          About
        </section>

        <section id="skills" className="min-h-screen p-20">
          Skills
        </section>

        <section id="projects" className="min-h-screen p-20">
          Projects
        </section>

        <section id="experience" className="min-h-screen p-20">
          Experience
        </section>

        <section id="contact" className="min-h-screen p-20">
          Contact
        </section>
      </main>
    </>
  );
}