
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";

import Image from "next/image";
import { FaGithub} from "react-icons/fa";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            My Work
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
            <span className="text-primary">.</span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            A selection of academic projects and hands-on labs
            where I explore cloud infrastructure, DevOps,
            automation, and modern technologies.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Project visual header */}
              <div className="relative h-52 overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                    Featured
                  </span>
                )}
              </div>


              {/* Project information */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* Project highlights */}
                <div className="mb-6 space-y-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1 text-primary">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-5">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      <FaGithub size={18} />
                      Source Code
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted">
                      Repository link coming soon
                    </span>
                  )}

                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
