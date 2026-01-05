import React from 'react';
import { Reveal } from './Reveal';

export const Bio: React.FC = () => {
  return (
    <section className="bg-neutral-950 text-neutral-200 py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        
        {/* Image Column */}
        <div className="md:col-span-5 order-2 md:order-1 relative">
             <Reveal>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-1000 group">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                        alt="Danny Canizalez"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                     
                     {/* Signature or Name Overlay */}
                     <div className="absolute bottom-6 left-6">
                        <span className="font-serif italic text-2xl text-white/90">Danny C.</span>
                     </div>
                </div>
             </Reveal>
        </div>

        {/* Text Column */}
        <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center">
            <Reveal delay={200}>
                <div className="flex items-center gap-4 mb-6">
                    <span className="h-px w-8 bg-neutral-600"></span>
                    <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">The Broker</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-none">
                    Unrivaled <br/>
                    <span className="text-neutral-600 italic">Expertise</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-white mb-6 font-light">
                    Serving Spring, TX &amp; Beyond
                </h3>
                <p className="text-lg font-light leading-relaxed text-neutral-400 mb-8 max-w-2xl">
                    Danny Canizalez represents the new era of luxury real estate in Texas. With a deep-rooted connection to Spring and an unwavering commitment to excellence, Danny bridges the gap between architectural integrity and modern living standards.
                </p>
                <p className="text-base font-light leading-relaxed text-neutral-500 mb-12 max-w-2xl border-l border-neutral-800 pl-6 italic">
                    "Real estate is more than transactions; it's about curating a lifestyle. My mission is to guide clients through the Spring market with precision, insight, and a personalized touch that turns houses into sanctuaries."
                </p>
                
                <div className="grid grid-cols-3 gap-8 border-t border-neutral-800 pt-8">
                    <div>
                        <span className="block text-3xl md:text-4xl font-serif text-white mb-2">15+</span>
                        <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">Years Active</span>
                    </div>
                     <div>
                        <span className="block text-3xl md:text-4xl font-serif text-white mb-2">$200M</span>
                        <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">Volume Sold</span>
                    </div>
                     <div>
                        <span className="block text-3xl md:text-4xl font-serif text-white mb-2">Top 1%</span>
                        <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">Agency Rank</span>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};