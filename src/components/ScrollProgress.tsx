"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-accent/50 transition-[width] duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
