import { useState } from "react";
import Terminal from "@/components/terminal/Terminal";
import LeftPanel from "@/components/terminal/LeftPanel";
import MobileToggle from "@/components/terminal/MobileToggle";
import MobileCardView from "@/components/terminal/MobileCardView";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [isTerminalView, setIsTerminalView] = useState(true);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="h-screen bg-background overflow-hidden">
        {isTerminalView ? (
          <Terminal onCommandChange={setActiveCommand} />
        ) : (
          <MobileCardView />
        )}
        <MobileToggle
          isTerminalView={isTerminalView}
          onToggle={() => setIsTerminalView(!isTerminalView)}
        />
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <div className="w-2/5 border-r border-border/30 bg-card/20">
        <LeftPanel activeCommand={activeCommand} />
      </div>

      <div className="flex-1 p-4">
        <Terminal onCommandChange={setActiveCommand} />
      </div>
    </div>
  );
}
