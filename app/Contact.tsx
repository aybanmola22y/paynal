'use client';

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10 text-indigo-400"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message submitted!');
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="px-4 py-2 rounded bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          <Mail className="inline-block mr-1" size={14} />
          You can also reach me at: <span className="text-indigo-400">molatojohnaivanneofficial@gmail.com</span>
        </motion.div>
      </div>
    </section>
  );
}
