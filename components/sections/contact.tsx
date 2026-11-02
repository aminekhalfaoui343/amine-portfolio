
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "aminekhalfaoui343@gmail.com",
    href: "mailto:aminekhalfaoui343@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/aminekhalfaoui343",
    href: "https://github.com/aminekhalfaoui343",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/khalfaoui-amine-824371385/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mt-5 leading-7 text-muted">
            I'm open to PFE internship opportunities for 2027
            in Cloud Computing, DevOps, and infrastructure engineering.
            Feel free to reach out if you'd like to discuss an opportunity
            or collaborate on a technical project.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <Icon size={24} className="text-primary" />
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-colors group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-5 font-semibold">{link.label}</h3>

                <p className="mt-2 break-words text-sm text-muted">
                  {link.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:aminekhalfaoui343@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
