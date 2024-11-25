'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';

import Brands from '@/components/Brands';
import Features from '@/components/Features';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <div className='h-[8000px]'>Home</div>
      </ReactLenis>
    </main>
  );
}
