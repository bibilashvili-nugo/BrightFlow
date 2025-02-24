import React from "react";

type FormInputsProps = {
  name: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInputs: React.FC<FormInputsProps> = ({ name, email, onChange }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-4">
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="სახელი და გვარი"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] p-y-[15px] pl-[12px] 
        w-[448px] md:w-[530px] xl:w-[269px] 
        hover:outline hover:outline-[2px] hover:outline-[#A0A2A6] 
        focus:ring-0 focus:outline focus:outline-[2px] focus:border-transparent
        focus:outline-[#002FEF] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 mb-4 xl:mb-0
        `}
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        placeholder="თქვენი ელ.ფოსტა"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] p-y-[15px] pl-[12px] 
        w-[448px] md:w-[530px] xl:w-[269px] 
        hover:outline hover:outline-[2px] hover:outline-[#A0A2A6] 
        focus:ring-0 focus:outline focus:outline-[2px] focus:border-transparent
        focus:outline-[#002FEF] focus:outline-offset-[0px] transition-colors duration-300
        smaller:mb-0 mb-6 xl:mb-0
        `}
      />
    </div>
  );
};

export default FormInputs;
