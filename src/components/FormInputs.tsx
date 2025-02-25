import React from "react";

type FormInputsProps = {
  name: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInputs: React.FC<FormInputsProps> = ({ name, email, onChange }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 w-full">
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="სახელი და გვარი"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] w-full h-[48px] md:w-[530px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] text-xs leading-[18px] 
        p-y-[15px] pl-[12px] 
        xl:w-[269px] 
        hover:outline hover:outline-[1px] hover:outline-[#555555 ] 
        focus:ring-0 focus:outline focus:outline-[1px] focus:border-transparent
        focus:outline-[#4397F7] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 xl:mb-0
        `}
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        placeholder="თქვენი ელ.ფოსტა"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] w-full h-[48px] md:w-[530px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] p-y-[15px] pl-[12px] 
        xl:w-[269px] text-xs leading-[18px]
        hover:outline hover:outline-[1px] hover:outline-[#555555 ] 
        focus:ring-0 focus:outline focus:outline-[1px] focus:border-transparent
        focus:outline-[#4397F7] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 mb-6 xl:mb-0
        `}
      />
    </div>
  );
};

export default FormInputs;
