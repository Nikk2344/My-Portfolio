'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="get-in-touch" className="bg-black py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">Let&apos;s Work Together</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Ready to collaborate, discuss your idea, or just say hello? Drop me a message below.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 text-white p-4 rounded-md border border-lime-300/20 focus:outline-none focus:border-lime-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 text-white p-4 rounded-md border border-lime-300/20 focus:outline-none focus:border-lime-400"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full bg-white/5 text-white p-4 rounded-md border border-lime-300/20 focus:outline-none focus:border-lime-400 h-32 resize-none"
          />
          <button
            type="submit"
            className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
// This component creates a contact form section with fields for name, email, and message.
// It uses Framer Motion for animations and Tailwind CSS for styling, ensuring a modern and responsive design.