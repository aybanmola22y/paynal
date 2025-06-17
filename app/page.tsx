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
import Footer from './Footer';




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
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    {/* Animated Logo */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link href="/" className="text-white font-extrabold text-2xl flex items-center gap-1">
        <span className="text-indigo-400 animate-pulse">⚡</span>
        <span>
          TheAivanne<span className="text-indigo-400">Effect</span>
        </span>
      </Link>
    </motion.div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-6">
  {navLinks.map((link, index) => (
    <motion.a
      key={link.name}
      href={link.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ scale: 1.1, color: '#818cf8' }} // tailwind's indigo-400
      whileTap={{ scale: 0.95 }}
      className="relative text-white transition duration-300 cursor-pointer font-medium"
    >
      {link.name}
      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 bg-indigo-400"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  ))}
</nav>

    {/* Hamburger Button */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center group"
      >
        <span
          className={`w-6 h-0.5 bg-white mb-1 transform transition duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <motion.div
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    variants={{
      open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
      closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    }}
    className="overflow-hidden md:hidden px-4 space-y-2"
  >
    {navLinks.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        className="block text-white hover:text-indigo-400 transition duration-300 py-1"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </motion.a>
    ))}
  </motion.div>
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
            Aspiring Frontend Developer | QA Tester
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
      <Footer />
    </>
  );
}
