import { LINKS } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Links() {
  return (
    <section id="links" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <SectionHeading number="03." label="Links" />
        </FadeIn>
        <div className="space-y-2">
          {LINKS.map((link, i) => (
            <FadeIn key={link.href} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-0 rounded px-1.5 py-1 -mx-1.5 font-mono text-[12px] transition-colors duration-150 hover:bg-accent/5"
              >
                <span className="text-accent">$</span>
                <span className="ml-1.5 text-text-muted">open</span>
                <span className="ml-1.5 text-text transition-colors group-hover:text-accent">
                  {link.href}
                </span>
                <span className="ml-2 text-[10px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  # {link.label}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
