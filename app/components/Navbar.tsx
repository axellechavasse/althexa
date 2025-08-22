"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center ml-20">
        <img
          src="/logo.png"
          alt="Logo Altéxa"
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* Menu de navigation */}
      <nav className="space-x-6 mr-4">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-teal-500" : "text-gray-700"
          } hover:text-teal-500`}
        >
          Accueil
        </Link>
        <Link
          href="/a-propos"
          className={`${
            pathname.startsWith("/a-propos") ? "text-teal-500" : "text-gray-700"
          } hover:text-teal-500`}
        >
          À propos
        </Link>
        <Link
          href="/valeurs"
          className={`${
            pathname.startsWith("/valeurs") ? "text-teal-500" : "text-gray-700"
          } hover:text-teal-500`}
        >
          Valeurs
        </Link>
        <Link
          href="/approche"
          className={`${
            pathname.startsWith("/approche") ? "text-teal-500" : "text-gray-700"
          } hover:text-teal-500`}
        >
          Approche
        </Link>
        <Link
          href="/plaquette.pdf"
          className="text-gray-700 hover:text-teal-500"
          target="_blank"
        >
          Plaquette
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname.startsWith("/contact") ? "text-teal-500" : "text-gray-700"
          } hover:text-teal-500`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}