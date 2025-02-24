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
        className="flex items-center justify-center smaller:py-[13px] smaller:px-[18px] px-[38px] py-[13px] md:px-12 border-white/10 border-[1px] 
      smaller:rounded-xl rounded-lg  xl:border-none xl:w-auto xl:gap-3"
      >
        <Image src={src} alt={alt} width={24} height={24} className="" />
        <div className="xl:flex xl:flex-col xl:justify-between hidden">
          <p className="text-[#A0A2A6] hidden xl:block xl:text-xs">
            {platform}
          </p>
          <p className="text-white text-sm font-semibold 2xl:text-base">
            @BrightFlow
          </p>
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
