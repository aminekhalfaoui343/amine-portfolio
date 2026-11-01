import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const technologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Linux",
  "Terraform",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden bg-background px-6 py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left: Introduction */}
        <div className="space-y-8">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-muted">
              Available for PFE Internship · 2027
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-muted">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Amine Khalfaoui<span className="text-primary">.</span>
            </h1>

            <h2 className="text-2xl font-semibold leading-tight text-primary sm:text-3xl lg:text-4xl">
              Cloud & DevOps Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
            I design, automate, and manage cloud infrastructure.
            Passionate about DevOps, containerization, Kubernetes,
            and building scalable and reliable systems.
          </p>

          {/* Technology highlights */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 border-t border-border pt-6">
            <span className="text-sm text-muted">
              Connect with me:
            </span>

            <a
              href="https://github.com/aminekhalfaoui343"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-primary"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/khalfaoui-amine-824371385/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-primary"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#contact"
              aria-label="Contact me"
              className="text-muted transition-colors hover:text-primary"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        
        {/* Right: Professional portrait */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background decoration */}
          <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />

          {/* Image container */}
          <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-primary/10">

            <Image
              src="/images/profile.jpg"
              alt="Portrait of Amine Khalfaoui"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-center"
            />

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Professional label */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">
                Cloud & DevOps Engineer
              </p>
              <p className="mt-1 text-xs text-white/75">
                Cloud Infrastructure · Automation · Kubernetes
              </p>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl border border-primary/30" />
        </div>


      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-primary lg:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
