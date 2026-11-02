
import { experiences } from "@/data/experience";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            My Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & Internships
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            My professional experiences and practical projects across
            infrastructure, cloud, software development, and AI.
          </p>
        </div>

        <div className="relative space-y-10">
          <div className="absolute bottom-4 left-[15px] top-4 w-px bg-border sm:left-[19px]" />

          {experiences.map((experience, index) => (
            <article key={`${experience.organization}-${index}`} className="relative pl-12 sm:pl-14">
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background text-primary sm:h-10 sm:w-10">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/50 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <span className="text-sm font-medium text-primary">
                      {experience.type}
                    </span>

                    <h3 className="mt-2 text-xl font-bold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-muted">
                      {experience.organization}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-sm text-muted">
                    <CalendarDays size={16} />
                    {experience.period}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-muted">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
