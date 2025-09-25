"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl leading-relaxed text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Soy{" "}
        <span className="text-purple-400 font-semibold">Edward Vasallo</span>,{" "}
        <span className="font-semibold">Full Stack Web Developer</span> con{" "}
        <span className="text-purple-400 font-semibold">2 años de experiencia</span>{" "}
        en desarrollo de aplicaciones web. He trabajado tanto en{" "}
        <span className="font-semibold">frontend</span> como en{" "}
        <span className="font-semibold">backend</span>, construyendo soluciones que
        combinan buen diseño, escalabilidad y seguridad.
        <br />
        <br />
        Mi stack incluye{" "}
        <span className="font-semibold">
          Angular, React, Node.js, Express, PostgreSQL, MongoDB y Docker
        </span>
        , además de experiencia en{" "}
        <span className="font-semibold">Blockchain con Algorand</span>. Esta
        versatilidad me permite adaptarme a distintos tipos de proyectos, desde{" "}
        <span className="font-semibold">e-commerce con pagos integrados</span> hasta{" "}
        <span className="font-semibold">APIs robustas y soluciones basadas en
        blockchain</span>.
        <br />
        <br />
        Me caracterizo por mi{" "}
        <span className="font-semibold">autonomía, comunicación efectiva y capacidad
        de trabajo en equipo</span>, cualidades que me han permitido aportar valor
        en entornos ágiles y colaborar directamente con clientes y equipos
        multidisciplinarios.
      </motion.p>
    </main>
  );
}
