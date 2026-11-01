
export interface SkillCategory {
  title: string;
  description: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    description: "Cloud infrastructure and platform services.",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "OpenStack"],
  },
  {
    title: "Containers & Orchestration",
    description: "Containerization and application orchestration.",
    technologies: ["Docker", "Docker Compose", "Kubernetes"],
  },
  {
    title: "CI/CD & Automation",
    description: "Continuous integration and infrastructure automation.",
    technologies: ["Jenkins", "Git", "Ansible"],
  },
  {
    title: "Systems Administration",
    description: "Operating systems and command-line administration.",
    technologies: ["Linux", "Windows Server", "Bash"],
  },
  {
    title: "Networking",
    description: "Network configuration and infrastructure connectivity.",
    technologies: ["TCP/IP", "VLAN", "DNS", "DHCP", "VPN"],
  },
  {
    title: "Programming & Databases",
    description: "Programming, scripting, and data management.",
    technologies: ["Python", "Java", "SQL"],
  },
];
