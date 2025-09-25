"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Soy <span className="text-purple-400 font-semibold">Edward Vasallo</span>, 
        Full Stack Web Developer y estudiante de Ingeniería Mecatrónica. 
        Me especializo en el desarrollo de aplicaciones web escalables y seguras 
        usando tecnologías como Angular, React, Node.js, Express y Blockchain (Algorand).
        <br />
        Me caracterizo por el aprendizaje continuo, la autonomía, la comunicación efectiva 
        y el trabajo en equipo.
      </motion.p>
    </main>
  );
}
