import CommandShortcuts from "../terminal/CommandShortcuts";

export default function CommandShortcutsExample() {
  return (
    <div className="w-full bg-background p-4">
      <CommandShortcuts 
        onCommand={(cmd) => console.log("Clicked:", cmd)} 
        activeCommand="projects" 
      />
    </div>
  );
}
