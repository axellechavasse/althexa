import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Altéxa — Conseil & Formation HSE",
  description:
    "Conseil HSE, formations et accompagnement — Bagnères-de-Bigorre & à distance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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