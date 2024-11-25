'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { FaRegCheckCircle } from 'react-icons/fa';

const featuresData = [
  {
    imgSrc: '/features/img-1.svg',
    title: 'Smart Task Management',
    description: 'Organize and prioritize tasks effortlessly.',
    highlights: [
      'Set due dates and reminders.',
      'Track progress and milestones.',
      'Easily sort tasks by priority.',
    ],
  },
  {
    imgSrc: '/features/img-2.svg',
    title: 'Real-Time Collaboration',
    description: 'Collaborate with your team in real-time.',
    highlights: [
      'Set due dates and reminders.',
      'Track progress and milestones.',
      'Easily sort tasks by priority.',
    ],
  },
  {
    imgSrc: '/features/img-3.svg',
    title: 'Advanced Analytics',
    description: 'Gain insights to boost your productivity.',
    highlights: [
      'Set due dates and reminders.',
      'Track progress and milestones.',
      'Easily sort tasks by priority.',
    ],
  },
  {
    imgSrc: '/features/img-4.svg',
    title: 'Customizable Workspaces',
    description: 'Personalize your workspace for maximum efficiency.',
    highlights: [
      'Set due dates and reminders.',
      'Track progress and milestones.',
      'Easily sort tasks by priority.',
    ],
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className='relative pt-32 text-white'>
      <div className='container'>
        <div className='flex gap-16'>
          <motion.div
            className='sticky top-[calc(50%-240px)] hidden h-[480px] w-full flex-1 justify-center xl:flex'
            key={featuresData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}>
            <div className='relative h-full w-full'>
              <Image
                className='h-full'
                src={featuresData[index].imgSrc}
                alt='Features'
                fill
              />
            </div>
          </motion.div>
          <div className='flex flex-1 flex-col gap-24'>
            {featuresData.map((feature, featureIndex) => {
              return (
                <motion.div
                  key={featureIndex}
                  onViewportEnter={() => setIndex(featureIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 'all' }}
                  className='flex w-full items-center xl:h-[480px]'>
                  <div className='mx-auto w-[80vw] xl:mx-0 xl:w-auto'>
                    <h2 className='h2 mb-4'>{feature.title}</h2>
                    <p className='lead mb-8'>{feature.description}</p>
                    <div className='flex flex-col gap-5'>
                      {feature.highlights.map((highlight, highlightIndex) => {
                        return (
                          <div
                            key={highlightIndex}
                            className='flex items-center gap-4'>
                            <FaRegCheckCircle className='text-2xl text-accent_secondary' />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
