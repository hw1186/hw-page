import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";
import { TerminalFrame } from "@/components/TerminalFrame";

export default function Home() {
  return (
    <main>
      <TerminalFrame>
        <Hero />
        <Experience />
        <Skills />
        <Links />
        <Footer />
      </TerminalFrame>
    </main>
  );
}
