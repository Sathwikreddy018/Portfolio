import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, Github } from "lucide-react";
import { useState } from "react";
import {
  profileData,
  projectsData,
  skillsData,
  experienceData,
  educationData,
  certificationsData,
  leadershipData,
  commandDescriptions,
} from "@/lib/portfolioData";

interface TerminalOutputProps {
  command: string;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className="h-6 w-6"
      data-testid={`button-copy-${text}`}
    >
      {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
    </Button>
  );
}

function HelpOutput() {
  return (
    <div className="space-y-1">
      <p className="text-primary font-bold mb-3">Available Commands:</p>
      {Object.entries(commandDescriptions).map(([cmd, desc]) => (
        <div key={cmd} className="flex gap-4">
          <span className="text-primary w-20 font-bold">{cmd}</span>
          <span className="text-muted-foreground">{desc}</span>
        </div>
      ))}
    </div>
  );
}

function AboutOutput() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-primary text-lg font-bold tracking-wider">
          {profileData.name.toUpperCase()}
        </h2>
        <p className="text-muted-foreground">
          {profileData.title} | {profileData.tagline}
        </p>
      </div>
      <pre className="text-foreground whitespace-pre-wrap leading-relaxed text-sm">
        {profileData.bio}
      </pre>
    </div>
  );
}

function ProjectsOutput() {
  return (
    <div className="space-y-6">
      <p className="text-primary font-bold">Featured Projects:</p>
      {projectsData.map((project) => (
        <div key={project.id} className="border border-border/50 rounded-md p-4 space-y-3">
          <h3 className="text-primary font-bold text-base">{project.name}</h3>
          <p className="text-muted-foreground text-sm">{project.problem}</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-foreground text-sm">
            <span className="text-primary">Impact:</span> {project.impact}
          </p>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-github-${project.id}`}
            >
              <Github className="h-3 w-3" /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-demo-${project.id}`}
              >
                <ExternalLink className="h-3 w-3" /> Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillsOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Technical Skills:</p>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-foreground font-semibold text-sm">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Work Experience:</p>
      {experienceData.map((exp) => (
        <div key={exp.id} className="border-l-2 border-primary/50 pl-4 space-y-2">
          <div>
            <h3 className="text-primary font-bold">{exp.role}</h3>
            <p className="text-muted-foreground text-sm">
              {exp.company} | {exp.period}
            </p>
          </div>
          <ul className="space-y-1">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="text-foreground text-sm flex gap-2">
                <span className="text-primary">-</span>
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EducationOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Education:</p>
      {educationData.map((edu) => (
        <div key={edu.id} className="space-y-1">
          <h3 className="text-primary font-semibold">{edu.degree}</h3>
          <p className="text-foreground text-sm">{edu.institution}</p>
          <p className="text-muted-foreground text-xs">
            {edu.year} | Focus: {edu.focus}
          </p>
        </div>
      ))}
    </div>
  );
}

function CertificationsOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Certifications:</p>
      {certificationsData.map((cert) => (
        <div key={cert.id} className="flex items-center gap-3">
          <Badge variant="default" className="text-xs">
            {cert.year}
          </Badge>
          <div>
            <p className="text-foreground text-sm">{cert.name}</p>
            <p className="text-muted-foreground text-xs">{cert.issuer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadershipOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Leadership & Community:</p>
      {leadershipData.map((item) => (
        <div key={item.id} className="space-y-1">
          <h3 className="text-primary font-semibold">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function ContactOutput() {
  return (
    <div className="space-y-4">
      <p className="text-primary font-bold">Get In Touch:</p>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-20">Email:</span>
          <span className="text-foreground">{profileData.email}</span>
          <CopyButton text={profileData.email} />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-20">GitHub:</span>
          <a
            href={`https://${profileData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            data-testid="link-github-profile"
          >
            {profileData.github}
          </a>
          <CopyButton text={profileData.github} />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-20">LinkedIn:</span>
          <a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            data-testid="link-linkedin-profile"
          >
            {profileData.linkedin}
          </a>
          <CopyButton text={profileData.linkedin} />
        </div>
      </div>
    </div>
  );
}

function UnknownCommand({ command }: { command: string }) {
  return (
    <div className="text-destructive">
      Command not found: {command}
      <br />
      <span className="text-muted-foreground">Type 'help' for available commands.</span>
    </div>
  );
}

export default function TerminalOutput({ command }: TerminalOutputProps) {
  const cmd = command.toLowerCase().trim();

  switch (cmd) {
    case "help":
      return <HelpOutput />;
    case "about":
      return <AboutOutput />;
    case "projects":
      return <ProjectsOutput />;
    case "skills":
      return <SkillsOutput />;
    case "experience":
      return <ExperienceOutput />;
    case "education":
      return <EducationOutput />;
    case "certifications":
      return <CertificationsOutput />;
    case "leadership":
      return <LeadershipOutput />;
    case "contact":
      return <ContactOutput />;
    default:
      return <UnknownCommand command={command} />;
  }
}
