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
      <div className="flex gap-3 items-center justify-center smaller:w-[288px] h-[40px] border-white/10 border-[1px] rounded-lg w-[332px] md:w-[529px] xl:border-none xl:w-auto xl:gap-3">
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="xl:w-8 xl:h-8"
        />
        <div className="xl:flex xl:flex-col xl:justify-between">
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
