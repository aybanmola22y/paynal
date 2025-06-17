'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section
  id="about"
  className="scroll-mt-32 pt-32 min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-20"
>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-indigo-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Hello! I'm <span className="text-white font-semibold">Ayban</span>, a passionate frontend developer
          who enjoys building responsive, interactive websites using modern tools like{' '}
          <span className="text-white font-semibold">Next.js</span>,{' '}
          <span className="text-white font-semibold">TypeScript</span>, and{' '}
          <span className="text-white font-semibold">Tailwind CSS</span>.
          <br />
          <br />
          I love transforming ideas into beautiful, performant web interfaces and continuously learning along the way.
        </motion.p>
      </div>
    </section>
  );
}
