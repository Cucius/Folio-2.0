const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        card: "-1rem 0 3rem #000",
      },
      colors: {
        jonquil: "#f4d03f",
        veronese: "#16a085",
        moss: "#78924b",
        salsa: "#f05d5e",
        alice: "#e7ecef",
        Baltic: "#28272A",
        Ash: "#CAC3B8",
        Granny: "#839A9B",
        Lynch: "#6B8996",
        gray: colors.neutral,
        gray: {
          900: "#12181b",
          800: "#202225",
          700: "#2a2e35",
          600: "#454e56",
          400: "#6c7983",
          300: "#b2becd",
          200: "#dbe1e8",
          100: "#f8f8f8",
        },
      },
    },
    clipPath: {
      // arrow: "polygon(0% 100%, 0% 0%, 90% 0%, 100% 50%, 90% 98%)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar")({ nocompatible: true })],
};
