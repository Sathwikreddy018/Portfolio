import { useState, useRef, useEffect, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CommandShortcuts from "./CommandShortcuts";
import TerminalOutput from "./TerminalOutput";
import { profileData } from "@/lib/portfolioData";

interface HistoryEntry {
  id: number;
  command: string;
  isOutput: boolean;
}

interface TerminalProps {
  onCommandChange?: (cmd: string | null) => void;
}

export default function Terminal({ onCommandChange }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { id: 0, command: "welcome", isOutput: true },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(1);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmedCmd = cmd.trim().toLowerCase();
      if (!trimmedCmd) return;

      setShowHint(false);

      if (trimmedCmd === "clear") {
        setHistory([]);
        setActiveCommand(null);
        onCommandChange?.(null);
        return;
      }

      const newEntries: HistoryEntry[] = [
        { id: idCounter.current++, command: cmd, isOutput: false },
        { id: idCounter.current++, command: trimmedCmd, isOutput: true },
      ];

      setHistory((prev) => [...prev, ...newEntries]);
      setCommandHistory((prev) => [...prev, trimmedCmd]);
      setHistoryIndex(-1);
      setActiveCommand(trimmedCmd);
      onCommandChange?.(trimmedCmd);
    },
    [onCommandChange]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="flex flex-col h-full bg-background border border-border/50 rounded-md overflow-hidden"
      style={{ boxShadow: "var(--terminal-glow)" }}
      onClick={focusInput}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-card/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">
          {profileData.name.toLowerCase().replace(" ", "_")}@portfolio ~ %
        </span>
      </div>

      <CommandShortcuts onCommand={executeCommand} activeCommand={activeCommand} />

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4 font-mono text-sm">
          {history.map((entry) => (
            <div key={entry.id}>
              {entry.isOutput ? (
                entry.command === "welcome" ? (
                  <WelcomeMessage />
                ) : (
                  <TerminalOutput command={entry.command} />
                )
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
            </div>
          ))}

          {showHint && history.length <= 1 && (
            <p className="text-muted-foreground text-xs animate-pulse">
              Type a command or click the shortcuts above...
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground caret-primary"
              autoFocus
              spellCheck={false}
              data-testid="input-terminal"
            />
            <span className="animate-blink text-primary">_</span>
          </form>
        </div>
      </ScrollArea>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[200%] animate-scanline" />
      </div>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="space-y-2">
      <pre className="text-primary text-xs leading-tight">
{`
 █████╗ ██╗     ███████╗██╗  ██╗
██╔══██╗██║     ██╔════╝╚██╗██╔╝
███████║██║     █████╗   ╚███╔╝ 
██╔══██║██║     ██╔══╝   ██╔██╗ 
██║  ██║███████╗███████╗██╔╝ ██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`}
      </pre>
      <p className="text-foreground">
        Welcome to my interactive portfolio terminal.
      </p>
      <p className="text-muted-foreground">
        Type <span className="text-primary font-bold">help</span> to see available commands.
      </p>
    </div>
  );
}
