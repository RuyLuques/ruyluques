"use client";

import Navbar from "./components/shared/Navbar";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Education from "./sections/education/Education";
import Projects from "./sections/projects/Projects";
import Clients from "./sections/clients/Clients";
import Footer from "./components/shared/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />

      <section id="experience" className="scroll-mt-32">
        <Clients />
      </section>

      <section id="projects" className="scroll-mt-32">
        <Projects />
      </section>

      <section id="projects" className="scroll-mt-32">
        <Education />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
