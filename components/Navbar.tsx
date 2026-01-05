import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Reveal } from './Reveal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <nav className="w-full px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl text-white tracking-tight font-serif italic relative z-10 group cursor-pointer">
          Danny Canizalez
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-xs font-medium tracking-[0.2em] uppercase">
            <span className="opacity-100 cursor-pointer border-b border-white pb-1 text-white">
              EN
            </span>
            <span className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-white">
              ES
            </span>
          </div>

          <button className="hidden md:block bg-white text-black px-8 py-3 rounded-full text-xs font-medium hover:bg-neutral-200 transition-all tracking-[0.1em] hover:scale-105 duration-300">
            BOOK A VISIT
          </button>

          <button className="text-white hover:text-neutral-300 transition-colors group">
            <Menu className="w-8 h-8 transition-transform group-hover:rotate-180 duration-700 ease-in-out" strokeWidth={1} />
          </button>
        </div>
      </nav>
    </div>
  );
};