interface ButtonProps {
  btnText: string;
}

const ButtonSecondary = ({ btnText }: ButtonProps) => {
  return (
    <button className='group relative inline-flex min-w-40 items-center justify-center overflow-hidden rounded-full px-6 py-[15px] font-medium shadow-xl transition duration-300 ease-out'>
      <span className='from-accent via-accent_secondary to-accent absolute inset-0 h-full w-full bg-gradient-to-br'></span>
      <span className='ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-[#cb52ff] opacity-30 transition duration-500 group-hover:rotate-90'></span>
      <span className='relative text-sm uppercase tracking-[1px] text-white'>
        {btnText}
      </span>
    </button>
  );
};

export default ButtonSecondary;
