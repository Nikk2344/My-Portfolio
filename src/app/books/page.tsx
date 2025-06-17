'use client';

import { useEffect, useState } from 'react';

export default function BooksPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const books = [
    {
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      description: 'An exploration of the universe, black holes, and time.',
      cover: 'book-photos/Book1.jpg',
      details: 'Published in 1988, this groundbreaking work makes complex physics accessible. Hawking explores cosmology, quantum mechanics, and the nature of time itself.',
      pages: 256,
      year: 1988,
      genre: 'Science',
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: 'A thought-provoking journey through the history of our species.',
      cover: 'book-photos/Book2.jpg',
      details: 'From hunter-gatherers to space explorers, Harari examines how Homo sapiens conquered the world through cognitive, agricultural, and scientific revolutions.',
      pages: 443,
      year: 2014,
      genre: 'History',
    },
    {
      title: 'Metamorphosis',
      author: 'Franz Kafka',
      description: 'A surreal tale of transformation and alienation.',
      cover: 'book-photos/Book3.jpg',
      details: 'A masterpiece of existential literature about Gregor Samsa who wakes up transformed into a giant insect, exploring themes of isolation and identity.',
      pages: 55,
      year: 1915,
      genre: 'Fiction',
    },
    {
      title: 'Bhagavad Gita',
      author: 'Shri Krishna',
      description: 'A 700-verse Hindu scripture that is part of the Indian epic Mahabharata.',
      cover: 'book-photos/Book4.jpg',
      details: 'The Bhagavad Gita addresses the moral and philosophical dilemmas faced by the warrior Arjuna as he prepares to go into battle.',
      pages: 700,
      year: 2000,
      genre: 'Spiritual',
    },
    {
      title: 'The Stranger',
      author: 'Albert Camus',
      description: 'A novel about the absurdity of life and the inevitability of death.',
      cover: 'book-photos/Book5.jpg',
      details: 'The story follows Meursault, a man who is indifferent to the world around him, as he navigates life in Algeria and confronts the absurdity of existence.',
      pages: 123,
      year: 1942,
      genre: 'Philosophical Fiction',
    },
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      description: 'A psychological drama about morality, guilt, and redemption.',
      cover: 'book-photos/Book6.jpg',
      details: 'The novel follows Raskolnikov, a former student who believes he is above the law, as he commits a murder and grapples with his conscience.',
      pages: 430,
      year: 1866,
      genre: 'Psychological Fiction',
    },
    {
      title: 'White Nights',
      author: 'Fyodor Dostoevsky',
      description: 'A short story about a dreamer who falls in love with a woman he meets during white nights in St. Petersburg.',
      cover: 'book-photos/Book7.jpg',
      details: 'The story explores themes of love, loneliness, and the search for meaning in life.',
      pages: 100,
      year: 1848,
      genre: 'Fiction',
    },
    {
      title: 'The Daily Stoic',
      author: 'Ryan Holiday',
      description: 'A daily devotional that offers Stoic wisdom and insights.',
      cover: 'book-photos/Book8.jpg',
      details: 'The Daily Stoic provides 366 days of Stoic insights and exercises to help readers cultivate resilience and mindfulness.',
      pages: 416,
      year: 2016,
      genre: 'Self-Help',
    },
    {
      title: 'The Eye of the Shiva',
      author: 'Vikram Chandra',
      description: 'A novel that intertwines the lives of a diverse cast of characters in contemporary India.',
      cover: 'book-photos/Book9.jpg',
      details: 'The Eye of the Shiva explores themes of identity, culture, and the complexities of modern life in India.',
      pages: 400,
      year: 2003,
      genre: 'Fiction',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-lime-400 text-center px-6">
        <div className="space-y-6">
          <div className="text-4xl animate-bounce">📚</div>
          <p className="text-xl font-semibold">“A room without books is like a body without a soul.”</p>
          <p className="text-sm text-gray-400">— Marcus Tullius Cicero</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-lime-400 mb-12 text-center">📚 Favorite Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <div
            key={index}
            className="group h-96 [perspective:1000px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:delay-[0.5s]">
              {/* Front */}
              <div className="absolute inset-0 w-full h-full bg-[#111] border border-lime-600 p-4 rounded-xl shadow-lg [backface-visibility:hidden]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-lime-300 mb-1">{book.title}</h3>
                <p className="text-sm text-gray-400 mb-2">by {book.author}</p>
                <p className="text-gray-300 text-sm">{book.description}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-lime-500 p-6 rounded-xl shadow-lg flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h3 className="text-xl font-bold text-lime-300 mb-4">{book.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{book.details}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-lime-400">📖 Pages: {book.pages}</p>
                  <p className="text-lime-400">📅 Year: {book.year}</p>
                  <p className="text-lime-400">🏷️ Genre: {book.genre}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
