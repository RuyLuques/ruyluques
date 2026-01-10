"use client";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="w-full px-6 py-10 sm:px-10">
        <h2 className="mb-16 text-center text-3xl font-semibold">
          Vamos conversar?
        </h2>

        <div className="grid w-full text-neutral-800 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/ruyluques/"
            target="_blank"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8 text-center transition hover:border-purple-700 hover:shadow-lg"
          >
            <span className="text-3xl">in</span>
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-sm">
              Conecte-se comigo profissionalmente
            </p>
          </a>

          <a
            href="https://github.com/RuyLuques"
            target="_blank"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8 text-center transition hover:border-purple-700 hover:shadow-lg"
          >
            <svg width="28" height="28" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.85.5 12.2c0 5.1 3.3 9.43 7.87 10.96.58.1.79-.26.79-.57v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.02 1.76 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.55-.3-5.23-1.3-5.23-5.77 0-1.27.45-2.3 1.2-3.1-.12-.3-.52-1.5.12-3.13 0 0 .98-.32 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.83 1.2 3.1 0 4.48-2.7 5.47-5.27 5.76.41.35.77 1.04.77 2.1v3.1c0 .31.2.68.8.57A11.7 11.7 0 0 0 23.5 12.2C23.5 5.85 18.35.5 12 .5z" />
            </svg>
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-sm">
              Veja meus projetos e códigos
            </p>
          </a>

          <a
            href="mailto:ruyluques@hotmail.com"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8 text-center transition hover:border-purple-700 hover:shadow-lg"
          >
            <svg width="28" height="28" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p className="text-sm">
              ruyluques@hotmail.com
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
