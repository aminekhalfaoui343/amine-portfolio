
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="#home" className="text-xl font-bold">
              Amine<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              Cloud & DevOps Engineer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/aminekhalfaoui343"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-primary"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/khalfaoui-amine-824371385/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-primary"
            >
              <FaLinkedin size={21} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted">
            © 2026 Amine Khalfaoui.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
