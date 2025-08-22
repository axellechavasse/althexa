import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Altéxa — Conseil & Formation HSE",
  description:
    "Conseil HSE, formations et accompagnement — Bagnères-de-Bigorre & à distance.",
  keywords: [
    "HSE",
    "sécurité",
    "prévention",
    "formation",
    "accompagnement",
    "Bagnères-de-Bigorre",
    "Altéxa",
    "conseil",
  ],
  authors: [{ name: "Axelle Chavasse" }],
  icons: { icon: "/favicon.png" }, // mets /favicon.ico ou /favicon.png dans /public
  openGraph: {
    title: "Altéxa — Conseil & Formation HSE",
    description:
      "Former, accompagner, faire grandir — expertise HSE à Bagnères-de-Bigorre & à distance.",
    url: "https://altexa.vercel.app",
    siteName: "Altéxa",
    images: [{ url: "/og.png", width: 1200, height: 630 }], // optionnel, mets /public/og.png si tu en as un
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* Balises <head> supplémentaires (facultatif, en plus des metadata) */}
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="keywords"
          content="formation, sécurité, HSE, accompagnement, Bagnères-de-Bigorre, Altéxa, prévention, conseil"
        />
        <meta name="author" content="Axelle Chavasse" />
      </head>

      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* En-tête (Navbar client) */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-grow p-6">{children}</main>

        {/* Pied de page */}
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Altéxa — Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}