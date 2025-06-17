'use client';

import { div } from 'framer-motion/client';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const movies = [
    {
      title: 'Arrival',
      year: 2016,
      genre: 'Sci-Fi, Drama',
      DIRECTOR: 'Denis Villeneuve',
      poster: 'Movie-photos/Movie1.jpg',
      description: 'A linguist is recruited to communicate with extraterrestrial visitors.',
      details: 'A thought-provoking exploration of language, time, and human connection as a linguist deciphers an alien language to prevent global conflict.'
    },
    {
      title: 'Interstellar',
      year: 2014,
      genre: 'Sci-Fi, Adventure',
      DIRECTOR: 'Christopher Nolan',
      poster: 'Movie-photos/Movie2.jpg',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      details: 'A visually stunning journey through space and time, exploring themes of love, sacrifice, and the survival of the human race.'
    },
    {
      title: 'Incendies',
      year: 2010,
      genre: 'Drama, Mystery',
      DIRECTOR: 'Denis Villeneuve',
      poster: 'Movie-photos/Movie3.jpg',
      description: 'A woman discovers her mother\'s hidden past in the Middle East.',
      details: 'A powerful tale of family, war, and the search for identity that spans generations.'
    },
    {
      title: 'The Matrix',
      year: 1999,
      genre: 'Sci-Fi, Action',
      DIRECTOR: 'Lana Wachowski, Lilly Wachowski',
      poster: 'Movie-photos/Movie4.jpg',
      description: 'A dystopian future where reality is simulated.',
      details: 'Neo discovers the truth about his world and joins a rebellion against machines controlling humanity.'
    },
    {
      title: 'Gladiator',
      year: 2000,
      genre: 'Action, Drama',
      DIRECTOR: 'Ridley Scott',
      poster: 'Movie-photos/Movie5.jpg',
      description: 'A Roman general turned gladiator seeks revenge.',
      details: 'Maximus fights for justice and freedom in ancient Rome after being betrayed by the emperor.'
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action, Crime',
      DIRECTOR: 'Christopher Nolan',
      poster: 'Movie-photos/Movie6.jpg',
      description: 'Batman faces the Joker in a battle for Gotham.',
      details: 'A gripping tale of chaos and morality as Batman confronts the Joker\'s anarchic philosophy.'
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      DIRECTOR: 'Frank Darabont',
      poster: 'Movie-photos/Movie7.jpg',
      description: 'A banker sentenced to life in Shawshank State Penitentiary.',
      details: 'A story of hope and friendship as Andy Dufresne finds solace and redemption in prison.'
    },
    {
      title: 'The Godfather',
      year: 1972,
      genre: 'Crime, Drama',
      DIRECTOR: 'Francis Ford Coppola',
      poster: 'Movie-photos/Movie8.jpg',
      description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
      details: 'A powerful saga of family, loyalty, and the dark underworld of organized crime.'
    },
    {
      title: 'Mad Max: Fury Road',
      year: 2015,
      genre: 'Action, Adventure',
      DIRECTOR: 'George Miller',
      poster: 'Movie-photos/Movie9.jpg',
      description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.',
      details: 'A high-octane thrill ride that explores themes of survival, redemption, and the fight against oppression.'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-lime-400 text-center px-6">
        <div className="space-y-6">
          <div className="text-4xl animate-bounce">🎬</div>
          <p className="text-xl font-semibold">"What we do in life echoes in eternity."</p>
          <p className="text-sm text-gray-400">— Gladiator</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lime-400 mb-6 sm:mb-8 lg:mb-12 text-center">🎬 Favorite Movies & Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="group h-[500px] sm:h-[450px] lg:h-[480px] w-full [perspective:1000px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:delay-[0.5s]">
              {/* Front */}
              <div className="absolute inset-0 w-full h-full bg-[#111] border border-lime-600 p-4 sm:p-5 rounded-xl shadow-lg [backface-visibility:hidden] flex flex-col">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 sm:h-60 lg:h-72 object-cover rounded-md mb-4 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-lime-300 mb-2 leading-tight">{movie.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{movie.genre} • {movie.year}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed overflow-hidden">{movie.description}</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-lime-500 p-5 sm:p-6 rounded-xl shadow-lg flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h3 className="text-xl sm:text-2xl font-bold text-lime-300 mb-4">{movie.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed flex-1 overflow-y-auto">{movie.details}</p>
                <div className="space-y-2 text-sm sm:text-base flex-shrink-0">
                  <p className="text-lime-400">🎬 Director: {movie.DIRECTOR}</p>
                  <p className="text-lime-400">📅 Year: {movie.year}</p>
                  <p className="text-lime-400">🎭 Genre: {movie.genre}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Letterboxd CTA */}
      <div className="text-center mt-20">
        <p className="text-gray-400 mb-2 text-base sm:text-lg">Curious about my complete watchlist and ratings?</p>
        <a
          href="https://letterboxd.com/Nikk23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 bg-lime-600 hover:bg-lime-500 text-black text-base sm:text-lg font-semibold rounded-full shadow-md transition-all duration-300 hover:shadow-lime-400/40"
        >
          🎞️ Explore My Letterboxd Profile
          <span className="animate-pulse text-xl sm:text-2xl">➡️</span>
        </a>
      </div>
    </main>
    
  );
}