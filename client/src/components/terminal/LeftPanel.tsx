import { useState, useRef, useCallback } from "react";
import { User, Briefcase, Mail, Github, Linkedin, Folder, QrCode } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { profileData, projectsData } from "@/lib/portfolioData";

interface LeftPanelProps {
  activeCommand: string | null;
}

export default function LeftPanel({ activeCommand }: LeftPanelProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[200%] animate-scanline" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {activeCommand === "projects" ? (
          <ProjectsPanel />
        ) : activeCommand === "experience" ? (
          <TimelinePanel />
        ) : activeCommand === "contact" ? (
          <ContactPanel />
        ) : (
          <PortraitCard />
        )}
      </div>
    </div>
  );
}

function PortraitCard() {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative cursor-pointer transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
          data-testid="card-portrait"
        >
          <div
            className="relative rounded-md border border-primary/30 bg-card p-6 animate-glow-pulse overflow-hidden"
            style={{ boxShadow: "var(--terminal-glow-strong)" }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-48 rounded-md overflow-hidden border-2 border-primary/40">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <User className="w-24 h-24 text-primary/60" />
                </div>
              </div>

              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-primary tracking-wider">
                  {profileData.name.toUpperCase()}
                </h2>
                <p className="text-sm text-foreground">{profileData.title}</p>
                <p className="text-xs text-muted-foreground">{profileData.tagline}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={`https://${profileData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href={`https://${profileData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{profileData.name} | {profileData.title} | {profileData.tagline}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function ProjectsPanel() {
  return (
    <div
      className="rounded-md border border-primary/30 bg-card p-4 space-y-3"
      style={{ boxShadow: "var(--terminal-glow)" }}
    >
      <h3 className="text-primary font-bold text-sm flex items-center gap-2">
        <Folder className="w-4 h-4" />
        PROJECT GALLERY
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {projectsData.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="aspect-square rounded-md bg-muted border border-border/50 flex items-center justify-center p-3 hover:border-primary/50 transition-colors"
          >
            <div className="text-center">
              <Folder className="w-8 h-8 text-primary/60 mx-auto mb-2" />
              <p className="text-xs text-foreground font-medium truncate">{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelinePanel() {
  return (
    <div
      className="rounded-md border border-primary/30 bg-card p-4 space-y-4"
      style={{ boxShadow: "var(--terminal-glow)" }}
    >
      <h3 className="text-primary font-bold text-sm flex items-center gap-2">
        <Briefcase className="w-4 h-4" />
        CAREER TIMELINE
      </h3>
      <div className="relative pl-4 border-l-2 border-primary/50 space-y-4">
        <div className="relative">
          <div className="absolute -left-[1.35rem] w-3 h-3 rounded-full bg-primary" />
          <p className="text-xs text-muted-foreground">2022 - Present</p>
          <p className="text-sm text-foreground font-medium">Senior Engineer</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[1.35rem] w-3 h-3 rounded-full bg-primary/60" />
          <p className="text-xs text-muted-foreground">2019 - 2022</p>
          <p className="text-sm text-foreground font-medium">Software Engineer II</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[1.35rem] w-3 h-3 rounded-full bg-primary/40" />
          <p className="text-xs text-muted-foreground">2018 - 2019</p>
          <p className="text-sm text-foreground font-medium">Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div
      className="rounded-md border border-primary/30 bg-card p-4 space-y-4"
      style={{ boxShadow: "var(--terminal-glow)" }}
    >
      <h3 className="text-primary font-bold text-sm flex items-center gap-2">
        <Mail className="w-4 h-4" />
        CONNECT
      </h3>
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-muted rounded-md border border-border/50 flex items-center justify-center">
          <QrCode className="w-20 h-20 text-primary/60" />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a
          href={`https://${profileData.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          <Github className="w-5 h-5 text-muted-foreground" />
        </a>
        <a
          href={`https://${profileData.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-muted-foreground" />
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="p-3 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          <Mail className="w-5 h-5 text-muted-foreground" />
        </a>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Scan QR or click icons to connect
      </p>
    </div>
  );
}
