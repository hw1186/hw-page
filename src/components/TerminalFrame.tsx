import type { ReactNode } from "react";
import { Nav } from "./Nav";

export function TerminalFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto my-4 max-w-6xl overflow-hidden rounded-lg border border-border shadow-[0_0_80px_rgba(61,220,132,0.04),inset_0_0_80px_rgba(61,220,132,0.02)] sm:my-8">
      <div className="flex items-center justify-between border-b border-border bg-bg-card px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-text-muted">
            hw1186@dev ~ %
          </span>
        </div>
        <Nav />
      </div>
      <div className="bg-bg">{children}</div>
    </div>
  );
}
