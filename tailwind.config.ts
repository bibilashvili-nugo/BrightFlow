import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        tiny: { max: "319px" },
        smaller: { min: "320px", max: "479px" },
      },
      fontFamily: {
        brainMelt: ["brainMelt"],
        notoSanLight: ["NotoSansGeorgian-Light"],
        notoSanMedium: ["NotoSansGeorgian-Medium"],
        notoSanBold: ["NotoSansGeorgian-Bold"],
        notoSanSemiBold: ["NotoSansGeorgian-SemiBold"],
        notoSanRegular: ["NotoSansGeorgian-Regular"],
        interDisplayBold: ["InterDisplay-Bold"],
        interDisplaySemiBold: ["InterDisplay-SemiBold"],
      },
    },
  },
  plugins: [],
} satisfies Config;
