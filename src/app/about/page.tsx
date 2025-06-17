'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import HeroAbout from '../../components/HeroAbout';
import AboutGrid from '../../components/AboutGrid';
import Skills from '../../components/Skills';
import PortfolioPreview from '../../components/PortfolioPreview';
import ContactForm from '../../components/ContactForm';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const [blinkProject, setBlinkProject] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();

  // Enhanced mouse trailing effect with lime green theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    function setCanvasSize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = canvas.width;
      height = canvas.height;
    }
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let stars: any[] = [];

    // Lime green color variations
    const limeColors = [
      'rgba(163, 230, 53, 1)',   // #a3e635 - main lime
      'rgba(132, 204, 22, 1)',   // #84cc16 - lime-500
      'rgba(101, 163, 13, 1)',   // #65a30d - lime-600
      'rgba(190, 242, 100, 1)',  // #bef264 - lime-300
    ];

    class Star {
      x: number;
      y: number;
      finalSize: number;
      size: number;
      alpha: number;
      velocityX: number;
      velocityY: number;
      gravity: number;
      drag: number;
      timeElapsed: number;
      color: string;
      
      constructor(x: number, y: number, velocityX: number, velocityY: number) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 2 + 1;
        this.size = this.finalSize * 2;
        this.alpha = 1;
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.05;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.timeElapsed = 0;
        this.color = limeColors[Math.floor(Math.random() * limeColors.length)];
      }
      
      draw() {
        if (!ctx) return;
        
        // Simple star with lime green color
        ctx.fillStyle = this.color.replace('1)', `${this.alpha})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      update(deltaTime: number) {
        this.x += this.velocityX + (Math.random() * 0.5 - 0.25);
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.alpha = Math.max(0, this.alpha - 0.005);
        
        this.timeElapsed += deltaTime;
        if (this.timeElapsed < 2000) {
          this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 2000);
        } else {
          this.size = this.finalSize;
        }
      }
    }

    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    function addStar(e: MouseEvent) {
      mouseVelocityX = e.clientX - lastMouseX;
      mouseVelocityY = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      
      let randomOffsetX = (Math.random() - 0.5) * 100;
      let randomOffsetY = (Math.random() - 0.5) * 100;
      
      stars.push(new Star(e.clientX, e.clientY, mouseVelocityX + randomOffsetX, mouseVelocityY + randomOffsetY));
    }

    document.addEventListener('mousemove', addStar);

    let lastTime = 0;
    let animationFrameId: number;

    function update(time = 0) {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach(star => star.update(deltaTime));
      stars.forEach(star => star.draw());
      stars = stars.filter(star => star.alpha > 0 && star.y < height && star.x > 0 && star.x < width);
      
      animationFrameId = requestAnimationFrame(update);
    }

    update();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      document.removeEventListener('mousemove', addStar);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Only blink Projects card when navigated from "View My Projects"
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#explore-projects') {
      const el = document.getElementById('explore-projects');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setBlinkProject(true);
          setTimeout(() => setBlinkProject(false), 1500);
        }, 300);
      }
    }
  }, []);

  // Always scroll to top on refresh if hash is present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#explore-projects') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white overflow-hidden">
      {/* Enhanced mouse trailing canvas */}
      <canvas
        ref={canvasRef}
        id="starCanvas"
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-40"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Blinking animation style for Projects card */}
      <style>
        {`
          @keyframes blink-card {
            0%, 100% { box-shadow: 0 0 0 0 #a3e63566; }
            50% { box-shadow: 0 0 40px 10px #a3e635cc; }
          }
          .animate-blink-card {
            animation: blink-card 1.2s;
          }
        `}
      </style>

      <HeroAbout />
      <AboutGrid />
      <Skills />

      {/* Section: Peek at My Toolbox */}
      <section className="text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">Peek at My Toolbox</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Curious about my tech journey and tools? Click below to see my full toolbox timeline!
        </p>
        <button
          onClick={() => router.push('/toolbox')}
          className="bg-lime-600 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-300"
        >
          Have a Look at My Toolbox
        </button>
      </section>

      {/* Explore More Navigation Cards */}
      <section
        id="explore-projects"
        className="text-center px-6 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-10">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link href="/books">
            <div className="group bg-[#111] border border-lime-600 p-6 rounded-xl hover:bg-lime-700 hover:text-black transition duration-300 shadow-lg hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">📚 Favorite Books</h3>
              <p className="text-sm text-gray-300 group-hover:text-black">Click to see the books that inspired me most.</p>
            </div>
          </Link>

          <Link href="/movies">
            <div className="group bg-[#111] border border-lime-600 p-6 rounded-xl hover:bg-lime-700 hover:text-black transition duration-300 shadow-lg hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">🎬 Favorite Movies & Shows</h3>
              <p className="text-sm text-gray-300 group-hover:text-black">Explore what I watch when I'm not coding.</p>
            </div>
          </Link>

          <Link href="/projects">
            <div className={`group bg-[#111] border border-lime-600 p-6 rounded-xl hover:bg-lime-700 hover:text-black transition duration-300 shadow-lg hover:scale-105 cursor-pointer${blinkProject ? ' animate-blink-card' : ''}`}>
              <h3 className="text-2xl font-semibold mb-2">💻 Projects</h3>
              <p className="text-sm text-gray-300 group-hover:text-black">A collection of what I've built so far.</p>
            </div>
          </Link>

          <Link href="/blogs">
            <div className="group bg-[#111] border border-lime-600 p-6 rounded-xl hover:bg-lime-700 hover:text-black transition duration-300 shadow-lg hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">✍️ Blogs</h3>
              <p className="text-sm text-gray-300 group-hover:text-black">Read my thoughts and learnings in tech.</p>
            </div>
          </Link>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}