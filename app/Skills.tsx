'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Git & GitHub',
  'Responsive Design',
  'Framer Motion',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-32 pt-20 pb-28 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-indigo-400"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 bg-gray-800 rounded-xl p-4 hover:bg-indigo-500 transition duration-300"
            >
              <CheckCircle className="text-indigo-400 w-5 h-5" />
              <span className="text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
