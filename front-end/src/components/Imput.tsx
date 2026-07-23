const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-87.5 rounded-md border border-gray-400 bg-white px-2 py-3 text-xs text-[#32343E] placeholder-[#32343E] outline-none"
    />
  );
};

export default Input;
