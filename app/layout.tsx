import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Althéxa — Conseil & Formation HSE",
  description:
    "Conseil HSE, formations et accompagnement — Bagnères-de-Bigorre & à distance.",
  keywords: [
    "HSE",
    "sécurité",
    "prévention",
    "formation",
    "accompagnement",
    "Bagnères-de-Bigorre",
    "Althéxa",
    "Althexa",
    "conseil",
  ],
  authors: [{ name: "Axelle Chavasse" }],
  icons: { icon: "/favicon.png" }, // /public/favicon.png ou .ico
  openGraph: {
    title: "Althéxa — Conseil & Formation HSE",
    description:
      "Former, accompagner, faire grandir — expertise HSE à Bagnères-de-Bigorre & à distance.",
    url: "https://althexa.vercel.app",
    siteName: "Althéxa",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Althéxa" }],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://althexa.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="keywords"
          content="formation, sécurité, HSE, accompagnement, Bagnères-de-Bigorre, Althéxa, prévention, conseil"
        />
        <meta name="author" content="Axelle Chavasse" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="althexa.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>

      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* En-tête (Navbar client) */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-grow p-6">{children}</main>

        {/* Pied de page */}
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Althéxa — Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}