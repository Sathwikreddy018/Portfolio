import LeftPanel from "../terminal/LeftPanel";

export default function LeftPanelExample() {
  return (
    <div className="h-[500px] w-full bg-background">
      <LeftPanel activeCommand={null} />
    </div>
  );
}
