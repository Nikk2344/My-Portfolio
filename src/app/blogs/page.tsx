'use client';

import { useState, useEffect } from 'react';
import { FaBookOpen, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import FeedbackForm from '../../components/FeedbackForm';



export default function BlogsPage() {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cloudSectionOpen, setCloudSectionOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const blogs = [
    {
      title: 'Journey into the Cloud',
      date: 'June 2025',
      summary: 'My exploration of AWS, Azure, and GCP. Starting from basic cloud concepts to advanced architectures, this blog documents my journey through cloud certifications, hands-on projects, and real-world implementations. Learn about scalable solutions, cost optimization, and cloud security best practices.',
      details: 'Cloud computing is vast. I started with AWS Cloud Practitioner and explored IAM, EC2, and S3. Next is Kubernetes and multi-cloud strategies.',
      tags: ['AWS', 'Azure', 'GCP', 'Cloud', 'Kubernetes'],
    },
    {
      title: 'Networking for Developers',
      date: 'May 2025',
      summary: 'Why knowing networks makes you a better developer. Dive deep into essential networking concepts that every developer should understand. From basic TCP/IP protocols to advanced security implementations, discover how networking knowledge can improve your application architecture and security posture.',
      details: 'Understanding subnets, firewalls, VPNs, and proxies helped me build more secure apps. I even deployed my VPN tools using OpenVPN.',
      tags: ['Networking', 'VPN', 'Security', 'TCP/IP'],
    },
    {
      title: 'DevOps Journey: From Zero to Pipeline',
      date: 'April 2025',
      summary: 'Exploring the world of DevOps and continuous integration. Learn about my experiences setting up CI/CD pipelines, implementing infrastructure as code, and automating deployment processes. Includes practical examples with GitHub Actions, Docker, and various cloud platforms.',
      details: 'Started with basic Git workflows, progressed to automated testing and deployment. Implemented Docker containers and GitHub Actions for seamless integration.',
      tags: ['DevOps', 'CI/CD', 'Docker', 'GitHub Actions'],
    },
    {
      title: 'Security First Development',
      date: 'March 2025',
      summary: 'A comprehensive guide to implementing security best practices in modern web applications. Covering everything from basic OWASP guidelines to advanced threat mitigation strategies. Learn about common vulnerabilities, secure coding practices, and tools for security testing.',
      details: 'Explored various security frameworks, implemented authentication systems, and learned about common attack vectors and their prevention.',
      tags: ['Security', 'OWASP', 'Web', 'Authentication'],
    },
    {
      title: 'Enterprise Routing & Switching Deep Dive',
      date: 'June 2025',
      summary: 'Exploring enterprise networking concepts from the ground up. Covering OSPF, BGP, VLANs, trunking, and advanced switching protocols. Learn about network design patterns, troubleshooting methodologies, and real-world implementations using Cisco and other vendor solutions. Including practical labs and configuration examples.',
      details: 'Deep dive into routing protocols, switch configurations, and network optimization techniques. Includes hands-on labs with Packet Tracer and real hardware.',
    },
    {
      title: 'Linux System Administration & Automation',
      date: 'May 2025',
      summary: 'Mastering Linux through shell scripting and system administration. From basic shell commands to advanced bash scripting for automation. Topics include process management, system monitoring, cron jobs, and server hardening. Features real-world scenarios and practical automation solutions for daily SysAdmin tasks.',
      details: 'Explored shell scripting, system monitoring tools, and automated backup solutions. Implemented custom monitoring scripts and security hardening measures.',
    },
    {
      title: 'Python for Network Automation',
      date: 'April 2025',
      summary: 'Leveraging Python to automate network operations. Learn how to use libraries like Netmiko, Paramiko, and NAPALM for network device management. Build tools for configuration management, automated testing, and network monitoring. Includes practical examples and complete automation frameworks.',
      details: 'Created Python scripts for bulk configuration, automated testing, and network monitoring. Integrated with various APIs and network management systems.',
    },
    {
      title: 'Virtualization Technologies & Implementation',
      date: 'March 2025',
      summary: 'Comprehensive guide to modern virtualization technologies. Covering VMware, KVM, and container solutions. Learn about virtual networking, storage solutions, high availability, and migration strategies. Includes performance optimization techniques and real-world deployment scenarios.',
      details: 'Implemented various virtualization solutions, managed virtual infrastructures, and optimized resource allocation. Explored hybrid cloud integrations.',
    }
  ];

  const cloudLearnings = {
    aws: {
      title: 'Amazon Web Services (AWS)',
      icon: '☁️',
      items: [
        { service: 'EC2', description: 'Elastic Compute Cloud - Virtual servers in the cloud', status: 'mastered' },
        { service: 'S3', description: 'Simple Storage Service - Object storage with 99.999999999% durability', status: 'mastered' },
        { service: 'IAM', description: 'Identity & Access Management - Secure access control', status: 'mastered' },
        { service: 'Route 53', description: 'DNS web service - Domain registration and routing', status: 'mastered' },
        { service: 'VPC', description: 'Virtual Private Cloud - Isolated cloud resources', status: 'learning' },
        { service: 'Lambda', description: 'Serverless compute service - Run code without servers', status: 'learning' },
        { service: 'RDS', description: 'Relational Database Service - Managed database service', status: 'exploring' }
      ]
    },
    containerization: {
      title: 'Containerization & Orchestration',
      icon: '📦',
      items: [
        { service: 'Docker', description: 'Container platform - Package applications with dependencies', status: 'In progress' },
        { service: 'Kubernetes', description: 'Container orchestration - Automate deployment and scaling', status: 'learning' },
        { service: 'Docker Compose', description: 'Multi-container applications - Define and run complex apps', status: 'mastered' },
        { service: 'Helm', description: 'Kubernetes package manager - Streamline K8s deployments', status: 'exploring' }
      ]
    },
    security: {
      title: 'Security & Access Control',
      icon: '🔒',
      items: [
        { service: 'OpenVPN', description: 'VPN solution - Secure remote access implementation', status: 'In progress' },
        { service: 'Security Groups', description: 'Virtual firewalls - Control inbound/outbound traffic', status: 'learning' },
        { service: 'SSL/TLS', description: 'Transport security - Encrypt data in transit', status: 'mastered' },
        { service: 'OAuth 2.0', description: 'Authorization framework - Secure API access', status: 'learning' }
      ]
    },
    gcp: {
      title: 'Google Cloud Platform (GCP)',
      icon: '🧠',
      items: [
        { service: 'Compute Engine', description: 'Virtual machines - Scalable computing infrastructure', status: 'learning' },
        { service: 'Cloud Storage', description: 'Object storage - Unified storage for developers', status: 'exploring' },
        { service: 'Cloud Functions', description: 'Serverless functions - Event-driven compute platform', status: 'exploring' }
      ]
    },
    azure: {
      title: 'Microsoft Azure',
      icon: '🔧',
      items: [
        { service: 'DevOps Pipelines', description: 'CI/CD automation - Build, test, and deploy code', status: 'learning' },
        { service: 'Virtual Machines', description: 'Compute infrastructure - Windows and Linux VMs', status: 'exploring' },
        { service: 'App Services', description: 'Web app hosting - Platform-as-a-Service offering', status: 'exploring' }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'mastered': return 'text-green-400';
      case 'learning': return 'text-yellow-400';
      case 'exploring': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'mastered': return '✅';
      case 'learning': return '🔄';
      case 'exploring': return '🔍';
      default: return '📋';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-lime-400 text-center px-6">
        <div className="space-y-6">
          <div className="text-4xl animate-bounce">✍️</div>
          <p className="text-xl font-semibold">"Write code. Write stories. Repeat."</p>
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
              <h2 className="text-2xl font-semibold text-lime-400">{blog.title}</h2>
              <p className="text-sm text-white">🗓 {blog.date}</p>
              <p className="text-white">{blog.summary}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tags && blog.tags.map((tag, i) => (
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

                  {/* Feedback form for each blog */}
                  <div className="border-t border-lime-700 pt-4">
                    <h4 className="text-white text-lg mb-2">💬 Leave Your Feedback</h4>
                    <FeedbackForm page={`Blog - ${blog.title}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Enhanced Sidebar */}
        <aside className="space-y-4">
          <div className="bg-[#0d0d0d] border border-lime-700 rounded-xl shadow-inner text-green-300 text-sm">
            {/* Header */}
            <div 
              className="p-6 cursor-pointer flex items-center justify-between hover:bg-[#151515] transition-colors rounded-t-xl"
              onClick={() => setCloudSectionOpen(!cloudSectionOpen)}
            >
              <h3 className="text-lg font-semibold text-lime-400 flex items-center gap-2">
                🚀 My Cloud Learnings
              </h3>
              {cloudSectionOpen ? <FaChevronUp className="text-lime-400" /> : <FaChevronDown className="text-lime-400" />}
            </div>

            {/* Expandable Content */}
            {cloudSectionOpen && (
              <div className="px-6 pb-6 space-y-6">
                {Object.entries(cloudLearnings).map(([key, category]) => (
                  <div key={key} className="space-y-3">
                    <h4 className="text-lime-300 font-medium flex items-center gap-2 border-b border-lime-800 pb-1">
                      <span>{category.icon}</span>
                      {category.title}
                    </h4>
                    <div className="space-y-2 ml-4">
                      {category.items.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-green-200 flex items-center gap-2">
                              <span className="text-xs">{getStatusIcon(item.status)}</span>
                              {item.service}
                            </span>
                            <span className={`text-xs font-semibold ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed pl-4">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Progress Summary */}
                <div className="mt-6 pt-4 border-t border-lime-700">
                  <h4 className="text-lime-400 font-medium mb-3">📊 Learning Progress</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-green-400">✅ Mastered:</span>
                      <span className="text-green-400 font-semibold">8 technologies</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">🔄 Learning:</span>
                      <span className="text-yellow-400 font-semibold">6 technologies</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-400">🔍 Exploring:</span>
                      <span className="text-blue-400 font-semibold">5 technologies</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-[#0a0a0a] rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 w-full opacity-60"></div>
                  </div>
                </div>

                {/* Next Goals */}
                <div className="mt-4 pt-4 border-t border-lime-700">
                  <h4 className="text-lime-400 font-medium mb-2">🎯 Next Goals</h4>
                  <ul className="text-xs space-y-1 text-gray-300">
                    <li>• Complete AWS Solutions Architect certification</li>
                    <li>• Deploy production Kubernetes cluster</li>
                    <li>• Implement multi-cloud disaster recovery</li>
                    <li>• Master Infrastructure as Code (Terraform)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}