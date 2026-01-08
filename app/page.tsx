"use client";

import Navbar from "./components/shared/Navbar";
import HomeSection from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Clients from "./Clients";
import Contato from "./Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <HomeSection />

      <section id="experience" className="scroll-mt-32">
        <Services />
        <Clients />
      </section>

      <section id="projects" className="scroll-mt-32">
        <Projects />
      </section>

      <section id="contact">
        <Contato />
      </section>
    </>
  );
}
