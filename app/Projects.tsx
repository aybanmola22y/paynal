'use client';

import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: 'OJT Time Logging',
    description:
      'OJT Time Logging is a project designed to help track and manage the time spent during on-the-job training. It allows trainees to log their daily hours, tasks, and progress.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://ojt-log.vercel.app/',
  },
  {
    title: 'Book of Love',
    description:
      'Book of Love is an online diary that serves as a digital scrapbook of cherished memories.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://book-of-love.vercel.app/',
  },
  {
    title: 'Virtual Cake',
    description:
      'Virtual Cake is an interactive web app that lets a person experience a digital cake. They can add candles and blow them out using their device’s microphone or earphones.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://hbd-po.vercel.app/',
  },
  {
    title: 'OJT Time Logging',
    description:
      'OJT Time Logging is a project designed to help track and manage the time spent during on-the-job training. It allows trainees to log their daily hours, tasks, and progress.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://ojt-log.vercel.app/',
  },
  {
    title: 'Book of Love',
    description:
      'Book of Love is an online diary that serves as a digital scrapbook of cherished memories.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://book-of-love.vercel.app/',
  },
  {
    title: 'Virtual Cake',
    description:
      'Virtual Cake is an interactive web app that lets a person experience a digital cake. They can add candles and blow them out using their device’s microphone or earphones.',
    image: '/assets/image/niki.png',
    liveUrl: 'https://hbd-po.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-8 py-24 bg-white text-gray-800 flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
        Projects
      </h3>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-56">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-700">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
