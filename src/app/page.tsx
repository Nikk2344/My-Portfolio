// src/app/page.tsx
'use client';

import Link from 'next/link';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import { FaTelegramPlane, FaDiscord, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1"></div>
        </div>
        <div className="leo-border-2">
          <div className="leo-core-2"></div>
        </div>
      </div>
    </div>
  );
}

// Neural Network Background Component
function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
    }> = [];

    // Create nodes
    const createNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      nodes.length = 0;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          connections: []
        });
      }
    };

    createNodes();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 2
        );
        gradient.addColorStop(0, 'rgba(163, 230, 53, 0.8)');
        gradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.4)');
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Add pulsing effect to some nodes
        if (Math.random() < 0.005) {
          ctx.strokeStyle = 'rgba(163, 230, 53, 0.6)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/about');
    }, 1500);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-black overflow-hidden">
        {/* Neural Network Background */}
        <NeuralNetworkBackground />
        
        {/* Main content with higher z-index */}
        <main className="relative z-10 text-white px-6 py-16 space-y-24">
          <Hero />

          <div className="flex justify-center">
            <div className="bg-[#111]/80 backdrop-blur-sm border border-lime-600 rounded-xl shadow-lg p-8 max-w-xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-4">Welcome to My Portfolio</h2>
              <p className="text-gray-300 text-base mb-6">
                I&apos;m a Cloud Enthusiast and passionate about Network Security. I thrive on building resilient infrastructures and protecting digital assets.
              </p>
              <button
                onClick={handleNavigate}
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg text-lg transition duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                Explore More About Me
              </button>
            </div>
          </div>

          <Philosophy />

          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg mb-6">
              Want to collaborate, hire me, or just say hello? Feel free to reach out.
            </p>
            <div className="flex justify-center gap-6 text-2xl">
              <a 
                href="https://t.me/nikk_026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon telegram-icon text-green-400 hover:text-lime-400 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              >
                <FaTelegramPlane />
              </a>
              <a 
                href="https://discord.com/users/966678702316462131" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon discord-icon text-green-400 hover:text-lime-400 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-12deg] hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              >
                <FaDiscord />
              </a>
              <a 
                href="https://wa.me/919792349008" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon whatsapp-icon text-green-400 hover:text-lime-400 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://instagram.com/unik.exe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon instagram-icon text-green-400 hover:text-lime-400 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-[-12deg] hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com/in/nikhil-dev7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon linkedin-icon text-green-400 hover:text-lime-400 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-12 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              >
                <FaLinkedin />
              </a>
            </div>
          </section>

          {/* Add the CSS styles */}
          <style jsx>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-15px);
              }
              60% {
                transform: translateY(-10px);
              }
            }

            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.15);
              }
              100% {
                transform: scale(1);
              }
            }

            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
              20%, 40%, 60%, 80% { transform: translateX(3px); }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }

            @keyframes wobble {
              0% { transform: translateX(0%); }
              15% { transform: translateX(-15px) rotate(-3deg); }
              30% { transform: translateX(12px) rotate(2deg); }
              45% { transform: translateX(-8px) rotate(-2deg); }
              60% { transform: translateX(5px) rotate(1deg); }
              75% { transform: translateX(-3px) rotate(-1deg); }
              100% { transform: translateX(0%); }
            }

            .social-icon {
              position: relative;
              display: inline-block;
              padding: 0.5rem;
              border-radius: 50%;
              cursor: pointer;
            }

            .social-icon:hover {
              animation: bounce 0.6s ease-in-out;
            }

            .telegram-icon:hover {
              animation: pulse 0.8s ease-in-out;
            }

            .discord-icon:hover {
              animation: shake 0.6s ease-in-out;
            }

            .whatsapp-icon:hover {
              animation: float 1s ease-in-out;
            }

            .instagram-icon:hover {
              animation: wobble 1s ease-in-out;
            }

            .linkedin-icon:hover {
              animation: bounce 0.6s ease-in-out;
            }

            /* Additional hover effects */
            .social-icon:hover::before {
              content: '';
              position: absolute;
              top: -5px;
              left: -5px;
              right: -5px;
              bottom: -5px;
              background: linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(163, 230, 53, 0.3));
              border-radius: 50%;
              z-index: -1;
              animation: pulse 1s ease-in-out infinite;
            }

            /* Click ripple effect */
            .social-icon:active {
              transform: scale(0.95);
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
              .social-icon {
                padding: 0.4rem;
              }
            }
          `}</style>
        </main>
      </div>
    </>
  );
}