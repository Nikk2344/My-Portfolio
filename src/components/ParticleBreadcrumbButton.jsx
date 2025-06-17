import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Particle Breadcrumb Component
const ParticleBreadcrumbButton = () => {
  const [loading, setLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { label: '🏠 Home', active: true, path: '/' },
    { label: '👤 About', active: false, path: '/about' }
  ]);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  const createParticle = (x, y, type = 'float') => {
    const id = Math.random().toString(36).substr(2, 9);
    const particle = {
      id,
      x,
      y,
      type,
      color: `hsl(${Math.random() * 60 + 80}, 70%, ${50 + Math.random() * 30}%)`,
      size: 2 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 4,
      vy: -2 - Math.random() * 3,
      life: 1,
      decay: 0.02 + Math.random() * 0.02
    };

    setParticles(prev => [...prev, particle]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 3000);
  };

  const handleMouseEnter = (e) => {
    if (!buttonRef.current || !containerRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const centerX = rect.left - containerRect.left + rect.width / 2;
    const centerY = rect.top - containerRect.top + rect.height / 2;

    // Create hover particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        createParticle(
          centerX + (Math.random() - 0.5) * rect.width,
          centerY + (Math.random() - 0.5) * rect.height,
          'float'
        );
      }, i * 100);
    }
  };

  const handleClick = () => {
    if (!buttonRef.current || !containerRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const centerX = rect.left - containerRect.left + rect.width / 2;
    const centerY = rect.top - containerRect.top + rect.height / 2;

    // Create burst effect
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const distance = 30 + Math.random() * 40;
      setTimeout(() => {
        createParticle(
          centerX + Math.cos(angle) * (distance * 0.3),
          centerY + Math.sin(angle) * (distance * 0.3),
          'burst'
        );
      }, i * 30);
    }

    // Update breadcrumbs
    setBreadcrumbs(prev => prev.map((crumb, index) => ({
      ...crumb,
      active: index === 1 // Activate "About"
    })));

    // Start loading
    setLoading(true);
    
    // Navigate after animation
    setTimeout(() => {
      router.push('/about');
    }, 1500);
  };

  const handleBreadcrumbClick = (index, path) => {
    setBreadcrumbs(prev => prev.map((crumb, i) => ({
      ...crumb,
      active: i === index
    })));

    // Create trail particles
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          createParticle(
            50 + i * 30,
            30,
            'trail'
          );
        }, i * 50);
      }
    }

    if (path !== window.location.pathname) {
      setLoading(true);
      setTimeout(() => {
        router.push(path);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      {/* Breadcrumb Navigation */}
      <div 
        ref={containerRef}
        className="relative mb-6 h-16 flex items-center justify-center"
      >
        <div className="flex items-center gap-4 relative z-10">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => handleBreadcrumbClick(index, crumb.path)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative
                  backdrop-blur-sm border-2 transform hover:scale-105 hover:-translate-y-1
                  ${crumb.active 
                    ? 'bg-lime-400/20 text-lime-400 border-lime-400/50 shadow-lg shadow-lime-400/20' 
                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:border-white/40'
                  }
                `}
                onMouseEnter={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  const containerRect = containerRef.current.getBoundingClientRect();
                  for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                      createParticle(
                        rect.left - containerRect.left + rect.width / 2,
                        rect.top - containerRect.top + rect.height / 2,
                        'float'
                      );
                    }, i * 80);
                  }
                }}
              >
                {crumb.label}
              </button>
              {index < breadcrumbs.length - 1 && (
                <span className="text-lime-400/60 text-lg animate-pulse">›</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Particle Container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute pointer-events-none"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                borderRadius: '50%',
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                animation: particle.type === 'float' 
                  ? 'particleFloat 3s ease-out forwards'
                  : particle.type === 'burst'
                  ? 'particleBurst 1.5s ease-out forwards'
                  : 'particleTrail 2s ease-out forwards'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Button */}
      <div className="flex justify-center">
        <div className="bg-[#111] border border-lime-600 rounded-xl shadow-lg p-8 max-w-xl text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-300 text-base mb-6">
            I'm a Cloud Enthusiast and passionate about Network Security. I thrive on building resilient infrastructures and protecting digital assets.
          </p>
          
          <button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            className={`
              relative bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 
              text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Navigating...
              </div>
            ) : (
              'Explore More About Me'
            )}
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-30px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(0.5);
          }
        }

        @keyframes particleBurst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--dx, 0), var(--dy, 0)) scale(0.2);
          }
        }

        @keyframes particleTrail {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(100px) scale(0.3);
          }
        }
      `}</style>
    </div>
  );
};

// Loader Component
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-lime-400/30 border-t-lime-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-green-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
      </div>
    </div>
  );
};

// Main Component Export
export default function EnhancedHomePage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white px-6 py-16 space-y-24">
        
        {/* Hero Section - You can replace this with your actual Hero component */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-lime-400 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Cloud Enthusiast & Network Security Specialist
          </p>
        </div>

        {/* Particle Breadcrumb Section */}
        <ParticleBreadcrumbButton />

        {/* Philosophy Section - You can replace this with your actual Philosophy component */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4">My Philosophy</h2>
          <p className="text-gray-300 text-lg">
            Building secure, scalable solutions that protect and empower digital experiences.
          </p>
        </section>

        {/* Contact Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-6">
            Want to collaborate, hire me, or just say hello? Feel free to reach out.
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://t.me/nikk_026" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-lime-400 transition-colors">
              📱
            </a>
            <a href="https://discord.com/users/966678702316462131" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-lime-400 transition-colors">
              🎮
            </a>
            <a href="https://wa.me/919792349008" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-lime-400 transition-colors">
              💬
            </a>
            <a href="https://instagram.com/unik.exe" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-lime-400 transition-colors">
              📸
            </a>
            <a href="https://linkedin.com/in/nikhil-dev7" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-lime-400 transition-colors">
              💼
            </a>
          </div>
        </section>
      </main>
    </>
  );
}