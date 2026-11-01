import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  Cloud,
  Terminal,
  Server,
  Container,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

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

        {/* Right: Cloud & DevOps visual */}
        <div className="relative hidden lg:flex lg:justify-center">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-primary/5">

            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={20} className="text-primary" />
                <span className="font-semibold text-foreground">
                  cloud-infrastructure
                </span>
              </div>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Cloud size={25} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Cloud Infrastructure
                  </p>
                  <p className="text-sm text-muted">
                    AWS · Networking · Architecture
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Container size={25} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Containerization
                  </p>
                  <p className="text-sm text-muted">
                    Docker · Kubernetes
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Server size={25} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    DevOps Automation
                  </p>
                  <p className="text-sm text-muted">
                    Jenkins · CI/CD · Linux
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-background p-4 font-mono text-sm">
              <p className="text-muted">
                $ deploy --environment production
              </p>
              <p className="mt-2 text-green-500">
                ✓ Infrastructure ready
              </p>
              <p className="text-green-500">
                ✓ Deployment successful
              </p>
              <p className="mt-2 text-primary">
                $ _
              </p>
            </div>

          </div>
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
