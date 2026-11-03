import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

/**
 * All sections are static and render straight into the prerendered HTML.
 * Avoid wrapping them in <Suspense>: with Cache Components that streams each section as a
 * hidden segment swapped in by inline script, which forces a second full layout on load.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
