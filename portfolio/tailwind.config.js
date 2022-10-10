const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        jonquil: "#f4d03f",
        veronese: "#16a085",
        moss: "#78924b",
        salsa: "#f05d5e",
        alice: "#e7ecef",
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
  plugins: [require("tailwind-clip-path")],
};
