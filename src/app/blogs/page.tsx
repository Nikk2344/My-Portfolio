'use client';

import { useState, useEffect } from 'react';
import { FaBookOpen } from 'react-icons/fa';

export default function BlogsPage() {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [comments, setComments] = useState<Record<number, { name: string; comment: string }[]>>({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const blogs = [
    {
      title: 'Why OpenVPN Matters for Secure Networking',
      date: 'May 2025',
      summary: 'Explore the critical role of OpenVPN in modern network security, including tunneling, encryption, and user access control.',
      details: 'OpenVPN plays a crucial role in securing remote access networks. It uses SSL/TLS encryption and client-server authentication to protect communications. This blog dives into real-world uses in enterprise and freelance cybersecurity setups.',
      tags: ['OpenVPN', 'Networking', 'Cybersecurity']
    },
    {
      title: 'From Flask to FastAPI: A Journey in Python APIs',
      date: 'May 2025',
      summary: 'Comparing Flask and FastAPI for building secure and scalable backend APIs with real-world use cases and benchmarks.',
      details: 'Flask is minimalist and flexible, while FastAPI adds speed with async features and auto docs. Learn when to use which, and how I migrated a full Flask API to FastAPI in just 3 days.',
      tags: ['Python', 'Flask', 'FastAPI']
    },
    {
      title: 'Building a College ERP: Lessons from the Ground Up',
      date: 'March 2024',
      summary: 'How I built a student-centric ERP system from scratch using MERN stack and solved real-world problems in academic settings.',
      details: 'This ERP portal features dashboards, dynamic roles, and full admin control. From MongoDB schemas to React form validation, I explain how each part was designed for scale.',
      tags: ['React', 'MongoDB', 'MERN', 'Projects']
    },
    {
      title: 'Docker for Beginners: Containerizing Your First App',
      date: 'February 2024',
      summary: 'A step-by-step guide to containerizing applications with Docker, including best practices and common pitfalls.',
      details: 'Docker simplifies deployment by packaging apps with their dependencies. This blog covers creating Dockerfiles, managing images, and deploying containers in production.',
      tags: ['Docker', 'Containers', 'DevOps']
    },
    {
        title: 'Virtual Machines vs. Containers: What You Need to Know',
        date: 'April 2025',
        summary: 'A comprehensive comparison of virtual machines and containers, exploring their use cases, benefits, and limitations in modern software development.',
        details: 'This blog post delves into the key differences between virtual machines and containers, including architecture, performance, and resource utilization. Learn when to use each technology for optimal results.',
        tags: ['Virtualization', 'Containers', 'DevOps']
    }

  ];

  const handleComment = (blogIndex: number, name: string, comment: string) => {
    setComments(prev => ({
      ...prev,
      [blogIndex]: [...(prev[blogIndex] || []), { name, comment }]
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-lime-400 text-center px-6">
        <div className="space-y-6">
          <div className="text-4xl animate-bounce">✍️</div>
          <p className="text-xl font-semibold">“Write code. Write stories. Repeat.”</p>
          <p className="text-sm text-gray-400">Loading blog thoughts...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-green-200 px-6 py-16">
      <h1 className="text-4xl font-bold text-lime-400 text-center mb-8 flex items-center justify-center gap-2">
        <FaBookOpen /> My Blog Posts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Blog Articles */}
        <section className="lg:col-span-2 space-y-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-xl border border-lime-600 shadow-lg space-y-4 transition-all duration-300 hover:scale-[1.025] hover:border-lime-400 hover:shadow-2xl hover:bg-[#181f13]"
            >
              <h2 className="text-2xl font-semibold text-lime-300">{blog.title}</h2>
              <p className="text-sm text-green-400">🗓 {blog.date}</p>
              <p className="text-white">{blog.summary}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="bg-lime-800/80 text-black text-xs px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="mt-2 text-sm text-lime-700 hover:underline"
              >
                {openIndex === index ? 'Hide Details ▲' : 'Read More ▼'}
              </button>

              {openIndex === index && (
                <div className="mt-4 space-y-6">
                  <p className="text-green-300 text-sm leading-relaxed">{blog.details}</p>

                  {/* Comment Section */}
                  <div className="border-t border-lime-700 pt-4">
                    <h4 className="text-lime-400 text-lg mb-2">💬 Comments</h4>

                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
                        const comment = (e.currentTarget.elements.namedItem('comment') as HTMLInputElement).value;
                        handleComment(index, name, comment);
                        e.currentTarget.reset();
                      }}
                      className="space-y-2"
                    >
                      <input
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded text-sm text-white"
                      />
                      <textarea
                        name="comment"
                        placeholder="Write your thoughts..."
                        required
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded text-sm text-white"
                      ></textarea>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-lime-600 text-black rounded hover:bg-lime-500 transition-all duration-200 active:scale-95 focus:ring-2 focus:ring-lime-400 focus:outline-none animate-[pulse_1.5s_infinite]"
                      >
                        Post Comment
                      </button>
                    </form>

                    <div className="mt-4 space-y-2 text-sm">
                      {(comments[index] || []).map((c, i) => (
                        <div key={i} className="bg-[#222] p-3 rounded border border-lime-700">
                          <strong className="text-lime-300">{c.name}:</strong>
                          <p className="text-green-300 mt-1">{c.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="bg-[#0d0d0d] border border-lime-700 p-6 rounded-xl shadow-inner text-green-300 text-sm space-y-4">
            <h3 className="text-lg font-semibold text-lime-400">🚀 My Cloud Learnings</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>☁️ AWS: EC2, S3, IAM, Route 53</li>
              <li>📦 Docker & Containers</li>
              <li>🔒 VPN-based Access Control (OpenVPN)</li>
              <li>🧠 IAM Roles & Policies</li>
              <li>🖥️ GCP Compute Engine Basics</li>
              <li>🔧 Azure DevOps Pipelines</li>
            </ul>
            <div className="pt-2 border-t border-lime-700">
              <p className="text-green-400 font-medium">Currently Exploring:</p>
              <ul className="list-disc list-inside mt-1">
                <li>✅ Kubernetes Basics</li>
                <li>✅ AWS VPC & Security Groups</li>
                <li>✅ Container Orchestration</li>
                <li>✅ Virtualization</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 0 0 #a3e63566; }
            50% { box-shadow: 0 0 0 8px #a3e63522; }
          }
        `}
      </style>
    </main>
  );
}
