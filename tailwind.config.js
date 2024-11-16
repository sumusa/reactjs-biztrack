/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#247BA0",
          light: "#9AADBF",
          dark: "#1B5D7A",
        },
        secondary: {
          DEFAULT: "#e49273",
          light: "#FFF5EE",
          dark: "#C77B5F",
        },
        surface: {
          DEFAULT: "#262626",
          light: "#f2f4f7",
          dark: "#111111",
          accent: "#A37A74",
        },
        success: {
          DEFAULT: "#249672",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
