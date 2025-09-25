"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Mascotaland",
      desc: "Plataforma de cuidado de mascotas con reservas y confirmaciones por correo.",
      stack: "React, Tailwind, Node.js, Express, MongoDB",
      repo: "https://github.com/No-Country/c17-09-m-node-react",
      demo: "https://mascotaland-flax.vercel.app/inicio",
    },
    {
      name: "DigiShoes E-commerce",
      desc: "Tienda online con login Google, pagos MercadoPago y panel admin.",
      stack: "React, Redux, Node.js, Express, PostgreSQL",
      repo: "https://github.com/Luis901810/eCommerce_frontend",
      demo: "https://storecalzado.vercel.app/",
    },
    {
      name: "World Explorer",
      desc: "App de países con filtros, actividades y barra de búsqueda.",
      stack: "React, Redux, Node.js, Express, PostgreSQL",
      repo: "https://github.com/EdwardVE/PI_Countries",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.name}</h2>
            <p className="text-gray-300 mb-3">{proj.desc}</p>
            <ul className="flex flex-wrap gap-3 mb-4">
              {proj.stack.split(", ").map((skill, j) => (
                <li
                  key={j}
                  className="px-3 py-1 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-auto">
              <motion.a
                href={proj.repo}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <FaGithub /> Repo
              </motion.a>
              {proj.demo && (
                <motion.a
                  href={proj.demo}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 border border-purple-600 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  <FaExternalLinkAlt /> Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
