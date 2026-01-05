import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Navbar } from './Navbar';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Image with Mask */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10 animate-pulse-slow"
        style={{
          backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d6f3aad-afc5-4ad7-9fea-352a7aa9f84b_3840w.webp')",
          animationDuration: '20s'
        }}
      >
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-neutral-950"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:pb-0 z-10 pb-12 relative justify-end px-6 md:px-12">
        
        {/* Description Card - Refined Glass */}
        <div className="absolute top-[20%] md:top-auto md:bottom-[20%] right-6 md:right-12 w-[90%] md:w-[28rem] p-8 md:p-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
          {/* Glass Effect Layer */}
          <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xl -z-10"></div>
          
          <Reveal>
            <div className="w-12 h-px bg-white/50 mb-6"></div>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] mb-6 tracking-tight text-white">
              Holistic luxury <br/>
              in perfect harmony
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-80 text-neutral-200 tracking-wide">
              Welcome to Elyse Residence, where timeless design, wellness-focused living and cultural enrichment converge in order to create an unparalleled sanctuary.
            </p>
          </Reveal>
        </div>

        {/* Massive Title */}
        <div className="relative w-full mt-auto z-0 pointer-events-none select-none overflow-hidden">
          <Reveal>
            <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-overlay opacity-50 whitespace-nowrap">
              CANIZALEZ
            </h1>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-2 text-white/70">
          <Reveal delay={500}>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
              <div className="w-px h-12 bg-white/30 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};