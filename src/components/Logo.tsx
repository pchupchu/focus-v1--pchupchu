import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='logo' width={148} height={22} />
    </Link>
  );
};

export default Logo;
