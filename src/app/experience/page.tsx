"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Desarrollador Full Stack",
      company: "Línea de Código",
      period: "May 2024 – Actualidad",
      description:
        "Encargado del desarrollo e implementación de soluciones web para proyectos empresariales, con enfoque en eficiencia, escalabilidad y experiencia de usuario. Trabajo bajo metodologías ágiles, colaborando activamente con equipo y clientes.",
      tasks: [
        "Diseñé y optimicé APIs RESTful con Node.js y Express, mejorando tiempos de respuesta y facilitando la integración con frontend Angular.",
        "Transformé diseños de Figma en interfaces responsivas y accesibles usando HTML, CSS y Angular Material.",
        "Propuse e implementé mejoras técnicas que redujeron la deuda técnica y aumentaron la mantenibilidad del código.",
        "Interactué directamente con clientes para recoger requisitos, presentar soluciones técnicas y asegurar entregas alineadas a sus necesidades.",
        "Integré soluciones blockchain usando Algorand para asegurar trazabilidad, incluyendo creación de cuentas, verificación de saldos y envío de transacciones seguras.",
      ],
      tech: [
        "Angular",
        "Angular Material",
        "Node.js",
        "Express",
        "HTML",
        "CSS",
        "MongoDB",
        "Docker",
        "Algorand Blockchain",
        "JavaScript",
        "TypeScript",
        "Python",
        "Go",
        "React",
        "Redux",
        "Material UI",
      ],
    },
    {
      role: "Help Desk (Nivel 1)",
      company: "Comercializadora GIVE",
      period: "Ene 2016 – Ene 2024",
      description:
        "Responsable del soporte técnico y mantenimiento de equipos informáticos, asegurando el correcto funcionamiento del hardware y software. Atención directa a usuarios y resolución de incidencias.",
      tasks: [
        "Brindé asistencia y atención al cliente de manera efectiva.",
        "Realicé mantenimiento, reparación y limpieza de equipos informáticos.",
        "Ejecuté mantenimientos preventivos en equipos de cómputo.",
        "Configuré software y hardware en equipos informáticos.",
      ],
      tech: ["Windows", "Linux", "Redes LAN", "Office", "Herramientas de soporte remoto"],
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
            <p className="text-purple-400">
              {job.company} — {job.period}
            </p>
            <p className="text-gray-300 mt-3">{job.description}</p>

            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              {job.tasks.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>

            {/* Tecnologías */}
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tech, k) => (
                <span
                  key={k}
                  className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:bg-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
