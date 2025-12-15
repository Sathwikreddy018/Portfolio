import Terminal from "../terminal/Terminal";

export default function TerminalExample() {
  return (
    <div className="h-[500px] w-full bg-background p-4">
      <Terminal onCommandChange={(cmd) => console.log("Command:", cmd)} />
    </div>
  );
}
