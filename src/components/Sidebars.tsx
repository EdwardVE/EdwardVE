"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Share,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Sidebars() {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://github.com/EdwardVE",
      icon: <Github size={22} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/edward-ronaldo-vasallo-eraso-83a7a6159/",
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter size={22} />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram size={22} />,
      label: "Instagram",
    },
    {
      href: "mailto:edwardvasallo@gmail.com",
      icon: <Mail size={22} />,
      label: "Email",
    },
  ];

  return (
    <>
      {/* ===== Desktop ===== */}
      {/* Barra izquierda (redes sociales) */}
      <motion.div
        className="fixed bottom-0 left-20 hidden lg:flex flex-col items-center gap-6 
        after:content-[''] after:w-[1px] after:h-24 after:bg-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {socialLinks.slice(0, 4).map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="text-gray-400 hover:text-purple-400"
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Barra derecha (email) */}
      <motion.div
        className="fixed bottom-0 right-20 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.a
          href="mailto:edwardvasallo@gmail.com"
          className="flex items-center text-gray-400 hover:text-purple-400 transition [writing-mode:vertical-rl]"
        >
          <span className="mb-2 ">edwardvasallo@gmail.com</span>
          <Mail size={22} />
        </motion.a>
      </motion.div>

      {/* ===== Mobile ===== */}
      <div className="lg:hidden fixed bottom-6 right-6">
        {/* Botón principal */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-purple-500 p-3 rounded-full shadow-lg text-white bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 z-50"
        >
          {open ? <X size={24} /> : <Share size={24} />}
        </button>

        {/* Menú flotante */}
        {open && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col gap-3 bg-gray-800 p-4 
            rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[0, 1, 4].map((index) => {
              const social = socialLinks[index];
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  {social.icon}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
}
