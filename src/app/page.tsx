"use client";

import Button from "@/components/Button";
import FormInputs from "@/components/FormInputs";
import MessageBox from "@/components/messageBox";
import SocialLink from "@/components/SocialLinks";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
    setCheckStatus(undefined);
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
    } finally {
      setLoading(false);
    }
  };

  // const nameCheck = /^[ა-ჰA-Za-z\s'-]+$/.test(formData.name);
  // const emailCheck = formData.email.length > 0;

  // input checker

  return (
    <div
      className="flex flex-col items-center justify-center w-full  h-[100dvh]
    xl:py-[98px] 2xl:pt-[124px] 2xl:pb-[179px]
    px-4 md:px-[107px]"
    >
      <div className="flex gap-4 items-center smaller:py-8 justify-center pt-12 pb-16 md:pt-12 md:pb-16 2xl:pb-[64px]">
        <Image
          src="/BrightFlowLogo.svg"
          alt="Bright Flow"
          width={100}
          height={100}
          className="smaller:w-[23px] smaller:h-[29px] w-[29px] h-[35px] xl:w-[33px] xl:h-[39px] 2xl:w-[41px] 2xl:h-[49px]"
        />
        <h2
          className="text-white font-interDisplayBold smaller:text-xl line-height-auto text-2xl 
        xl:text-[28px] 2xl:text-[32px] 2xl:leading-[39px]"
        >
          BrightFlow
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 smaller:pb-8 pb-[3.375rem] xl:pb-[100px] 2xl:pb-[133px]">
        <p
          className="text-[#A0A2A6] font-notoSanRegular smaller:text-xs text-sm line-height-auto
          xl:text-base"
        >
          წინასწარი რეგისტრაცია დაიწყო!
        </p>
        <div className="smaller:flex flex-col justify-center items-center hidden">
          <h2 className="text-[#FFFFFF] font-notoSanSemiBold smaller:text-xl smaller:line-height-auto uppercase">
            გახდი ციფრული
          </h2>
          <h2 className="text-[#FFFFFF] font-notoSanSemiBold smaller:text-xl smaller:line-height-auto uppercase">
            პროდუქტების
          </h2>
          <h2 className="text-[#FFFFFF] font-notoSanSemiBold smaller:text-xl smaller:line-height-auto uppercase">
            საზოგადოების წევრი
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center smaller:hidden">
          <h2
            className="text-[#FFFFFF] font-notoSanBold line-height-auto text-2xl md:text-[28px] xl:text-[32px] xl:leading-[44px]
          2xl:text-[44px] 2xl:leading-[60px]"
          >
            გახდი ციფრული პროდუქტების
          </h2>
          <h2
            className="text-[#FFFFFF] font-notoSanBold line-height-auto text-2xl md:text-[28px] xl:text-[32px] xl:leading-[44px]
          2xl:text-[44px] 2xl:leading-[60px]"
          >
            საზოგადოების წევრი
          </h2>
        </div>
        <p
          className="text-[#A0A2A6] font-notoSanRegular smaller:text-xs line-height-auto text-sm
          uppercase"
        >
          და მოემზადე ახალი გამოცდილებისითვის
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center smaller:gap-3 smaller:pb-9 
        pb-[41px] min-h-[302px] xl:min-h-[179px] md:pb-[49px] xl:pb-[34px] 2xl:pb-[67px] xl:flex-col xl:gap-4
        w-full"
      >
        <span className="text-[#A0A2A6] text-xs line-height-auto font-notoSanRegular smaller:mb-0 mb-4 xl:mb-0">
          დასაწყისი - მაისი 2025
        </span>
        <div className="flex justify-center items-center w-full md:w-auto">
          <div
            className="flex flex-col justify-center items-center smaller:gap-4 xl:flex-row xl:gap-4
         smaller:h-[176px] h-[196px] xl:h-12 w-full"
          >
            <div className="w-full">
              <FormInputs
                name={formData.name}
                email={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="smaller:pb-0 pb-3 xl:pb-0 w-full">
              <Button
                text={loading === true ? <Spinner /> : "პრე-რეგისტრაცია"}
                className="w-full h-12 rounded-[8px] font-notoSanBold text-sm leading-[18px] text-[#FFFFFF] md:w-[530px]
               xl:w-[192px] 2xl:w-[190px] uppercase"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full 2xl:mt-2 ">
          <MessageBox checkStatus={checkStatus} email={email} />
        </div>
      </form>
      <div
        className="flex gap-4 xl:gap-[62px] 2xl:gap-[62px] w-full items-center md:justify-center justify-between md:w-[530px] 
      xl:w-[758px]"
      >
        <div
          className="w-full smaller:py-[12px] py-[13px] border-white/10 border-[1px] rounded-xl
        xl:border-none xl:py-0"
        >
          <SocialLink
            href="https://www.facebook.com/BrightFloow"
            src="/facebook.svg"
            alt="facebook"
            platform="Facebook"
          />
        </div>
        <div className="w-full smaller:py-[12px] py-[13px] border-white/10 border-[1px] rounded-xl xl:border-none xl:py-0">
          <SocialLink
            href="https://www.linkedin.com/company/brightfloow"
            src="/linkedin.svg"
            alt="linkedin"
            platform="Linkedin"
          />
        </div>
        <div className="w-full smaller:py-[12px] py-[13px] border-white/10 border-[1px] rounded-xl xl:border-none xl:py-0">
          <SocialLink
            href="https://www.instagram.com/"
            src="/instagram.svg"
            alt="instagram"
            platform="Instagram"
          />
        </div>
        <div className="w-full smaller:py-[12px] py-[13px] border-white/10 border-[1px] rounded-xl xl:border-none xl:py-0">
          <SocialLink
            href="https://discord.gg/9uNkMpqdwS"
            src="/discord.svg"
            alt="discord"
            platform="Discord"
          />
        </div>
      </div>
    </div>
  );
}
