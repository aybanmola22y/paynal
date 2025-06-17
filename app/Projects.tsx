'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A sleek personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Task Manager App',
    description: 'A to-do app with user authentication and real-time updates using Firebase.',
    tech: ['React', 'Firebase', 'Framer Motion'],
    link: 'https://your-task-app-link.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting dashboard using OpenWeather API and responsive charts.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://your-weather-app.com',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-indigo-400"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-indigo-500 transition duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-white"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="bg-indigo-700/30 text-indigo-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
