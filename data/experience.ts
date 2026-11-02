
export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI-Powered Job Discovery & LLM Extraction Platform",
    organization: "Glorea Career",
    period: "Summer 2026",
    type: "Internship",
    description:
      "Contributed to an asynchronous job discovery and data extraction platform powered by FastAPI, Redis, ARQ workers, and LLM-based processing.",
    responsibilities: [
      "Built an asynchronous pipeline where FastAPI enqueues jobs in Redis and ARQ workers handle discovery and LLM-based extraction.",
      "Stored processed results in PostgreSQL and aggregated listings from multiple public job sources.",
      "Implemented deduplication and per-source status reporting.",
      "Configured worker concurrency, timeouts, and limited retries to keep the API responsive during background processing.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "ARQ",
      "PostgreSQL",
      "LLM",
    ],
  },
  {
    role: "Network Administrator & Infrastructure Intern",
    organization: "Trésorerie Régionale des Finances de Tunis 3",
    period: "Summer 2026",
    type: "Internship",
    description:
      "Worked on network administration and IT infrastructure in a public-sector administration environment.",
    responsibilities: [
      "Documented the administration office's network infrastructure.",
      "Configured routers and switches and managed users and resources with Active Directory.",
      "Managed firewall rules and troubleshot network issues.",
      "Monitored and supervised the network infrastructure.",
    ],
    technologies: [
      "Networking",
      "Routers & Switches",
      "Active Directory",
      "Firewall",
      "Windows Server",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "MBC Training & Consulting",
    period: "Summer 2025",
    type: "Internship",
    description:
      "Developed a web platform for searching job opportunities, internships, and other offers.",
    responsibilities: [
      "Built a job and internship search platform using PHP and MySQL.",
      "Implemented user authentication.",
      "Developed a responsive interface using Bootstrap, JavaScript, and AJAX.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "AJAX",
    ],
  },
  {
  role: "Embedded Computer Vision System",
  organization: "PFE Internship",
  period: "2024",
  type: "Internship",
  description:
    "Developed an embedded computer vision system for real-time image prediction using Raspberry Pi.",
  responsibilities: [
    "Built an embedded computer vision solution using Python and TensorFlow.",
    "Implemented real-time image prediction on Raspberry Pi.",
    "Enabled remote device management, monitoring, and control over SSH.",
  ],
  technologies: [
    "Python",
    "TensorFlow",
    "Raspberry Pi",
    "Computer Vision",
    "SSH",
  ],
},
];
