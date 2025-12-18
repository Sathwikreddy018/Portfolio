// ===============================
// PROFILE
// ===============================
export const profileData = {
  name: "Katla Sathwik",
  title: "AI / ML Engineer",
  tagline: "Fresher | Applied AI & Machine Learning",

  email: "sathwikreddykatla@gmail.com",
  github: "github.com/Sathwikreddy018",
  linkedin: "linkedin.com/in/sathwikreddy018",

  bio: `
AI / ML Engineer (Fresher) with strong hands-on experience in building
end-to-end machine learning and deep learning systems.

Skilled in NLP, Computer Vision, and modern AI tooling with a strong
focus on real-world, production-ready implementations.
`,
};

// ===============================
// COMMAND DESCRIPTIONS
// ===============================
export const commandDescriptions: Record<string, string> = {
  help: "List all available commands",
  about: "About me and my background",
  projects: "Showcase of featured projects",
  skills: "Technical skills and tools",
  experience: "Work and internship experience",
  education: "Academic background",
  certifications: "Professional certifications",
  leadership: "Leadership and community roles",
  contact: "Get my contact details",
  clear: "Clear the terminal",
};

// ===============================
// PROJECTS
// ===============================
export const projectsNote =
  "To explore my other projects, feel free to visit my GitHub profile.";

export const projectsData = [
  {
    id: "plantdoc",
    name: "PlantDoc",
    problem: "AI system for detecting plant diseases from leaf images.",
    techStack: ["TensorFlow", "CNN", "OpenCV", "Flask", "Flutter"],
    impact: "Achieved 95%+ accuracy for disease classification.",
    github: "https://github.com/Sathwikreddy018/Plant_Disease_Detection",
    demo: "",
  },
  {
    id: "careerforge",
    name: "CareerForge",
    problem: "AI-driven platform for personalized career roadmaps.",
    techStack: ["PyTorch", "NLP", "React", "MongoDB"],
    impact: "Generated AI-based learning paths for users.",
    github: "https://github.com/Sathwikreddy018/job-aplication-agent",
    demo: "",
  },
  {
    id: "bargainbot",
    name: "BargainBot",
    problem: "LLM-based chatbot for automated price negotiation.",
    techStack: ["Transformers", "LangChain", "Docker"],
    impact: "Demonstrated real-time AI negotiation workflows.",
    github: "https://github.com/Sathwikreddy018/Bargain-Bot",
    demo: "",
  },
];


// ===============================
// SKILLS
// ===============================
export const skillsData: Record<string, string[]> = {
  "Programming Languages": ["Python", "JavaScript","C","C++"],
  "Machine Learning": ["PyTorch", "TensorFlow", "Scikit-learn"],
  "AI Domains": ["NLP", "Computer Vision", "LLMs","Deep Learning"],
  "Backend & APIs": ["FastAPI", "Flask","Node.js"],
  "Frontend": ["React", "Tailwind CSS","JavaScript","TypeScript"],
  "Tools & Platforms": ["Docker", "Git", "Linux","VS Code","Jupyter Notebook"],
};

// ===============================
// EXPERIENCE (FRESHER)
// ===============================
export const experienceData = [
  {
    id: "Fresher",
    role: "AI & ML",
    company: "Self Projects & Academic Work",
    period: "2023 – Present",
    responsibilities: [
      "Designed and trained ML/DL models",
      "Built end-to-end AI pipelines",
      "Integrated models into web applications",
    ],
  },
];

// ===============================
// EDUCATION
// ===============================
export const educationData = [
  {
    id: "btech",
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vaagdevi Engineering College",
    year: "2021 – 2025",
    focus: "Artificial Intelligence & Machine Learning",
  },
];

// ===============================
// CERTIFICATIONS (THIS FIXES YOUR ERROR)
// ===============================
export const certificationsData = [
  {
    id: "ml-cert",
    name: "Machine Learning Specialization",
    issuer: "Online Platform",
    year: "2023",
  },
  {
    id: "dl-cert",
    name: "Deep Learning Certification",
    issuer: "Online Platform",
    year: "2023",
  },
];

// ===============================
// LEADERSHIP
// ===============================
export const leadershipData = [
  {
    id: "project-lead",
    title: "AI Project Lead",
    description:
      "Led multiple AI/ML project implementations and peer collaborations.",
  },
];
