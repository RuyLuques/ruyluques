"use client";

import Navbar from "./components/shared/Navbar";
import HomeSection from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Clients from "./sections/clients/Clients";
import Contato from "./sections/contact/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <HomeSection />

      <section id="experience" className="scroll-mt-32">
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
