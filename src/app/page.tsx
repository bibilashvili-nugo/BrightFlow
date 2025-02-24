"use client";

import Button from "@/components/Button";
import FormInputs from "@/components/FormInputs";
import MessageBox from "@/components/messageBox";
import SocialLink from "@/components/SocialLinks";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  // const [status, setStatus] = useState<string>("");
  const [checkStatus, setCheckStatus] = useState<boolean | undefined>(
    undefined
  );
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(formData.email);
    // setStatus("Sending...");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      // const data = await res.json();
      if (res.ok) {
        // setStatus("Thank you for signing up!");
        setFormData({ name: "", email: "" });
        setCheckStatus(true);
      } else {
        // setStatus(`Error: ${data.error}`);
        setCheckStatus(false);
      }
    } catch (error) {
      console.error(error);
      // setStatus("An unexpected error occurred.");
      setCheckStatus(false);
    }
  };

  // const nameCheck = /^[ა-ჰA-Za-z\s'-]+$/.test(formData.name);
  // const emailCheck = formData.email.length > 0;

  // input checker

  return (
    <div
      className="flex flex-col items-center justify-center w-full md:pt-[76px] md:pb-[98px] 
    xl:py-[98px] 2xl:pt-[124px] 2xl:pb-[179px]
    smaller:pt-[32px] smaller:pb-6 px-4 pt-[76px] pb-[98px]"
    >
      <div className="flex smaller:gap-4 items-center smaller:pb-14 justify-center gap-5 pb-[76px] md:pb-16 xl:pb-[86px] 2xl:pb-[98px]">
        <Image
          src="/BrightFlowLogo.svg"
          alt="Bright Flow"
          width={100}
          height={100}
          className="smaller:w-[23px] smaller:h-[29px] w-[29px] h-[35px] xl:w-[41px] xl:h-[49px] 2xl:w-[41px] 2xl:h-[49px]"
        />
        <span
          className="text-white font-notoSanBold smaller:text-xl line-height-auto text-2xl 
        xl:text-[32px] 2xl:text-[32px] 2xl:leading-[39px]"
        >
          BrightFlow
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 smaller:pb-11 pb-[76px] md:pb-[84px] xl:pb-[98px]">
        <p
          className="text-[#A0A2A6] font-notoSanLight text-sm line-height-auto
          xl:text-[20px] "
        >
          წინასწარი რეგისტრაცია დაიწყო!
        </p>
        <div className="smaller:flex flex-col justify-center items-center hidden">
          <span className="text-[#FFFFFF] font-notoSanBold smaller:text-xl smaller:line-height-auto">
            გახდი ციფრული
          </span>
          <span className="text-[#FFFFFF] font-notoSanBold smaller:text-xl smaller:line-height-auto">
            პროდუქტების
          </span>
          <span className="text-[#FFFFFF] font-notoSanBold smaller:text-xl smaller:line-height-auto">
            საზოგადოების წევრი
          </span>
        </div>
        <div className="flex flex-col justify-center items-center smaller:hidden">
          <span className="text-[#FFFFFF] font-notoSanBold line-height-auto text-2xl md:text-[32px] xl:text-[44px] xl:leading-[54px]">
            გახდი ციფრული პროდუქტების
          </span>
          <span className="text-[#FFFFFF] font-notoSanBold line-height-auto text-2xl md:text-[32px] xl:text-[44px] xl:leading-[54px]">
            საზოგადოების წევრი
          </span>
        </div>
        <div className="smaller:flex flex-col hidden">
          <p className="text-[#A0A2A6] text-sm font-notoSanLight line-height-auto">
            და მოემზადე ახალი
          </p>
          <p className="text-[#A0A2A6] text-sm font-notoSanLight line-height-auto">
            გამოცდილებისითვის
          </p>
        </div>
        <p className="smaller:hidden block text-[#A0A2A6] text-sm font-notoSanLight line-height-auto xl:text-base">
          და მოემზადე ახალი გამოცდილებისითვის
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center smaller:gap-[15px] smaller:pb-[50px] pb-[76px] min-h-[307px] xl:min-h-[179px] md:pb-[60px] xl:pb-[89px] xl:flex-col xl:gap-[16px]"
      >
        <p className="text-[#A0A2A6] smaller:text-xs text-sm line-height-auto font-innerDisplayRegular smaller:mb-0 mb-4 xl:mb-0">
          დასაწყისი - მაისი 2025
        </p>
        <div
          className="flex flex-col justify-center items-center smaller:gap-4 xl:flex-row xl:gap-4
         smaller:h-auto h-[217px] xl:h-12"
        >
          <FormInputs
            name={formData.name}
            email={formData.email}
            onChange={handleChange}
          />
          <div className="smaller:pb-0 pb-4 xl:pb-0">
            <Button
              text="პრე-რეგისტრაცია"
              className="smaller:w-[288px] h-12 rounded-[8px] font-notoSanBold smaller:text-sm smaller:leading-[18px] text-[#FFFFFF]
             w-[448px] md:w-[530px] xl:w-[194px] "
            />
          </div>
        </div>
        <div className="smaller:hidden block h-[74px] 2xl:mt-2">
          <MessageBox checkStatus={checkStatus} email={email} />
        </div>
      </form>
      {/* {status && <p className="text-white mt-4">{status}</p>} */}
      <div className="flex gap-4 xl:gap-[40px] 2xl:gap-[62px]">
        <SocialLink
          href="https://www.facebook.com/BrightFloow"
          src="/facebook.svg"
          alt="facebook"
          platform="Facebook"
        />
        <SocialLink
          href="https://www.linkedin.com/company/brightfloow"
          src="/linkedin.svg"
          alt="linkedin"
          platform="Linkedin"
        />
        <SocialLink
          href="https://www.instagram.com/"
          src="/instagram.svg"
          alt="instagram"
          platform="Instagram"
        />
        <SocialLink
          href="https://discord.gg/9uNkMpqdwS"
          src="/discord.svg"
          alt="discord"
          platform="Discord"
        />
      </div>
    </div>
  );
}
