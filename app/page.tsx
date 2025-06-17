'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link'; // ✅ Added import

//
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* ✅ Replaced <a> with <Link> */}
          <Link href="/" className="text-white font-bold text-xl">
            TheAivanne<span className="text-indigo-400">Effect</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-indigo-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-indigo-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* WELCOME SECTION */}
      <main
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4"
      >
        <div className="text-center space-y-6 mt-24">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            <Typewriter
              options={{
                strings: ['Welcome to My Portfolio', 'Crafted with Passion', 'Explore My World'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Frontend Developer | UI/UX Enthusiast | Lifelong Learner
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-10"
          >
            <ChevronDown className="mx-auto w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </main>

      {/* Render Different File Sections */}
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
