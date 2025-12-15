// todo: remove mock functionality - Replace with real portfolio data

export const profileData = {
  name: "Alex Chen",
  title: "Software Engineer",
  tagline: "AI Enthusiast",
  bio: `Senior Software Engineer with 6+ years of experience building scalable systems 
and AI-powered applications. Passionate about machine learning, distributed systems, 
and creating elegant solutions to complex problems.

Currently focused on LLM applications, computer vision, and MLOps infrastructure.
Open source contributor and tech community speaker.`,
  location: "San Francisco, CA",
  email: "alex.chen@email.dev",
  github: "github.com/alexchen",
  linkedin: "linkedin.com/in/alexchen",
};

export const projectsData = [
  {
    id: 1,
    name: "NeuralSearch",
    problem: "Enterprise search systems struggle with semantic understanding",
    techStack: ["Python", "PyTorch", "FastAPI", "Redis", "Docker"],
    impact: "40% improvement in search relevance, 2M+ queries/day",
    github: "https://github.com/alexchen/neuralsearch",
    demo: "https://neuralsearch.demo.dev",
  },
  {
    id: 2,
    name: "MLFlow Pipeline",
    problem: "ML teams lack standardized deployment workflows",
    techStack: ["Kubernetes", "Airflow", "MLflow", "Terraform", "Go"],
    impact: "Reduced deployment time from days to hours for 50+ models",
    github: "https://github.com/alexchen/mlflow-pipeline",
    demo: null,
  },
  {
    id: 3,
    name: "VisionAPI",
    problem: "Real-time image processing at scale is expensive",
    techStack: ["Rust", "ONNX", "gRPC", "AWS Lambda", "S3"],
    impact: "70% cost reduction, 10ms average latency",
    github: "https://github.com/alexchen/visionapi",
    demo: "https://visionapi.demo.dev",
  },
  {
    id: 4,
    name: "ChatOps Bot",
    problem: "DevOps tasks require context switching to multiple tools",
    techStack: ["TypeScript", "Node.js", "OpenAI", "Slack API", "PostgreSQL"],
    impact: "Automated 60% of routine DevOps queries for team of 30",
    github: "https://github.com/alexchen/chatops",
    demo: null,
  },
];

export const skillsData = {
  Languages: ["Python", "TypeScript", "Go", "Rust", "SQL"],
  Frameworks: ["FastAPI", "React", "Node.js", "Django", "gRPC"],
  "AI/ML": ["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "OpenAI"],
  Infrastructure: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP"],
  Tools: ["Git", "Linux", "PostgreSQL", "Redis", "Kafka"],
};

export const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechCorp AI",
    period: "2022 - Present",
    responsibilities: [
      "Lead ML infrastructure team of 5 engineers",
      "Architected real-time inference platform serving 10M+ predictions/day",
      "Reduced model training costs by 45% through optimization",
    ],
  },
  {
    id: 2,
    role: "Software Engineer II",
    company: "DataFlow Systems",
    period: "2019 - 2022",
    responsibilities: [
      "Built distributed data pipelines processing 500TB+ daily",
      "Implemented feature store reducing ML experiment time by 60%",
      "Mentored 3 junior engineers",
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "StartupX",
    period: "2018 - 2019",
    responsibilities: [
      "Full-stack development for B2B SaaS platform",
      "Designed REST APIs serving 100K+ users",
      "Integrated third-party ML services for analytics",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "M.S. Computer Science",
    institution: "Stanford University",
    year: "2018",
    focus: "Machine Learning & Distributed Systems",
  },
  {
    id: 2,
    degree: "B.S. Computer Science",
    institution: "UC Berkeley",
    year: "2016",
    focus: "Algorithms & Systems",
  },
];

export const certificationsData = [
  { id: 1, name: "AWS Solutions Architect Professional", issuer: "Amazon", year: "2023" },
  { id: 2, name: "Google Cloud ML Engineer", issuer: "Google", year: "2022" },
  { id: 3, name: "Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2021" },
];

export const leadershipData = [
  {
    id: 1,
    title: "Tech Lead - ML Platform",
    description: "Leading cross-functional team building next-gen ML infrastructure",
  },
  {
    id: 2,
    title: "Open Source Maintainer",
    description: "Maintaining popular ML tooling library with 5K+ GitHub stars",
  },
  {
    id: 3,
    title: "Conference Speaker",
    description: "Regular speaker at MLOps World, KubeCon, and local meetups",
  },
];

export const commandDescriptions: Record<string, string> = {
  help: "Show available commands",
  about: "Learn about me",
  projects: "View my featured projects",
  skills: "See my technical skills",
  experience: "View work history",
  education: "Academic background",
  certifications: "Professional credentials",
  leadership: "Leadership experience",
  contact: "Get in touch",
  clear: "Clear terminal",
};
