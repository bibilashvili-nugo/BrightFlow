"use clinet";

import Image from "next/image";
import { useState } from "react";

interface Status {
  checkStatus: boolean | undefined;
  email: string;
}

export default function MessageBox({ checkStatus, email }: Status) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  if (checkStatus === undefined || !isVisible) return null;

  if (checkStatus) {
    return (
      <div className="text-white w-[386px] border border-[#D5FE00] border-opacity-20 rounded-xl pl-4 py-4 pr-[18px]">
        <div className="flex justify-between place-items-start">
          <Image
            src="/Circle_Check.png"
            alt="circus check"
            width={24}
            height={24}
          />
          <span className="text-sm text-[#A0A2A6] w-[284px]">
            {`We've added ${email} to our waitlist. We'll let you know when
            BrightFlow is ready`}
          </span>
          <Image
            src="/Close_SM.png"
            alt="close button"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  } else {
    return <div className="text-white">beqaia</div>;
  }
}
