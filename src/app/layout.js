import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "Gold Event",
  description: "Agence événementielle de luxe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
