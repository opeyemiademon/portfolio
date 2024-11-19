import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily:{
      grotesk: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      colors: {
        "color-primary":"#B9FF66",
        "color-dark":"#191A23",
        "color-grey":"#F3F3F3",
        "color-white":"#FFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
