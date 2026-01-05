import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-400 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Reveal>
              <div className="text-2xl text-white tracking-tight font-serif italic mb-6">Danny Canizalez</div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Compass Real Estate.<br/>
                Redefining luxury living in Spring, TX through sustainable architecture and timeless design.
              </p>
              <div className="flex gap-4 text-white">
                <Instagram className="w-5 h-5 hover:text-neutral-300 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 hover:text-neutral-300 cursor-pointer transition-colors" />
              </div>
            </Reveal>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <Reveal delay={100}>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Residences</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Broker Page</a></li>
              </ul>
            </Reveal>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <Reveal delay={200}>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Contact</h4>
              <address className="not-italic text-sm space-y-4">
                <p>Spring, TX</p>
                <p><a href="tel:8329417500" className="hover:text-white transition-colors">(832) 941-7500</a></p>
                <p><a href="mailto:danny.canizalez@compass.com" className="hover:text-white transition-colors">danny.canizalez@compass.com</a></p>
              </address>
            </Reveal>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <Reveal delay={300}>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Newsletter</h4>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 transition-colors rounded-sm placeholder:text-neutral-600"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-neutral-600">Subscribe for exclusive updates on new listings.</p>
              </form>
            </Reveal>
          </div>

        </div>

        {/* Bottom Bar */}
        <Reveal>
            <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
                <p>© 2024 Danny Canizalez. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </Reveal>
      </div>
    </footer>
  );
};