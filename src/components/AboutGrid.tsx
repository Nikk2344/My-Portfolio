'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import FeedbackForm from './FeedbackForm';

export default function AboutGrid() {
  const [text, setText] = useState('');
  const sectionRef = useRef<HTMLElement | null>(null);
  const fullText = "I was born in a small village Dharikpur of the District Jaunpur. My early education began amidst monsoons, and after High School, I later moved to Kota for my intermediate studies. College life at Axis Colleges Kanpur (2021–2024) was a turning point — it taught me not just code, but how to think like an engineer.\n\nCurrently, I'm pursuing my Master's while working . My goal? To go beyond what I know, explore cloud-native security, and engineer digital trust.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust this number to change speed
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#0f0f0f] text-gray-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">About Me</h2>
          <p className="text-lg leading-8 whitespace-pre-line">
            {text}<span className="animate-pulse text-lime-400">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[400px] bg-gradient-to-br from-lime-500/10 to-lime-800/5 rounded-3xl border border-lime-500/30 flex items-center justify-center text-7xl text-lime-400 shadow-xl backdrop-blur"
        >
          👨‍💻
        </motion.div>
      </div>
    </section>
  );
}