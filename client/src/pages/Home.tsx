import { useRef, useState } from "react";
import Terminal from "@/components/terminal/Terminal";
import LeftPanel from "@/components/terminal/LeftPanel";
import AppFrame from "@/components/layout/AppFrame";

export default function Home() {
  const terminalRef = useRef<{ runCommand: (cmd: string) => void }>(null);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);

  return (
    <AppFrame
      onContactClick={() => {
        terminalRef.current?.runCommand("contact");
      }}
    >
      <div className="h-full flex">

        {/* LEFT */}
        <div className="w-[38%] flex justify-center">
          <LeftPanel />
        </div>

        {/* DIVIDER */}
        <div className="w-px bg-green-500/40" />

        {/* TERMINAL */}
        <div className="flex-1 h-full">
          <Terminal
            ref={terminalRef}
            onCommandChange={setActiveCommand}
          />
        </div>

      </div>
    </AppFrame>
  );
}
