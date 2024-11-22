'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Hero />
        <div className='h-[8000px]'>Home</div>
      </ReactLenis>
    </main>
  );
}
