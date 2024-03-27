/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coolvertica: ["coolvertica"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    },
  ],
};
