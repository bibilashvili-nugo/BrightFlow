import React from "react";

interface ButtonProps {
  text: string;
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
      className={`bg-[#002FEF] h-12 rounded-[8px] font-semibold text-sm text-white
         hover:bg-[#042BCE] focus:bg-[#002FEF] focus:ring-[3px] focus:ring-white 
         focus:ring-opacity-10 active:bg-[#0426B5] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
