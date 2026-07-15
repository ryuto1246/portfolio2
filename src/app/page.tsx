import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { BeyondWork } from "@/components/BeyondWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Works />
        <Education />
        <Skills />
        <BeyondWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
