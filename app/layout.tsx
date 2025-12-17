import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppButton from "./components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          {children}
      <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
