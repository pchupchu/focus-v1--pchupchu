import ButtonSecondary from './ButtonSecondary';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-10 flex h-20 items-center bg-black/20 backdrop-blur-2xl'>
      <div className='container flex items-center justify-between px-6 xl:px-0'>
        <Logo />
        <ButtonSecondary btnText='Get started' />
      </div>
    </header>
  );
};

export default Header;
