'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeInOnScroll, fadeInUpSpring } from '@/motion/motionVariants';

import Button from './Button';

const icons = [
  {
    src: '/integrations/notion.svg',
    name: 'Notion',
  },
  {
    src: '/integrations/slack.svg',
    name: 'Slack',
  },
  {
    src: '/integrations/google_drive.svg',
    name: 'Google Drive',
  },
  {
    src: '/integrations/intercom.svg',
    name: 'Intercom',
  },
  {
    src: '/integrations/jira.svg',
    name: 'Jira',
  },
  {
    src: '/integrations/dropbox.svg',
    name: 'Dropbox',
  },
  {
    src: '/integrations/stripe.svg',
    name: 'Stripe',
  },
  {
    src: '/integrations/zapier.svg',
    name: 'Zapier',
  },
  {
    src: '/integrations/figma.svg',
    name: 'Figma',
  },
  {
    src: '/integrations/confluence.svg',
    name: 'Confluence',
  },
  {
    src: '/integrations/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    src: '/integrations/whatsapp.svg',
    name: 'Whatsapp',
  },
  {
    src: '/integrations/discord.svg',
    name: 'Discord',
  },
  {
    src: '/integrations/bitbucket.svg',
    name: 'Bitbucket',
  },
  {
    src: '/integrations/invision.svg',
    name: 'InVision',
  },
  {
    src: '/integrations/evernote.svg',
    name: 'Evernote',
  },
  {
    src: '/integrations/g-calendar.svg',
    name: 'Google Calendar',
  },
];

const iconAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Integrations = () => {
  return (
    <section className='min-h-[720px] py-24 xl:mt-32 xl:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-16'>
        <motion.div
          className='text-center'
          variants={fadeInOnScroll({ duration: 0.2, delay: 0.6 })}
          initial='hidden'
          whileInView='visible'>
          <h2 className='h2 mb-3 capitalize'>Unified workflows</h2>
          <p className='lead'>
            Integrate with top apps to create a seamless, connected experience.
          </p>
        </motion.div>
        <div className='mb-8 flex w-full max-w-5xl flex-wrap place-content-center gap-8'>
          {icons.map((icon, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                variants={iconAnimation}
                initial='initial'
                whileInView='animate'>
                <Image src={icon.src} alt={icon.name} width={80} height={80} />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={fadeInUpSpring({ duration: 0.6, delay: 0.8 })}
          initial='hidden'
          whileInView='visible'>
          <Button btnText='See all' />
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
