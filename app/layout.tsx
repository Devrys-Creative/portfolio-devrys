import type { Metadata } from "next";
import "./globals.scss";


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
      </body>
    </html>
  );
}
