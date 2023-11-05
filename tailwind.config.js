/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/hero2.webp')",
        "footer-texture": "url('/src/img/vinyl1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
