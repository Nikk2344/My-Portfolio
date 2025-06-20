// src/components/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <section
      className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Homepage-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Plasma background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-black/40 backdrop-blur-md" />
      </div>

      {/* Custom glowing cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-purple-500 opacity-80 mix-blend-screen blur-2xl transition-transform -translate-x-1/2 -translate-y-1/2"
      />

      
      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <h1 
          className={`text-4xl md:text-6xl font-bold leading-tight tracking-wide cursor-pointer transition-all duration-300 ${
            isGlitching ? 'glitch-text' : ''
          }`}
          data-text="NIKHIL UPADHYAY"
          onMouseEnter={() => setIsGlitching(true)}
          onMouseLeave={() => setIsGlitching(false)}
        >
          NIKHIL UPADHYAY
        </h1>
        <h2 className="text-xl md:text-2xl text-green-400">
          Cloud Enthusiast & Network Security Enthusiast
        </h2>
        <p className="text-gray-300 text-md max-w-xl leading-relaxed mx-auto md:mx-0">
          I&apos;m passionate about Network Security &amp; Cloud. <br />
          Network Security / Docker / VPN Systems / Web Dev / Python / AWS / DevOps
        </p>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center z-10"
      >
      </motion.div>
    </section>
  );
}