import React from 'react';
import { Hero } from './components/Hero';
import { Architecture } from './components/Architecture';
import { Bio } from './components/Bio';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-neutral-950 text-neutral-200 overflow-x-hidden relative">
      <div className="bg-noise"></div>
      <Hero />
      <Architecture />
      <Bio />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default App;