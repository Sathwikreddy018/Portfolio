interface CommandNavProps {
  onRunCommand?: (cmd: string) => void;
}

const commands = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "education",
  "certifications",
  "leadership",
  "clear",
];

export default function CommandNav({ onRunCommand }: CommandNavProps) {
  return (
    <div className="text-green-500/70 text-sm font-mono">
      {commands.map((cmd, i) => (
        <span key={cmd}>
          <span
            onClick={() => onRunCommand?.(cmd)}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            {cmd}
          </span>
          {i < commands.length - 1 && " | "}
        </span>
      ))}
    </div>
  );
}
