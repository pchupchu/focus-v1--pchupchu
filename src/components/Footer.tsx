import Image from 'next/image';
import Link from 'next/link';

import Logo from './Logo';

const icons = [
  {
    src: '/footer/1.svg',
    alt: 'twitter',
    href: 'https://twitter.com/focusapp',
  },
  {
    src: '/footer/2.svg',
    alt: 'linkedin',
    href: 'https://linkedin.com/focusapp',
  },
  {
    src: '/footer/3.svg',
    alt: 'facebook',
    href: 'https://facebook.com/focusapp',
  },
  {
    src: '/footer/4.svg',
    alt: 'github',
    href: 'https://github.com/focusapp',
  },
  {
    src: '/footer/5.svg',
    alt: 'dribble',
    href: 'https://dribble.com/focusapp',
  },
  {
    src: '/footer/6.svg',
    alt: 'dribble',
    href: 'https://dribble.com/focusapp',
  },
  {
    src: '/footer/7.svg',
    alt: 'twitter',
    href: 'https://twitter.com/focusapp',
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#10112f] py-24'>
      <div className='container'>
        <div className='grid grid-cols-1 justify-items-center gap-12 xl:grid-cols-3'>
          <div className='flex gap-8 justify-self-start'>
            {icons.map((icon, index) => {
              return (
                <Link key={index} href={icon.href}>
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </Link>
              );
            })}
          </div>
          <Logo />
          <p className='justify-self-end font-light'>
            &copy; 2024 Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
