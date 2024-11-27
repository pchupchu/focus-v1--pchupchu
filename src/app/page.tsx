'use client';

import { ReactLenis } from 'lenis/dist/lenis-react';

import Brands from '@/components/Brands';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Testimonial from '@/components/Testimonial';
import Trial from '@/components/Trial';

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonial />
        <Trial />
        <Footer />
      </ReactLenis>
    </main>
  );
}
