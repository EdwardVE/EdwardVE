"use client";

import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebars() {
  return (
    <>
      {/* Barra izquierda (redes sociales) */}
      <motion.div
        className="fixed bottom-0 left-20 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-500"
        initial={{ opacity: 0, y: 50 }}   // empieza abajo
        animate={{ opacity: 1, y: 0 }}    // sube y aparece
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a
          href="https://github.com/EdwardVE"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/edward-ronaldo-vasallo-eraso-83a7a6159/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <Twitter size={22} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <Instagram size={22} />
        </a>
      </motion.div>

      {/* Barra derecha (email) */}
      <motion.div
        className="fixed bottom-0 right-20 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-500"
        initial={{ opacity: 0, y: 50 }}   // empieza abajo
        animate={{ opacity: 1, y: 0 }}    // sube y aparece
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          href="mailto:edwardvasallo@gmail.com"
          className="flex flex-row items-center text-gray-400 hover:text-purple-400 transition [writing-mode:vertical-rl] "
        >
          <span className="mb-2">edwardvasallo@gmail.com</span>
          <Mail size={22} />
        </a>
      </motion.div>
    </>
  );
}
