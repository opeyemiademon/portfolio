import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")
const rotateY = plugin(function ({addUtilities}:any){
  addUtilities({
    '.rotate-y-180':{
      transform:'rotateY(180deg)'
    },
    '.-rotate-y-180':{
      transform:'rotateY(-180deg)'
    }
  })
})
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
        "color-primary":"#01051e",
        "color-primary-light":"#020726",
        "color-primary-dark":"#010417",
        "color-secondary":"#ff7d3b",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blob":"#A427DF",

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
  plugins: [rotateY],
};
export default config;
