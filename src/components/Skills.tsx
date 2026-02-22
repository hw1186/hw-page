import { SKILLS } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Skills() {
  return (
    <section id="skill" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <SectionHeading label="Skill" />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILLS.map((cat, ci) => (
            <FadeIn key={cat.title} delay={ci * 100}>
              <div>
                <h3 className="mb-2 text-[11px] font-semibold tracking-wider text-accent uppercase">
                  {cat.title}
                </h3>
                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[12px] leading-relaxed text-text-muted"
                    >
                      <span className="mr-1.5 text-border">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
