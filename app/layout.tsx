import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "./Components/Footer/Footer";


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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
