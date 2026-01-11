import { useEffect, useState } from "react";

function formatTimestamp(date: Date) {
  const pad = (value: number) => value.toString().padStart(2, "0");
  const yyyy = date.getFullYear();
  const mm = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const hh = pad(date.getHours());
  const min = pad(date.getMinutes());
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

export default function Navbar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-9 border-b border-ctp-overlay0 bg-ctp-base">
      <div className="flex h-full items-center justify-between gap-3 px-2 text-sm font-medium text-ctp-subtext0">
        <div className="flex items-center gap-3">
          <span>
            <span className="text-ctp-green">1</span> 2 3 4
          </span>
          <span className="text-ctp-text">~/tomasglavina/home</span>
        </div>
        <div className="flex items-center gap-3">
          <span>layout:tiling</span>
          <span>kbd:fi</span>
          <span className="text-ctp-text">{formatTimestamp(now)}</span>
        </div>
      </div>
    </header>
  );
}
