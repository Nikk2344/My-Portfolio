// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'College ERP System',
    image: '/projects/erp.jpg',
    description: 'Developed a college-level ERP platform with student-teacher dashboards, attendance, and admin management using React and Firebase.',
  },
  {
    title: 'VPN User Manager',
    image: '/projects/vpn.jpg',
    description: 'Built an OpenVPN user management system using Flask and SQLite, integrated with REST APIs secured through VPN tunneling.',
  },
  {
    title: 'Spotify Clone',
    image: '/projects/spotify.jpg',
    description: 'Created a functional Spotify UI clone with Tailwind CSS, React hooks, and dynamic playlist rendering.',
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-xl shadow-lg p-6 border border-green-800 text-left"
            >
              <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-lime-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This component uses Framer Motion for animations and Next.js Image component for optimized images.