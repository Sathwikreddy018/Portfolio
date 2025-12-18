interface CommandShortcutsProps {
  onCommand: (cmd: string) => void;
  activeCommand: string | null;
}

const commands = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "clear",
];

export default function CommandShortcuts({
  onCommand,
  activeCommand,
}: CommandShortcutsProps) {
  return (
    <div className="px-4 py-2 border-b border-green-500/20 bg-black">
      <div className="flex flex-wrap gap-x-2 font-mono text-[13px] text-green-400">
        {commands.map((cmd, index) => (
          <span key={cmd} className="flex items-center">
            <span
              onClick={() => onCommand(cmd)}
              className={`cursor-pointer hover:text-green-300 transition-colors ${
                activeCommand === cmd ? "text-green-300 underline" : ""
              }`}
              data-testid={`cmd-${cmd}`}
            >
              {cmd}
            </span>
            {index < commands.length - 1 && (
              <span className="mx-1 text-green-500/60">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
