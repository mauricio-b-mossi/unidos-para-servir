module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-blue": "#204E70",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
