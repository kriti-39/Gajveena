/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        body: ["Arial", "serif"], 
      },
      colors: {
        offwhite: '#f8f8f8',
        yellowTint:  '#f9e7c2',
      },
      keyframes: {
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "50%" }, // increase width here as needed
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        lineGrow: "lineGrow 2s forwards",
        fadeInUp: "fadeInUp 1.5s ease-out forwards",
        fadeInDown: "fadeInDown 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
