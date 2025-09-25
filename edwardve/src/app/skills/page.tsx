"use client";

import { motion } from "framer-motion";

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
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">{category}</h2>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <li
                  key={j}
                  className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:bg-purple-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
