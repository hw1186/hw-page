"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "experience", href: "#experience" },
  { label: "skill", href: "#skill" },
  { label: "links", href: "#links" },
] as const;

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex gap-1">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            className={`rounded px-2.5 py-1 font-mono text-[11px] transition-colors ${
              active === href
                ? "bg-accent/10 text-accent"
                : "text-text-muted hover:bg-border/30 hover:text-text"
            }`}
          >
            ~/{label}
          </a>
        </li>
      ))}
    </ul>
  );
}
