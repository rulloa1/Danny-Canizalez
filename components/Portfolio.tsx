import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  tag?: string;
  large?: boolean;
  aspect?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, location, tag, large, aspect = "aspect-[4/3]", delay = 0 }) => (
  <div className={`${large ? 'md:col-span-8' : 'md:col-span-4'} group relative`}>
    <Reveal delay={delay} className="h-full">
      <div className={`relative w-full ${aspect} overflow-hidden rounded-sm bg-neutral-900 h-full`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex justify-between items-end border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors duration-500">
                <div>
                    {tag && (
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-2">{tag}</span>
                    )}
                    <h3 className={`font-serif text-white mb-1 leading-none ${large ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{title}</h3>
                    <p className="text-neutral-400 text-xs md:text-sm font-medium tracking-wide uppercase mt-2">{location}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/0 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section className="bg-neutral-950 text-white py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
          <Reveal>
             <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-neutral-600"></span>
                <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">Portfolio</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none">
              Selected <span className="text-neutral-700 italic">Projects</span>
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-8 md:mt-0">
            <button className="group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white/30">
              View Full Gallery
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <ProjectCard 
            large 
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" 
            title="The Glass House" 
            location="Beverly Hills, CA" 
            tag="Residential"
            aspect="aspect-[4/3] md:aspect-[16/9]"
          />
          
          <ProjectCard 
            image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80" 
            title="Skyline Loft" 
            location="Manhattan, NY"
            tag="Penthouse"
            aspect="aspect-[3/4] md:aspect-auto md:h-full"
            delay={100}
          />
          
          <ProjectCard 
            image="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1000&q=80" 
            title="Desert Oasis" 
            location="Palm Springs, CA"
            tag="Vacation"
            aspect="aspect-square"
          />
          
          <ProjectCard 
            large
            image="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&q=80" 
            title="Alpine Retreat" 
            location="Aspen, CO"
            tag="Residential"
            aspect="aspect-video md:aspect-auto md:h-full"
            delay={100}
          />
        </div>
      </div>
    </section>
  );
};