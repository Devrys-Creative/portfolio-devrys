// import next components and types
import type { Metadata } from "next";
import Head from "next/head";

// import custom components
import { Footer } from "./Components/Footer/Footer";

// import styles
import "./globals.scss";
// Setup font-awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './Assets/icons/fontawesome';
config.autoAddCss = false; // Désactive l'injection automatique de CSS


export const metadata: Metadata = {
  title: "Devrys - portfolio",
  description: "Portfolio de développeur·euse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr_FR">
      <Head>
        <script src="https://kit.fontawesome.com/4e6e3d1944.js" crossOrigin="anonymous" defer></script>
      </Head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
