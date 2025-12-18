import CommandNav from "./CommandNav";

interface TopBarProps {
  onRunCommand?: (cmd: string) => void;
}

export default function TopBar({ onRunCommand }: TopBarProps) {
  return (
    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
      {/* Name & role */}
      <div>
        <p className="text-green-400 text-lg font-mono">
          Sathwik Katla
        </p>
        <p className="text-green-500/70 text-sm font-mono">
          Machine Learning Engineer
        </p>
      </div>

      {/* Command nav */}
      <CommandNav onRunCommand={onRunCommand} />
    </div>
  );
}
