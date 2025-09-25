"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Construyo aplicaciones web escalables, seguras y con gran experiencia
          de usuario. Apasionado por la tecnología, blockchain y el desarrollo
          ágil.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="/docs/Edward_Vasallo_CV.pdf"
            target="_blank"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg"
          >
            Descargar CV
          </a>
          <Link
            href="/projects"
            className="px-6 py-3 border border-purple-600 hover:bg-purple-600 rounded-lg"
          >
            Ver Proyectos
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
