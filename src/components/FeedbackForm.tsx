'use client';
import { useState, FormEvent } from 'react';

export default function FeedbackForm({ page = 'Portfolio' }: { page?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, page }),
    });

    if (res.ok) {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto">
      <input
        type="text"
        required
        placeholder="Your Name"
        className="w-full p-3 rounded bg-black/70 text-white border border-lime-600"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        className="w-full p-3 rounded bg-black/70 text-white border border-lime-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        required
        placeholder="Your Message"
        rows={5}
        className="w-full p-3 rounded bg-black/70 text-white border border-lime-600"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="w-full bg-lime-600 hover:bg-lime-500 text-black font-semibold py-3 rounded transition duration-300"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="text-green-400 text-sm">✅ Message sent!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm">❌ Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
