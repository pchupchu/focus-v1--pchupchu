'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeInOnScroll } from '@/motion/motionVariants';

const brandsImages = [
  {
    src: '/brands/brand-1.svg',
    alt: 'OdeaoLabs',
  },
  {
    src: '/brands/brand-2.svg',
    alt: 'GlobalBank',
  },
  {
    src: '/brands/brand-3.svg',
    alt: 'Stack&Lab',
  },
  {
    src: '/brands/brand-4.svg',
    alt: 'Magnolia',
  },
  {
    src: '/brands/brand-5.svg',
    alt: 'Warpspeed',
  },
  {
    src: '/brands/brand-6.svg',
    alt: 'Sisyphus',
  },
  {
    src: '/brands/brand-7.svg',
    alt: 'Ikigai Labs',
  },
];

const Brands = () => {
  return (
    <section className='flex h-[24vh] w-full items-center pt-24'>
      <motion.div
        className='overflow-hidden'
        variants={fadeInOnScroll({ duration: 0.2, delay: 0.6 })}
        initial='hidden'
        whileInView='visible'>
        <p className='lead mb-6 text-center'>
          Join 200+ companies already growing{' '}
        </p>
        <div className='flex'>
          <motion.div
            className='flex'
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
            {brandsImages.map((brand, index) => (
              <div key={index} className='relative mr-12 h-20 w-52'>
                <Image className='' src={brand.src} alt={brand.alt} fill />
              </div>
            ))}
          </motion.div>

          <motion.div
            className='flex'
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
            {brandsImages.map((brand, index) => (
              <div key={index} className='relative mr-12 h-20 w-52'>
                <Image className='' src={brand.src} alt={brand.alt} fill />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
