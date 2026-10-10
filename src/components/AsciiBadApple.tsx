"use client";

import { useEffect, useRef } from "react";

const W = 64;
const H = 28;

// Bad Apple!! 고대비 흑백 실루엣 특화 아스키 램프
const ASCII_CHARS = "  ..::--==++**##%%@@";

export function AsciiBadApple() {
  const preRef = useRef<HTMLPreElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animId: number;

    const render = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        ctx.drawImage(video, 0, 0, W, H);
        const imgData = ctx.getImageData(0, 0, W, H).data;
        const lines: string[] = [];

        for (let y = 0; y < H; y++) {
          let line = "";
          const rowOffset = y * W * 4;
          for (let x = 0; x < W; x++) {
            const idx = rowOffset + x * 4;
            const r = imgData[idx];
            const g = imgData[idx + 1];
            const b = imgData[idx + 2];
            const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

            const charIdx = Math.floor(
              (brightness / 255) * (ASCII_CHARS.length - 1)
            );
            line += ASCII_CHARS[charIdx];
          }
          lines.push(line);
        }

        if (preRef.current) {
          preRef.current.textContent = lines.join("\n");
        }
      }

      animId = requestAnimationFrame(render);
    };

    video.play().catch(() => {});
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="/bad-apple.mp4"
        playsInline
        loop
        muted
        autoPlay
        preload="auto"
        className="hidden"
      />
      <pre
        ref={preRef}
        aria-hidden
        className="pointer-events-none select-none font-mono text-[8px] leading-[1.1] text-accent/80"
      />
    </div>
  );
}
