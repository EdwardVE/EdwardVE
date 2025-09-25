"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/experience", label: "Experiencia" },
    { href: "/projects", label: "Proyectos" },
    { href: "/skills", label: "Skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-purple-400">
          Edward Vasallo
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-purple-400 transition ${
                pathname === link.href ? "text-purple-500 font-semibold" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
