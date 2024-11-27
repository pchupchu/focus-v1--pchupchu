'use client';

import { motion } from 'framer-motion';

import { fadeInOnScroll } from '@/motion/motionVariants';

import ButtonTertiary from './ButtonTertiary';

const Trial = () => {
  return (
    <section className='w-full xl:mb-32'>
      <motion.div
        className='mx-auto flex min-h-[300px] items-center bg-gradient-to-r from-accent via-accent_secondary to-accent py-24 xl:max-w-[1140px] xl:rounded-2xl'
        variants={fadeInOnScroll({ duration: 0.2, delay: 0.6 })}
        initial='hidden'
        whileInView='visible'>
        <div className='flex w-full flex-col items-center justify-between xl:flex-row xl:px-24'>
          <div>
            <div className='mb-12 text-center xl:mb-0 xl:text-left'>
              <h2 className='mb-2 text-[40px] font-bold leading-tight'>
                Start your 30-day free trial
              </h2>
              <p className='lead max-w-[400px] xl:max-w-[560px]'>
                Experience the full power of our platform with a 30-day free
                trial. No credit card required.
              </p>
            </div>
          </div>

          <ButtonTertiary btnText='Get started' />
        </div>
      </motion.div>
    </section>
  );
};

export default Trial;
