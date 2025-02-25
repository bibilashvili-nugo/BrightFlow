import React, { ReactNode } from "react";

interface ButtonProps {
  text: string | ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#0766FF] h-12 rounded-[8px] font-semibold text-sm text-white
         hover:bg-[#0054DA] focus:bg-[#0766FF] focus:ring-[3px] focus:ring-white 
         focus:ring-opacity-10 active:bg-[#0049BE] ${className} smaller:w-full`}
    >
      {text}
    </button>
  );
};

export default Button;
