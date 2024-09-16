const Button = ({ handleClick, isDisable, text, isFull, isWidth }) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisable}
      className={`px-6 py-[10px] rounded-full font-semibold text-base font-mulish text-nowrap transition-all duration-300 scale-1 hover:scale-[1.025] ${
        !isDisable
          ? isFull
            ? "bg-secondary text-white"
            : "border border-secondary text-secondary"
          : `text-[#A1A1AA] cursor-not-allowed bg-[#F4F4F5]`
      } ${isWidth ? "w-full" : "w-fit"}`}
    >
      {text}
    </button>
  );
};

export default Button;
