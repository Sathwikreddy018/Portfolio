import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const Terminal = forwardRef<
  { runCommand: (cmd: string) => void },
  TerminalProps
>(({ onCommandChange }, ref) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { id: 0, command: "welcome", isOutput: true },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(1);

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      if (trimmed === "clear") {
        setHistory([]);
        onCommandChange?.(null);
        return;
      }

      setHistory((prev) => [
        ...prev,
        { id: idCounter.current++, command: cmd, isOutput: false },
        { id: idCounter.current++, command: trimmed, isOutput: true },
      ]);

      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      onCommandChange?.(trimmed);
    },
    [onCommandChange]
  );

  useImperativeHandle(ref, () => ({
    runCommand: executeCommand,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp" && commandHistory.length) {
      e.preventDefault();
      const idx =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setInput(commandHistory[idx]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= commandHistory.length - 1) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        const idx = historyIndex + 1;
        setHistoryIndex(idx);
        setInput(commandHistory[idx]);
      }
    }
  };

  return (
    <div
      className="h-full flex flex-col bg-black"
      onClick={() => inputRef.current?.focus()}
    >
      {/* WINDOW HEADER */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-green-500/40 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-green-400 font-mono ml-2">
          sathwik@portfolio:~$
        </span>
      </div>

      {/* COMMAND BAR (UNCHANGED) */}
      <div className="border-b border-green-500/40 px-6 py-2 text-green-400 text-xs font-mono shrink-0">
        help | about | projects | skills | experience | contact | education |
        certifications | leadership | sudo | clear
      </div>

      {/* SCROLLABLE CONTENT ONLY */}
      <ScrollArea
        ref={scrollRef}
        className="flex-1 px-6 py-4"
        style={{
          paddingBottom: "4rem", // ⬅ matches AppFrame bottom status bar height
        }}
      >
        <div className="space-y-3 font-mono text-[13px] text-green-300">
          {history.map((entry) => (
            <div key={entry.id}>
              {entry.isOutput ? (
                entry.command === "welcome" ? (
                  <WelcomeMessage />
                ) : (
                  <TerminalOutput command={entry.command} />
                )
              ) : (
                <div className="flex gap-2">
                  <span className="text-green-400">$</span>
                  <span>{entry.command}</span>
                </div>
              )}
            </div>
          ))}

          {/* INPUT */}
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <span className="text-green-400">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-green-300 caret-green-400"
              autoFocus
              spellCheck={false}
            />
            <span className="animate-pulse text-green-400">▌</span>
          </form>
        </div>
      </ScrollArea>
    </div>
  );
});

export default Terminal;

/* -------------------- WELCOME -------------------- */

function WelcomeMessage() {
  return (
    <div className="space-y-1">
      <p>
        Hi, I'm {profileData.name}, a Software Engineer & AI Enthusiast.
      </p>
      <p className="text-green-500/70">
        Welcome to my interactive portfolio terminal.
      </p>
      <p className="text-green-500/70">
        Type <span className="text-green-400">help</span> to see commands.
      </p>
    </div>
  );
}
