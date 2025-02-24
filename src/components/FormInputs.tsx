import React from "react";

type FormInputsProps = {
  name: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInputs: React.FC<FormInputsProps> = ({ name, email, onChange }) => {
  return (
    <>
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="სახელი და გვარი"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] p-y-[15px] pl-[12px] 
        w-[332px] md:w-[530px] xl:w-[269px] 
        hover:outline hover:outline-[2px] hover:outline-[#A0A2A6] 
        focus:ring-0 focus:outline focus:outline-[2px] focus:border-transparent
        focus:outline-[#002FEF] focus:outline-offset-[0px] transition-colors duration-300
        `}
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        placeholder="თქვენი ელ.ფოსტა"
        className={`rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
        placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] text-[#A0A2A6] p-y-[15px] pl-[12px] 
        w-[332px] md:w-[530px] xl:w-[269px] 
        hover:outline hover:outline-[2px] hover:outline-[#A0A2A6] 
        focus:ring-0 focus:outline focus:outline-[2px] focus:border-transparent
        focus:outline-[#002FEF] focus:outline-offset-[0px] transition-colors duration-300
        `}
      />
    </>
  );
};

export default FormInputs;
