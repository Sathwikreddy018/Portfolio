import { Button } from "@/components/ui/button";
import { TerminalSquare, LayoutGrid } from "lucide-react";

interface MobileToggleProps {
  isTerminalView: boolean;
  onToggle: () => void;
}

export default function MobileToggle({ isTerminalView, onToggle }: MobileToggleProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        variant="default"
        size="icon"
        onClick={onToggle}
        className="rounded-full shadow-lg"
        data-testid="button-toggle-view"
      >
        {isTerminalView ? (
          <LayoutGrid className="h-5 w-5" />
        ) : (
          <TerminalSquare className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
