"use client";

import Navbar from "./components/shared/Navbar";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Clients from "./sections/clients/Clients";
import Footer from "./components/shared/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />

      <section id="experience" className="scroll-mt-32">
        <Clients />
      </section>

      <section id="projects" className="scroll-mt-32">
        <Projects />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
