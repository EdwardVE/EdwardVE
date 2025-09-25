"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import GlobalCursorLight from "./GlobalCursorLight";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/experience", label: "Experiencia" },
    { href: "/projects", label: "Proyectos" },
    { href: "/skills", label: "Skills" },
  ];

  return (
    
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <GlobalCursorLight/>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-purple-400">
          Edward Vasallo
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-purple-400 transition ${
                pathname === link.href
                  ? "text-purple-500 font-semibold"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-gray-300 hover:text-purple-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-purple-400 transition ${
                pathname === link.href
                  ? "text-purple-500 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
