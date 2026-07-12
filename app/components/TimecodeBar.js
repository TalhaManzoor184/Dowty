"use client";

import { useEffect, useState } from "react";

function formatTimecode(totalFrames) {
  const fps = 24;
  const frames = totalFrames % fps;
  const totalSeconds = Math.floor(totalFrames / fps);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
}

export default function TimecodeBar() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 1000 / 24);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full bg-[#1B1F27] text-[#EEF1F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-7 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-wider">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E1432B] animate-pulse" />
          REC
        </span>
        <span className="text-[#9AA3AF]">{formatTimecode(frame)}</span>
        <span className="hidden sm:inline text-[#9AA3AF]">grokthumbnails.com</span>
      </div>
    </div>
  );
}
