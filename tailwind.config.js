/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        bg1: "#292F36",
        bg2: "#1A1E23",
        brand1: "#12F7D6",
        brand2: "#98FAEC",
        grey: "#43454D",
        white: "#FFFFFF",
        htmlColor: "#E54F26",
        cssColor: "#0C73B8",
        jsColor: "#E7A020",
        reactColor: "#28A9E0",
      },
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
