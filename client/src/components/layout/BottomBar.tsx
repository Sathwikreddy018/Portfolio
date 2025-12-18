import { useEffect, useState } from "react";

export default function BottomBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = time.toLocaleDateString("en-GB"); // DD/MM/YYYY
  const clock = time.toLocaleTimeString("en-GB"); // HH:MM:SS

  return (
    <div className="absolute bottom-6 left-6 right-6 flex justify-between text-green-500/60 text-xs font-mono">
      <span>sathwik@portfolio:~$</span>
      <span>{date}, {clock}</span>
    </div>
  );
}
