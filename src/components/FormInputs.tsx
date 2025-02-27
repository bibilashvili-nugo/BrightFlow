import React from "react";

type FormInputsProps = {
  name: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

const FormInputs: React.FC<FormInputsProps> = ({
  name,
  email,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 w-full">
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="სახელი და გვარი"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#1D1D1D] w-full h-[48px] md:w-[530px]
        placeholder:text-[#A0A2A6] placeholder:font-notoSanMedium placeholder:text-[12px] font-notoSanMedium text-[#A0A2A6] text-base leading-[18px] 
        p-y-[15px] pl-[12px] 
        xl:w-[269px] 
        focus:ring-0 focus:outline focus:outline-[1px] focus:border-transparent
        focus:outline-[#4397F7] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 xl:mb-0 ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:outline hover:outline-[1px] hover:outline-[#505050]"
        }
        `}
        disabled={disabled}
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        placeholder="თქვენი ელ.ფოსტა"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#1D1D1D] w-full h-[48px] md:w-[530px]
        placeholder:text-[#A0A2A6] placeholder:font-notoSanMedium placeholder:text-[12px] font-notoSanMedium text-[#A0A2A6] p-y-[15px] pl-[12px] 
        xl:w-[269px] text-base leading-[18px]
        focus:ring-0 focus:outline focus:outline-[1px] focus:border-transparent
        focus:outline-[#4397F7] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 mb-6 xl:mb-0 ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:outline hover:outline-[1px] hover:outline-[#505050]"
        }
        `}
        disabled={disabled}
      />
    </div>
  );
};

export default FormInputs;
