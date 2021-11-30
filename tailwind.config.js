const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        "main-blue": "#204E70",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["group-hover", "hover"],
      transform: ["group-hover","hover"],
      scale: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
