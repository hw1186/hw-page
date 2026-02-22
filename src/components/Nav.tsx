"use client";

const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Skill", href: "#skill" },
  { label: "Links", href: "#links" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-sm">
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
                className="text-[12px] text-text-muted transition-colors hover:text-text"
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
