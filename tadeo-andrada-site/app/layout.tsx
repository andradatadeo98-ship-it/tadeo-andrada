import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tadeo Andrada — Artista visual",
  description:
    "Sitio del artista visual Tadeo Andrada. Obras, práctica y trayectoria.",
  openGraph: {
    title: "Tadeo Andrada — Artista visual",
    description:
      "Sitio del artista visual Tadeo Andrada. Obras, práctica y trayectoria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=General+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
