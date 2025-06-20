'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroAbout() {
  return (
    <section
      id="about-hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111] to-black relative overflow-hidden px-6 py-20 text-center"
    >
      {/* Floating Circles */}
      <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-lime-400/10 rounded-full animate-pulse blur-2xl" />
      <div className="absolute bottom-[25%] right-[15%] w-32 h-32 bg-lime-500/10 rounded-full animate-pulse blur-3xl" />
      <div className="absolute bottom-[15%] left-[25%] w-16 h-16 bg-lime-500/10 rounded-full animate-pulse blur-xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200 animate-gradient-x">
          Cloud & Network Security Enthusiast
        </h1>
        <p className="text-gray-300 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Bringing infrastructure to life with automation, security, and innovation. Welcome to my digital workspace.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById('explore-projects');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              history.replaceState(null, '', window.location.pathname + window.location.search);
            }
          }}
          className="mt-6 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-green-400/40 focus:outline-none focus:ring-4 focus:ring-lime-300 animate-bounce-smooth"
        >
          View My Projects
        </button>
        {/* Button Animation Style */}
        <style>
          {`
            @keyframes bounce-smooth {
              0%, 100% { transform: translateY(0);}
              50% { transform: translateY(-10px);}
            }
            .animate-bounce-smooth {
              animation: bounce-smooth 1.6s infinite;
            }
          `}
        </style>
      </motion.div>
    </section>
  );
}
// This component serves as the hero section for the About page, showcasing the user's expertise in cloud and network security.
// It includes a title, description, and a call-to-action button that links to the portfolio section.