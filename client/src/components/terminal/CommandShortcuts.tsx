import { Button } from "@/components/ui/button";

interface CommandShortcutsProps {
  onCommand: (cmd: string) => void;
  activeCommand: string | null;
}

const commands = ["help", "about", "projects", "skills", "experience", "contact", "clear"];

export default function CommandShortcuts({ onCommand, activeCommand }: CommandShortcutsProps) {
  return (
    <div className="flex flex-wrap gap-2 p-3 border-b border-border/50 bg-card/30">
      {commands.map((cmd) => (
        <Button
          key={cmd}
          variant={activeCommand === cmd ? "default" : "outline"}
          size="sm"
          onClick={() => onCommand(cmd)}
          data-testid={`button-cmd-${cmd}`}
          className="font-mono text-xs"
        >
          {cmd}
        </Button>
      ))}
    </div>
  );
}
