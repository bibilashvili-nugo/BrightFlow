import Image from "next/image";

type SocialLinkProps = {
  href: string;
  src: string;
  alt: string;
  platform: string;
};

const SocialLink = ({ href, src, alt, platform }: SocialLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        // smaller:py-[12px] smaller:px-[20px] px-[38px] py-[13px] border-white/10 border-[1px] rounded-xl
        className="flex items-center justify-center md:px-12 
       xl:border-none xl:w-auto xl:gap-3 xl:px-0 xl:py-0"
      >
        <Image
          src={src}
          alt={alt}
          width={20}
          height={20}
          className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]"
        />
        <div className="xl:flex xl:flex-col xl:justify-between hidden">
          <p className="text-[#A0A2A6] hidden xl:block xl:text-xs xl:leading-[18px] font-interDisplaySemiBold">
            {platform}
          </p>
          <p className="text-white font-semibold xl:text-base xl:leading-[18px] 2xl:text-base font-interDisplaySemiBold">
            @BrightFlow
          </p>
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
