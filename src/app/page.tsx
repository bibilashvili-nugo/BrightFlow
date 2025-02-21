"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Thank you for signing up!");
        setFormData({ name: "", email: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("An unexpected error occurred.");
    }
  };

  return (
    <div
      className="flex flex-col smaller:py-8 items-center justify-center h-full w-full pt-[149px] pb-[14px] md:pt-[104px] md:pb-[43px] 
    xl:pt-[181px] xl:pb-[179px] 2xl:pt-[233px]"
    >
      <div className="flex smaller:gap-4 items-center smaller:pb-8 justify-center gap-5 pb-12 md:pb-[62px] xl:pb-[68px] 2xl:pb-[92px]">
        <Image
          src="/BrightFlowLogo.svg"
          alt="Bright Flow"
          width={100}
          height={100}
          className="smaller:w-[23px] smaller:h-[29px] w-[29px] h-[35px] xl:w-[33px] xl:h-[39px] 2xl:w-[41px] 2xl:h-[49px]"
        />
        <span className="text-white font-bold smaller:text-xl text-2xl xl:text-[28px] 2xl:text-[32px] 2xl:leading-[39px]">
          BrightFlow
        </span>
      </div>
      <div className="flex flex-col items-center justify-center smaller:gap-3 gap-6 smaller:pb-10 pb-[92px] md:gap-8 md:pb-[72px] xl:pb-[92px]">
        <div className="flex flex-col items-center justify-center">
          <p
            className="text-[#A0A2A6] font-normal smaller:text-xl text-2xl md:text-[28px] xl:text-[40px] xl:leading-[48px]
          2xl:text-[44px] 2xl:leading-[53px]"
          >
            Join the waitlist for
          </p>
          <h1
            className="bg-gradient-to-r from-[#C0CEFF] to-[#FF6D35] bg-clip-text text-transparent smaller:text-xl font-bold text-2xl
          md:text-[28px] xl:text-[40px] xl:leading-[48px] 2xl:text-[44px] 2xl:leading-[53px]"
          >
            The Digital Product Community
          </h1>
        </div>
        <p className="text-[#A0A2A6] text-sm font-normal xl:text-base 2xl:text-[24px] 2xl:leading-[29px]">
          Illuminating the Path to Tomorrow
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 smaller:pb-10 pb-[58px] md:pb-[62px] xl:flex-col xl:gap-[16px] xl:pb-[92px]"
      >
        <div className="hidden xl:block">
          <p className="text-[#A0A2A6] font-normal xl:text-[13px] 2xl:text-base">
            Launching in May 2025
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 xl:flex-row">
          <p className="text-[#A0A2A6] font-normal text-xs xl:hidden">
            Launching in May 2025
          </p>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
            placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] p-y-[15px] pl-[12px] focus:ring-0 focus:outline-none
            w-[332px] md:w-[530px] xl:w-[269px]"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@email.com"
            className="rounded-[8px] border border-white border-opacity-10 bg-[#2B2B2B] smaller:w-[288px] h-[48px]
            placeholder:text-[#A0A2A6] placeholder:font-medium placeholder:text-[12px] p-y-[15px] pl-[12px] focus:ring-0 focus:outline-none
            w-[332px] md:w-[530px] xl:w-[269px]"
          />
          <button
            type="submit"
            className="bg-[#002FEF] h-12 rounded-[8px] font-semibold text-sm text-white xl:w-[150px] hidden xl:block hover:bg-[#042BCE]
            focus:bg-[#002FEF] focus:ring-[3px] focus:ring-white focus:ring-opacity-10 active:bg-[0426B5]"
          >
            Join the waitlist
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#002FEF] smaller:w-[288px] h-12 rounded-[8px] font-semibold text-sm text-white
        w-[332px] md:w-[530px] xl:w-[150px] xl:hidden"
        >
          Join the waitlist
        </button>
      </form>
      {status && <p className="text-white mt-4">{status}</p>}
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-10 2xl:gap-[62px]">
        <a href="https://www.facebook.com/BrightFloow" target="_blank">
          <div
            className="flex gap-3 items-center justify-center smaller:w-[288px] h-[40px] border-white/10 border-[1px] rounded-lg
        w-[332px] md:w-[529px] xl:border-none xl:w-auto xl:gap-3"
          >
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
              className="xl:w-8 xl:h-8"
            />
            <div className="xl:flex xl:flex-col xl:justify-between">
              <p className="text-[#A0A2A6] hidden xl:block xl:text-xs">
                Facebook
              </p>
              <p className="text-white text-sm font-semibold 2xl:text-base">
                @BrightFlow
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/brightfloow" target="_blank">
          <div
            className="flex gap-3 items-center justify-center smaller:w-[288px] h-[40px] border-white/10 border-[1px] rounded-lg
        w-[332px] md:w-[529px] xl:border-none xl:w-auto xl:gap-3"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
              className="xl:w-8 xl:h-8"
            />
            <div className="xl:flex xl:flex-col xl:justify-between">
              <p className="text-[#A0A2A6] hidden xl:block xl:text-xs">
                Linkedin
              </p>
              <p className="text-white text-sm font-semibold 2xl:text-base">
                @BrightFlow
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <div
            className="flex gap-3 items-center justify-center smaller:w-[288px] h-[40px] border-white/10 border-[1px] rounded-lg
        w-[332px] md:w-[529px] xl:border-none xl:w-auto xl:gap-3"
          >
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className="xl:w-8 xl:h-8"
            />

            <div className="xl:flex xl:flex-col xl:justify-between">
              <p className="text-[#A0A2A6] hidden xl:block xl:text-xs">
                Instagram
              </p>
              <p className="text-white text-sm font-semibold 2xl:text-base">
                @BrightFlow
              </p>
            </div>
          </div>
        </a>
        <a href="https://discord.gg/9uNkMpqdwS" target="_blank">
          <div
            className="flex gap-3 items-center justify-center smaller:w-[288px] h-[40px] border-white/10 border-[1px] rounded-lg
           w-[332px] md:w-[529px] xl:border-none xl:w-auto xl:gap-3"
          >
            <Image
              src="/discord.svg"
              alt="discord"
              width={24}
              height={24}
              className="xl:w-8 xl:h-8"
            />
            <div className="xl:flex xl:flex-col xl:justify-between">
              <p className="text-[#A0A2A6] hidden xl:block xl:text-xs">
                Discord
              </p>
              <p className="text-white text-sm font-semibold 2xl:text-base">
                @BrightFlow
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
