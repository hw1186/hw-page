import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Links />
      <Footer />
    </main>
  );
}
