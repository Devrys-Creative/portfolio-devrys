

// import custom components
import { Footer } from "./Components/Footer/Footer";

// import styles
import "./globals.scss";
// Setup font-awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './Assets/icons/fontawesome';
import Script from "next/script";
config.autoAddCss = false; // Désactive l'injection automatique de CSS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr_FR">
      <head>
        <Script
          id="theme"
          dangerouslySetInnerHTML={{
            __html: `
                console.log("biou theme");
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  console.log("apply saved theme");
                  document.documentElement.classList.add("theme-" + savedTheme);
                } else {
                  console.log("apply default theme");
                  document.documentElement.classList.add("theme-dark");
                };
            `,
          }}
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
        <Footer />
        <Script
          src="https://kit.fontawesome.com/4e6e3d1944.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
