'use client';

import { motion } from 'framer-motion';
import { BiSolidQuoteLeft } from 'react-icons/bi';

import { fadeInOnScroll } from '@/motion/motionVariants';

const testimonialData = [
  {
    name: 'John Doe',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Jane Smith',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Samuel Green',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Emily White',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Michael Brown',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Sophia Lee',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
  {
    name: 'Olivia Martinez',
    message:
      'This service was incredible! It exceeded all my expectations and I couldn;t be happier with the results.',
  },
];

const Testimonial = () => {
  return (
    <section className='mb-24 w-full xl:mb-32'>
      <div className='flex items-center justify-center'>
        <div className='overflow-hidden'>
          <motion.div
            className='px-4 text-center'
            variants={fadeInOnScroll({ duration: 0.2, delay: 0.4 })}
            initial='hidden'
            whileInView='visible'>
            <h2 className='h2 mb-4 capitalize'>What people are saying</h2>
            <p className='lead mb-24'>
              Hear directly from those who have improved their efficiency and
              organization.
            </p>
          </motion.div>

          <motion.div
            className='flex'
            variants={fadeInOnScroll({ duration: 0.2, delay: 0.6 })}
            initial='hidden'
            whileInView='visible'>
            <motion.div
              className='flex'
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
              {testimonialData.map((item, index) => {
                return (
                  <div
                    className='mr-12 flex min-h-[300px] w-[460px] flex-col justify-center rounded-2xl bg-[#0e11354e] px-14'
                    key={index}>
                    <BiSolidQuoteLeft className='mb-3 text-3xl text-accent' />
                    <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                    <p className='text-xl'>{item.name}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              className='flex'
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
              {testimonialData.map((item, index) => {
                return (
                  <div
                    className='mr-12 flex min-h-[300px] w-[460px] flex-col justify-center rounded-2xl bg-[#0e11354e] px-14'
                    key={index}>
                    <BiSolidQuoteLeft className='mb-3 text-3xl text-accent' />
                    <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                    <p className='text-xl'>{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
