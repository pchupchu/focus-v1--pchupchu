'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();

  const imgTopPosition = useTransform(scrollY, [0, 400], ['480px', '240px']);
  const imgScale = useTransform(scrollY, [0, 200, 1300], [1, 1.4, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ['flex', 'none']);

  return (
    <section className='relative h-screen overflow-x-clip xl:h-[1600px]'>
      <div className='container flex h-full items-center xl:items-start'>
        <motion.div
          className='fixed left-0 right-0 mt-24 flex flex-col items-center justify-center gap-6 text-center xl:mt-[160px]'
          style={{
            opacity: textOpacity,
            scale: textScale,
            display: textDisplay,
          }}>
          <h1 className='max-w-[800px] text-[60px] font-bold capitalize leading-none tracking-[-0.5px] xl:max-w-max'>
            Boost your productivity instantly
          </h1>
          <p className='mb-2 max-w-[680px] px-8 text-xl font-light text-white/80 xl:px-0'>
            Streamline tasks and manage your time more effortlessly with our
            powerful, intuitive, all in one productivity platform.
          </p>
          <button>Join today</button>
        </motion.div>
        <motion.div
          className='bg-hero sticky left-0 right-0 mx-auto hidden h-[520px] w-full max-w-[960px] bg-contain bg-center bg-no-repeat xl:flex'
          style={{ top: imgTopPosition, scale: imgScale }}></motion.div>
      </div>
    </section>
  );
};

export default Hero;
