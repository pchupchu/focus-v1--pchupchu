'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';

import Brands from '@/components/Brands';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonial />
        <div className='h-[8000px]'>Home</div>
      </ReactLenis>
    </main>
  );
}
