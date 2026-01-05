import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Architecture: React.FC = () => {
  return (
    <section className="bg-neutral-950 text-neutral-200 py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          {/* Left Column - Image & Title */}
          <div className="md:col-span-7 flex flex-col gap-12">
             <Reveal>
                <div className="flex items-center gap-4 mb-6">
                    <span className="h-px w-8 bg-neutral-600"></span>
                    <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">Concept</span>
                </div>
                <h3 className="font-serif text-5xl md:text-7xl tracking-tighter text-white leading-[0.9]">
                  Architectural<br />
                  <span className="italic text-neutral-400">Excellence</span>
                </h3>
             </Reveal>

             <Reveal delay={200}>
              <div className="h-[60vh] w-full bg-neutral-900 rounded-sm overflow-hidden relative group cursor-none mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
                  alt="Interior" 
                />
                {/* Hover Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest text-white">View</span>
                  </div>
                </div>
              </div>
             </Reveal>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-5 md:pt-32 flex flex-col justify-center">
            <Reveal delay={300}>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-16 text-neutral-400">
                Every corner of Elyse is designed with intention. Light filters through floor-to-ceiling windows, casting shadows that dance across natural stone and warm wood finishes, creating a living masterpiece.
              </p>
              
              <ul className="space-y-0 border-t border-neutral-800">
                {[
                  { id: '01', title: 'Sustainable Materials', desc: 'Ethically sourced wood & stone' },
                  { id: '02', title: 'Smart Integration', desc: 'Seamless technology control' },
                  { id: '03', title: 'Wellness Spaces', desc: 'Dedicated areas for rejuvenation' }
                ].map((item, index) => (
                  <li key={item.id} className="group cursor-pointer border-b border-neutral-800 py-8 hover:bg-neutral-900/50 transition-colors px-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-6">
                        <span className="text-neutral-700 font-serif italic text-lg group-hover:text-white transition-colors duration-300">{item.id}</span>
                        <span className="text-xl font-normal text-neutral-300 group-hover:text-white transition-colors duration-300">{item.title}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <div className="pl-12 h-0 overflow-hidden group-hover:h-6 transition-all duration-300">
                        <p className="text-xs text-neutral-500 tracking-wide uppercase">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};