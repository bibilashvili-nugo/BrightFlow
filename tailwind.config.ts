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
        innerDisplayRegular: ["InterDisplay-regular"],
        notoSanLight: ["NotoSansGeorgian_Condensed-Light"],
        notoSanMedium: ["NotoSansGeorgian_Condensed-Medium"],
        notoSanBold: ["NotoSansGeorgian_Condensed-Bold"],
        notoSanSemiBold: ["NotoSansGeorgian_Condensed-SemiBold"],
      },
    },
  },
  plugins: [],
} satisfies Config;
