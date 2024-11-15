import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors")
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px'

    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    }, 
    fontFamily:{
      oswald: ['Oswald', 'sans-serif'],
      dmsans:['DM Sans', 'sans-serif']
    },
    extend: {

      /* colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:colors.green,
        secondary:colors.yellow
      }, */
      darkMode: 'class',
      colors:{
        primaryColor:'#010a5e',
        primaryColorLight:'#010d78',
        secondaryColor:'#FFCC00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717'
 
      },
      keyframes:{
        move:{
          "50%":{transform:'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
