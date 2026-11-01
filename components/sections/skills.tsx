
import {
  Cloud,
  Container,
  Workflow,
  Server,
  Network,
  Code2,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

const categoryIcons = [
  Cloud,
  Container,
  Workflow,
  Server,
  Network,
  Code2,
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            My Technical Stack
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Technologies
            <span className="text-primary">.</span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            Technologies and tools I use to explore cloud
            infrastructure, automate workflows, and build
            reliable systems.
          </p>
        </div>

        {/* Skills cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index];

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>

                <p className="mb-6 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
