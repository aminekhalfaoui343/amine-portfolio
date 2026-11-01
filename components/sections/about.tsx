
import {
  Cloud,
  Container,
  Workflow,
  GraduationCap,
  Server,
  Code2,
} from "lucide-react";

const focusAreas = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Exploring cloud platforms, networking, infrastructure design, and scalable architectures.",
    technologies: ["AWS", "Networking", "Linux"],
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    description:
      "Building and managing containerized applications and learning orchestration with Kubernetes.",
    technologies: ["Docker", "Kubernetes", "Compose"],
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    description:
      "Working with CI/CD pipelines, automation tools, and modern software delivery practices.",
    technologies: ["Jenkins", "Git", "CI/CD"],
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Computer Science Engineering · Cloud Computing",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Linux Administration · Networking · Virtualization",
  },
  {
    icon: Code2,
    title: "Hands-on Learning",
    description: "Academic projects · Technical labs · Internships",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Get to know me
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me<span className="text-primary">.</span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            I'm a final-year Computer Science Engineering student
            specializing in Cloud Computing, passionate about
            building reliable, scalable, and automated infrastructure.
            My interests focus on Cloud Engineering, DevOps,
            and modern infrastructure technologies.
          </p>
        </div>

        {/* Technical focus cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon size={27} />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {area.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-muted">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Professional highlights */}
        <div className="border-t border-border pt-10">
          <h3 className="mb-8 text-xl font-bold text-foreground">
            My Background
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
