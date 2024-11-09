

// import custom components
import { Footer } from "./Components/Footer/Footer";

// import styles
import "./globals.scss";
// Setup font-awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './Assets/icons/fontawesome';
import { ThemeProvider } from "./Hooks/useTheme";
import Script from "next/script";
config.autoAddCss = false; // Désactive l'injection automatique de CSS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr_FR">
      <body>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
        <Script
          src="https://kit.fontawesome.com/4e6e3d1944.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
