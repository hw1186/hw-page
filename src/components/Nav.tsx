"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Skill", href: "#skill" },
  { label: "Links", href: "#links" },
] as const;

export function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-bg/80 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-border/60" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-2.5 sm:px-10 lg:px-16">
        <a
          href="#"
          className="font-mono text-[13px] font-semibold text-text-heading transition-colors hover:text-accent"
        >
          hw1186
        </a>
        <ul className="flex gap-5">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-[12px] transition-colors ${
                  active === href
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
