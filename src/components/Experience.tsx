import { EXPERIENCES } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <FadeIn>
          <SectionHeading label="Experience" />
        </FadeIn>
        <ul className="space-y-2">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={i} delay={i * 80}>
              <li className="flex gap-2.5 text-[13px] leading-relaxed">
                <span className="mt-0.5 shrink-0 text-text-muted">-</span>
                <span>{exp.text}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
