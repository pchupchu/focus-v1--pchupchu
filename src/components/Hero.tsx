'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import Button from './Button';
import Header from './Header';

const Hero = () => {
  const { scrollY } = useScroll();

  const imgTopPosition = useTransform(scrollY, [0, 400], ['480px', '240px']);
  const imgScale = useTransform(scrollY, [0, 200, 1300], [1, 1.4, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ['flex', 'none']);

  return (
    <section className='relative h-screen overflow-x-clip xl:h-[1600px]'>
      <Header />
      <div className='container flex h-full items-center xl:items-start'>
        <motion.div
          className='fixed left-0 right-0 mt-24 flex flex-col items-center justify-center gap-6 text-center xl:mt-[160px]'
          style={{
            opacity: textOpacity,
            scale: textScale,
            display: textDisplay,
          }}>
          <h1 className='max-w-[800px] text-[54px] font-bold capitalize leading-none tracking-[-0.5px] xl:max-w-max xl:text-6xl'>
            Boost your productivity instantly
          </h1>
          <p className='mb-2 max-w-[680px] px-8 text-lg font-light text-white/80 xl:px-0 xl:text-xl'>
            Streamline tasks and manage your time more effortlessly with our
            powerful, intuitive, all in one productivity platform.
          </p>
          <Button btnText='Join today' />
        </motion.div>
        <motion.div
          className='sticky left-0 right-0 mx-auto hidden h-[520px] w-full max-w-[960px] bg-hero bg-contain bg-center bg-no-repeat xl:flex'
          style={{ top: imgTopPosition, scale: imgScale }}></motion.div>
      </div>
    </section>
  );
};

export default Hero;
