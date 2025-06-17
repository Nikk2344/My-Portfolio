'use client';

import { FaGithub } from 'react-icons/fa';
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiOpenvpn,
  SiCisco,
  SiSqlite,
  SiDocker,
} from 'react-icons/si';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'College ERP System',
      description:
        'Developed a full-stack ERP portal for student and faculty login, attendance, result management, and admin controls. It streamlines student record handling and access to academic services.',
      tech: [
        <SiReact key="react" color="#61DAFB" />,
        <SiNodedotjs key="node" color="#339933" />,
        <SiMongodb key="mongo" color="#47A248" />
      ],
      github: 'https://github.com/Nikk2344/college-erp',
    },
    {
      title: 'OpenVPN Access + Flask API Integration',
      description:
        'Built a secure system that allows users to update data only when connected via VPN. Integrated Flask REST API with IP filtering, SQLite database operations, and OpenVPN Access Server syncing.',
      tech: [
        <SiPython key="python" color="#3776AB" />,
        <SiFlask key="flask"/>,
        <SiOpenvpn key="vpn" color="#EA7E20" />,
        <SiSqlite key="sqlite" color="#003B57" />,
        <SiDocker key="docker" color="#2496ED" />
      ],
      github: 'https://github.com/Nikk2344/openvpn-flask-sync',
    },
    {
      title: 'LAN/VLAN Network Simulation',
      description:
        'Simulated a complex network using Cisco Packet Tracer involving multiple VLANs, inter-VLAN routing, and DHCP relay. Implemented static routing and switch configurations for a campus-like infrastructure.',
      tech: [
        <SiCisco key="cisco" color="#1BA0D7" />
      ],
      github: 'https://github.com/Nikk2344/vlan-sim',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-5xl mx-auto space-y-16">
      <h1 className="text-4xl font-bold text-lime-400 text-center">🛠️ My Projects</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#0a0a0a] p-6 rounded-xl border border-lime-700 shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-semibold text-lime-300 flex items-center justify-between">
            {project.title}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-400 text-xl"
            >
              <FaGithub />
            </a>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">{project.description}</p>

          <div className="flex items-center gap-4 text-2xl mt-2">
            {project.tech.map((icon, i) => (
              <div key={i} className="hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
  
}
