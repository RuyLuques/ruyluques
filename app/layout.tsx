import "./styles/globals.css";
import { ThemeProvider } from "./components/context/ThemeProvider";
import WhatsAppButton from "./components/shared/WhatsAppButton";

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
