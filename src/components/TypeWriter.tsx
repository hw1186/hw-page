"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypeWriter({
  text,
  speed = 60,
  delay = 400,
  className = "",
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`ml-0.5 inline-block w-[7px] bg-accent/70 ${done ? "cursor-blink" : ""}`}
      >
        &nbsp;
      </span>
    </span>
  );
}
