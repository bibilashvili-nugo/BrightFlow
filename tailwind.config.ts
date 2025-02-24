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
        innerDisplayRegular: ["InerDisplay-regular"],
        innerDisplayLight: ["InerDisplay-light"],
        innerDisplayMedium: ["InterDisplay-medium"],
        innerDisplayBold: ["InterDisplay-bold"],
        innerDisplaySemiBold: ["InterDisplay-SemiBold"],
      },
    },
  },
  plugins: [],
} satisfies Config;
