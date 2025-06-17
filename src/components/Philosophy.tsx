// src/components/Philosophy.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Philosophy() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Philosophy-related phrases
  const phrases = [
    "I believe in the power of consistency and dedication to get your things done, learned from the book 'Atomic Habits'.",
    "Sometimes you need to take a step back to see the bigger picture, inspired by 'The Art of War'.",
    "Always you need to be pray for the best, but prepare for the worst, from the movie 'Prisoners'.",
    "What we did in life echoes in eternity, a quote from the movie 'Gladiator'.",
    "The only way to do great work is to love what you do, inspired by Steve Jobs.",
    "That's not a bug, it's a feature, a humorous take on software development.",
    "That's all folks, from my side but not ending here one day we all sit on chair and thinking about our life, at the end it doesn't matter.",
  ];

  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseTime = 2000;

  useEffect(() => {
    if (!hasStarted) return;

    const currentFullText = phrases[currentPhrase];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(currentFullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhrase((currentPhrase + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, currentPhrase, isDeleting, phrases, hasStarted]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6 sm:px-10 md:px-20 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        onViewportEnter={() => setHasStarted(true)}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Title Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4">
            My Work Philosophy
          </h2>
          <div className="w-24 h-1 bg-lime-500 mb-6" />
        </div>

        {/* Typewriter Description Section */}
        <div>
          <p className="text-lg text-gray-300 leading-loose min-h-[120px] flex items-start">
            {currentText}
            <span 
              className={`inline-block w-0.5 h-6 ml-1 bg-lime-400 transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </p>
        </div>
      </motion.div>
    </section>
  );
}