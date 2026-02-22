import { PROFILE } from "@/data/profile";
import { AsciiCube } from "./AsciiCube";
import { FadeIn } from "./FadeIn";
import { TypeWriter } from "./TypeWriter";

export function Hero() {
  return (
    <section className="px-6 pb-6 pt-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-8">
        <div className="min-w-0">
          <p className="mb-3 font-mono text-[13px] text-accent">
            <span className="text-text-muted">$ </span>
            <TypeWriter text={PROFILE.greeting} speed={50} delay={300} />
          </p>
          <FadeIn delay={120}>
            <h1 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-text-heading sm:text-2xl">
              {PROFILE.description}
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="max-w-xl text-[13px] leading-relaxed text-text-muted">
              {PROFILE.sub}
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-6 text-[11px] text-text-muted">
              <span className="text-accent">▍</span> scroll down
            </div>
          </FadeIn>
        </div>
        <div className="hidden shrink-0 sm:block">
          <AsciiCube />
        </div>
      </div>
    </section>
  );
}
