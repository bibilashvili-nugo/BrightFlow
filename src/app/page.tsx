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
      className="flex flex-col items-center justify-center w-full md:pt-[104px] md:pb-[43px] 
    xl:pt-[181px] xl:pb-[179px] 2xl:pt-[233px]
    smaller:pt-[32px] smaller:pb-6 px-4 pt-[76px] pb-[98px]"
    >
      <div className="flex smaller:gap-4 items-center smaller:pb-14 justify-center gap-5 pb-[76px] md:pb-[62px] xl:pb-[68px] 2xl:pb-[92px]">
        <Image
          src="/BrightFlowLogo.svg"
          alt="Bright Flow"
          width={100}
          height={100}
          className="smaller:w-[23px] smaller:h-[29px] w-[29px] h-[35px] xl:w-[33px] xl:h-[39px] 2xl:w-[41px] 2xl:h-[49px]"
        />
        <span
          className="text-white font-innerDisplayBold smaller:text-xl line-height-auto text-2xl 
        xl:text-[28px] 2xl:text-[32px] 2xl:leading-[39px]"
        >
          BrightFlow
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 smaller:pb-11 pb-[76px] md:gap-8 md:pb-[72px] xl:pb-[92px]">
        <p
          className="text-[#A0A2A6] font-innerDisplayLight text-sm line-height-auto
            md:text-[28px] md:leading-[34px] xl:text-[40px] xl:leading-[48px]
          2xl:text-[44px] 2xl:leading-[53px]"
        >
          წინასწარი რეგისტრაცია დაიწყო!
        </p>
        <div className="smaller:flex flex-col justify-center items-center hidden">
          <span className="text-[#FFFFFF] font-innerDisplayBold smaller:text-xl smaller:line-height-auto">
            გახდი ციფრული
          </span>
          <span className="text-[#FFFFFF] font-innerDisplayBold smaller:text-xl smaller:line-height-auto">
            პროდუქტების
          </span>
          <span className="text-[#FFFFFF] font-innerDisplayBold smaller:text-xl smaller:line-height-auto">
            საზოგადოების წევრი
          </span>
        </div>
        <div className="flex flex-col justify-center items-center smaller:hidden">
          <span className="text-[#FFFFFF] font-innerDisplayBold line-height-auto text-2xl">
            გახდი ციფრული პროდუქტების
          </span>
          <span className="text-[#FFFFFF] font-innerDisplayBold line-height-auto text-2xl">
            საზოგადოების წევრი
          </span>
        </div>
        <div className="smaller:flex flex-col hidden">
          <p className="text-[#A0A2A6] text-sm font-innerDisplayLight line-height-auto">
            და მოემზადე ახალი
          </p>
          <p className="text-[#A0A2A6] text-sm font-innerDisplayLight line-height-auto">
            გამოცდილებისითვის
          </p>
        </div>
        <p className="smaller:hidden block text-[#A0A2A6] text-sm font-innerDisplayLight line-height-auto">
          და მოემზადე ახალი გამოცდილებისითვის
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center smaller:gap-[15px] smaller:pb-[50px] pb-[76px] min-h-[307px] md:pb-[62px] xl:flex-col xl:gap-[16px] xl:pb-9"
      >
        <p className="text-[#A0A2A6] smaller:text-xs text-sm line-height-auto font-innerDisplayRegular smaller:mb-0 mb-4">
          დასაწყისი - მაისი 2025
        </p>
        <div className="flex flex-col justify-center items-center smaller:gap-4 xl:flex-row smaller:h-auto h-[217px]">
          <FormInputs
            name={formData.name}
            email={formData.email}
            onChange={handleChange}
          />
          <div className="smaller:pb-0 pb-4">
            <Button
              text="პრე-რეგისტრაცია"
              className="smaller:w-[288px] h-12 rounded-[8px] font-innerDisplaySemiBold smaller:text-sm smaller:leading-[18px] text-[#FFFFFF]
             w-[448px] md:w-[530px] xl:w-[150px] "
            />
          </div>
        </div>
        <div className="smaller:hidden block h-[74px]">
          <MessageBox checkStatus={checkStatus} email={email} />
        </div>
      </form>
      {/* {status && <p className="text-white mt-4">{status}</p>} */}
      <div className="flex gap-4">
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
