import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Briefcase, Code, GraduationCap, Award, Users, Mail, Github, Linkedin, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  profileData,
  projectsData,
  skillsData,
  experienceData,
  educationData,
  certificationsData,
  leadershipData,
} from "@/lib/portfolioData";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleCopy} className="h-6 w-6">
      {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
    </Button>
  );
}

export default function MobileCardView() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-4 pb-20">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="w-16 h-16 rounded-md bg-muted border border-primary/30 flex items-center justify-center">
              <User className="w-8 h-8 text-primary/60" />
            </div>
            <div>
              <CardTitle className="text-primary">{profileData.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{profileData.title}</p>
              <p className="text-xs text-muted-foreground">{profileData.tagline}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground leading-relaxed">{profileData.bio}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectsData.map((project) => (
              <div key={project.id} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <h4 className="text-primary font-semibold">{project.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{project.problem}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-xs text-muted-foreground mb-1">{category}</h4>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {experienceData.map((exp) => (
              <div key={exp.id} className="border-l-2 border-primary/50 pl-3">
                <h4 className="text-primary font-semibold text-sm">{exp.role}</h4>
                <p className="text-xs text-muted-foreground">{exp.company} | {exp.period}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {educationData.map((edu) => (
              <div key={edu.id}>
                <h4 className="text-primary font-semibold text-sm">{edu.degree}</h4>
                <p className="text-xs text-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.year}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="flex items-center gap-2">
                <Badge variant="default" className="text-xs">{cert.year}</Badge>
                <span className="text-sm text-foreground">{cert.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Leadership
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leadershipData.map((item) => (
              <div key={item.id}>
                <h4 className="text-primary font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">{profileData.email}</span>
              <CopyButton text={profileData.email} />
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={`https://${profileData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border/50 hover:border-primary/50"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={`https://${profileData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border/50 hover:border-primary/50"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-md border border-border/50 hover:border-primary/50"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
