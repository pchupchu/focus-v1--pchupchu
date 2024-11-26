interface ButtonProps {
  btnText: string;
}

const ButtonTertiary = ({ btnText }: ButtonProps) => {
  return (
    <button className='group relative inline-flex min-w-[184px] items-center justify-center overflow-hidden rounded-full bg-[#0e1135] px-6 py-[18px] text-sm font-medium uppercase tracking-[1px] text-white shadow-xl transition duration-300 ease-out hover:bg-[#151a41]'>
      {btnText}
    </button>
  );
};

export default ButtonTertiary;
