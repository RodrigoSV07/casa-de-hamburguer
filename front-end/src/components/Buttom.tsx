type ButtomType = {
  title: string;
  variant: "default" | "Outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Buttom = ({ title, variant = "default", ...props }: ButtomType) => {
  const buttomVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] py-2 text-sm font-bold text-white";
    } else if (variant === "Outline") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white py-2 text-sm font-bold text-[#C92A0E]";
    }
  };

  return (
    <button {...props} className={buttomVariant()}>
      {title}
    </button>
  );
};

export default Buttom;
