
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Job Market Intelligence Platform",
    description:
      "A platform designed to collect, process, and analyze job-market data using web scraping, asynchronous processing, and local AI models.",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "ARQ",
      "Ollama",
      "Docker",
    ],
    category: "AI & Cloud Engineering",
    highlights: [
      "REST API development with FastAPI",
      "Asynchronous job processing with ARQ and Redis",
      "Integration of local language models",
      "Containerized application services",
    ],
    image: "/images/projects/ai-job-platform.jpeg",
    github: "https://github.com/aminekhalfaoui343/AI_Powered_Jobs",
    featured: true,
  },
  {
    title: "vProfile — CI/CD & AWS Deployment",
    description:
      "A DevOps project implementing an automated build, quality analysis, artifact management, containerization, and AWS deployment workflow.",
    technologies: [
      "Jenkins",
      "Maven",
      "SonarQube",
      "Nexus",
      "Docker",
      "AWS ECS",
      "ECR",
    ],
    category: "DevOps & Cloud",
    highlights: [
      "Automated application builds with Jenkins",
      "Code quality analysis with SonarQube",
      "Artifact management with Nexus",
      "Container image deployment to AWS",
    ],
    image: "/images/projects/vprofile.jpg",
    github: "https://github.com/aminekhalfaoui343/vprofile-project",
    featured: true,
  },
  {
    title: "Kubernetes Fleetman Deployment",
    description:
      "A hands-on Kubernetes lab focused on deploying and managing containerized services across virtual machines.",
    technologies: [
      "Kubernetes",
      "Linux",
      "Vagrant",
      "VirtualBox",
      "Flannel",
      "Docker",
    ],
    category: "Container Orchestration",
    highlights: [
      "Multi-node Kubernetes cluster setup",
      "Containerized application deployment",
      "Service and network configuration",
      "Cluster troubleshooting and management",
    ],
    image: "/images/projects/fleetman-kubernetes.jpg",
    featured: true,
  },
  {
    title: "Jenkins CI/CD Automation Lab",
    description:
      "A practical CI/CD lab exploring source-code integration and automated application build workflows.",
    technologies: [
      "Jenkins",
      "Git",
      "Docker",
      "Linux",
    ],
    category: "DevOps Automation",
    highlights: [
      "Git repository integration",
      "Jenkins pipeline configuration",
      "Automated build workflows",
      "Application containerization",
    ],
    image: "/images/projects/jenkins-pipeline.jpg",
    featured: false,
  },
];
