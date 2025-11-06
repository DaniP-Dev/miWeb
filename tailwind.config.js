/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        // Semantic palette (coherent light/dark pairing)
        dark: "#0f1724",        // deep navy-black for backgrounds
        light: "#68ABAD",       // soft pastel blue background (not pure white)
        primary: "#4f7bff",     // shared blue accent used across both modes
        primaryDark: "#7fb0ff", // lighter/cooler primary used on dark backgrounds
        lightGreen: "#7ef0c8",  // mint/cyan accent for highlights
        slideGreen: "#2bc38a",  // vibrant green for gradients and text effects
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      backgroundImage: {
        // Use coherent light/dark values in background patterns
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.25) 2px,#f8fbff 5px,#f8fbff 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.45) 2px,#0f1724 8px,#0f1724 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.25) 2px,#f8fbff 5px,#f8fbff 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.45) 2px,#0f1724 8px,#0f1724 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.25) 2px,#f8fbff 5px,#f8fbff 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.45) 2px,#0f1724 8px,#0f1724 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.25) 2px,#f8fbff 5px,#f8fbff 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.45) 2px,#0f1724 8px,#0f1724 40px)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
