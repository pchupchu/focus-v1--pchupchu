interface ButtonProps {
  btnText: string;
}

const ButtonSecondary = ({ btnText }: ButtonProps) => {
  return (
    <button className='group relative inline-flex min-w-[154px] items-center justify-center overflow-hidden rounded-full px-4 py-3 font-medium shadow-xl transition duration-300 ease-out xl:min-w-40 xl:py-[15px]'>
      <span className='absolute inset-0 h-full w-full bg-gradient-to-br from-accent via-accent_secondary to-accent'></span>
      <span className='ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-[#cb52ff] opacity-30 transition duration-500 group-hover:rotate-90'></span>
      <span className='relative text-sm uppercase tracking-[1px] text-white'>
        {btnText}
      </span>
    </button>
  );
};

export default ButtonSecondary;
