'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/70 backdrop-blur-md border-b border-lime-400/20">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-end">
          <ul className="flex items-center mr-8">
            { [
              { href: '/', label: 'HOME' },
              { href: '/about', label: 'ABOUT' },
              { href: '/projects', label: 'PROJECTS' },
            ].map((link) => (
              <li key={link.href} className="px-8 py-5">
                <Link
                  href={link.href}
                  className="text-white hover:text-lime-400 font-medium text-sm tracking-[0.2em] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-lime-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            )) }
          </ul>
        </nav>
      </div>
    </header>
  );
}