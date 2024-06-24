/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
// import { darkTheme, lightTheme } from "./public/nextUI.config";

export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0d0d26",
          800: "#13133a",
          700: "#18184b",
          600: "#1c1c51",
          500: "#3c3c74",
          400: "#5c5c98",
          300: "#7c7cb5",
          200: "#9c9cd2",
          100: "#b0b0d5",
          50: "#d9d9e2",
        },
        neutral: {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9e9e9e",
          400: "#bdbdbd",
          300: "#e0e0e0",
          200: "#eeeeee",
          100: "#f5f5f5",
          50: "#fafafa",
        },
        success: {
          900: "#0b3d20",
          800: "#0e5032",
          700: "#106442",
          600: "#138a5a",
          500: "#34a853",
          400: "#67c786",
          300: "#8edaa3",
          200: "#b8eebf",
          100: "#d5f7de",
          50: "#ecfdf1",
        },
        warning: {
          900: "#5d3a00",
          800: "#8a5800",
          700: "#b87800",
          600: "#df8e00",
          500: "#fbbc05",
          400: "#fcc557",
          300: "#fed388",
          200: "#ffe5b1",
          100: "#fff0d5",
          50: "#fffaf0",
        },
        error: {
          900: "#420806",
          800: "#6d1a12",
          700: "#8b2e22",
          600: "#a64034",
          500: "#ea4335",
          400: "#f17366",
          300: "#f69791",
          200: "#fab9b4",
          100: "#fdd8d6",
          50: "#fdeeed",
        },
        dark: {
          background: "#2a1b3e",
          surface: "#1e1e1e",
          primary: "#bb86fc",
          secondary: "#03dac6",
          error: "#cf6679",
          "on-primary": "#2a1b3e",
          "on-secondary": "#000000",
          "on-background": "#2a1b3e",
          "on-surface": "#ffffff",
        },
      },
    },
  },

  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
    }),
  ],
};
