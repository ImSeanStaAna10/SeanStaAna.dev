export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f6f3",
          100: "#d9eee1",
          200: "#bad8c6",
          300: "#8fcdab",
          400: "#58dca0",
          500: "#04aa6d",
          600: "#008f5b",
          700: "#007a4d",
          800: "#00643f",
          900: "#163c2a",
          950: "#0d2016",
        },
      },
      fontFamily: {
        sans: ["Source Sans 3", "Segoe UI", "Arial", "sans-serif"],
        heading: ["Source Sans 3", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};