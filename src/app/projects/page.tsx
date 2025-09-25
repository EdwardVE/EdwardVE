"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Proyectos
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.name}</h2>
            <p className="text-gray-300 mb-2">{proj.desc}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {proj.stack.split(", ").map((skill, j) => (
              <li
                key={j}
                className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:bg-purple-700"
              >
                {skill}
              </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link
                href={proj.repo}
                target="_blank"
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Repo
              </Link>
              {proj.demo && (
                <Link
                  href={proj.demo}
                  target="_blank"
                  className="px-4 py-2 border border-purple-600 rounded-lg hover:bg-purple-600"
                >
                  Demo
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
