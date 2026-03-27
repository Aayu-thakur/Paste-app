/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          5: "#F9F9F9",
          25: "#F5F5F5",
          50: "#EFEFEF",
          100: "#AFAFAF",
          200: "#999999",
          300: "#888888",
          400: "#666666",
          500: "#4D4D4D",
          600: "#424242",
          700: "#2C2C2C",
          800: "#161616",
          900: "#0D0D0D",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#FF83AC",
        },
        yellow: {
          50: "#FFD60A",
        }
      }
    },
  },
  plugins: [],
}