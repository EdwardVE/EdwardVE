"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillsData = [
  { category: "Lenguajes", items: ["JavaScript", "TypeScript", "Python", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Angular", "Redux", "Tailwind", "Material UI", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Golang(Gin)"] },
  { category: "Bases de Datos", items: ["PostgreSQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Trello", "Figma", "Slack"] },
  { category: "Blockchain", items: ["Algorand SDK"] },
  { category: "Otros", items: ["RESTful APIs", "Agile Methodologies"] },
];

export default function Skills() {
  const skills = {
    Lenguajes: ["JavaScript", "TypeScript", "Python", "Go"],
    Frontend: ["React", "Next.js", "Angular", "Redux", "Tailwind", "Material UI", "HTML", "CSS"],
    Backend: ["Node.js", "Express", "Golang(Gin)"],
    BasesDeDatos: ["PostgreSQL", "MongoDB"],
    DevOps_Tools: ["Docker", "Git", "GitHub", "Trello", "Figma", "Slack"],
    Blockchain: ["Algorand SDK"],
    Otros: ["RESTful APIs", "Agile Methodologies"],
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center md:text-left z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid gap-8 md:grid-cols-2 z-10 relative"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {skillsData.map((skillGroup, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              {skillGroup.category}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, j) => (
                <motion.li
                  key={j}
                  className="px-4 py-1 bg-purple-600 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-purple-700"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
