'use client';

export default function TechStack() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-lime-400 mb-8">Tech Stack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your tech stack content here */}
          <div className="bg-[#111] p-6 rounded-xl border border-lime-600/20">
            <h2 className="text-xl font-semibold text-lime-400 mb-4">Frontend</h2>
            <ul className="space-y-2 text-gray-300">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}