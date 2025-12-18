import { ReactNode } from "react";

interface AppFrameProps {
  children: ReactNode;
  onContactClick?: () => void;
}

export default function AppFrame({
  children,
  onContactClick,
}: AppFrameProps) {
  return (
    <div className="h-screen w-screen bg-black text-green-400 font-mono relative overflow-hidden">

      {/* TOP FRAME */}
      <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-6 border-b border-green-500/40 z-20">

        {/* LEFT */}
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-wide">
            Katla Sathwik
          </p>

          <p className="text-xs text-green-500/70">
            Machine Learning Engineer
          </p>
        </div>

        {/* RIGHT: CONTACT */}
        <button
          onClick={onContactClick}
          className="
            px-4 py-1.5
            border border-green-500/60
            text-xs tracking-widest
            hover:bg-green-500/10
            hover:border-green-400
            transition
          "
        >
          CONTACT
        </button>
      </div>

      {/* CONTENT */}
      <div className="pt-14 h-full">{children}</div>

      {/* BOTTOM FRAME (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-green-500/40 px-6 flex items-center justify-between text-xs">
        <span>sathwik@portfolio:~$</span>
        <span>{new Date().toLocaleString()}</span>
      </div>
    </div>
  );
}
