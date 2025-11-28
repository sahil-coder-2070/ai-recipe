const Button = ({ btnname }) => {
  return (
    <button className=" cursor-pointer hover:-translate-y-0.75 transition-transform duration-200 bg-neutral-900 rounded-2xl text-neutral-100 text-sm sm:text-base  shadow-neutral-400 shadow-md py-1 px-6  border-neutral-400  border">
      {btnname}
    </button>
  );
};

export default Button;
