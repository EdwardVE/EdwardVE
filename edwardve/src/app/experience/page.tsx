"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Desarrollador Full Stack",
      company: "Línea de Código",
      period: "May 2024 – Actualidad",
      tasks: [
        "Diseñé y optimicé APIs RESTful con Node.js y Express.",
        "Transformé diseños de Figma en interfaces responsivas con Angular.",
        "Integré soluciones blockchain con Algorand para trazabilidad segura.",
      ],
    },
    {
      role: "Help Desk (Nivel 1)",
      company: "Comercializadora GIVE",
      period: "Ene 2016 – Ene 2024",
      tasks: [
        "Soporte técnico y mantenimiento de equipos informáticos.",
        "Configuración de software y hardware.",
        "Atención al cliente y resolución de incidencias.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experiencia
      </motion.h1>
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <h2 className="text-2xl font-semibold">{job.role}</h2>
            <p className="text-purple-400">{job.company} — {job.period}</p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              {job.tasks.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
