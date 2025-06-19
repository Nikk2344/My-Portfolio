// src/components/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaLinux, FaPython, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

export default function TechStack() {
  return (
    <section className="bg-black py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center text-white text-4xl">
          <motion.div whileHover={{ scale: 1.2 }}><FaReact title="React" className="text-cyan-400" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><SiTailwindcss title="Tailwind CSS" className="text-sky-400" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><FaDocker title="Docker" className="text-blue-400" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><FaAws title="AWS" className="text-orange-400" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><FaPython title="Python" className="text-yellow-300" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><SiMysql title="MySQL" className="text-blue-300" /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }}><FaLinux title="Linux" className="text-gray-400" /></motion.div>
        </div>
      </div>
    </section>
  );
}
