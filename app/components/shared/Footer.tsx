"use client";

export default function Footer() {
  return (
    <footer className="bg-black mt-5">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col items-center gap-5 text-center">

        <p className="text-sm text-white">
          © {new Date().getFullYear()} Ruy Luques
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ruyluques/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-white hover:text-purple-700 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.05V24h-4v-7.4c0-1.76-.03-4.03-2.45-4.03-2.46 0-2.83 1.92-2.83 3.9V24h-4z"/>
            </svg>
          </a>

          <a
            href="https://github.com/RuyLuques"
            target="_blank"
            aria-label="GitHub"
            className="text-white hover:text-purple-700 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.85.5 12.2c0 5.1 3.3 9.43 7.87 10.96.58.1.79-.26.79-.57v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.02 1.76 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.55-.3-5.23-1.3-5.23-5.77 0-1.27.45-2.3 1.2-3.1-.12-.3-.52-1.5.12-3.13 0 0 .98-.32 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.83 1.2 3.1 0 4.48-2.7 5.47-5.27 5.76.41.35.77 1.04.77 2.1v3.1c0 .31.2.68.8.57A11.7 11.7 0 0 0 23.5 12.2C23.5 5.85 18.35.5 12 .5z"/>
            </svg>
          </a>

          <a
            href="mailto:ruyluques@hotmail.com"
            aria-label="Email"
            className="text-white hover:text-purple-700 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
