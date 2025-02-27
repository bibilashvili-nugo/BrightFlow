"use clinet";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Status {
  checkStatus: boolean | undefined;
  email: string;
}

export default function MessageBox({ checkStatus, email }: Status) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (checkStatus !== undefined && (checkStatus || !checkStatus)) {
      setIsVisible(true);
    }
  }, [checkStatus]);

  if (checkStatus === undefined || !isVisible) return null;

  if (checkStatus) {
    return (
      <div
        className="w-full xl:w-[588px] xl:min-h-[56px] 2xl:w-[614px] h-[74px] border border-[#D5FE00] border-opacity-20 rounded-xl py-4 pl-4 pr-12 md:w-[530px]
      "
      >
        <div className="flex justify-between place-items-start gap-3">
          <Image
            src="/Circle_Check.png"
            alt="circus check"
            width={24}
            height={24}
          />
          <span className="text-xs leading-[21px] text-[#A0A2A6]  min-h-[22px]">
            {`შენი ელ.ფოსტა `}
            <span className="text-white text-xs leading-[21px]">{email}</span>
            {` დამატებულია ჩვენს მოლოდინის სიაში!`}
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
    return (
      <div className="w-full md:w-[530px] xl:w-[588px] 2xl:w-[614px] h-[56px] border border-[#FD411B] border-opacity-20 rounded-xl pl-4 py-4 pr-[18px]">
        <div className="flex justify-between place-items-start gap-3">
          <div className="flex gap-3">
            <Image
              src="/allerts.png"
              alt="circus check"
              width={24}
              height={24}
            />
            <span className="text-xs leading-[21px] text-[#A0A2A6] w-[384px] font-notoSanRegular">
              {`შენს მიერ შეყვენილი მონაცემები არასწორია!`}
            </span>
          </div>
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
  }
}
